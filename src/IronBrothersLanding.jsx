import React from 'react'

export default function IronBrothersLanding() {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState('en');
  const copy = {
    en: {
      tagline: 'Real results • 100% personalized',
      nav: { programs: 'Programs', coaches: 'Coaches', experience: 'Experience', results: 'Results', plans: 'Plans' },
      hero_a: 'Build ', hero_b: 'strength', hero_c: ', burn ', hero_d: 'fat', hero_e: ' and become your best self.',
      hero_p: 'Premium coaching with tailored training, simple nutrition, and real accountability — online or in-person.',
      cta_primary: 'Book Free Consultation', cta_secondary: 'See Proof & Testimonials',
      kpi1: 'Transformations', kpi2: 'Years of Experience', kpi3: 'Avg. Rating',
      form: {
        name: 'Name', email: 'Email', whats: 'WhatsApp', goal: 'Main goal',
        goals: ['Fat Loss','Muscle Gain','Recomp','Strength/Performance'],
        history: 'Tell us your history and challenges', send: 'Request Consultation'
      },
      footer_desc: 'Premium coaching for lasting results. London • Dublin • Online Worldwide.',
      links: 'Links', contact: 'Contact'
    },
    pt: {
      tagline: 'Resultados Reais • 100% Personalizado',
      nav: { programs: 'Programas', coaches: 'Treinadores', experience: 'Experiência', results: 'Resultados', plans: 'Planos' },
      hero_a: 'Construa ', hero_b: 'força', hero_c: ', queime ', hero_d: 'gordura', hero_e: ' e torne-se a sua melhor versão.',
      hero_p: 'Coaching premium com treino sob medida, nutrição simples e accountability de verdade — online ou presencial.',
      cta_primary: 'Agendar Consultoria Grátis', cta_secondary: 'Ver Provas & Depoimentos',
      kpi1: 'Transformações', kpi2: 'Anos de Experiência', kpi3: 'Avaliação Média',
      form: {
        name: 'Nome', email: 'Email', whats: 'WhatsApp', goal: 'Objetivo principal',
        goals: ['Perda de Gordura','Ganho de Massa','Recomposição','Força/Performance'],
        history: 'Conte sua história e desafios', send: 'Solicitar Consultoria'
      },
      footer_desc: 'Coaching premium para resultados duradouros. Londres • Dublin • Online Worldwide.',
      links: 'Links', contact: 'Contato'
    }
  };
  const t = (k)=> copy[lang][k];
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
      {/* --- Enhanced Global Styles with Animations --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        :root{
          --ib-bg:#0a0a0a;
          --ib-card:#0f0f0f;
          --ib-soft:#1a1a1a;
          --ib-gold:#f59e0b;
          --ib-gold-700:#d97706;
          --ib-gold-900:#92400e;
          --ib-teal:#06b6d4;
          --ib-teal-700:#0891b2;
          --ib-accent:#ec4899;
        }

        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

        .ib-container{max-width:1240px;margin:0 auto;padding:0 1.5rem}

        .glow-card{
          box-shadow:0 0 0 1px rgba(245,158,11,.15),
                     0 10px 40px -10px rgba(6,182,212,.2),
                     0 20px 60px -15px rgba(236,72,153,.15);
          transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .glow-card:hover{
          box-shadow:0 0 0 1px rgba(245,158,11,.3),
                     0 15px 50px -10px rgba(6,182,212,.35),
                     0 25px 70px -15px rgba(236,72,153,.25);
          transform:translateY(-4px);
        }

        .btn{
          display:inline-flex;align-items:center;gap:.6rem;
          border-radius:9999px;padding:1rem 1.75rem;
          font-weight:700;font-size:0.95rem;
          transition:all 0.3s cubic-bezier(0.4,0,0.2,1);
          position:relative;overflow:hidden;
        }
        .btn::before{
          content:'';position:absolute;inset:0;
          background:linear-gradient(45deg,transparent,rgba(255,255,255,0.1),transparent);
          transform:translateX(-100%);
          transition:transform 0.6s;
        }
        .btn:hover::before{transform:translateX(100%);}

        .btn-gold{
          background:linear-gradient(135deg,var(--ib-gold),var(--ib-gold-700));
          color:#0a0a0a;
          box-shadow:0 4px 20px rgba(245,158,11,0.4);
        }
        .btn-gold:hover{
          box-shadow:0 6px 30px rgba(245,158,11,0.6);
          transform:translateY(-2px);
        }

        .btn-outline{
          border:2px solid rgba(245,158,11,0.3);
          background:rgba(15,15,15,0.6);
          backdrop-filter:blur(10px);
        }
        .btn-outline:hover{
          border-color:rgba(245,158,11,0.6);
          background:rgba(245,158,11,0.1);
        }

        .tag{
          border:1px solid rgba(245,158,11,0.3);
          border-radius:9999px;padding:.4rem .85rem;
          color:#d4d4d4;font-size:0.85rem;font-weight:600;
          background:rgba(15,15,15,0.5);backdrop-filter:blur(8px);
        }

        .card{
          background:linear-gradient(135deg,rgba(15,15,15,0.9),rgba(20,20,20,0.8));
          border:1px solid rgba(245,158,11,0.15);
          border-radius:1.5rem;
          backdrop-filter:blur(20px);
          transition:all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .card:hover{
          border-color:rgba(245,158,11,0.3);
          transform:translateY(-6px);
        }

        .grad-hero{
          background:radial-gradient(ellipse at top,rgba(245,158,11,.12),transparent 60%),
                     radial-gradient(ellipse at bottom right,rgba(6,182,212,.08),transparent 50%),
                     radial-gradient(ellipse at bottom left,rgba(236,72,153,.06),transparent 50%);
        }

        .text-gradient{
          background:linear-gradient(135deg,var(--ib-gold),var(--ib-teal),var(--ib-accent));
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        .animate-fade-in{
          animation:fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn{
          from{opacity:0;transform:translateY(20px);}
          to{opacity:1;transform:translateY(0);}
        }

        .animate-slide-up{
          animation:slideUp 0.6s ease-out forwards;
        }
        @keyframes slideUp{
          from{opacity:0;transform:translateY(30px);}
          to{opacity:1;transform:translateY(0);}
        }

        .hover-lift{
          transition:transform 0.3s ease;
        }
        .hover-lift:hover{
          transform:translateY(-8px);
        }

        .shimmer{
          position:relative;
          overflow:hidden;
        }
        .shimmer::after{
          content:'';
          position:absolute;
          top:0;left:-100%;
          width:100%;height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent);
          animation:shimmer 3s infinite;
        }
        @keyframes shimmer{
          to{left:100%;}
        }
      `}</style>

      {/* --- NAV --- */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/80 border-b border-neutral-800/40 shadow-lg shadow-black/20">
        <div className="ib-container flex items-center justify-between h-20">
          <div className="flex items-center gap-4 animate-fade-in">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-cyan-500 shadow-lg shadow-amber-500/30 shimmer"/>
            <div>
              <div className="font-black tracking-tight text-xl text-gradient">IRON BROTHERS</div>
              <div className="hidden sm:block text-neutral-400 text-xs font-medium">Premium Coaching • Worldwide</div>
            </div>
          </div>
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a href="#programs" className="hover:text-amber-400 transition-colors duration-300">{t('nav').programs}</a>
            <a href="#coaches" className="hover:text-cyan-400 transition-colors duration-300">{t('nav').coaches}</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors duration-300">{t('nav').experience}</a>
            <a href="#results" className="hover:text-cyan-400 transition-colors duration-300">{t('nav').results}</a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors duration-300">{t('nav').plans}</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors duration-300">FAQ</a>
            <button
              onClick={()=>setLang(lang==='en'?'pt':'en')}
              className="tag hover:text-white hover:border-amber-400 transition-all duration-300"
            >
              {lang==='en'?'🇧🇷 PT':'🇬🇧 EN'}
            </button>
            <a href="#apply" className="btn btn-gold shimmer">{t('cta_primary')}</a>
          </nav>
          {/* Mobile trigger */}
          <button
            aria-label="Menu"
            onClick={()=>setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-xl border border-neutral-700 text-neutral-200 hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300"
          >
            <span className="text-xl font-bold">{open ? '✕' : '☰'}</span>
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-neutral-800/50 bg-neutral-950/95 backdrop-blur-xl animate-slide-up">
            <div className="ib-container py-6 grid gap-3 text-sm font-medium">
              {[
                ['Programas','#programs'],['Treinadores','#coaches'],['Experiência','#experience'],['Resultados','#results'],['Planos','#pricing'],['FAQ','#faq']
              ].map(([label,href])=> (
                <a
                  key={href}
                  href={href}
                  onClick={()=>setOpen(false)}
                  className="py-3 px-4 text-neutral-300 hover:text-amber-400 hover:bg-neutral-900/50 rounded-xl border border-transparent hover:border-neutral-800 transition-all duration-300"
                >
                  {label}
                </a>
              ))}
              <a href="#apply" onClick={()=>setOpen(false)} className="btn btn-gold mt-3 w-full justify-center">Começar Agora</a>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO --- */}
      <section className="relative overflow-hidden grad-hero py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent opacity-40"/>

        <div className="ib-container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <span className="tag w-max shimmer">{t('tagline')}</span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              {t('hero_a')}
              <span className="text-gradient">{t('hero_b')}</span>
              {t('hero_c')}
              <span className="text-gradient">{t('hero_d')}</span>
              {t('hero_e')}
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl">
              {t('hero_p')}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="btn btn-gold shimmer text-lg px-8 py-4">
                {t('cta_primary')}
              </a>
              <a href="#trust" className="btn btn-outline text-lg px-8 py-4">
                {t('cta_secondary')}
              </a>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <span className="tag">Instagram</span>
              <a
                href="https://www.instagram.com/iron.brothersfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-300"
              >
                @iron.brothersfitness
              </a>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-6 pt-6 max-w-lg">
              <div className="text-center space-y-1">
                <div className="text-4xl md:text-5xl font-black text-gradient">127+</div>
                <div className="text-xs md:text-sm text-neutral-400 font-medium">Transformações</div>
              </div>
              <div className="text-center space-y-1 border-l border-r border-neutral-800">
                <div className="text-4xl md:text-5xl font-black text-gradient">12</div>
                <div className="text-xs md:text-sm text-neutral-400 font-medium">Anos de Experiência</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-4xl md:text-5xl font-black text-gradient">5.0★</div>
                <div className="text-xs md:text-sm text-neutral-400 font-medium">Avaliação Média</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative glow-card rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=90"
                alt="Iron Brothers Coaching"
                className="aspect-[3/4] w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"/>
            </div>

            {/* Floating Card */}
            <div className="hidden lg:block absolute -bottom-8 -left-8 max-w-xs">
              <div className="card p-6 space-y-2 glow-card">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>
                  <div className="font-bold text-white">Acompanhamento Semanal</div>
                </div>
                <p className="text-sm text-neutral-400">
                  Ajustes táticos no plano + WhatsApp 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST / STATS --- */}
      <section id="trust" className="py-16 md:py-20 border-y border-neutral-800/40 bg-neutral-900/30 backdrop-blur-sm">
        <div className="ib-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {kpi:'15K+',label:'Treinos Entregues',icon:'💪'},
              {kpi:'95%',label:'Taxa de Sucesso',icon:'🎯'},
              {kpi:'3',label:'Idiomas (EN/PT/ES)',icon:'🌍'},
              {kpi:'100%',label:'Planos Personalizados',icon:'⚡'}
            ].map((i,idx)=> (
              <div
                key={i.label}
                className="card p-6 md:p-8 text-center hover-lift glow-card"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-4xl mb-3">{i.icon}</div>
                <div className="text-4xl md:text-5xl font-black text-gradient mb-2">{i.kpi}</div>
                <div className="text-neutral-400 text-sm md:text-base font-medium">{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"/>

        <div className="ib-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
              O que você <span className="text-gradient">recebe</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              Estrutura pensada para conversão e resultados: clareza no valor, prova social forte e chamada única para ação
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {icon:'📊',title:'Treino por Fases',desc:'Blocos periodizados com progressão comprovada e ajustes semanais.'},
              {icon:'🥗',title:'Nutrição Simples',desc:'Alvos práticos e macros flexíveis, sem dietas extremas ou restrições.'},
              {icon:'📈',title:'Check-ins Semanais',desc:'Ajustes precisos com base em dados reais e feedback contínuo.'},
              {icon:'🎯',title:'Técnica & Segurança',desc:'Cues de execução profissional e estratégias de prevenção de lesões.'},
              {icon:'🧠',title:'Habits & Mindset',desc:'Sistemas de consistência e hábitos sustentáveis de longo prazo.'},
              {icon:'💬',title:'Suporte 24/7',desc:'WhatsApp direto com o coach para dúvidas e ajustes imediatos.'},
            ].map((f,idx)=> (
              <div
                key={f.title}
                className="card p-8 hover-lift glow-card group"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">{f.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE / EXPERTISE --- */}
      <section id="experience" className="py-14 bg-neutral-950/60 border-y border-neutral-800/60">
        <div className="ib-container grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-black">Experiência & Expertise</h2>
            <p className="text-neutral-300 mt-2">Metodologia baseada em periodização, biomecânica aplicada e hábitos sustentáveis.</p>
          </div>
          <div className="card p-6">
            <div className="text-[var(--ib-gold)] font-semibold">Resultados Consistentes</div>
            <p className="text-neutral-300 mt-2">Mais de 127 transformações orientadas por dados: progressões semanais, técnica segura e rotina realista.</p>
          </div>
          <div className="card p-6">
            <div className="text-[var(--ib-teal)] font-semibold">Multidisciplinar</div>
            <p className="text-neutral-300 mt-2">Força, hipertrofia, recomposição e condicionamento — guiados por experiência prática em grandes academias e coaching online.</p>
          </div>
        </div>
      </section>

      {/* --- PROGRAMS --- */}
      <section id="programs" className="py-14 bg-neutral-950/50">
        <div className="ib-container">
          <h2 className="text-3xl md:text-4xl font-black">Programas Iron Brothers</h2>
          <p className="text-neutral-300 mt-2">Escolha o foco — nós personalizamos o caminho.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {title:'Body Recomp',points:['Hipertrofia + perda de gordura','Treino 4–5x/sem','Macros e revisão semanal']},
              {title:'Fat Loss Elite',points:['Déficit controlado','Cardio estratégico','Hábitos anti-recaída']},
              {title:'Strength & Power',points:['Progressão 5–8 reps','Ênfase em compostos','Técnica e periodização']},
            ].map((p)=> (
              <div key={p.title} className="card p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold">{p.title}</h3>
                  <span className="tag">Plano sob medida</span>
                </div>
                <ul className="mt-4 space-y-2 text-neutral-300">
                  {p.points.map((pt)=> (<li key={pt} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[var(--ib-teal)]"/> {pt}</li>))}
                </ul>
                <a href="#apply" className="btn btn-gold mt-6 w-full justify-center">Quero este plano</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COACHES --- */}
      <section id="coaches" className="py-16">
        <div className="ib-container">
          <h2 className="text-3xl md:text-4xl font-black">Treinadores</h2>
          <p className="text-neutral-300 mt-2">Coaching próximo, humano e direto ao ponto.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {[{
              name:'Andre Garcia', role:'Head Coach • Iron Brothers', bullets:['Especialista em hipertrofia e recomposição','Gestão de equipes e operação de academia','Coaching em EN/PT/ES'],
            },{
              name:'Lucas Gabriel', role:'Coach • Strength & Conditioning', bullets:['Força e técnica em compostos','Periodização simples e progressão confiável','Suporte e accountability prática'],
            }].map((c)=> (
              <div key={c.name} className="card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold">{c.name}</h3>
                    <div className="text-neutral-400 text-sm">{c.role}</div>
                  </div>
                  <span className="tag">Online & Presencial</span>
                </div>
                <div className="aspect-[16/9] mt-4 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center text-neutral-500">Foto / Vídeo do coach</div>
                <ul className="mt-4 space-y-2 text-neutral-300">
                  {c.bullets.map(b=> (<li key={b} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[var(--ib-teal)]"/> {b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESULTS / TRANSFORMATIONS --- */}
      <section id="results" className="py-16">
        <div className="ib-container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">Transformações Reais</h2>
              <p className="text-neutral-300 mt-2">Prova social forte aumenta credibilidade e conversão.</p>
            </div>
            <a href="#apply" className="hidden md:inline btn btn-outline">Ver mais resultados</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[1,2,3].map((i)=> (
              <div key={i} className="card overflow-hidden">
                <img
                  src={`https://source.unsplash.com/800x1000/?before,after,fitness&sig=${i}`}
                  className="aspect-[4/5] w-full object-cover"
                  alt={`Before/After #${i}`}
                />
                <div className="p-5">
                  <div className="text-sm text-neutral-400">-12kg • 14 {lang==='en'?'weeks':'semanas'}</div>
                  <blockquote className="mt-2 text-neutral-200">“Coaching pessoal de verdade. A disciplina virou resultado.”</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-16 bg-neutral-950/60 border-y border-neutral-800/60">
        <div className="ib-container">
          <h2 className="text-3xl md:text-4xl font-black">Planos de Online Coaching</h2>
          <p className="text-neutral-300 mt-2">Escolha o acompanhamento ideal. Sem contratos longos. Cancelamento fácil.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {name:'Online Starter',price:'£119/mês',features:['Treino personalizado','Guia de nutrição e macros base','Check-in semanal por formulário','Ajustes mensais']},
              {name:'Online Pro',price:'£159/mês',badge:'Mais popular',features:['Tudo do Starter','Macros personalizados com ajustes semanais','WhatsApp 24/7','Vídeo-feedback 1x/mês']},
              {name:'Online Elite',price:'£249/mês',features:['Tudo do Pro','Vídeo-análise de técnica 2x/mês','Plano trimestral com mesociclos','Consultoria 1:1 mensal (30–45min)']},
            ].map((t)=> (
              <div key={t.name} className={`card p-6 ${t.badge ? 'ring-1 ring-[var(--ib-gold)]' : ''}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold">{t.name}</h3>
                  {t.badge && <span className="tag border-[var(--ib-gold)] text-[var(--ib-gold)]">{t.badge}</span>}
                </div>
                <div className="text-3xl font-black mt-2 text-white">{t.price}</div>
                <ul className="mt-4 space-y-2 text-neutral-300">
                  {t.features.map((f)=> (<li key={f} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[var(--ib-gold)]"/> {f}</li>))}
                </ul>
                <a href="#apply" className="btn btn-gold mt-6 w-full justify-center">Selecionar</a>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 mt-4">* Preços indicativos. Ajuste final após consultoria.</p>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-16">
        <div className="ib-container">
          <h2 className="text-3xl md:text-4xl font-black">O que nossos clientes dizem</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {quote:'“Em 12 semanas perdi 10kg e ganhei segurança na técnica. O suporte no WhatsApp fez toda a diferença.”',name:'Carla M.'},
              {quote:'“Plano simples de seguir e ajustes rápidos. Bati PRs no agachamento mantendo o déficit.”',name:'Rafael P.'},
              {quote:'“Nunca tive tanta consistência. O check-in semanal me manteve na linha sem paranoia.”',name:'Julia S.'},
            ].map((t)=> (
              <div key={t.name} className="card p-6">
                <div className="text-neutral-200">{t.quote}</div>
                <div className="text-neutral-400 text-sm mt-3">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section id="faq" className="py-16">
        <div className="ib-container">
          <h2 className="text-3xl md:text-4xl font-black">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {q:'Como funciona o coaching online?',a:'Plano de treino + nutrição no app, check-ins semanais e suporte direto no WhatsApp.'},
              {q:'Em quanto tempo vejo resultado?',a:'Muitos notam mudanças em 4–6 semanas e grandes transformações em 12+ com consistência.'},
              {q:'Posso treinar em casa?',a:'Sim. Adaptamos ao seu equipamento — de home gym a academia completa.'},
              {q:'E se tenho lesões?',a:'Ajustamos exercícios, volume e range. Foco em técnica segura e progressão.'},
            ].map((f)=> (
              <div key={f.q} className="card p-6">
                <div className="font-semibold text-white">{f.q}</div>
                <p className="text-neutral-300 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA APPLY --- */}
      <section id="apply" className="py-16 bg-neutral-950">
        <div className="ib-container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">Pronto para começar?</h2>
            <p className="text-neutral-300 mt-2">Preencha o formulário — respondemos em 24h. Alinhar objetivos, logística e kickoff.</p>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {['Resposta em 24h','Plano 100% personalizado','Sem compromisso na avaliação'].map((i)=> (
                <li key={i} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[var(--ib-teal)]"/> {i}</li>
              ))}
            </ul>
          </div>
          <form className="card p-6 glow grid gap-3">
            <div className="grid md:grid-cols-2 gap-3">
              <input placeholder={t('form').name} className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-[var(--ib-teal)]"/>
              <input placeholder={t('form').email} type="email" className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-[var(--ib-gold)]"/>
            </div>
            <input placeholder={t('form').whats} className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-[var(--ib-teal)]"/>
            <select className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-[var(--ib-gold)]">
              <option>{t('form').goal}</option>
              {t('form').goals.map(g=> (<option key={g}>{g}</option>))}
            </select>
            <textarea placeholder={t('form').history} rows={4} className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-[var(--ib-teal)]"/>
            <button className="btn btn-gold justify-center">{t('form').send}</button>
            <p className="text-xs text-neutral-500">Ao enviar, você concorda com nossa política de privacidade.</p>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-neutral-800/70">
        <div className="ib-container py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-black text-lg">IRON BROTHERS</div>
            <p className="text-neutral-400 mt-2">Coaching premium para resultados duradouros. Londres • Dublin • Online Worldwide.</p>
            <div className="mt-3 text-neutral-400 text-sm">Instagram: <a className="hover:text-white" target="_blank" href="https://www.instagram.com/iron.brothersfitness">@garciabuilder</a></div>
          </div>
          <div>
            <div className="text-neutral-300 font-semibold">{copy[lang].links}</div>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li><a href="#programs" className="hover:text-white">Programas</a></li>
              <li><a href="#coaches" className="hover:text-white">Treinadores</a></li>
              <li><a href="#experience" className="hover:text-white">Experiência</a></li>
              <li><a href="#results" className="hover:text-white">Resultados</a></li>
              <li><a href="#pricing" className="hover:text-white">Planos</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-neutral-300 font-semibold">{copy[lang].contact}</div>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li>ironbrothers2729@gmail.com</li>
              <li>@garciabuilder</li>
              <li>WhatsApp disponível após aplicação</li>
            </ul>
          </div>
          <div>
            <div className="text-neutral-300 font-semibold">Legal</div>
            <ul className="mt-2 space-y-2 text-neutral-400">
              <li>Privacidade</li>
              <li>Termos</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-neutral-500 text-xs pb-8">© {new Date().getFullYear()} Iron Brothers. All rights reserved.</div>
      </footer>
    </div>
  )
}
