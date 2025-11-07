import React from 'react'import React from 'react'import React from 'react'



const copy = {

  en: {

    nav: {const copy = {export default function IronBrothersLanding() {

      programs: 'Programs',

      coaches: 'Coaches',  en: {  const [open, setOpen] = React.useState(false);

      experience: 'Experience',

      results: 'Results',    nav: {  const [lang, setLang] = React.useState('en'); // English as default

      plans: 'Plans',

      testimonials: 'Testimonials',      programs: 'Programs',  const copy = {

      faq: 'FAQ'

    },      coaches: 'Coaches',    en: {

    languageSwitcher: {

      label: 'Switch language',      experience: 'Experience',      tagline: 'Real results • 100% personalized',

      short: 'PT',

      description: 'View this content in Portuguese'      results: 'Results',      nav: { programs: 'Programs', coaches: 'Coaches', experience: 'Experience', results: 'Results', plans: 'Plans' },

    },

    tagline: 'Real results • 100% personalized',      plans: 'Plans',      hero_a: 'Build ', hero_b: 'strength', hero_c: ', burn ', hero_d: 'fat', hero_e: ' and become your best self.',

    hero: {

      title: [      testimonials: 'Testimonials',      hero_p: 'Premium coaching with tailored training, simple nutrition, and real accountability — online or in-person.',

        { text: 'Build ', highlight: false },

        { text: 'strength', highlight: true },      faq: 'FAQ'      cta_primary: 'Book Free Consultation', cta_secondary: 'See Proof & Testimonials',

        { text: ', burn ', highlight: false },

        { text: 'fat', highlight: true },    },      kpi1: 'Transformations', kpi2: 'Years of Experience', kpi3: 'Avg. Rating',

        { text: ' and become your best self.', highlight: false }

      ],    languageSwitcher: {      form: {

      subtitle:

        'Premium coaching with tailored training, sustainable nutrition, and real accountability—online or in person.',      label: 'Switch language',        name: 'Name', email: 'Email', whats: 'WhatsApp', goal: 'Main goal',

      instagramLabel: 'Instagram',

      ctas: {      short: 'PT',        goals: ['Fat Loss','Muscle Gain','Recomp','Strength/Performance'],

        primary: 'Book Free Consultation',

        secondary: 'See Proof & Testimonials',      description: 'View this content in Portuguese'        history: 'Tell us your history and challenges', send: 'Request Consultation'

        mobile: 'Get Started'

      }    },      },

    },

    metrics: [    tagline: 'Real results • 100% personalized',      footer_desc: 'Premium coaching for lasting results. London • Dublin • Online Worldwide.',

      { value: '127+', label: 'Transformations' },

      { value: '12', label: 'Years of Experience' },    hero: {      links: 'Links', contact: 'Contact'

      { value: '5.0★', label: 'Average Rating' }

    ],      title: [    },

    trust: [

      { kpi: '15K+', label: 'Workouts Delivered', icon: '💪' },        { text: 'Build ', highlight: false },    pt: {

      { kpi: '95%', label: 'Success Rate', icon: '🎯' },

      { kpi: '3', label: 'Languages (EN/PT/ES)', icon: '🌍' },        { text: 'strength', highlight: true },      tagline: 'Resultados Reais • 100% Personalizado',

      { kpi: '100%', label: 'Tailored Programs', icon: '⚡' }

    ],        { text: ', burn ', highlight: false },      nav: { programs: 'Programas', coaches: 'Treinadores', experience: 'Experiência', results: 'Resultados', plans: 'Planos' },

    value: {

      title: [        { text: 'fat', highlight: true },      hero_a: 'Construa ', hero_b: 'força', hero_c: ', queime ', hero_d: 'gordura', hero_e: ' e torne-se a sua melhor versão.',

        { text: 'What you ', highlight: false },

        { text: 'receive', highlight: true }        { text: ' and become your best self.', highlight: false }      hero_p: 'Coaching premium com treino sob medida, nutrição simples e accountability de verdade — online ou presencial.',

      ],

      subtitle:      ],      cta_primary: 'Agendar Consultoria Grátis', cta_secondary: 'Ver Provas & Depoimentos',

        'Conversion-focused structure that highlights value, social proof, and clear calls to action.',

      features: [      subtitle:      kpi1: 'Transformações', kpi2: 'Anos de Experiência', kpi3: 'Avaliação Média',

        {

          icon: '📊',        'Premium coaching with tailored training, sustainable nutrition, and real accountability—online or in person.',      form: {

          title: 'Periodized Training',

          desc: 'Progressive blocks with weekly adjustments for compound lifts and accessories.'      instagramLabel: 'Instagram',        name: 'Nome', email: 'Email', whats: 'WhatsApp', goal: 'Objetivo principal',

        },

        {      ctas: {        goals: ['Perda de Gordura','Ganho de Massa','Recomposição','Força/Performance'],

          icon: '🥗',

          title: 'Simple Nutrition',        primary: 'Book Free Consultation',        history: 'Conte sua história e desafios', send: 'Solicitar Consultoria'

          desc: 'Practical targets and flexible macros—no extreme diets or restrictions.'

        },        secondary: 'See Proof & Testimonials',      },

        {

          icon: '📈',        mobile: 'Get Started'      footer_desc: 'Coaching premium para resultados duradouros. Londres • Dublin • Online Worldwide.',

          title: 'Weekly Check-ins',

          desc: 'Data-led adjustments based on metrics, feedback, and lifestyle realities.'      }      links: 'Links', contact: 'Contato'

        },

        {    },    }

          icon: '🎯',

          title: 'Technique & Safety',    metrics: [  };

          desc: 'Execution cues and technical reviews to keep every rep efficient and safe.'

        },      { value: '127+', label: 'Transformations' },  const t = (k)=> copy[lang][k];

        {

          icon: '🧠',      { value: '12', label: 'Years of Experience' },  return (

          title: 'Habits & Mindset',

          desc: 'Long-term habit systems to reinforce consistency without burnout.'      { value: '5.0★', label: 'Average Rating' }    <div style={{minHeight:'100vh',background:'#0a0a0a'}} className="text-neutral-100">

        },

        {    ],      {/* --- Enhanced Global Styles with Animations --- */}

          icon: '💬',

          title: 'Always-on Support',    trust: [      <style>{`

          desc: 'Direct WhatsApp access to your coach for fast tweaks and clarity.'

        }      { kpi: '15K+', label: 'Workouts Delivered', icon: '💪' },        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

      ]

    },      { kpi: '95%', label: 'Success Rate', icon: '🎯' },

    experience: {

      title: 'Experience & Expertise',      { kpi: '3', label: 'Languages (EN/PT/ES)', icon: '🌍' },        :root{

      subtitle:

        'Methodology grounded in periodization, biomechanics, and sustainable habits.',      { kpi: '100%', label: 'Tailored Programs', icon: '⚡' }          --ib-bg:#0a0a0a;

      cards: [

        {    ],          --ib-card:#0f0f0f;

          accent: 'Consistent results',

          body:    value: {          --ib-soft:#1a1a1a;

            '127+ data-driven transformations with weekly tracking, safe technique, and realistic routines.'

        },      title: [          --ib-gold:#f59e0b;

        {

          accent: 'Multidisciplinary',        { text: 'What you ', highlight: false },          --ib-gold-700:#d97706;

          body:

            'Strength, hypertrophy, recomposition, and conditioning backed by in-gym leadership and online coaching.'        { text: 'receive', highlight: true }          --ib-gold-900:#92400e;

        }

      ]      ],          --ib-teal:#06b6d4;

    },

    programs: {      subtitle:          --ib-teal-700:#0891b2;

      title: [

        { text: 'Iron Brothers ', highlight: false },        'Conversion-focused structure that highlights value, social proof, and clear calls to action.',          --ib-accent:#ec4899;

        { text: 'Programs', highlight: true }

      ],      features: [        }

      subtitle: 'Choose the focus—we tailor the roadmap.',

      cta: 'I want this plan',        {

      cards: [

        {          icon: '📊',        body { background-color: #0a0a0a !important; margin: 0; padding: 0; }

          title: 'Body Recomp',

          emoji: '💪',          title: 'Periodized Training',        #root { background-color: #0a0a0a !important; }

          color: 'from-amber-500 to-orange-600',

          points: [          desc: 'Progressive blocks with weekly adjustments for compound lifts and accessories.'        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; box-sizing: border-box; }

            'Build muscle while dropping body fat in sync',

            'Custom training split 4–5x per week',        },

            'Personalized macros with weekly reviews'

          ]        {        .ib-container{max-width:1240px;margin:0 auto;padding:0 1.5rem}

        },

        {          icon: '🥗',

          title: 'Fat Loss Elite',

          emoji: '🔥',          title: 'Simple Nutrition',        .glow-card{

          color: 'from-red-500 to-pink-600',

          points: [          desc: 'Practical targets and flexible macros—no extreme diets or restrictions.'          box-shadow:0 0 0 1px rgba(245,158,11,.15),

            'Controlled deficit without metabolic crashes',

            'Strategic cardio and step targets periodized',        },                     0 10px 40px -10px rgba(6,182,212,.2),

            'Anti-relapse habits and mindset coaching'

          ]        {                     0 20px 60px -15px rgba(236,72,153,.15);

        },

        {          icon: '📈',          transition:all 0.4s cubic-bezier(0.4,0,0.2,1);

          title: 'Strength & Power',

          emoji: '⚡',          title: 'Weekly Check-ins',        }

          color: 'from-cyan-500 to-blue-600',

          points: [          desc: 'Data-led adjustments based on metrics, feedback, and lifestyle realities.'        .glow-card:hover{

            '5–8 rep progressive schemes for compounds',

            'Advanced technique and bracing optimization',        },          box-shadow:0 0 0 1px rgba(245,158,11,.3),

            'Linear and undulating periodization blocks'

          ]        {                     0 15px 50px -10px rgba(6,182,212,.35),

        }

      ]          icon: '🎯',                     0 25px 70px -15px rgba(236,72,153,.25);

    },

    coaches: {          title: 'Technique & Safety',          transform:translateY(-4px);

      title: [

        { text: 'Meet the ', highlight: false },          desc: 'Execution cues and technical reviews to keep every rep efficient and safe.'        }

        { text: 'Coaches', highlight: true }

      ],        },

      subtitle: 'Human, hands-on coaching—by your side at every step.',

      cards: [        {        .btn{

        {

          name: 'Andre Garcia',          icon: '🧠',          display:inline-flex;align-items:center;gap:.6rem;

          role: 'Head Coach • Iron Brothers',

          bullets: [          title: 'Habits & Mindset',          border-radius:9999px;padding:1rem 1.75rem;

            'Hypertrophy and body recomposition specialist',

            'Gym operations leader with in-person expertise',          desc: 'Long-term habit systems to reinforce consistency without burnout.'          font-weight:700;font-size:0.95rem;

            'Coaching delivered in English, Portuguese, and Spanish'

          ],        },          transition:all 0.3s cubic-bezier(0.4,0,0.2,1);

          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop'

        },        {          position:relative;overflow:hidden;

        {

          name: 'Lucas Gabriel',          icon: '💬',        }

          role: 'Coach • Strength & Conditioning',

          bullets: [          title: 'Always-on Support',        .btn::before{

            'Compound lift technique and force production focus',

            'Clear, progressive periodization your schedule can handle',          desc: 'Direct WhatsApp access to your coach for fast tweaks and clarity.'          content:'';position:absolute;inset:0;

            'Support and accountability that stays consistent'

          ],        }          background:linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent);

          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop'

        }      ]          transform:translateX(-100%);

      ]

    },    },          transition:transform 0.6s;

    results: {

      title: [    experience: {        }

        { text: 'Real ', highlight: false },

        { text: 'Transformations', highlight: true }      title: 'Experience & Expertise',        .btn:hover::before{transform:translateX(100%);}

      ],

      subtitle: 'Proven outcomes for committed clients.',      subtitle:

      cta: 'See more results →',

      cards: [        'Methodology grounded in periodization, biomechanics, and sustainable habits.',        .btn-gold{

        {

          id: 1,      cards: [          background:linear-gradient(135deg,var(--ib-gold),var(--ib-gold-700));

          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',

          badge: { weight: '-12kg', duration: '14 weeks' },        {          color:#0a0a0a;

          quote: 'Personal coaching that turned discipline into visible results.',

          name: 'John S.'          accent: 'Consistent results',          box-shadow:0 4px 20px rgba(245,158,11,0.4);

        },

        {          body:        }

          id: 2,

          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',            '127+ data-driven transformations with weekly tracking, safe technique, and realistic routines.'        .btn-gold:hover{

          badge: { weight: '-8kg', duration: '10 weeks' },

          quote: 'Dropped fat without hunger. The protocol just works.',        },          box-shadow:0 6px 30px rgba(245,158,11,0.6);

          name: 'Maria L.'

        },        {          transform:translateY(-2px);

        {

          id: 3,          accent: 'Multidisciplinary',        }

          image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',

          badge: { weight: '-15kg', duration: '16 weeks' },          body:

          quote: 'First time gaining muscle while leaning out.',

          name: 'Peter R.'            'Strength, hypertrophy, recomposition, and conditioning backed by in-gym leadership and online coaching.'        .btn-outline{

        }

      ]        }          border:2px solid rgba(245,158,11,0.3);

    },

    pricing: {      ]          background:rgba(15,15,15,0.6);

      title: [

        { text: 'Online Coaching ', highlight: false },    },          backdrop-filter:blur(10px);

        { text: 'Plans', highlight: true }

      ],    programs: {        }

      subtitle:

        'Choose your ideal support • No long contracts • Cancel easily.',      title: [        .btn-outline:hover{

      note: '* Reference pricing. Final quote confirmed after your free consultation.',

      cards: [        { text: 'Iron Brothers ', highlight: false },          border-color:rgba(245,158,11,0.6);

        {

          name: 'Online Starter',        { text: 'Programs', highlight: true }          background:rgba(245,158,11,0.1);

          price: '£119',

          period: '/month',      ],        }

          emoji: '🚀',

          features: [      subtitle: 'Choose the focus—we tailor the roadmap.',

            'Tailored training plan 4–5x per week',

            'Nutrition framework with baseline macros',      cta: 'I want this plan',        .tag{

            'Weekly check-in form with adjustments',

            'Monthly program refinements'      cards: [          border:1px solid rgba(245,158,11,0.3);

          ]

        },        {          border-radius:9999px;padding:.4rem .85rem;

        {

          name: 'Online Pro',          title: 'Body Recomp',          color:#d4d4d4;font-size:0.85rem;font-weight:600;

          price: '£159',

          period: '/month',          emoji: '💪',          background:rgba(15,15,15,0.5);backdrop-filter:blur(8px);

          emoji: '⭐',

          badge: 'Most popular',          color: 'from-amber-500 to-orange-600',        }

          popular: true,

          features: [          points: [

            'Everything in Starter',

            'Custom macros updated every week',            'Build muscle while dropping body fat in sync',        .card{

            'Unlimited WhatsApp support 24/7',

            'Monthly video technique review'            'Custom training split 4–5x per week',          background:linear-gradient(135deg,rgba(15,15,15,0.9),rgba(20,20,20,0.8));

          ]

        },            'Personalized macros with weekly reviews'          border:1px solid rgba(245,158,11,0.15);

        {

          name: 'Online Elite',          ]          border-radius:1.5rem;

          price: '£249',

          period: '/month',        },          backdrop-filter:blur(20px);

          emoji: '👑',

          features: [        {          transition:all 0.4s cubic-bezier(0.4,0,0.2,1);

            'Everything in Pro',

            'Technique video breakdown twice a month',          title: 'Fat Loss Elite',        }

            'Quarterly periodization roadmap',

            'Monthly 1:1 consultation (30–45 min)'          emoji: '🔥',        .card:hover{

          ]

        }          color: 'from-red-500 to-pink-600',          border-color:rgba(245,158,11,0.3);

      ]

    },          points: [          transform:translateY(-6px);

    testimonials: {

      title: [            'Controlled deficit without metabolic crashes',        }

        { text: 'What our ', highlight: false },

        { text: 'clients say', highlight: true }            'Strategic cardio and step targets periodized',

      ],

      subtitle: 'Real stories of transformation and accountability.',            'Anti-relapse habits and mindset coaching'        .grad-hero{

      cards: [

        {          ]          background:radial-gradient(ellipse at top,rgba(245,158,11,.12),transparent 60%),

          quote:

            'In 12 weeks I dropped 10kg and finally trust my technique. WhatsApp support made all the difference.',        },                     radial-gradient(ellipse at bottom right,rgba(6,182,212,.08),transparent 50%),

          name: 'Carla M.',

          role: 'Online Pro'        {                     radial-gradient(ellipse at bottom left,rgba(236,72,153,.06),transparent 50%);

        },

        {          title: 'Strength & Power',        }

          quote:

            'Simple plan to follow with fast adjustments. Hit squat PRs while staying in a deficit.',          emoji: '⚡',

          name: 'Rafael P.',

          role: 'Online Elite'          color: 'from-cyan-500 to-blue-600',        .text-gradient{

        },

        {          points: [          background:linear-gradient(135deg,var(--ib-gold),var(--ib-teal),var(--ib-accent));

          quote:

            'Never felt this consistent. Weekly check-ins kept me focused without obsessing.',            '5–8 rep progressive schemes for compounds',          -webkit-background-clip:text;

          name: 'Julia S.',

          role: 'Online Starter'            'Advanced technique and bracing optimization',          -webkit-text-fill-color:transparent;

        }

      ]            'Linear and undulating periodization blocks'          background-clip:text;

    },

    faq: {          ]        }

      title: [

        { text: 'Frequently ', highlight: false },        }

        { text: 'Asked Questions', highlight: true }

      ],      ]        .animate-fade-in{

      subtitle: 'Everything you need to know about our coaching.',

      items: [    },          animation:fadeIn 0.8s ease-out forwards;

        {

          question: '❓ How does online coaching work?',    coaches: {        }

          answer:

            'Personalized training and nutrition inside the app, detailed weekly check-ins, and direct WhatsApp support for questions and tweaks.'      title: [        @keyframes fadeIn{

        },

        {        { text: 'Meet the ', highlight: false },          from{opacity:0;transform:translateY(20px);}

          question: '⏱️ How fast will I see results?',

          answer:        { text: 'Coaches', highlight: true }          to{opacity:1;transform:translateY(0);}

            'Most clients notice changes in 4–6 weeks of consistency. Larger transformations happen in 12+ weeks with adherence.'

        },      ],        }

        {

          question: '🏠 Can I train at home?',      subtitle: 'Human, hands-on coaching—by your side at every step.',

          answer:

            'Absolutely. We adapt the plan to whatever equipment you have—from minimal home setups to full commercial gyms.'      cards: [        .animate-slide-up{

        },

        {        {          animation:slideUp 0.6s ease-out forwards;

          question: '🩹 What if I have injuries or limitations?',

          answer:          name: 'Andre Garcia',        }

            'We adjust exercise selection, volume, and range of motion. Technique first, sustainable progression always.'

        },          role: 'Head Coach • Iron Brothers',        @keyframes slideUp{

        {

          question: '💳 How do payments work?',          bullets: [          from{opacity:0;transform:translateY(30px);}

          answer:

            'Recurring monthly payments via card or transfer. No long-term contracts and a simple cancellation process.'            'Hypertrophy and body recomposition specialist',          to{opacity:1;transform:translateY(0);}

        }

      ]            'Gym operations leader with in-person expertise',        }

    },

    apply: {            'Coaching delivered in English, Portuguese, and Spanish'

      title: [

        { text: 'Ready for ', highlight: false },          ],        .hover-lift{

        { text: 'elite coaching?', highlight: true }

      ],          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop'          transition:transform 0.3s ease;

      subtitle: 'Tell us about your goal. We reply within 24 hours via WhatsApp.',

      form: {        },        }

        name: 'Name',

        email: 'Email',        {        .hover-lift:hover{

        phone: 'WhatsApp',

        goal: 'Main goal',          name: 'Lucas Gabriel',          transform:translateY(-8px);

        goalOptions: [

          'Fat loss',          role: 'Coach • Strength & Conditioning',        }

          'Muscle gain',

          'Body recomposition',          bullets: [

          'Strength & performance'

        ],            'Compound lift technique and force production focus',        .shimmer{

        message: 'Training background and challenges',

        submit: 'Request Consultation'            'Clear, progressive periodization your schedule can handle',          position:relative;

      },

      consent: 'By submitting you agree to be contacted via email or WhatsApp. No spam, ever.'            'Support and accountability that stays consistent'          overflow:hidden;

    },

    footer: {          ],        }

      headline: 'Iron Brothers Coaching',

      description: 'Premium coaching for lasting results. London • Dublin • Online worldwide.',          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop'        .shimmer::after{

      links: [

        { label: 'Programs', href: '#programs' },        }          content:'';

        { label: 'Coaches', href: '#coaches' },

        { label: 'Results', href: '#results' },      ]          position:absolute;

        { label: 'Plans', href: '#pricing' }

      ],    },          top:0;left:-100%;

      contact: {

        title: 'Contact',    results: {          width:100%;height:100%;

        email: 'coach@ironbrothers.co',

        phone: '+44 20 1234 5678'      title: [          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent);

      },

      social: {        { text: 'Real ', highlight: false },          animation:shimmer 3s infinite;

        title: 'Follow',

        instagram: '@ironbrotherscoaching',        { text: 'Transformations', highlight: true }        }

        whatsapp: '+44 74 0000 0000'

      },      ],        @keyframes shimmer{

      copyright: '© ' + new Date().getFullYear() + ' Iron Brothers Coaching. All rights reserved.'

    }      subtitle: 'Proven outcomes for committed clients.',          to{left:100%;}

  },

  pt: {      cta: 'See more results →',        }

    nav: {

      programs: 'Programas',      cards: [      `}</style>

      coaches: 'Treinadores',

      experience: 'Experiência',        {

      results: 'Resultados',

      plans: 'Planos',          id: 1,      {/* --- NAV --- */}

      testimonials: 'Depoimentos',

      faq: 'FAQ'          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',      <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/80 border-b border-neutral-800/40 shadow-lg shadow-black/20">

    },

    languageSwitcher: {          badge: { weight: '-12kg', duration: '14 weeks' },        <div className="ib-container flex items-center justify-between h-20">

      label: 'Mudar idioma',

      short: 'EN',          quote: 'Personal coaching that turned discipline into visible results.',          <div className="flex items-center gap-4 animate-fade-in">

      description: 'Ver este conteúdo em inglês'

    },          name: 'John S.'            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-cyan-500 shadow-lg shadow-amber-500/30 shimmer"/>

    tagline: 'Resultados reais • 100% personalizados',

    hero: {        },            <div>

      title: [

        { text: 'Construa ', highlight: false },        {              <div className="font-black tracking-tight text-xl text-gradient">IRON BROTHERS</div>

        { text: 'força', highlight: true },

        { text: ', queime ', highlight: false },          id: 2,              <div className="hidden sm:block text-neutral-400 text-xs font-medium">Premium Coaching • Worldwide</div>

        { text: 'gordura', highlight: true },

        { text: ' e alcance a sua melhor versão.', highlight: false }          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',            </div>

      ],

      subtitle:          badge: { weight: '-8kg', duration: '10 weeks' },          </div>

        'Coaching premium com treino sob medida, nutrição sustentável e acompanhamento real — online ou presencial.',

      instagramLabel: 'Instagram',          quote: 'Dropped fat without hunger. The protocol just works.',          {/* Desktop nav */}

      ctas: {

        primary: 'Agendar consultoria gratuita',          name: 'Maria L.'          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">

        secondary: 'Ver provas e depoimentos',

        mobile: 'Começar agora'        },            <a href="#programs" className="hover:text-amber-400 transition-colors duration-300">{t('nav').programs}</a>

      }

    },        {            <a href="#coaches" className="hover:text-cyan-400 transition-colors duration-300">{t('nav').coaches}</a>

    metrics: [

      { value: '127+', label: 'Transformações' },          id: 3,            <a href="#experience" className="hover:text-amber-400 transition-colors duration-300">{t('nav').experience}</a>

      { value: '12', label: 'Anos de experiência' },

      { value: '5.0★', label: 'Avaliação média' }          image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',            <a href="#results" className="hover:text-cyan-400 transition-colors duration-300">{t('nav').results}</a>

    ],

    trust: [          badge: { weight: '-15kg', duration: '16 weeks' },            <a href="#pricing" className="hover:text-amber-400 transition-colors duration-300">{t('nav').plans}</a>

      { kpi: '15K+', label: 'Treinos entregues', icon: '💪' },

      { kpi: '95%', label: 'Taxa de sucesso', icon: '🎯' },          quote: 'First time gaining muscle while leaning out.',            <a href="#faq" className="hover:text-cyan-400 transition-colors duration-300">FAQ</a>

      { kpi: '3', label: 'Idiomas (EN/PT/ES)', icon: '🌍' },

      { kpi: '100%', label: 'Programas personalizados', icon: '⚡' }          name: 'Peter R.'            <button

    ],

    value: {        }              onClick={()=>setLang(lang==='en'?'pt':'en')}

      title: [

        { text: 'O que você ', highlight: false },      ]              className="tag hover:text-white hover:border-amber-400 transition-all duration-300"

        { text: 'recebe', highlight: true }

      ],    },            >

      subtitle:

        'Estrutura focada em conversão com valor claro, provas sociais e chamadas à ação objetivas.',    pricing: {              {lang==='en'?'🇧🇷 PT':'🇬🇧 EN'}

      features: [

        {      title: [            </button>

          icon: '📊',

          title: 'Treino periodizado',        { text: 'Online Coaching ', highlight: false },            <a href="#apply" className="btn btn-gold shimmer">{t('cta_primary')}</a>

          desc: 'Blocos progressivos com ajustes semanais para compostos e acessórios.'

        },        { text: 'Plans', highlight: true }          </nav>

        {

          icon: '🥗',      ],          {/* Mobile trigger */}

          title: 'Nutrição simples',

          desc: 'Metas práticas e macros flexíveis — sem dietas extremas ou proibições.'      subtitle:          <button

        },

        {        'Choose your ideal support • No long contracts • Cancel easily.',            aria-label="Menu"

          icon: '📈',

          title: 'Check-ins semanais',      note: '* Reference pricing. Final quote confirmed after your free consultation.',            onClick={()=>setOpen(!open)}

          desc: 'Ajustes guiados por dados, feedback e realidade de rotina.'

        },      cards: [            className="lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-xl border border-neutral-700 text-neutral-200 hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300"

        {

          icon: '🎯',        {          >

          title: 'Técnica e segurança',

          desc: 'Cues de execução e revisão técnica para cada repetição eficiente e segura.'          name: 'Online Starter',            <span className="text-xl font-bold">{open ? '✕' : '☰'}</span>

        },

        {          price: '£119',          </button>

          icon: '🧠',

          title: 'Hábitos e mindset',          period: '/month',        </div>

          desc: 'Sistema de hábitos de longo prazo para consistência sem burnout.'

        },          emoji: '🚀',        {/* Mobile menu */}

        {

          icon: '💬',          features: [        {open && (

          title: 'Suporte constante',

          desc: 'Acesso direto no WhatsApp para ajustes rápidos e clareza.'            'Tailored training plan 4–5x per week',          <div className="lg:hidden border-t border-neutral-800/50 bg-neutral-950/95 backdrop-blur-xl animate-slide-up">

        }

      ]            'Nutrition framework with baseline macros',            <div className="ib-container py-6 grid gap-3 text-sm font-medium">

    },

    experience: {            'Weekly check-in form with adjustments',              {[

      title: 'Experiência e autoridade',

      subtitle: 'Metodologia baseada em periodização, biomecânica e hábitos sustentáveis.',            'Monthly program refinements'                ['Programas','#programs'],['Treinadores','#coaches'],['Experiência','#experience'],['Resultados','#results'],['Planos','#pricing'],['FAQ','#faq']

      cards: [

        {          ]              ].map(([label,href])=> (

          accent: 'Resultados consistentes',

          body:        },                <a

            '127+ transformações guiadas por dados com acompanhamento semanal, técnica segura e rotina realista.'

        },        {                  key={href}

        {

          accent: 'Multidisciplinar',          name: 'Online Pro',                  href={href}

          body:

            'Força, hipertrofia, recomposição e condicionamento com liderança presencial e coaching online.'          price: '£159',                  onClick={()=>setOpen(false)}

        }

      ]          period: '/month',                  className="py-3 px-4 text-neutral-300 hover:text-amber-400 hover:bg-neutral-900/50 rounded-xl border border-transparent hover:border-neutral-800 transition-all duration-300"

    },

    programs: {          emoji: '⭐',                >

      title: [

        { text: 'Programas ', highlight: false },          badge: 'Most popular',                  {label}

        { text: 'Iron Brothers', highlight: true }

      ],          popular: true,                </a>

      subtitle: 'Escolha o foco — nós desenhamos o caminho.',

      cta: 'Quero este plano',          features: [              ))}

      cards: [

        {            'Everything in Starter',              <a href="#apply" onClick={()=>setOpen(false)} className="btn btn-gold mt-3 w-full justify-center">Começar Agora</a>

          title: 'Recomposição',

          emoji: '💪',            'Custom macros updated every week',            </div>

          color: 'from-amber-500 to-orange-600',

          points: [            'Unlimited WhatsApp support 24/7',          </div>

            'Ganhe músculo enquanto reduz gordura',

            'Treino 100% personalizado 4–5x na semana',            'Monthly video technique review'        )}

            'Macros personalizados com revisão semanal'

          ]          ]      </header>

        },

        {        },

          title: 'Fat Loss Elite',

          emoji: '🔥',        {      {/* --- HERO --- */}

          color: 'from-red-500 to-pink-600',

          points: [          name: 'Online Elite',      <section className="relative overflow-hidden grad-hero py-20 md:py-32">

            'Déficit controlado sem efeito sanfona',

            'Cardio e passos estratégicos periodizados',          price: '£249',        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent opacity-40"/>

            'Mindset e hábitos anti-reganho'

          ]          period: '/month',

        },

        {          emoji: '👑',        <div className="ib-container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

          title: 'Força & potência',

          emoji: '⚡',          features: [          <div className="flex flex-col justify-center space-y-8 animate-fade-in">

          color: 'from-cyan-500 to-blue-600',

          points: [            'Everything in Pro',            <span className="tag w-max shimmer">{t('tagline')}</span>

            'Progressões de 5–8 reps para compostos',

            'Técnica avançada e otimização de bracing',            'Technique video breakdown twice a month',

            'Blocos linear e ondulatório com propósito'

          ]            'Quarterly periodization roadmap',            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">

        }

      ]            'Monthly 1:1 consultation (30–45 min)'              {t('hero_a')}

    },

    coaches: {          ]              <span className="text-gradient">{t('hero_b')}</span>

      title: [

        { text: 'Conheça os ', highlight: false },        }              {t('hero_c')}

        { text: 'treinadores', highlight: true }

      ],      ]              <span className="text-gradient">{t('hero_d')}</span>

      subtitle: 'Coaching humano e presente em cada passo.',

      cards: [    },              {t('hero_e')}

        {

          name: 'Andre Garcia',    testimonials: {            </h1>

          role: 'Head Coach • Iron Brothers',

          bullets: [      title: [

            'Especialista em hipertrofia e recomposição',

            'Gestão de operações em academias e coaching presencial',        { text: 'What our ', highlight: false },            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl">

            'Atendimento em inglês, português e espanhol'

          ],        { text: 'clients say', highlight: true }              {t('hero_p')}

          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop'

        },      ],            </p>

        {

          name: 'Lucas Gabriel',      subtitle: 'Real stories of transformation and accountability.',

          role: 'Coach • Strength & Conditioning',

          bullets: [      cards: [            <div className="flex flex-wrap gap-4">

            'Foco em técnica de compostos e força explosiva',

            'Periodização clara e progressiva para sua rotina',        {              <a href="#apply" className="btn btn-gold shimmer text-lg px-8 py-4">

            'Suporte e accountability constantes'

          ],          quote:                {t('cta_primary')}

          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop'

        }            'In 12 weeks I dropped 10kg and finally trust my technique. WhatsApp support made all the difference.',              </a>

      ]

    },          name: 'Carla M.',              <a href="#trust" className="btn btn-outline text-lg px-8 py-4">

    results: {

      title: [          role: 'Online Pro'                {t('cta_secondary')}

        { text: 'Transformações ', highlight: false },

        { text: 'reais', highlight: true }        },              </a>

      ],

      subtitle: 'Resultados comprovados para quem está comprometido.',        {            </div>

      cta: 'Ver mais resultados →',

      cards: [          quote:

        {

          id: 1,            'Simple plan to follow with fast adjustments. Hit squat PRs while staying in a deficit.',            <div className="flex items-center gap-3 pt-4">

          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',

          badge: { weight: '-12kg', duration: '14 semanas' },          name: 'Rafael P.',              <span className="tag">Instagram</span>

          quote: 'Coaching que transformou disciplina em resultados visíveis.',

          name: 'João S.'          role: 'Online Elite'              <a

        },

        {        },                href="https://www.instagram.com/iron.brothersfitness"

          id: 2,

          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',        {                target="_blank"

          badge: { weight: '-8kg', duration: '10 semanas' },

          quote: 'Reduzi gordura sem passar fome. O protocolo simplesmente funciona.',          quote:                rel="noopener noreferrer"

          name: 'Maria L.'

        },            'Never felt this consistent. Weekly check-ins kept me focused without obsessing.',                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-300"

        {

          id: 3,          name: 'Julia S.',              >

          image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',

          badge: { weight: '-15kg', duration: '16 semanas' },          role: 'Online Starter'                @iron.brothersfitness

          quote: 'Primeira vez ganhando músculo enquanto defini.',

          name: 'Pedro R.'        }              </a>

        }

      ]      ]            </div>

    },

    pricing: {    },

      title: [

        { text: 'Planos de ', highlight: false },    faq: {            {/* KPIs */}

        { text: 'coaching online', highlight: true }

      ],      title: [            <div className="grid grid-cols-3 gap-6 pt-6 max-w-lg">

      subtitle: 'Escolha o suporte ideal • Sem contratos longos • Cancelamento simples.',

      note: '* Valores de referência. O valor final é confirmado após a consultoria gratuita.',        { text: 'Frequently ', highlight: false },              <div className="text-center space-y-1">

      cards: [

        {        { text: 'Asked Questions', highlight: true }                <div className="text-4xl md:text-5xl font-black text-gradient">127+</div>

          name: 'Online Starter',

          price: '£119',      ],                <div className="text-xs md:text-sm text-neutral-400 font-medium">Transformações</div>

          period: '/mês',

          emoji: '🚀',      subtitle: 'Everything you need to know about our coaching.',              </div>

          features: [

            'Plano de treino personalizado 4–5x semana',      items: [              <div className="text-center space-y-1 border-l border-r border-neutral-800">

            'Estrutura nutricional com macros base',

            'Formulário semanal com ajustes',        {                <div className="text-4xl md:text-5xl font-black text-gradient">12</div>

            'Revisão mensal de programa'

          ]          question: '❓ How does online coaching work?',                <div className="text-xs md:text-sm text-neutral-400 font-medium">Anos de Experiência</div>

        },

        {          answer:              </div>

          name: 'Online Pro',

          price: '£159',            'Personalized training and nutrition inside the app, detailed weekly check-ins, and direct WhatsApp support for questions and tweaks.'              <div className="text-center space-y-1">

          period: '/mês',

          emoji: '⭐',        },                <div className="text-4xl md:text-5xl font-black text-gradient">5.0★</div>

          badge: 'Mais procurado',

          popular: true,        {                <div className="text-xs md:text-sm text-neutral-400 font-medium">Avaliação Média</div>

          features: [

            'Tudo do Starter',          question: '⏱️ How fast will I see results?',              </div>

            'Macros personalizados atualizados toda semana',

            'Suporte WhatsApp ilimitado 24/7',          answer:            </div>

            'Revisão técnica em vídeo mensal'

          ]            'Most clients notice changes in 4–6 weeks of consistency. Larger transformations happen in 12+ weeks with adherence.'          </div>

        },

        {        },

          name: 'Online Elite',

          price: '£249',        {          {/* Hero Image */}

          period: '/mês',

          emoji: '👑',          question: '🏠 Can I train at home?',          <div className="relative animate-slide-up">

          features: [

            'Tudo do Pro',          answer:            <div className="relative glow-card rounded-3xl overflow-hidden group">

            'Análise técnica em vídeo duas vezes ao mês',

            'Roadmap de periodização trimestral',            'Absolutely. We adapt the plan to whatever equipment you have—from minimal home setups to full commercial gyms.'              <img

            'Consulta 1:1 mensal (30–45 min)'

          ]        },                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=90"

        }

      ]        {                alt="Iron Brothers Coaching"

    },

    testimonials: {          question: '🩹 What if I have injuries or limitations?',                className="aspect-[3/4] w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"

      title: [

        { text: 'O que nossos ', highlight: false },          answer:              />

        { text: 'clientes dizem', highlight: true }

      ],            'We adjust exercise selection, volume, and range of motion. Technique first, sustainable progression always.'              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"/>

      subtitle: 'Histórias reais de transformação e accountability.',

      cards: [        },            </div>

        {

          quote:        {

            'Em 12 semanas perdi 10kg e finalmente confio na minha técnica. O suporte no WhatsApp fez toda a diferença.',

          name: 'Carla M.',          question: '💳 How do payments work?',            {/* Floating Card */}

          role: 'Online Pro'

        },          answer:            <div className="hidden lg:block absolute -bottom-8 -left-8 max-w-xs">

        {

          quote:            'Recurring monthly payments via card or transfer. No long-term contracts and a simple cancellation process.'              <div className="card p-6 space-y-2 glow-card">

            'Plano simples de seguir e ajustes rápidos. Bati PRs de agachamento mesmo em déficit.',

          name: 'Rafael P.',        }                <div className="flex items-center gap-3">

          role: 'Online Elite'

        },      ]                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>

        {

          quote:    },                  <div className="font-bold text-white">Acompanhamento Semanal</div>

            'Nunca fui tão consistente. Check-ins semanais me mantiveram focada sem me deixar obcecar.',

          name: 'Júlia S.',    apply: {                </div>

          role: 'Online Starter'

        }      title: [                <p className="text-sm text-neutral-400">

      ]

    },        { text: 'Ready for ', highlight: false },                  Ajustes táticos no plano + WhatsApp 24/7

    faq: {

      title: [        { text: 'elite coaching?', highlight: true }                </p>

        { text: 'Perguntas ', highlight: false },

        { text: 'frequentes', highlight: true }      ],              </div>

      ],

      subtitle: 'Tudo o que você precisa saber sobre o coaching.',      subtitle: 'Tell us about your goal. We reply within 24 hours via WhatsApp.',            </div>

      items: [

        {      form: {          </div>

          question: '❓ Como funciona o coaching online?',

          answer:        name: 'Name',        </div>

            'Treino e nutrição personalizados no app, check-ins semanais detalhados e suporte direto no WhatsApp para dúvidas e ajustes.'

        },        email: 'Email',      </section>

        {

          question: '⏱️ Em quanto tempo vou ver resultados?',        phone: 'WhatsApp',

          answer:

            'A maioria percebe mudanças em 4–6 semanas de consistência. Transformações maiores acontecem a partir de 12 semanas com adesão.'        goal: 'Main goal',      {/* --- TRUST / STATS --- */}

        },

        {        goalOptions: [      <section id="trust" className="py-16 md:py-20 border-y border-neutral-800/40 bg-neutral-900/30 backdrop-blur-sm">

          question: '🏠 Posso treinar em casa?',

          answer:          'Fat loss',        <div className="ib-container">

            'Com certeza. Adaptamos o plano ao equipamento que você tiver — de setup minimalista a academia completa.'

        },          'Muscle gain',          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

        {

          question: '🩹 E se eu tiver lesões ou limitações?',          'Body recomposition',            {[

          answer:

            'Ajustamos seleção de exercícios, volume e amplitude. Técnica primeiro, progressão sustentável sempre.'          'Strength & performance'              {kpi:'15K+',label:'Treinos Entregues',icon:'💪'},

        },

        {        ],              {kpi:'95%',label:'Taxa de Sucesso',icon:'🎯'},

          question: '💳 Como funcionam os pagamentos?',

          answer:        message: 'Training background and challenges',              {kpi:'3',label:'Idiomas (EN/PT/ES)',icon:'🌍'},

            'Pagamentos mensais recorrentes via cartão ou transferência. Sem contratos longos e cancelamento simples.'

        }        submit: 'Request Consultation'              {kpi:'100%',label:'Planos Personalizados',icon:'⚡'}

      ]

    },      },            ].map((i,idx)=> (

    apply: {

      title: [      consent: 'By submitting you agree to be contacted via email or WhatsApp. No spam, ever.'              <div

        { text: 'Pronto para um ', highlight: false },

        { text: 'coaching de elite?', highlight: true }    },                key={i.label}

      ],

      subtitle: 'Conte seu objetivo. Respondemos em até 24 horas pelo WhatsApp.',    footer: {                className="card p-6 md:p-8 text-center hover-lift glow-card"

      form: {

        name: 'Nome',      headline: 'Iron Brothers Coaching',                style={{animationDelay: `${idx * 0.1}s`}}

        email: 'Email',

        phone: 'WhatsApp',      description: 'Premium coaching for lasting results. London • Dublin • Online worldwide.',              >

        goal: 'Objetivo principal',

        goalOptions: [      links: [                <div className="text-4xl mb-3">{i.icon}</div>

          'Perda de gordura',

          'Ganho de massa',        { label: 'Programs', href: '#programs' },                <div className="text-4xl md:text-5xl font-black text-gradient mb-2">{i.kpi}</div>

          'Recomposição corporal',

          'Força & performance'        { label: 'Coaches', href: '#coaches' },                <div className="text-neutral-400 text-sm md:text-base font-medium">{i.label}</div>

        ],

        message: 'Histórico de treino e desafios',        { label: 'Results', href: '#results' },              </div>

        submit: 'Solicitar consultoria'

      },        { label: 'Plans', href: '#pricing' }            ))}

      consent: 'Ao enviar você concorda em ser contatado por email ou WhatsApp. Sem spam.'

    },      ],          </div>

    footer: {

      headline: 'Iron Brothers Coaching',      contact: {        </div>

      description: 'Coaching premium para resultados duradouros. Londres • Dublin • Online.',

      links: [        title: 'Contact',      </section>

        { label: 'Programas', href: '#programs' },

        { label: 'Treinadores', href: '#coaches' },        email: 'coach@ironbrothers.co',

        { label: 'Resultados', href: '#results' },

        { label: 'Planos', href: '#pricing' }        phone: '+44 20 1234 5678'      {/* --- VALUE PROPOSITION --- */}

      ],

      contact: {      },      <section className="py-20 md:py-28 relative overflow-hidden">

        title: 'Contato',

        email: 'coach@ironbrothers.co',      social: {        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"/>

        phone: '+351 910 000 000'

      },        title: 'Follow',

      social: {

        title: 'Redes',        instagram: '@ironbrotherscoaching',        <div className="ib-container relative z-10">

        instagram: '@ironbrotherscoaching',

        whatsapp: '+351 910 000 000'        whatsapp: '+44 74 0000 0000'          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">

      },

      copyright: '© ' + new Date().getFullYear() + ' Iron Brothers Coaching. Todos os direitos reservados.'      },            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">

    }

  }      copyright: '© ' + new Date().getFullYear() + ' Iron Brothers Coaching. All rights reserved.'              O que você <span className="text-gradient">recebe</span>

}

    }            </h2>

function renderTitle(segments) {

  return segments.map((part, index) => (  },            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">

    <span key={`${part.text}-${index}`} className={part.highlight ? 'text-gradient' : undefined}>

      {part.text}  pt: {              Estrutura pensada para conversão e resultados: clareza no valor, prova social forte e chamada única para ação

    </span>

  ))    nav: {            </p>

}

      programs: 'Programas',          </div>

export default function IronBrothersLanding() {

  const [lang, setLang] = React.useState('en')      coaches: 'Treinadores',

  const [open, setOpen] = React.useState(false)

  const content = copy[lang]      experience: 'Experiência',          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">



  const navLinks = [      results: 'Resultados',            {[

    { href: '#programs', label: content.nav.programs },

    { href: '#coaches', label: content.nav.coaches },      plans: 'Planos',              {icon:'📊',title:'Treino por Fases',desc:'Blocos periodizados com progressão comprovada e ajustes semanais.'},

    { href: '#experience', label: content.nav.experience },

    { href: '#results', label: content.nav.results },      testimonials: 'Depoimentos',              {icon:'🥗',title:'Nutrição Simples',desc:'Alvos práticos e macros flexíveis, sem dietas extremas ou restrições.'},

    { href: '#pricing', label: content.nav.plans },

    { href: '#testimonials', label: content.nav.testimonials },      faq: 'FAQ'              {icon:'📈',title:'Check-ins Semanais',desc:'Ajustes precisos com base em dados reais e feedback contínuo.'},

    { href: '#faq', label: content.nav.faq }

  ]    },              {icon:'🎯',title:'Técnica & Segurança',desc:'Cues de execução profissional e estratégias de prevenção de lesões.'},



  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'pt' : 'en'))    languageSwitcher: {              {icon:'🧠',title:'Habits & Mindset',desc:'Sistemas de consistência e hábitos sustentáveis de longo prazo.'},



  return (      label: 'Mudar idioma',              {icon:'💬',title:'Suporte 24/7',desc:'WhatsApp direto com o coach para dúvidas e ajustes imediatos.'},

    <div className="ib-page text-neutral-100">

      <style>{`      short: 'EN',            ].map((f,idx)=> (

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

      description: 'Ver este conteúdo em inglês'              <div

        :root {

          --ib-bg: #080808;    },                key={f.title}

          --ib-card: #101010;

          --ib-soft: #141414;    tagline: 'Resultados reais • 100% personalizados',                className="card p-8 hover-lift glow-card group"

          --ib-line: rgba(245, 158, 11, 0.15);

          --ib-gold: #f59e0b;    hero: {                style={{animationDelay: `${idx * 0.1}s`}}

          --ib-gold-700: #d97706;

          --ib-teal: #06b6d4;      title: [              >

          --ib-pink: #ec4899;

          --ib-text: #f5f5f5;        { text: 'Construa ', highlight: false },                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>

        }

        { text: 'força', highlight: true },                <h3 className="text-xl font-bold text-amber-400 mb-3">{f.title}</h3>

        body {

          margin: 0;        { text: ', queime ', highlight: false },                <p className="text-neutral-300 leading-relaxed">{f.desc}</p>

          background: var(--ib-bg);

          color: var(--ib-text);        { text: 'gordura', highlight: true },              </div>

          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

        }        { text: ' e alcance a sua melhor versão.', highlight: false }            ))}



        #root {      ],          </div>

          background: var(--ib-bg);

        }      subtitle:        </div>



        .ib-page {        'Coaching premium com treino sob medida, nutrição sustentável e acompanhamento real — online ou presencial.',      </section>

          min-height: 100vh;

          background:      instagramLabel: 'Instagram',

            radial-gradient(circle at top, rgba(245, 158, 11, 0.12), transparent 55%),

            radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.08), transparent 50%),      ctas: {      {/* --- EXPERIENCE / EXPERTISE --- */}

            var(--ib-bg);

        }        primary: 'Agendar consultoria gratuita',      <section id="experience" className="py-14 bg-neutral-950/60 border-y border-neutral-800/60">



        .ib-container {        secondary: 'Ver provas e depoimentos',        <div className="ib-container grid md:grid-cols-3 gap-6">

          max-width: 1180px;

          margin: 0 auto;        mobile: 'Começar agora'          <div className="md:col-span-1">

          padding: 0 1.5rem;

        }      }            <h2 className="text-3xl md:text-4xl font-black">Experiência & Expertise</h2>



        .nav-glass {    },            <p className="text-neutral-300 mt-2">Metodologia baseada em periodização, biomecânica aplicada e hábitos sustentáveis.</p>

          backdrop-filter: blur(18px);

          background: rgba(8, 8, 8, 0.85);    metrics: [          </div>

          border-bottom: 1px solid rgba(255, 255, 255, 0.05);

        }      { value: '127+', label: 'Transformações' },          <div className="card p-6">



        .brand-mark {      { value: '12', label: 'Anos de experiência' },            <div className="text-[var(--ib-gold)] font-semibold">Resultados Consistentes</div>

          display: flex;

          align-items: center;      { value: '5.0★', label: 'Avaliação média' }            <p className="text-neutral-300 mt-2">Mais de 127 transformações orientadas por dados: progressões semanais, técnica segura e rotina realista.</p>

          gap: 0.75rem;

        }    ],          </div>



        .brand-icon {    trust: [          <div className="card p-6">

          width: 44px;

          height: 44px;      { kpi: '15K+', label: 'Treinos entregues', icon: '💪' },            <div className="text-[var(--ib-teal)] font-semibold">Multidisciplinar</div>

          border-radius: 16px;

          background: linear-gradient(135deg, var(--ib-gold), var(--ib-teal));      { kpi: '95%', label: 'Taxa de sucesso', icon: '🎯' },            <p className="text-neutral-300 mt-2">Força, hipertrofia, recomposição e condicionamento — guiados por experiência prática em grandes academias e coaching online.</p>

          box-shadow: 0 0 40px rgba(245, 158, 11, 0.3);

        }      { kpi: '3', label: 'Idiomas (EN/PT/ES)', icon: '🌍' },          </div>



        .brand-title {      { kpi: '100%', label: 'Programas personalizados', icon: '⚡' }        </div>

          font-weight: 800;

          letter-spacing: -0.02em;    ],      </section>

          font-size: 1.25rem;

        }    value: {



        .nav-links a {      title: [      {/* --- PROGRAMS --- */}

          color: #d4d4d4;

          text-decoration: none;        { text: 'O que você ', highlight: false },      <section id="programs" className="py-20 md:py-28 bg-gradient-to-b from-neutral-900/30 to-transparent">

          font-size: 0.95rem;

          font-weight: 500;        { text: 'recebe', highlight: true }        <div className="ib-container">

          transition: color 0.25s ease;

        }      ],          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">



        .nav-links a:hover {      subtitle:            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">

          color: var(--ib-gold);

        }        'Estrutura focada em conversão com valor claro, provas sociais e chamadas à ação objetivas.',              Programas <span className="text-gradient">Iron Brothers</span>



        .language-toggle {      features: [            </h2>

          display: inline-flex;

          align-items: center;        {            <p className="text-lg md:text-xl text-neutral-300">

          justify-content: center;

          width: 44px;          icon: '📊',              Escolha o foco — nós personalizamos o caminho para seus objetivos

          height: 44px;

          border-radius: 12px;          title: 'Treino periodizado',            </p>

          border: 1px solid rgba(245, 158, 11, 0.4);

          background: rgba(16, 16, 16, 0.6);          desc: 'Blocos progressivos com ajustes semanais para compostos e acessórios.'          </div>

          color: var(--ib-text);

          font-weight: 600;        },

          cursor: pointer;

          transition: all 0.25s ease;        {          <div className="grid md:grid-cols-3 gap-6 md:gap-8">

        }

          icon: '🥗',            {[

        .language-toggle:hover {

          border-color: rgba(245, 158, 11, 0.7);          title: 'Nutrição simples',              {

          box-shadow: 0 10px 20px rgba(245, 158, 11, 0.25);

        }          desc: 'Metas práticas e macros flexíveis — sem dietas extremas ou proibições.'                title:'Body Recomp',



        .cta-primary,        },                emoji:'💪',

        .cta-secondary {

          display: inline-flex;        {                color:'from-amber-500 to-orange-600',

          align-items: center;

          justify-content: center;          icon: '📈',                points:['Hipertrofia + perda de gordura simultânea','Treino 4–5x por semana','Macros personalizados e revisão semanal']

          gap: 0.6rem;

          padding: 0.95rem 1.8rem;          title: 'Check-ins semanais',              },

          border-radius: 999px;

          font-weight: 700;          desc: 'Ajustes guiados por dados, feedback e realidade de rotina.'              {

          position: relative;

          overflow: hidden;        },                title:'Fat Loss Elite',

          transition: transform 0.25s ease, box-shadow 0.25s ease;

          text-decoration: none;        {                emoji:'🔥',

        }

          icon: '🎯',                color:'from-red-500 to-pink-600',

        .cta-primary {

          background: linear-gradient(135deg, var(--ib-gold), var(--ib-teal));          title: 'Técnica e segurança',                points:['Déficit calórico controlado e sustentável','Cardio estratégico periodizado','Hábitos anti-recaída e coaching mental']

          color: #050505;

          box-shadow: 0 12px 30px rgba(245, 158, 11, 0.35);          desc: 'Cues de execução e revisão técnica para cada repetição eficiente e segura.'              },

        }

        },              {

        .cta-primary:hover {

          transform: translateY(-3px);        {                title:'Strength & Power',

          box-shadow: 0 14px 38px rgba(245, 158, 11, 0.45);

        }          icon: '🧠',                emoji:'⚡',



        .cta-secondary {          title: 'Hábitos e mindset',                color:'from-cyan-500 to-blue-600',

          border: 1px solid rgba(245, 158, 11, 0.3);

          color: #f5f5f5;          desc: 'Sistema de hábitos de longo prazo para consistência sem burnout.'                points:['Progressão 5–8 reps em compostos','Ênfase em técnica e força máxima','Periodização linear e ondulada']

          background: rgba(16, 16, 16, 0.6);

        }        },              },



        .cta-secondary:hover {        {            ].map((p,idx)=> (

          border-color: rgba(245, 158, 11, 0.5);

          transform: translateY(-3px);          icon: '💬',              <div

        }

          title: 'Suporte constante',                key={p.title}

        .hero-grid {

          display: grid;          desc: 'Acesso direto no WhatsApp para ajustes rápidos e clareza.'                className="card p-8 hover-lift glow-card group relative overflow-hidden"

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 3.5rem;        }                style={{animationDelay: `${idx * 0.15}s`}}

          padding: 6rem 0 4rem;

        }      ]              >



        .tagline {    },                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}/>

          display: inline-flex;

          align-items: center;    experience: {

          gap: 0.45rem;

          border-radius: 999px;      title: 'Experiência e autoridade',                <div className="relative z-10">

          padding: 0.45rem 0.9rem;

          font-size: 0.85rem;      subtitle: 'Metodologia baseada em periodização, biomecânica e hábitos sustentáveis.',                  <div className="flex items-center justify-between mb-6">

          font-weight: 600;

          background: rgba(16, 16, 16, 0.7);      cards: [                    <div className="text-5xl">{p.emoji}</div>

          border: 1px solid rgba(245, 158, 11, 0.25);

        }        {                    <span className="tag text-xs">Plano Personalizado</span>



        .hero-title {          accent: 'Resultados consistentes',                  </div>

          font-size: clamp(2.7rem, 4vw, 3.4rem);

          line-height: 1.1;          body:

          margin: 1rem 0;

          font-weight: 800;            '127+ transformações guiadas por dados com acompanhamento semanal, técnica segura e rotina realista.'                  <h3 className="text-2xl md:text-3xl font-black mb-6 text-gradient">{p.title}</h3>

          letter-spacing: -0.035em;

        }        },



        .hero-subtitle {        {                  <ul className="space-y-4 mb-8">

          color: #d4d4d4;

          font-size: 1.05rem;          accent: 'Multidisciplinar',                    {p.points.map((pt)=> (

          line-height: 1.65;

          max-width: 34rem;          body:                      <li key={pt} className="flex gap-3 items-start text-neutral-300">

        }

            'Força, hipertrofia, recomposição e condicionamento com liderança presencial e coaching online.'                        <span className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-r ${p.color} flex-shrink-0`}/>

        .metrics-grid {

          display: grid;        }                        <span className="leading-relaxed">{pt}</span>

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 1rem;      ]                      </li>

          margin-top: 2.5rem;

        }    },                    ))}



        .metric-tile {    programs: {                  </ul>

          padding: 1.4rem 1.2rem;

          border-radius: 1.25rem;      title: [

          border: 1px solid rgba(245, 158, 11, 0.18);

          background: linear-gradient(135deg, rgba(16, 16, 16, 0.92), rgba(12, 12, 12, 0.8));        { text: 'Programas ', highlight: false },                  <a href="#apply" className="btn btn-gold w-full justify-center shimmer">

          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);

        }        { text: 'Iron Brothers', highlight: true }                    Quero este plano



        .metric-value {      ],                  </a>

          font-size: 1.8rem;

          font-weight: 700;      subtitle: 'Escolha o foco — nós desenhamos o caminho.',                </div>

          color: var(--ib-gold);

        }      cta: 'Quero este plano',              </div>



        .metric-label {      cards: [            ))}

          color: #c5c5c5;

          font-size: 0.95rem;        {          </div>

        }

          title: 'Recomposição',        </div>

        .hero-media {

          position: relative;          emoji: '💪',      </section>

          border-radius: 2rem;

          overflow: hidden;          color: 'from-amber-500 to-orange-600',

          border: 1px solid rgba(255, 255, 255, 0.05);

          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(6, 182, 212, 0.15));          points: [      {/* --- COACHES --- */}

          min-height: 420px;

          display: flex;            'Ganhe músculo enquanto reduz gordura',      <section id="coaches" className="py-20 md:py-28 bg-neutral-950/30">

          align-items: center;

          justify-content: center;            'Treino 100% personalizado 4–5x na semana',        <div className="ib-container">

        }

            'Macros personalizados com revisão semanal'          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">

        .hero-media::after {

          content: '';          ]            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">

          position: absolute;

          inset: 0;        },              Conheça os <span className="text-gradient">Coaches</span>

          background: url('https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=900&h=900&fit=crop') center/cover;

          mix-blend-mode: screen;        {            </h2>

          opacity: 0.55;

        }          title: 'Fat Loss Elite',            <p className="text-lg md:text-xl text-neutral-300">



        .hero-card {          emoji: '🔥',              Coaching próximo, humano e direto ao ponto — com você em cada etapa

          position: relative;

          z-index: 1;          color: 'from-red-500 to-pink-600',            </p>

          padding: 2rem;

          width: 100%;          points: [          </div>

          background: rgba(8, 8, 8, 0.88);

          border-radius: 1.75rem;            'Déficit controlado sem efeito sanfona',

          border: 1px solid rgba(245, 158, 11, 0.2);

          backdrop-filter: blur(18px);            'Cardio e passos estratégicos periodizados',          <div className="grid md:grid-cols-2 gap-8 md:gap-10">

        }

            'Mindset e hábitos anti-reganho'            {[{

        .trust-grid,

        .feature-grid,          ]              name:'Andre Garcia',

        .results-grid,

        .pricing-grid,        },              role:'Head Coach • Iron Brothers',

        .coach-grid,

        .faq-grid {        {              bullets:['Especialista em hipertrofia e recomposição corporal','Gestão de equipes e operação de academia','Coaching multilíngue (EN/PT/ES)'],

          display: grid;

          gap: 1.5rem;          title: 'Força & potência',              image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop'

        }

          emoji: '⚡',            },{

        .trust-grid {

          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));          color: 'from-cyan-500 to-blue-600',              name:'Lucas Gabriel',

        }

          points: [              role:'Coach • Strength & Conditioning',

        .feature-grid {

          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));            'Progressões de 5–8 reps para compostos',              bullets:['Força e técnica em levantamentos compostos','Periodização simples e progressão confiável','Suporte constante e accountability prática'],

        }

            'Técnica avançada e otimização de bracing',              image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop'

        .section-card {

          border-radius: 1.5rem;            'Blocos linear e ondulatório com propósito'            }].map((c, idx)=> (

          padding: 2rem;

          border: 1px solid var(--ib-line);          ]              <div

          background:

            radial-gradient(circle at top left, rgba(245, 158, 11, 0.12), transparent 55%),        }                key={c.name}

            linear-gradient(135deg, rgba(16, 16, 16, 0.9), rgba(10, 10, 10, 0.82));

          transition: transform 0.25s ease, border-color 0.25s ease;      ]                className="card p-8 hover-lift glow-card group"

        }

    },                style={{animationDelay: `${idx * 0.2}s`}}

        .section-card:hover {

          transform: translateY(-6px);    coaches: {              >

          border-color: rgba(245, 158, 11, 0.3);

        }      title: [                <div className="flex items-center justify-between mb-6">



        .section-eyebrow {        { text: 'Conheça os ', highlight: false },                  <div>

          font-weight: 600;

          font-size: 0.95rem;        { text: 'treinadores', highlight: true }                    <h3 className="text-2xl md:text-3xl font-black mb-1">{c.name}</h3>

          color: var(--ib-gold);

          margin-bottom: 0.6rem;      ],                    <div className="text-neutral-400 text-sm font-medium">{c.role}</div>

        }

      subtitle: 'Coaching humano e presente em cada passo.',                  </div>

        .section-title {

          font-size: clamp(2.05rem, 3vw, 2.6rem);      cards: [                  <span className="tag text-xs bg-gradient-to-r from-amber-500/20 to-orange-600/20 text-amber-400 border-amber-500/30">

          letter-spacing: -0.03em;

          font-weight: 800;        {                    Online & Presencial

          margin-bottom: 1rem;

        }          name: 'Andre Garcia',                  </span>



        .section-subtitle {          role: 'Head Coach • Iron Brothers',                </div>

          color: #cecece;

          font-size: 1.05rem;          bullets: [

          max-width: 38rem;

          line-height: 1.7;            'Especialista em hipertrofia e recomposição',                <div className="aspect-[4/3] mb-6 rounded-xl overflow-hidden relative group">

        }

            'Gestão de operações em academias e coaching presencial',                  <img

        .coach-grid {

          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));            'Atendimento em inglês, português e espanhol'                    src={c.image}

        }

          ],                    alt={c.name}

        .coach-card img {

          width: 100%;          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop'                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

          height: 220px;

          object-fit: cover;        },                  />

          border-radius: 1.25rem;

        }        {                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"/>



        .badge {          name: 'Lucas Gabriel',                </div>

          display: inline-flex;

          align-items: center;          role: 'Coach • Strength & Conditioning',

          gap: 0.45rem;

          padding: 0.4rem 0.85rem;          bullets: [                <ul className="space-y-4">

          border-radius: 999px;

          font-size: 0.85rem;            'Foco em técnica de compostos e força explosiva',                  {c.bullets.map(b=> (

          background: rgba(245, 158, 11, 0.16);

          border: 1px solid rgba(245, 158, 11, 0.4);            'Periodização clara e progressiva para sua rotina',                    <li key={b} className="flex gap-3 items-start text-neutral-300">

          color: var(--ib-gold);

        }            'Suporte e accountability constantes'                      <span className="mt-1.5 text-cyan-400 text-lg">✓</span>



        .pricing-grid {          ],                      <span className="leading-relaxed">{b}</span>

          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

        }          image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=600&fit=crop'                    </li>



        .pricing-card {        }                  ))}

          position: relative;

          padding: 2.4rem 2.1rem;      ]                </ul>

          border-radius: 1.75rem;

          background: linear-gradient(145deg, rgba(16, 16, 16, 0.95), rgba(7, 7, 7, 0.92));    },              </div>

          border: 1px solid rgba(245, 158, 11, 0.25);

          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);    results: {            ))}

        }

      title: [          </div>

        .pricing-card.popular {

          border-color: rgba(236, 72, 153, 0.6);        { text: 'Transformações ', highlight: false },        </div>

          box-shadow: 0 25px 50px rgba(236, 72, 153, 0.18);

        }        { text: 'reais', highlight: true }      </section>



        .pricing-price {      ],

          font-size: 2.6rem;

          font-weight: 800;      subtitle: 'Resultados comprovados para quem está comprometido.',      {/* --- RESULTS / TRANSFORMATIONS --- */}

          color: var(--ib-gold);

          margin: 1.2rem 0 0.6rem;      cta: 'Ver mais resultados →',      <section id="results" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-neutral-900/50 to-transparent">

        }

      cards: [        <div className="ib-container">

        .pricing-features {

          color: #cfcfcf;        {          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">

          font-size: 0.97rem;

          line-height: 1.7;          id: 1,            <div className="space-y-4 animate-fade-in">

        }

          image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">

        .pricing-features li {

          margin-bottom: 0.6rem;          badge: { weight: '-12kg', duration: '14 semanas' },                <span className="text-gradient">Transformações</span> Reais

        }

          quote: 'Coaching que transformou disciplina em resultados visíveis.',              </h2>

        .testimonial-card {

          padding: 2.2rem;          name: 'João S.'              <p className="text-lg md:text-xl text-neutral-300">

          border-radius: 1.75rem;

          background: linear-gradient(150deg, rgba(16, 16, 16, 0.92), rgba(22, 22, 22, 0.88));        },                Resultados comprovados de clientes comprometidos com o processo

          border: 1px solid rgba(245, 158, 11, 0.22);

        }        {              </p>



        .faq-grid {          id: 2,            </div>

          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

        }          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',            <a href="#apply" className="btn btn-outline shimmer">



        .faq-item {          badge: { weight: '-8kg', duration: '10 semanas' },              Ver mais resultados →

          padding: 1.6rem;

          border-radius: 1.25rem;          quote: 'Reduzi gordura sem passar fome. O protocolo simplesmente funciona.',            </a>

          border: 1px solid rgba(245, 158, 11, 0.18);

          background: rgba(14, 14, 14, 0.82);          name: 'Maria L.'          </div>

        }

        },

        .apply-card {

          padding: 3rem;        {          <div className="grid md:grid-cols-3 gap-6 md:gap-8">

          border-radius: 2rem;

          background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(6, 182, 212, 0.12));          id: 3,            {[

          border: 1px solid rgba(245, 158, 11, 0.4);

          position: relative;          image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',              {id:1, kg:12, weeks:14, quote:"Coaching pessoal de verdade. A disciplina virou resultado visível.", name:"João S."},

          overflow: hidden;

        }          badge: { weight: '-15kg', duration: '16 semanas' },              {id:2, kg:8, weeks:10, quote:"Perdi gordura sem passar fome. O protocolo funciona mesmo.", name:"Maria L."},



        .apply-card::after {          quote: 'Primeira vez ganhando músculo enquanto defini.',              {id:3, kg:15, weeks:16, quote:"Primeiro programa que me fez ganhar músculo perdendo peso.", name:"Pedro R."}

          content: '';

          position: absolute;          name: 'Pedro R.'            ].map((t, idx)=> (

          inset: 0;

          background: radial-gradient(circle at top right, rgba(236, 72, 153, 0.25), transparent 55%);        }              <div

          opacity: 0.5;

        }      ]                key={t.id}



        .apply-form {    },                className="card overflow-hidden hover-lift glow-card group"

          display: grid;

          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));    pricing: {                style={{animationDelay: `${idx * 0.15}s`}}

          gap: 1.2rem;

          position: relative;      title: [              >

          z-index: 1;

          margin-top: 2rem;        { text: 'Planos de ', highlight: false },                <div className="relative aspect-[3/4] overflow-hidden">

        }

        { text: 'coaching online', highlight: true }                  <img

        .apply-form label {

          display: flex;      ],                    src={`https://images.unsplash.com/photo-${['1571019614242-c5c5dee9f50b','1534438327276-14e5300c3a48','1583454110551-21f2fa2afe61'][idx]}?w=600&h=800&fit=crop`}

          flex-direction: column;

          gap: 0.6rem;      subtitle: 'Escolha o suporte ideal • Sem contratos longos • Cancelamento simples.',                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"

          font-weight: 600;

          color: #f1f1f1;      note: '* Valores de referência. O valor final é confirmado após a consultoria gratuita.',                    alt={`Transformation ${t.id}`}

        }

      cards: [                  />

        .apply-form input,

        .apply-form select,        {                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"/>

        .apply-form textarea {

          padding: 0.9rem 1rem;          name: 'Online Starter',                  <div className="absolute bottom-4 left-4 right-4">

          border-radius: 0.9rem;

          border: 1px solid rgba(255, 255, 255, 0.08);          price: '£119',                    <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2">

          background: rgba(8, 8, 8, 0.82);

          color: #f5f5f5;          period: '/mês',                      <span className="text-amber-400 font-black text-lg">-{t.kg}kg</span>

          font-size: 0.95rem;

        }          emoji: '🚀',                      <span className="text-neutral-300 text-sm">• {t.weeks} {lang==='en'?'weeks':'semanas'}</span>



        .apply-form textarea {          features: [                    </div>

          min-height: 120px;

          resize: vertical;            'Plano de treino personalizado 4–5x semana',                  </div>

        }

            'Estrutura nutricional com macros base',                </div>

        .apply-submit {

          margin-top: 1.8rem;            'Formulário semanal com ajustes',

          justify-self: flex-start;

        }            'Revisão mensal de programa'                <div className="p-6">



        .footer {          ]                  <blockquote className="text-neutral-200 leading-relaxed mb-3 italic">

          margin-top: 6rem;

          padding: 3.5rem 0 2.5rem;        },                    "{t.quote}"

          border-top: 1px solid rgba(255, 255, 255, 0.08);

          background: rgba(6, 6, 6, 0.92);        {                  </blockquote>

        }

          name: 'Online Pro',                  <cite className="text-sm text-neutral-400 not-italic font-medium">— {t.name}</cite>

        .footer-grid {

          display: grid;          price: '£159',                </div>

          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

          gap: 2rem;          period: '/mês',              </div>

        }

          emoji: '⭐',            ))}

        .footer-links a {

          display: block;          badge: 'Mais procurado',          </div>

          color: #cfcfcf;

          margin-bottom: 0.65rem;          popular: true,        </div>

          text-decoration: none;

        }          features: [      </section>



        .footer-links a:hover {            'Tudo do Starter',

          color: var(--ib-gold);

        }            'Macros personalizados atualizados toda semana',      {/* --- PRICING --- */}



        .text-gradient {            'Suporte WhatsApp ilimitado 24/7',      <section id="pricing" className="py-20 md:py-28 bg-neutral-950/60 border-y border-neutral-800/60">

          background: linear-gradient(135deg, var(--ib-gold), var(--ib-teal), var(--ib-pink));

          -webkit-background-clip: text;            'Revisão técnica em vídeo mensal'        <div className="ib-container">

          -webkit-text-fill-color: transparent;

          background-clip: text;          ]          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">

        }

        },            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">

        .mobile-toggle {

          display: none;        {              Planos de <span className="text-gradient">Online Coaching</span>

          border: none;

          background: none;          name: 'Online Elite',            </h2>

          color: #f5f5f5;

          font-size: 1.6rem;          price: '£249',            <p className="text-lg md:text-xl text-neutral-300">

          cursor: pointer;

        }          period: '/mês',              Escolha o acompanhamento ideal • Sem contratos longos • Cancelamento fácil



        @media (max-width: 1024px) {          emoji: '👑',            </p>

          .hero-grid {

            grid-template-columns: 1fr;          features: [          </div>

          }

            'Tudo do Pro',

          .hero-media {

            min-height: 320px;            'Análise técnica em vídeo duas vezes ao mês',          <div className="grid md:grid-cols-3 gap-6 md:gap-8">

          }

            'Roadmap de periodização trimestral',            {[

          .nav-links {

            display: none;            'Consulta 1:1 mensal (30–45 min)'              {

          }

          ]                name:'Online Starter',

          .mobile-toggle {

            display: inline-flex;        }                price:'£119',

          }

      ]                period:'/mês',

          .mobile-nav {

            display: flex;    },                emoji:'🚀',

            flex-direction: column;

            gap: 1rem;    testimonials: {                features:['Treino personalizado 4-5x/semana','Guia de nutrição e macros base','Check-in semanal por formulário','Ajustes de treino mensais']

            padding: 1.5rem;

            background: rgba(4, 4, 4, 0.95);      title: [              },

            border-bottom: 1px solid rgba(245, 158, 11, 0.2);

          }        { text: 'O que nossos ', highlight: false },              {

        }

        { text: 'clientes dizem', highlight: true }                name:'Online Pro',

        @media (max-width: 768px) {

          .metrics-grid {      ],                price:'£159',

            grid-template-columns: repeat(2, minmax(0, 1fr));

          }      subtitle: 'Histórias reais de transformação e accountability.',                period:'/mês',



          .apply-card {      cards: [                emoji:'⭐',

            padding: 2.4rem 1.8rem;

          }        {                badge:'Mais popular',



          .apply-form {          quote:                popular:true,

            grid-template-columns: 1fr;

          }            'Em 12 semanas perdi 10kg e finalmente confio na minha técnica. O suporte no WhatsApp fez toda a diferença.',                features:['Tudo do Starter incluído','Macros personalizados com ajustes semanais','Suporte WhatsApp 24/7 ilimitado','Vídeo-feedback de técnica 1x/mês']

        }

          name: 'Carla M.',              },

        @media (max-width: 560px) {

          .metrics-grid {          role: 'Online Pro'              {

            grid-template-columns: 1fr;

          }        },                name:'Online Elite',



          .hero-title {        {                price:'£249',

            font-size: 2.35rem;

          }          quote:                period:'/mês',



          .cta-primary,            'Plano simples de seguir e ajustes rápidos. Bati PRs de agachamento mesmo em déficit.',                emoji:'👑',

          .cta-secondary {

            width: 100%;          name: 'Rafael P.',                features:['Tudo do Pro incluído','Vídeo-análise de técnica 2x/mês','Plano trimestral com periodização','Consultoria 1:1 mensal (30–45min)']

            justify-content: center;

          }          role: 'Online Elite'              },

        }

      `}</style>        },            ].map((t, idx)=> (



      <header className="sticky top-0 z-40 nav-glass">        {              <div

        <div className="ib-container flex items-center justify-between h-20">

          <a href="#hero" className="brand-mark">          quote:                key={t.name}

            <span className="brand-icon" aria-hidden="true" />

            <span>            'Nunca fui tão consistente. Check-ins semanais me mantiveram focada sem me deixar obcecar.',                className={`card p-8 hover-lift relative overflow-hidden ${t.popular ? 'glow-card ring-2 ring-amber-500/50' : ''}`}

              <div className="brand-title">IRON BROTHERS</div>

              <div className="text-xs text-neutral-400">Premium Coaching • Worldwide</div>          name: 'Júlia S.',                style={{animationDelay: `${idx * 0.15}s`}}

            </span>

          </a>          role: 'Online Starter'              >



          <nav className="nav-links hidden lg:flex items-center gap-8">        }                {t.popular && (

            {navLinks.map((link) => (

              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>      ]                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500"/>

                {link.label}

              </a>    },                )}

            ))}

          </nav>    faq: {



          <div className="flex items-center gap-3">      title: [                <div className="relative z-10">

            <button

              type="button"        { text: 'Perguntas ', highlight: false },                  <div className="flex items-start justify-between mb-6">

              className="language-toggle"

              onClick={toggleLang}        { text: 'frequentes', highlight: true }                    <div className="flex items-center gap-3">

              aria-label={content.languageSwitcher.label}

              title={content.languageSwitcher.description}      ],                      <span className="text-4xl">{t.emoji}</span>

            >

              {content.languageSwitcher.short}      subtitle: 'Tudo o que você precisa saber sobre o coaching.',                      <div>

            </button>

            <a href="#apply" className="cta-primary hidden md:inline-flex">      items: [                        <h3 className="text-2xl font-black">{t.name}</h3>

              {content.hero.ctas.primary}

            </a>        {                        {t.badge && (

            <button

              type="button"          question: '❓ Como funciona o coaching online?',                          <span className="inline-block mt-1 text-xs font-bold px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">

              className="mobile-toggle lg:hidden"

              onClick={() => setOpen((prev) => !prev)}          answer:                            {t.badge}

              aria-label="Toggle navigation"

            >            'Treino e nutrição personalizados no app, check-ins semanais detalhados e suporte direto no WhatsApp para dúvidas e ajustes.'                          </span>

              {open ? '✕' : '☰'}

            </button>        },                        )}

          </div>

        </div>        {                      </div>

        {open && (

          <div className="mobile-nav lg:hidden">          question: '⏱️ Em quanto tempo vou ver resultados?',                    </div>

            {navLinks.map((link) => (

              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>          answer:                  </div>

                {link.label}

              </a>            'A maioria percebe mudanças em 4–6 semanas de consistência. Transformações maiores acontecem a partir de 12 semanas com adesão.'

            ))}

            <a href="#apply" className="cta-primary">        },                  <div className="mb-8">

              {content.hero.ctas.mobile}

            </a>        {                    <div className="flex items-baseline gap-1">

          </div>

        )}          question: '🏠 Posso treinar em casa?',                      <span className="text-5xl font-black text-gradient">{t.price}</span>

      </header>

          answer:                      <span className="text-neutral-400 text-lg">{t.period}</span>

      <main>

        <section id="hero" className="ib-container hero-grid" style={{ paddingTop: '4rem' }}>            'Com certeza. Adaptamos o plano ao equipamento que você tiver — de setup minimalista a academia completa.'                    </div>

          <div>

            <div className="tagline">        },                  </div>

              <span>🔥</span>

              <span>{content.tagline}</span>        {

            </div>

            <h1 className="hero-title">{renderTitle(content.hero.title)}</h1>          question: '🩹 E se eu tiver lesões ou limitações?',                  <ul className="space-y-4 mb-8">

            <p className="hero-subtitle">{content.hero.subtitle}</p>

            <div className="flex flex-wrap gap-3 mt-7">          answer:                    {t.features.map((f)=> (

              <a href="#apply" className="cta-primary">

                {content.hero.ctas.primary}            'Ajustamos seleção de exercícios, volume e amplitude. Técnica primeiro, progressão sustentável sempre.'                      <li key={f} className="flex gap-3 items-start text-neutral-300">

              </a>

              <a href="#results" className="cta-secondary">        },                        <span className="mt-1 text-amber-400 text-xl flex-shrink-0">✓</span>

                {content.hero.ctas.secondary}

              </a>        {                        <span className="leading-relaxed">{f}</span>

            </div>

            <div className="metrics-grid">          question: '💳 Como funcionam os pagamentos?',                      </li>

              {content.metrics.map((metric) => (

                <div key={metric.label} className="metric-tile">          answer:                    ))}

                  <div className="metric-value">{metric.value}</div>

                  <div className="metric-label">{metric.label}</div>            'Pagamentos mensais recorrentes via cartão ou transferência. Sem contratos longos e cancelamento simples.'                  </ul>

                </div>

              ))}        }

            </div>

          </div>      ]                  <a href="#apply" className={`btn ${t.popular ? 'btn-gold shimmer' : 'btn-outline'} w-full justify-center`}>



          <div className="hero-media">    },                    Selecionar plano

            <div className="hero-card">

              <span className="section-eyebrow">{content.hero.instagramLabel}</span>    apply: {                  </a>

              <h3 className="text-gradient text-2xl font-extrabold mb-3">@ironbrotherscoaching</h3>

              <p className="text-neutral-300 text-sm leading-relaxed">      title: [                </div>

                Daily programming breakdowns, client wins, and behind-the-scenes coaching moments straight from

                London, Dublin, and our online community.        { text: 'Pronto para um ', highlight: false },              </div>

              </p>

              <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-400">        { text: 'coaching de elite?', highlight: true }            ))}

                <span>• Technique clinics and cue breakdowns</span>

                <span>• Nutrition frameworks that clients actually follow</span>      ],          </div>

                <span>• Weekly Q&A sessions with the coaching team</span>

              </div>      subtitle: 'Conte seu objetivo. Respondemos em até 24 horas pelo WhatsApp.',

            </div>

          </div>      form: {          <p className="text-center text-sm text-neutral-400 mt-8">

        </section>

        name: 'Nome',            * Preços indicativos. Valor final ajustado após consultoria gratuita de 15 minutos

        <section className="ib-container mt-10" aria-labelledby="trust-heading">

          <div className="section-card">        email: 'Email',          </p>

            <div className="section-eyebrow" id="trust-heading">{content.nav.experience}</div>

            <h2 className="section-title">{renderTitle(content.value.title)}</h2>        phone: 'WhatsApp',        </div>

            <p className="section-subtitle">{content.value.subtitle}</p>

            <div className="trust-grid mt-8">        goal: 'Objetivo principal',      </section>

              {content.trust.map((item) => (

                <div key={item.label} className="section-card" style={{ padding: '1.5rem' }}>        goalOptions: [

                  <div className="badge">

                    <span>{item.icon}</span>          'Perda de gordura',      {/* --- TESTIMONIALS --- */}

                    <strong>{item.kpi}</strong>

                  </div>          'Ganho de massa',      <section id="testimonials" className="py-20 md:py-28">

                  <div className="mt-3 text-neutral-300">{item.label}</div>

                </div>          'Recomposição corporal',        <div className="ib-container">

              ))}

            </div>          'Força & performance'          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">

          </div>

        </section>        ],            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">



        <section className="ib-container mt-16" id="experience">        message: 'Histórico de treino e desafios',              O que <span className="text-gradient">nossos clientes</span> dizem

          <div className="section-card">

            <div className="section-eyebrow">{content.nav.experience}</div>        submit: 'Solicitar consultoria'            </h2>

            <h2 className="section-title">{content.experience.title}</h2>

            <p className="section-subtitle">{content.experience.subtitle}</p>      },            <p className="text-lg md:text-xl text-neutral-300">

            <div className="feature-grid mt-8">

              {content.value.features.map((feature) => (      consent: 'Ao enviar você concorda em ser contatado por email ou WhatsApp. Sem spam.'              Histórias reais de transformação e resultados

                <div key={feature.title} className="section-card" style={{ padding: '1.8rem' }}>

                  <div className="text-2xl">{feature.icon}</div>    },            </p>

                  <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>

                  <p className="text-neutral-300 mt-2 text-sm leading-relaxed">{feature.desc}</p>    footer: {          </div>

                </div>

              ))}      headline: 'Iron Brothers Coaching',

            </div>

            <div className="feature-grid mt-8">      description: 'Coaching premium para resultados duradouros. Londres • Dublin • Online.',          <div className="grid md:grid-cols-3 gap-6 md:gap-8">

              {content.experience.cards.map((card) => (

                <div key={card.accent} className="section-card" style={{ padding: '2rem' }}>      links: [            {[

                  <div className="badge" style={{ marginBottom: '1rem' }}>{card.accent}</div>

                  <p className="text-neutral-200 leading-relaxed">{card.body}</p>        { label: 'Programas', href: '#programs' },              {

                </div>

              ))}        { label: 'Treinadores', href: '#coaches' },                quote:'"Em 12 semanas perdi 10kg e ganhei segurança na técnica. O suporte no WhatsApp fez toda a diferença no meu processo."',

            </div>

          </div>        { label: 'Resultados', href: '#results' },                name:'Carla M.',

        </section>

        { label: 'Planos', href: '#pricing' }                role:'Online Pro',

        <section className="ib-container mt-16" id="programs">

          <div className="section-card">      ],                rating:5

            <div className="section-eyebrow">{content.nav.programs}</div>

            <h2 className="section-title">{renderTitle(content.programs.title)}</h2>      contact: {              },

            <p className="section-subtitle">{content.programs.subtitle}</p>

            <div className="feature-grid mt-10">        title: 'Contato',              {

              {content.programs.cards.map((program) => (

                <div key={program.title} className="section-card" style={{ padding: '2rem' }}>        email: 'coach@ironbrothers.co',                quote:'"Plano simples de seguir e ajustes rápidos quando necessário. Bati PRs no agachamento mantendo o déficit calórico."',

                  <div className="badge" style={{ background: 'rgba(245,158,11,0.18)', borderColor: 'rgba(245,158,11,0.35)' }}>

                    <span>{program.emoji}</span>        phone: '+351 910 000 000'                name:'Rafael P.',

                    <strong>{program.title}</strong>

                  </div>      },                role:'Online Elite',

                  <ul className="text-neutral-300 mt-4 text-sm leading-relaxed">

                    {program.points.map((point) => (      social: {                rating:5

                      <li key={point} style={{ marginBottom: '0.6rem' }}>• {point}</li>

                    ))}        title: 'Redes',              },

                  </ul>

                  <a href="#apply" className="cta-secondary mt-6" style={{ display: 'inline-flex' }}>        instagram: '@ironbrotherscoaching',              {

                    {content.programs.cta}

                  </a>        whatsapp: '+351 910 000 000'                quote:'"Nunca tive tanta consistência em um programa. O check-in semanal me manteve focada sem paranoia ou obsessão."',

                </div>

              ))}      },                name:'Julia S.',

            </div>

          </div>      copyright: '© ' + new Date().getFullYear() + ' Iron Brothers Coaching. Todos os direitos reservados.'                role:'Online Starter',

        </section>

    }                rating:5

        <section className="ib-container mt-16" id="coaches">

          <div className="section-card">  }              },

            <div className="section-eyebrow">{content.nav.coaches}</div>

            <h2 className="section-title">{renderTitle(content.coaches.title)}</h2>}            ].map((t, idx)=> (

            <p className="section-subtitle">{content.coaches.subtitle}</p>

            <div className="coach-grid mt-10">              <div

              {content.coaches.cards.map((coach) => (

                <div key={coach.name} className="section-card coach-card" style={{ padding: '1.8rem' }}>function renderTitle(segments) {                key={t.name}

                  <img src={coach.image} alt={coach.name} loading="lazy" />

                  <h3 className="text-xl font-semibold mt-4">{coach.name}</h3>  return segments.map((part, index) => (                className="card p-8 hover-lift glow-card relative"

                  <p className="text-sm text-neutral-400">{coach.role}</p>

                  <ul className="text-neutral-300 mt-4 text-sm leading-relaxed">    <span key={`${part.text}-${index}`} className={part.highlight ? 'text-gradient' : undefined}>                style={{animationDelay: `${idx * 0.15}s`}}

                    {coach.bullets.map((bullet) => (

                      <li key={bullet} style={{ marginBottom: '0.6rem' }}>• {bullet}</li>      {part.text}              >

                    ))}

                  </ul>    </span>                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl"/>

                </div>

              ))}  ))

            </div>

          </div>}                <div className="relative z-10">

        </section>

                  <div className="flex gap-1 mb-6">

        <section className="ib-container mt-16" id="results">

          <div className="section-card">export default function IronBrothersLanding() {                    {[...Array(t.rating)].map((_,i)=> (

            <div className="section-eyebrow">{content.nav.results}</div>

            <h2 className="section-title">{renderTitle(content.results.title)}</h2>  const [lang, setLang] = React.useState('en')                      <span key={i} className="text-amber-400 text-xl">★</span>

            <p className="section-subtitle">{content.results.subtitle}</p>

            <div className="results-grid mt-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>  const [open, setOpen] = React.useState(false)                    ))}

              {content.results.cards.map((result) => (

                <div key={result.id} className="section-card" style={{ padding: '1.4rem' }}>  const content = copy[lang]                  </div>

                  <div

                    style={{

                      width: '100%',

                      height: '200px',  const navLinks = [                  <blockquote className="text-neutral-200 text-lg leading-relaxed mb-6 italic">

                      borderRadius: '1.25rem',

                      background: `url(${result.image}) center/cover`,    { href: '#programs', label: content.nav.programs },                    {t.quote}

                      border: '1px solid rgba(255,255,255,0.08)'

                    }}    { href: '#coaches', label: content.nav.coaches },                  </blockquote>

                    aria-hidden="true"

                  />    { href: '#experience', label: content.nav.experience },

                  <div className="badge mt-4">

                    <span>{result.badge.weight}</span>    { href: '#results', label: content.nav.results },                  <div className="flex items-center gap-4">

                    <span>{result.badge.duration}</span>

                  </div>    { href: '#pricing', label: content.nav.plans },                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-black text-xl">

                  <p className="text-neutral-200 text-sm leading-relaxed mt-4">“{result.quote}”</p>

                  <div className="text-neutral-400 text-xs mt-3">{result.name}</div>    { href: '#testimonials', label: content.nav.testimonials },                      {t.name.charAt(0)}

                </div>

              ))}    { href: '#faq', label: content.nav.faq }                    </div>

            </div>

            <a href="https://instagram.com/ironbrotherscoaching" className="cta-secondary mt-6" style={{ display: 'inline-flex' }}>  ]                    <div>

              {content.results.cta}

            </a>                      <cite className="text-white font-bold not-italic block">{t.name}</cite>

          </div>

        </section>  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'pt' : 'en'))                      <span className="text-neutral-400 text-sm">{t.role}</span>



        <section className="ib-container mt-16" id="pricing">                    </div>

          <div className="section-card">

            <div className="section-eyebrow">{content.nav.plans}</div>  return (                  </div>

            <h2 className="section-title">{renderTitle(content.pricing.title)}</h2>

            <p className="section-subtitle">{content.pricing.subtitle}</p>    <div className="ib-page text-neutral-100">                </div>

            <div className="pricing-grid mt-10">

              {content.pricing.cards.map((plan) => (      <style>{`              </div>

                <div key={plan.name} className={`pricing-card${plan.popular ? ' popular' : ''}`}>

                  {plan.badge && (        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');            ))}

                    <div className="badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>

                      {plan.badge}          </div>

                    </div>

                  )}        :root {        </div>

                  <div className="text-3xl" aria-hidden="true">{plan.emoji}</div>

                  <h3 className="text-2xl font-semibold mt-4">{plan.name}</h3>          --ib-bg: #080808;      </section>

                  <div className="pricing-price">

                    {plan.price}          --ib-card: #101010;

                    <span className="text-lg text-neutral-400">{plan.period}</span>

                  </div>          --ib-soft: #141414;      {/* --- FAQ --- */}

                  <ul className="pricing-features mt-4">

                    {plan.features.map((feature) => (          --ib-line: rgba(245, 158, 11, 0.15);      <section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-transparent to-neutral-900/30">

                      <li key={feature}>• {feature}</li>

                    ))}          --ib-gold: #f59e0b;        <div className="ib-container">

                  </ul>

                  <a href="#apply" className="cta-secondary mt-8" style={{ display: 'inline-flex' }}>          --ib-gold-700: #d97706;          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">

                    {content.programs.cta}

                  </a>          --ib-teal: #06b6d4;            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">

                </div>

              ))}          --ib-pink: #ec4899;              Perguntas <span className="text-gradient">Frequentes</span>

            </div>

            <p className="text-xs text-neutral-500 mt-6">{content.pricing.note}</p>          --ib-text: #f5f5f5;            </h2>

          </div>

        </section>        }            <p className="text-lg md:text-xl text-neutral-300">



        <section className="ib-container mt-16" id="testimonials">              Tudo o que você precisa saber sobre nosso coaching

          <div className="section-card">

            <div className="section-eyebrow">{content.nav.testimonials}</div>        body {            </p>

            <h2 className="section-title">{renderTitle(content.testimonials.title)}</h2>

            <p className="section-subtitle">{content.testimonials.subtitle}</p>          margin: 0;          </div>

            <div className="results-grid mt-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>

              {content.testimonials.cards.map((testimonial, index) => (          background: var(--ib-bg);

                <div key={index} className="testimonial-card">

                  <p className="text-neutral-100 text-base leading-relaxed">“{testimonial.quote}”</p>          color: var(--ib-text);          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

                  <div className="mt-4 text-neutral-300 font-semibold">{testimonial.name}</div>

                  <div className="text-neutral-500 text-sm">{testimonial.role}</div>          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;            {[

                </div>

              ))}        }              {

            </div>

          </div>                q:'❓ Como funciona o coaching online?',

        </section>

        #root {                a:'Plano de treino personalizado + protocolo nutricional no app, check-ins semanais detalhados e suporte direto no WhatsApp para dúvidas e ajustes.'

        <section className="ib-container mt-16" id="faq">

          <div className="section-card">          background: var(--ib-bg);              },

            <div className="section-eyebrow">{content.nav.faq}</div>

            <h2 className="section-title">{renderTitle(content.faq.title)}</h2>        }              {

            <p className="section-subtitle">{content.faq.subtitle}</p>

            <div className="faq-grid mt-8">                q:'⏱️ Em quanto tempo vejo resultado?',

              {content.faq.items.map((item) => (

                <div key={item.question} className="faq-item">        .ib-page {                a:'Muitos clientes notam mudanças em 4–6 semanas de consistência. Grandes transformações acontecem em 12+ semanas com adesão ao protocolo.'

                  <h3 className="text-lg font-semibold text-neutral-100">{item.question}</h3>

                  <p className="text-neutral-300 text-sm leading-relaxed mt-3">{item.answer}</p>          min-height: 100vh;              },

                </div>

              ))}          background:              {

            </div>

          </div>            radial-gradient(circle at top, rgba(245, 158, 11, 0.12), transparent 55%),                q:'🏠 Posso treinar em casa?',

        </section>

            radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.08), transparent 50%),                a:'Sim! Adaptamos completamente ao seu equipamento disponível — desde home gym básica até academia comercial completa.'

        <section className="ib-container mt-16" id="apply">

          <div className="apply-card">            var(--ib-bg);              },

            <div className="section-eyebrow">{content.apply.subtitle}</div>

            <h2 className="section-title">{renderTitle(content.apply.title)}</h2>        }              {

            <form className="apply-form" onSubmit={(event) => event.preventDefault()}>

              <label>                q:'🩹 E se tenho lesões ou limitações?',

                {content.apply.form.name}

                <input type="text" name="name" placeholder={content.apply.form.name} required />        .ib-container {                a:'Ajustamos exercícios, volume e amplitude de movimento. Nosso foco é técnica segura, progressão sustentável e prevenção.'

              </label>

              <label>          max-width: 1180px;              },

                {content.apply.form.email}

                <input type="email" name="email" placeholder="email@example.com" required />          margin: 0 auto;              {

              </label>

              <label>          padding: 0 1.5rem;                q:'💳 Como funciona o pagamento?',

                {content.apply.form.phone}

                <input type="tel" name="phone" placeholder="WhatsApp" required />        }                a:'Mensalidades recorrentes via cartão ou transferência. Sem contratos de longo prazo, cancelamento simples a qualquer momento.'

              </label>

              <label>              },

                {content.apply.form.goal}

                <select name="goal" defaultValue="" required>        .nav-glass {              {

                  <option value="" disabled>

                    --          backdrop-filter: blur(18px);                q:'🌍 Atendem em que idiomas?',

                  </option>

                  {content.apply.form.goalOptions.map((option) => (          background: rgba(8, 8, 8, 0.85);                a:'Suporte completo em Inglês, Português e Espanhol. Escolha o idioma que você se sente mais confortável para coaching.'

                    <option key={option} value={option}>

                      {option}          border-bottom: 1px solid rgba(255, 255, 255, 0.05);              },

                    </option>

                  ))}        }            ].map((f, idx)=> (

                </select>

              </label>              <div

              <label style={{ gridColumn: '1 / -1' }}>

                {content.apply.form.message}        .brand-mark {                key={f.q}

                <textarea name="message" placeholder={content.apply.form.message} />

              </label>          display: flex;                className="card p-8 hover-lift group"

              <button type="submit" className="cta-primary apply-submit">

                {content.apply.form.submit}          align-items: center;                style={{animationDelay: `${idx * 0.1}s`}}

              </button>

            </form>          gap: 0.75rem;              >

            <p className="text-xs text-neutral-500 mt-6" style={{ position: 'relative', zIndex: 1 }}>

              {content.apply.consent}        }                <div className="flex gap-4">

            </p>

          </div>                  <div className="flex-1">

        </section>

      </main>        .brand-icon {                    <h3 className="font-bold text-lg text-white mb-3 group-hover:text-gradient transition-all duration-300">



      <footer className="footer">          width: 44px;                      {f.q}

        <div className="ib-container footer-grid">

          <div>          height: 44px;                    </h3>

            <div className="brand-title text-gradient">{content.footer.headline}</div>

            <p className="text-neutral-400 text-sm mt-3">{content.footer.description}</p>          border-radius: 16px;                    <p className="text-neutral-300 leading-relaxed">{f.a}</p>

          </div>

          <div>          background: linear-gradient(135deg, var(--ib-gold), var(--ib-teal));                  </div>

            <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-3">Links</h3>

            <div className="footer-links">          box-shadow: 0 0 40px rgba(245, 158, 11, 0.3);                </div>

              {content.footer.links.map((link) => (

                <a key={link.href} href={link.href}>        }              </div>

                  {link.label}

                </a>            ))}

              ))}

            </div>        .brand-title {          </div>

          </div>

          <div>          font-weight: 800;        </div>

            <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-3">{content.footer.contact.title}</h3>

            <div className="text-neutral-400 text-sm">          letter-spacing: -0.02em;      </section>

              <div>{content.footer.contact.email}</div>

              <div>{content.footer.contact.phone}</div>          font-size: 1.25rem;

            </div>

          </div>        }      {/* --- CTA APPLY --- */}

          <div>

            <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-3">{content.footer.social.title}</h3>      <section id="apply" className="py-20 md:py-28 bg-neutral-950/80 border-t border-neutral-800/60">

            <div className="text-neutral-400 text-sm">

              <div>{content.footer.social.instagram}</div>        .nav-links a {        <div className="ib-container">

              <div>{content.footer.social.whatsapp}</div>

            </div>          color: #d4d4d4;          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          </div>

        </div>          text-decoration: none;            <div className="space-y-8 animate-fade-in">

        <div className="ib-container text-neutral-600 text-xs mt-6 text-center">

          {content.footer.copyright}          font-size: 0.95rem;              <div>

        </div>

      </footer>          font-weight: 500;                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">

    </div>

  )          transition: color 0.25s ease;                  Pronto para <span className="text-gradient">começar?</span>

}

        }                </h2>

                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">

        .nav-links a:hover {                  Preencha o formulário e nossa equipe responde em até 24h para alinhar objetivos, expectativas e iniciar seu plano.

          color: var(--ib-gold);                </p>

        }              </div>



        .language-toggle {              <ul className="space-y-4">

          display: inline-flex;                {[

          align-items: center;                  {icon:'⚡', text:'Resposta garantida em 24 horas'},

          justify-content: center;                  {icon:'🎯', text:'Plano 100% personalizado aos seus objetivos'},

          width: 44px;                  {icon:'✓', text:'Sem compromisso na avaliação inicial'},

          height: 44px;                  {icon:'🔒', text:'Seus dados protegidos e confidenciais'}

          border-radius: 12px;                ].map((i)=> (

          border: 1px solid rgba(245, 158, 11, 0.4);                  <li key={i.text} className="flex gap-4 items-center text-neutral-200">

          background: rgba(16, 16, 16, 0.6);                    <span className="text-2xl flex-shrink-0">{i.icon}</span>

          color: var(--ib-text);                    <span className="text-lg">{i.text}</span>

          font-weight: 600;                  </li>

          cursor: pointer;                ))}

          transition: all 0.25s ease;              </ul>

        }            </div>



        .language-toggle:hover {            <form className="card p-8 md:p-10 glow-card space-y-5 animate-slide-up" style={{animationDelay: '0.2s'}}>

          border-color: rgba(245, 158, 11, 0.7);              <div className="grid md:grid-cols-2 gap-5">

          box-shadow: 0 10px 20px rgba(245, 158, 11, 0.25);                <div className="space-y-2">

        }                  <label className="text-sm font-medium text-neutral-400 block">Nome completo</label>

                  <input

        .cta-primary,                    placeholder={t('form').name}

        .cta-secondary {                    className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:bg-neutral-900"

          display: inline-flex;                  />

          align-items: center;                </div>

          justify-content: center;                <div className="space-y-2">

          gap: 0.6rem;                  <label className="text-sm font-medium text-neutral-400 block">E-mail</label>

          padding: 0.95rem 1.8rem;                  <input

          border-radius: 999px;                    placeholder={t('form').email}

          font-weight: 700;                    type="email"

          position: relative;                    className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:bg-neutral-900"

          overflow: hidden;                  />

          transition: transform 0.25s ease, box-shadow 0.25s ease;                </div>

          text-decoration: none;              </div>

        }

              <div className="space-y-2">

        .cta-primary {                <label className="text-sm font-medium text-neutral-400 block">WhatsApp (com código do país)</label>

          background: linear-gradient(135deg, var(--ib-gold), var(--ib-teal));                <input

          color: #050505;                  placeholder={t('form').whats}

          box-shadow: 0 12px 30px rgba(245, 158, 11, 0.35);                  className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:bg-neutral-900"

        }                />

              </div>

        .cta-primary:hover {

          transform: translateY(-3px);              <div className="space-y-2">

          box-shadow: 0 14px 38px rgba(245, 158, 11, 0.45);                <label className="text-sm font-medium text-neutral-400 block">Objetivo principal</label>

        }                <select className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:bg-neutral-900 cursor-pointer">

                  <option>{t('form').goal}</option>

        .cta-secondary {                  {t('form').goals.map(g=> (<option key={g}>{g}</option>))}

          border: 1px solid rgba(245, 158, 11, 0.3);                </select>

          color: #f5f5f5;              </div>

          background: rgba(16, 16, 16, 0.6);

        }              <div className="space-y-2">

                <label className="text-sm font-medium text-neutral-400 block">Histórico de treino e nutrição</label>

        .cta-secondary:hover {                <textarea

          border-color: rgba(245, 158, 11, 0.5);                  placeholder={t('form').history}

          transform: translateY(-3px);                  rows={4}

        }                  className="w-full bg-neutral-900/50 border border-neutral-700 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:bg-neutral-900 resize-none"

                />

        .hero-grid {              </div>

          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));              <button type="submit" className="btn btn-gold w-full justify-center text-lg py-4 shimmer">

          gap: 3.5rem;                {t('form').send} →

          padding: 6rem 0 4rem;              </button>

        }

              <p className="text-xs text-neutral-500 text-center leading-relaxed">

        .tagline {                Ao enviar, você concorda com nossa política de privacidade e tratamento de dados pessoais.

          display: inline-flex;              </p>

          align-items: center;            </form>

          gap: 0.45rem;          </div>

          border-radius: 999px;        </div>

          padding: 0.45rem 0.9rem;      </section>

          font-size: 0.85rem;

          font-weight: 600;      {/* --- FOOTER --- */}

          background: rgba(16, 16, 16, 0.7);      <footer className="border-t border-neutral-800/70 bg-neutral-950/80">

          border: 1px solid rgba(245, 158, 11, 0.25);        <div className="ib-container py-16 md:py-20">

        }          <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-12">

            <div className="space-y-4">

        .hero-title {              <div className="flex items-center gap-2">

          font-size: clamp(2.7rem, 4vw, 3.4rem);                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-600 to-cyan-500 flex items-center justify-center">

          line-height: 1.1;                  <span className="text-white font-black text-xl">IB</span>

          margin: 1rem 0;                </div>

          font-weight: 800;                <div className="font-black text-xl tracking-tight">

          letter-spacing: -0.035em;                  <span className="text-gradient">IRON BROTHERS</span>

        }                </div>

              </div>

        .hero-subtitle {              <p className="text-neutral-400 leading-relaxed">

          color: #d4d4d4;                Coaching premium para resultados duradouros. Londres • Dublin • Online Worldwide.

          font-size: 1.05rem;              </p>

          line-height: 1.65;              <a

          max-width: 34rem;                className="inline-flex items-center gap-2 text-neutral-300 hover:text-amber-400 transition-colors duration-300 group"

        }                target="_blank"

                rel="noopener noreferrer"

        .metrics-grid {                href="https://www.instagram.com/iron.brothersfitness"

          display: grid;              >

          grid-template-columns: repeat(3, minmax(0, 1fr));                <span className="text-xl group-hover:scale-110 transition-transform duration-300">📸</span>

          gap: 1rem;                <span className="font-medium">@iron.brothersfitness</span>

          margin-top: 2.5rem;              </a>

        }            </div>



        .metric-tile {            <div>

          padding: 1.4rem 1.2rem;              <h3 className="text-white font-bold mb-4">{copy[lang].links}</h3>

          border-radius: 1.25rem;              <ul className="space-y-3 text-neutral-400">

          border: 1px solid rgba(245, 158, 11, 0.18);                {[

          background: linear-gradient(135deg, rgba(16, 16, 16, 0.92), rgba(12, 12, 12, 0.8));                  {href:'#programs', label:'Programas'},

          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);                  {href:'#coaches', label:'Treinadores'},

        }                  {href:'#results', label:'Resultados'},

                  {href:'#pricing', label:'Planos'},

        .metric-value {                  {href:'#testimonials', label:'Depoimentos'},

          font-size: 1.8rem;                  {href:'#faq', label:'FAQ'}

          font-weight: 700;                ].map(link => (

          color: var(--ib-gold);                  <li key={link.href}>

        }                    <a

                      href={link.href}

        .metric-label {                      className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all duration-300"

          color: #c5c5c5;                    >

          font-size: 0.95rem;                      {link.label}

        }                    </a>

                  </li>

        .hero-media {                ))}

          position: relative;              </ul>

          border-radius: 2rem;            </div>

          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.05);            <div>

          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(6, 182, 212, 0.15));              <h3 className="text-white font-bold mb-4">{copy[lang].contact}</h3>

          min-height: 420px;              <ul className="space-y-3 text-neutral-400">

          display: flex;                <li className="flex items-start gap-2">

          align-items: center;                  <span>📧</span>

          justify-content: center;                  <a href="mailto:ironbrothers2729@gmail.com" className="hover:text-amber-400 transition-colors duration-300 break-all">

        }                    ironbrothers2729@gmail.com

                  </a>

        .hero-media::after {                </li>

          content: '';                <li className="flex items-start gap-2">

          position: absolute;                  <span>📱</span>

          inset: 0;                  <span>WhatsApp disponível após aplicação</span>

          background: url('https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=900&h=900&fit=crop') center/cover;                </li>

          mix-blend-mode: screen;                <li className="flex items-start gap-2">

          opacity: 0.55;                  <span>🌍</span>

        }                  <span>London • Dublin • Global</span>

                </li>

        .hero-card {              </ul>

          position: relative;            </div>

          z-index: 1;

          padding: 2rem;            <div>

          width: 100%;              <h3 className="text-white font-bold mb-4">Legal</h3>

          background: rgba(8, 8, 8, 0.88);              <ul className="space-y-3 text-neutral-400">

          border-radius: 1.75rem;                <li>

          border: 1px solid rgba(245, 158, 11, 0.2);                  <a href="#privacy" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all duration-300">

          backdrop-filter: blur(18px);                    Política de Privacidade

        }                  </a>

                </li>

        .trust-grid,                <li>

        .feature-grid,                  <a href="#terms" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all duration-300">

        .results-grid,                    Termos de Serviço

        .pricing-grid,                  </a>

        .coach-grid,                </li>

        .faq-grid {                <li>

          display: grid;                  <a href="#cookies" className="hover:text-amber-400 hover:translate-x-1 inline-block transition-all duration-300">

          gap: 1.5rem;                    Política de Cookies

        }                  </a>

                </li>

        .trust-grid {              </ul>

          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));            </div>

        }          </div>



        .feature-grid {          <div className="pt-8 border-t border-neutral-800/50">

          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        }              <p className="text-neutral-500 text-sm">

                © {new Date().getFullYear()} Iron Brothers Fitness. All rights reserved.

        .section-card {              </p>

          border-radius: 1.5rem;              <p className="text-neutral-600 text-xs">

          padding: 2rem;                Designed for results • Built with React & Vite

          border: 1px solid var(--ib-line);              </p>

          background:            </div>

            radial-gradient(circle at top left, rgba(245, 158, 11, 0.12), transparent 55%),          </div>

            linear-gradient(135deg, rgba(16, 16, 16, 0.9), rgba(10, 10, 10, 0.82));        </div>

          transition: transform 0.25s ease, border-color 0.25s ease;      </footer>

        }    </div>

  )

        .section-card:hover {}

          transform: translateY(-6px);
          border-color: rgba(245, 158, 11, 0.3);
        }

        .section-eyebrow {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--ib-gold);
          margin-bottom: 0.6rem;
        }

        .section-title {
          font-size: clamp(2.05rem, 3vw, 2.6rem);
          letter-spacing: -0.03em;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: #cecece;
          font-size: 1.05rem;
          max-width: 38rem;
          line-height: 1.7;
        }

        .coach-grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }

        .coach-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 1.25rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          font-size: 0.85rem;
          background: rgba(245, 158, 11, 0.16);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: var(--ib-gold);
        }

        .pricing-grid {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .pricing-card {
          position: relative;
          padding: 2.4rem 2.1rem;
          border-radius: 1.75rem;
          background: linear-gradient(145deg, rgba(16, 16, 16, 0.95), rgba(7, 7, 7, 0.92));
          border: 1px solid rgba(245, 158, 11, 0.25);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }

        .pricing-card.popular {
          border-color: rgba(236, 72, 153, 0.6);
          box-shadow: 0 25px 50px rgba(236, 72, 153, 0.18);
        }

        .pricing-price {
          font-size: 2.6rem;
          font-weight: 800;
          color: var(--ib-gold);
          margin: 1.2rem 0 0.6rem;
        }

        .pricing-features {
          color: #cfcfcf;
          font-size: 0.97rem;
          line-height: 1.7;
        }

        .pricing-features li {
          margin-bottom: 0.6rem;
        }

        .testimonial-card {
          padding: 2.2rem;
          border-radius: 1.75rem;
          background: linear-gradient(150deg, rgba(16, 16, 16, 0.92), rgba(22, 22, 22, 0.88));
          border: 1px solid rgba(245, 158, 11, 0.22);
        }

        .faq-grid {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .faq-item {
          padding: 1.6rem;
          border-radius: 1.25rem;
          border: 1px solid rgba(245, 158, 11, 0.18);
          background: rgba(14, 14, 14, 0.82);
        }

        .apply-card {
          padding: 3rem;
          border-radius: 2rem;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(6, 182, 212, 0.12));
          border: 1px solid rgba(245, 158, 11, 0.4);
          position: relative;
          overflow: hidden;
        }

        .apply-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(236, 72, 153, 0.25), transparent 55%);
          opacity: 0.5;
        }

        .apply-form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.2rem;
          position: relative;
          z-index: 1;
          margin-top: 2rem;
        }

        .apply-form label {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          font-weight: 600;
          color: #f1f1f1;
        }

        .apply-form input,
        .apply-form select,
        .apply-form textarea {
          padding: 0.9rem 1rem;
          border-radius: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(8, 8, 8, 0.82);
          color: #f5f5f5;
          font-size: 0.95rem;
        }

        .apply-form textarea {
          min-height: 120px;
          resize: vertical;
        }

        .apply-submit {
          margin-top: 1.8rem;
          justify-self: flex-start;
        }

        .footer {
          margin-top: 6rem;
          padding: 3.5rem 0 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(6, 6, 6, 0.92);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }

        .footer-links a {
          display: block;
          color: #cfcfcf;
          margin-bottom: 0.65rem;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: var(--ib-gold);
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--ib-gold), var(--ib-teal), var(--ib-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-toggle {
          display: none;
          border: none;
          background: none;
          color: #f5f5f5;
          font-size: 1.6rem;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-media {
            min-height: 320px;
          }

          .nav-links {
            display: none;
          }

          .mobile-toggle {
            display: inline-flex;
          }

          .mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(4, 4, 4, 0.95);
            border-bottom: 1px solid rgba(245, 158, 11, 0.2);
          }
        }

        @media (max-width: 768px) {
          .metrics-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .apply-card {
            padding: 2.4rem 1.8rem;
          }

          .apply-form {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2.35rem;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <header className="sticky top-0 z-40 nav-glass">
        <div className="ib-container flex items-center justify-between h-20">
          <a href="#hero" className="brand-mark">
            <span className="brand-icon" aria-hidden="true" />
            <span>
              <div className="brand-title">IRON BROTHERS</div>
              <div className="text-xs text-neutral-400">Premium Coaching • Worldwide</div>
            </span>
          </a>

          <nav className="nav-links hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="language-toggle"
              onClick={toggleLang}
              aria-label={content.languageSwitcher.label}
              title={content.languageSwitcher.description}
            >
              {content.languageSwitcher.short}
            </button>
            <a href="#apply" className="cta-primary hidden md:inline-flex">
              {content.hero.ctas.primary}
            </a>
            <button
              type="button"
              className="mobile-toggle lg:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {open && (
          <div className="mobile-nav lg:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#apply" className="cta-primary">
              {content.hero.ctas.mobile}
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="ib-container hero-grid" style={{ paddingTop: '4rem' }}>
          <div>
            <div className="tagline">
              <span>🔥</span>
              <span>{content.tagline}</span>
            </div>
            <h1 className="hero-title">{renderTitle(content.hero.title)}</h1>
            <p className="hero-subtitle">{content.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#apply" className="cta-primary">
                {content.hero.ctas.primary}
              </a>
              <a href="#results" className="cta-secondary">
                {content.hero.ctas.secondary}
              </a>
            </div>
            <div className="metrics-grid">
              {content.metrics.map((metric) => (
                <div key={metric.label} className="metric-tile">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-card">
              <span className="section-eyebrow">{content.hero.instagramLabel}</span>
              <h3 className="text-gradient text-2xl font-extrabold mb-3">@ironbrotherscoaching</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Daily programming breakdowns, client wins, and behind-the-scenes coaching moments straight from
                London, Dublin, and our online community.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm text-neutral-400">
                <span>• Technique clinics and cue breakdowns</span>
                <span>• Nutrition frameworks that clients actually follow</span>
                <span>• Weekly Q&A sessions with the coaching team</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ib-container mt-10" aria-labelledby="trust-heading">
          <div className="section-card">
            <div className="section-eyebrow" id="trust-heading">{content.nav.experience}</div>
            <h2 className="section-title">{renderTitle(content.value.title)}</h2>
            <p className="section-subtitle">{content.value.subtitle}</p>
            <div className="trust-grid mt-8">
              {content.trust.map((item) => (
                <div key={item.label} className="section-card" style={{ padding: '1.5rem' }}>
                  <div className="badge">
                    <span>{item.icon}</span>
                    <strong>{item.kpi}</strong>
                  </div>
                  <div className="mt-3 text-neutral-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ib-container mt-16" id="experience">
          <div className="section-card">
            <div className="section-eyebrow">{content.nav.experience}</div>
            <h2 className="section-title">{content.experience.title}</h2>
            <p className="section-subtitle">{content.experience.subtitle}</p>
            <div className="feature-grid mt-8">
              {content.value.features.map((feature) => (
                <div key={feature.title} className="section-card" style={{ padding: '1.8rem' }}>
                  <div className="text-2xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
                  <p className="text-neutral-300 mt-2 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            <div className="feature-grid mt-8">
              {content.experience.cards.map((card) => (
                <div key={card.accent} className="section-card" style={{ padding: '2rem' }}>
                  <div className="badge" style={{ marginBottom: '1rem' }}>{card.accent}</div>
                  <p className="text-neutral-200 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ib-container mt-16" id="programs">
          <div className="section-card">
            <div className="section-eyebrow">{content.nav.programs}</div>
            <h2 className="section-title">{renderTitle(content.programs.title)}</h2>
            <p className="section-subtitle">{content.programs.subtitle}</p>
            <div className="feature-grid mt-10">
              {content.programs.cards.map((program) => (
                <div key={program.title} className="section-card" style={{ padding: '2rem' }}>
                  <div className="badge" style={{ background: 'rgba(245,158,11,0.18)', borderColor: 'rgba(245,158,11,0.35)' }}>
                    <span>{program.emoji}</span>
                    <strong>{program.title}</strong>
                  </div>
                  <ul className="text-neutral-300 mt-4 text-sm leading-relaxed">
                    {program.points.map((point) => (
                      <li key={point} style={{ marginBottom: '0.6rem' }}>• {point}</li>
                    ))}
                  </ul>
                  <a href="#apply" className="cta-secondary mt-6" style={{ display: 'inline-flex' }}>
                    {content.programs.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ib-container mt-16" id="coaches">
          <div className="section-card">
            <div className="section-eyebrow">{content.nav.coaches}</div>
            <h2 className="section-title">{renderTitle(content.coaches.title)}</h2>
            <p className="section-subtitle">{content.coaches.subtitle}</p>
            <div className="coach-grid mt-10">
              {content.coaches.cards.map((coach) => (
                <div key={coach.name} className="section-card coach-card" style={{ padding: '1.8rem' }}>
                  <img src={coach.image} alt={coach.name} loading="lazy" />
                  <h3 className="text-xl font-semibold mt-4">{coach.name}</h3>
                  <p className="text-sm text-neutral-400">{coach.role}</p>
                  <ul className="text-neutral-300 mt-4 text-sm leading-relaxed">
                    {coach.bullets.map((bullet) => (
                      <li key={bullet} style={{ marginBottom: '0.6rem' }}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ib-container mt-16" id="results">
          <div className="section-card">
            <div className="section-eyebrow">{content.nav.results}</div>
            <h2 className="section-title">{renderTitle(content.results.title)}</h2>
            <p className="section-subtitle">{content.results.subtitle}</p>
            <div className="results-grid mt-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {content.results.cards.map((result) => (
                <div key={result.id} className="section-card" style={{ padding: '1.4rem' }}>
                  <div
                    style={{
                      width: '100%',
                      height: '200px',
                      borderRadius: '1.25rem',
                      background: `url(${result.image}) center/cover`,
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}
                    aria-hidden="true"
                  />
                  <div className="badge mt-4">
                    <span>{result.badge.weight}</span>
                    <span>{result.badge.duration}</span>
                  </div>
                  <p className="text-neutral-200 text-sm leading-relaxed mt-4">“{result.quote}”</p>
                  <div className="text-neutral-400 text-xs mt-3">{result.name}</div>
                </div>
              ))}
            </div>
            <a href="https://instagram.com/ironbrotherscoaching" className="cta-secondary mt-6" style={{ display: 'inline-flex' }}>
              {content.results.cta}
            </a>
          </div>
        </section>

        <section className="ib-container mt-16" id="pricing">
          <div className="section-card">
            <div className="section-eyebrow">{content.nav.plans}</div>
            <h2 className="section-title">{renderTitle(content.pricing.title)}</h2>
            <p className="section-subtitle">{content.pricing.subtitle}</p>
            <div className="pricing-grid mt-10">
              {content.pricing.cards.map((plan) => (
                <div key={plan.name} className={`pricing-card${plan.popular ? ' popular' : ''}`}>
                  {plan.badge && (
                    <div className="badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                      {plan.badge}
                    </div>
                  )}
                  <div className="text-3xl" aria-hidden="true">{plan.emoji}</div>
                  <h3 className="text-2xl font-semibold mt-4">{plan.name}</h3>
                  <div className="pricing-price">
                    {plan.price}
                    <span className="text-lg text-neutral-400">{plan.period}</span>
                  </div>
                  <ul className="pricing-features mt-4">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <a href="#apply" className="cta-secondary mt-8" style={{ display: 'inline-flex' }}>
                    {content.programs.cta}
                  </a>
                </div>
              ))}
            </div>
            <p className="text-xs text-neutral-500 mt-6">{content.pricing.note}</p>
          </div>
        </section>

        <section className="ib-container mt-16" id="testimonials">
          <div className="section-card">
            <div className="section-eyebrow">{content.nav.testimonials}</div>
            <h2 className="section-title">{renderTitle(content.testimonials.title)}</h2>
            <p className="section-subtitle">{content.testimonials.subtitle}</p>
            <div className="results-grid mt-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {content.testimonials.cards.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p className="text-neutral-100 text-base leading-relaxed">“{testimonial.quote}”</p>
                  <div className="mt-4 text-neutral-300 font-semibold">{testimonial.name}</div>
                  <div className="text-neutral-500 text-sm">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ib-container mt-16" id="faq">
          <div className="section-card">
            <div className="section-eyebrow">{content.nav.faq}</div>
            <h2 className="section-title">{renderTitle(content.faq.title)}</h2>
            <p className="section-subtitle">{content.faq.subtitle}</p>
            <div className="faq-grid mt-8">
              {content.faq.items.map((item) => (
                <div key={item.question} className="faq-item">
                  <h3 className="text-lg font-semibold text-neutral-100">{item.question}</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mt-3">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ib-container mt-16" id="apply">
          <div className="apply-card">
            <div className="section-eyebrow">{content.apply.subtitle}</div>
            <h2 className="section-title">{renderTitle(content.apply.title)}</h2>
            <form className="apply-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                {content.apply.form.name}
                <input type="text" name="name" placeholder={content.apply.form.name} required />
              </label>
              <label>
                {content.apply.form.email}
                <input type="email" name="email" placeholder="email@example.com" required />
              </label>
              <label>
                {content.apply.form.phone}
                <input type="tel" name="phone" placeholder="WhatsApp" required />
              </label>
              <label>
                {content.apply.form.goal}
                <select name="goal" defaultValue="" required>
                  <option value="" disabled>
                    --
                  </option>
                  {content.apply.form.goalOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label style={{ gridColumn: '1 / -1' }}>
                {content.apply.form.message}
                <textarea name="message" placeholder={content.apply.form.message} />
              </label>
              <button type="submit" className="cta-primary apply-submit">
                {content.apply.form.submit}
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-6" style={{ position: 'relative', zIndex: 1 }}>
              {content.apply.consent}
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="ib-container footer-grid">
          <div>
            <div className="brand-title text-gradient">{content.footer.headline}</div>
            <p className="text-neutral-400 text-sm mt-3">{content.footer.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-3">Links</h3>
            <div className="footer-links">
              {content.footer.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-3">{content.footer.contact.title}</h3>
            <div className="text-neutral-400 text-sm">
              <div>{content.footer.contact.email}</div>
              <div>{content.footer.contact.phone}</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 uppercase tracking-wider mb-3">{content.footer.social.title}</h3>
            <div className="text-neutral-400 text-sm">
              <div>{content.footer.social.instagram}</div>
              <div>{content.footer.social.whatsapp}</div>
            </div>
          </div>
        </div>
        <div className="ib-container text-neutral-600 text-xs mt-6 text-center">
          {content.footer.copyright}
        </div>
      </footer>
    </div>
  )
}
