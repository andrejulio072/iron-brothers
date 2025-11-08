// Cloudflare Worker for Iron Brothers Lead Form
// Deploy: wrangler publish
// Environment: Add KV namespace binding named "LEADS" in wrangler.toml

const ALLOWED_ORIGINS = [
  'https://andrejulio072.github.io',
  'http://localhost:5173', // Local dev
];

const RATE_LIMIT = {
  maxRequests: 3,
  windowSeconds: 3600, // 1 hour
};

// MailChannels config (free for CF Workers)
const EMAIL_CONFIG = {
  to: 'your-email@example.com', // Replace with your email
  from: 'leads@ironbrothers.com', // Replace with your domain
  replyTo: null, // Will be set to lead's email
};

export default {
  async fetch(request, env, ctx) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders(request),
      });
    }

    // Only POST allowed
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405);
    }

    // Check origin
    const origin = request.headers.get('Origin');
    if (!isAllowedOrigin(origin)) {
      return jsonResponse({ error: 'Forbidden' }, 403);
    }

    try {
      const body = await request.json();
      const ip = request.headers.get('CF-Connecting-IP');

      // Honeypot check (add hidden field "website" to form)
      if (body.website) {
        console.log(`Bot detected from IP: ${ip}`);
        return jsonResponse({ success: true }); // Fake success to fool bot
      }

      // Validate required fields
      const { name, email, goal } = body;
      if (!name || !email || !goal) {
        return jsonResponse({ error: 'Missing required fields' }, 400);
      }

      // Validate email format
      if (!isValidEmail(email)) {
        return jsonResponse({ error: 'Invalid email address' }, 400);
      }

      // Rate limiting
      const rateLimitKey = `ratelimit:${ip}`;
      const rateLimitData = await env.LEADS.get(rateLimitKey, { type: 'json' });

      if (rateLimitData) {
        const { count, expiresAt } = rateLimitData;
        if (Date.now() < expiresAt && count >= RATE_LIMIT.maxRequests) {
          return jsonResponse({ error: 'Too many requests. Try again later.' }, 429);
        }
      }

      // Update rate limit counter
      const newCount = rateLimitData ? rateLimitData.count + 1 : 1;
      const expiresAt = Date.now() + RATE_LIMIT.windowSeconds * 1000;
      await env.LEADS.put(
        rateLimitKey,
        JSON.stringify({ count: newCount, expiresAt }),
        { expirationTtl: RATE_LIMIT.windowSeconds }
      );

      // Sanitize inputs
      const sanitizedLead = {
        name: sanitize(name),
        email: sanitize(email),
        goal: sanitize(goal),
        timestamp: new Date().toISOString(),
        ip: ip,
      };

      // Store lead in KV (optional)
      const leadId = `lead:${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      await env.LEADS.put(leadId, JSON.stringify(sanitizedLead));

      // Send email via MailChannels
      await sendEmail(sanitizedLead);

      return jsonResponse({ success: true }, 200, origin);
    } catch (error) {
      console.error('Error processing lead:', error);
      return jsonResponse({ error: 'Internal server error' }, 500);
    }
  },
};

// Helper functions

function isAllowedOrigin(origin) {
  return ALLOWED_ORIGINS.some(allowed => origin?.startsWith(allowed));
}

function corsHeaders(request) {
  const origin = request.headers.get('Origin');
  return {
    'Access-Control-Allow-Origin': isAllowedOrigin(origin) ? origin : ALLOWED_ORIGINS[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(data, status = 200, origin = null) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...(origin ? { 'Access-Control-Allow-Origin': origin } : {}),
    },
  });
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function sanitize(input) {
  return String(input)
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .substring(0, 500); // Limit length
}

async function sendEmail(lead) {
  const emailBody = `
New Lead from Iron Brothers Website

Name: ${lead.name}
Email: ${lead.email}
Goal: ${lead.goal}

Timestamp: ${lead.timestamp}
IP: ${lead.ip}

---
Sent via Iron Brothers Lead Capture Worker
`;

  const emailPayload = {
    personalizations: [
      {
        to: [{ email: EMAIL_CONFIG.to }],
        reply_to: { email: lead.email, name: lead.name },
      },
    ],
    from: {
      email: EMAIL_CONFIG.from,
      name: 'Iron Brothers Lead Capture',
    },
    subject: `New Lead: ${lead.name}`,
    content: [
      {
        type: 'text/plain',
        value: emailBody,
      },
    ],
  };

  const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    console.error('Failed to send email:', await response.text());
    throw new Error('Email sending failed');
  }
}
