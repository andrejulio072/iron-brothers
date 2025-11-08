# Lead Form Backend Plan

## Overview
Lightweight serverless endpoint for handling Iron Brothers lead form submissions with spam protection and email notification.

## Architecture Options

### Option 1: Cloudflare Worker (Recommended)
**Pros:**
- Free tier: 100k requests/day
- Global edge network (low latency)
- Zero cold starts
- Built-in KV storage for rate limiting
- Simple email forwarding via MailChannels

**Cons:**
- Requires Cloudflare account
- Learning curve for Wrangler CLI

### Option 2: Azure Function
**Pros:**
- 1M free executions/month
- Native Microsoft ecosystem integration
- Good for existing Azure users
- Easy SendGrid integration

**Cons:**
- Cold starts on Consumption plan
- More complex setup than Cloudflare

### Option 3: Vercel Serverless Function
**Pros:**
- Simple deployment (git push)
- Built-in Edge Functions
- Good developer experience
- Easy environment variable management

**Cons:**
- 100 GB-hours/month on free tier (can run out)
- Cold starts
- Email requires third-party integration

## Recommended Implementation: Cloudflare Worker

### Features
1. **Rate Limiting**: Max 3 submissions per IP per hour (KV storage)
2. **Honeypot Field**: Hidden field to catch bots
3. **Email Validation**: Server-side regex + DNS MX check
4. **CORS**: Restrict to iron-brothers domain
5. **Notification**: Email via MailChannels to your inbox
6. **Storage**: Optional - store leads in KV or forward to CRM webhook

### Setup Steps

1. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. Create new Worker:
   ```bash
   wrangler init lead-capture-worker
   cd lead-capture-worker
   ```

3. Deploy Worker (see `cloudflare-worker.js` for code)

4. Update `IronBrothersLanding.jsx` to POST to Worker URL

5. Configure MailChannels (free for Cloudflare Workers):
   - No API key needed
   - Just POST to MailChannels API from Worker

## Security Checklist
- ✅ Rate limiting per IP
- ✅ Honeypot field (invisible to users, catches bots)
- ✅ Server-side validation
- ✅ CORS origin restrictions
- ✅ HTTPS only
- ✅ No sensitive data in response
- ✅ Sanitize all inputs before email/storage

## Cost Estimate
**Cloudflare Worker Free Tier:**
- 100,000 requests/day
- Unlimited KV reads (1M writes/day)
- MailChannels email: free for CF Workers

**Expected usage:**
- ~100-500 form submissions/month
- Well within free tier

## Integration Timeline
1. **Day 1**: Deploy Worker, test with curl/Postman
2. **Day 2**: Update React form to POST to Worker
3. **Day 3**: Add success/error UI states
4. **Day 4**: Production testing, monitor logs
5. **Day 5**: (Optional) Add CRM integration (Zapier/Make)

## Next Steps
1. Review `cloudflare-worker.js` code
2. Decide on email destination
3. Deploy Worker and get endpoint URL
4. Update form submission handler in React
5. Test with real submissions
6. Monitor Cloudflare dashboard for abuse

## Alternative: Third-Party Form Services
If you prefer no-code solutions:
- **Formspree** (50 submissions/month free)
- **Basin** (100 submissions/month free)
- **Tally.so** (unlimited free, but less customizable)

Trade-off: Less control, but zero maintenance.
