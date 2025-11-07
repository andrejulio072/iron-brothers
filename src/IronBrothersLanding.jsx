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
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* --- Global Styles (tailwind utility-friendly) --- */}
      <style>{`
        :root{--ib-bg:#0b0b0b;--ib-card:#121212;--ib-soft:#1a1a1a;--ib-gold:#d6b462;--ib-gold-700:#b99344;--ib-teal:#00b3a4;--ib-teal-700:#029488}
        .ib-container{max-width:1180px;margin:0 auto;padding:0 1rem}
        .glow{box-shadow:0 0 0 1px rgba(214,180,98,.25),0 10px 30px rgba(2,148,136,.15)}
        .btn{display:inline-flex;align-items:center;gap:.5rem;border-radius:9999px;padding:.9rem 1.2rem;font-weight:700}
        .btn-gold{background:var(--ib-gold);color:#111}
        .btn-gold:hover{background:var(--ib-gold-700)}
        .btn-outline{border:1px solid #2a2a2a}
        .tag{border:1px solid #2a2a2a;border-radius:9999px;padding:.35rem .7rem;color:#c5c5c5}
        .card{background:var(--ib-card);border:1px solid #1f1f1f;border-radius:1.25rem}
        .grad{background:linear-gradient(120deg,rgba(214,180,98,.2),rgba(0,179,164,.16) 40%,rgba(214,180,98,.08) 90%)}
        .stroke{border-image:linear-gradient(90deg,rgba(214,180,98,.7),rgba(2,148,136,.6)) 1}
      `}</style>

      {/* --- NAV --- */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/80 border-b border-neutral-800/60">
        <div className="ib-container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[var(--ib-gold)] to-[var(--ib-teal)]"/>
            <div className="font-black tracking-tight text-lg">IRON BROTHERS</div>
            <span className="hidden md:inline text-neutral-400 text-sm">Personal Training • Online Coaching</span>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#programs" className="hover:text-white">{t('nav').programs}</a>
            <a href="#coaches" className="hover:text-white">{t('nav').coaches}</a>
            <a href="#experience" className="hover:text-white">{t('nav').experience}</a>
            <a href="#results" className="hover:text-white">{t('nav').results}</a>
            <a href="#pricing" className="hover:text-white">{t('nav').plans}</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <button onClick={()=>setLang(lang==='en'?'pt':'en')} className="tag hover:text-white">{lang==='en'?'PT/BR':'EN'}</button>
            <a href="#apply" className="btn btn-gold">{t('cta_primary')}</a>
          </nav>
          {/* Mobile trigger */}
          <button aria-label="Menu" onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-700 text-neutral-200">
            <span className="i">{open ? '✕' : '☰'}</span>
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950">
            <div className="ib-container py-3 grid gap-2 text-sm">
              {[
                ['Programas','#programs'],['Treinadores','#coaches'],['Experiência','#experience'],['Resultados','#results'],['Planos','#pricing'],['FAQ','#faq']
              ].map(([label,href])=> (
                <a key={href} href={href} onClick={()=>setOpen(false)} className="py-2 text-neutral-300 hover:text-white border-b border-neutral-900/60">{label}</a>
              ))}
              <a href="#apply" onClick={()=>setOpen(false)} className="btn btn-gold mt-2 w-full justify-center">Começar Agora</a>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO --- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grad opacity-40"/>
        <div className="ib-container grid md:grid-cols-2 gap-10 pt-14 pb-16">
          <div className="flex flex-col justify-center">
            <span className="tag w-max mb-4">{t('tagline')}</span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">{t('hero_a')}<span className="text-[var(--ib-gold)]">{t('hero_b')}</span>{t('hero_c')}<span className="text-[var(--ib-teal)]">{t('hero_d')}</span>{t('hero_e')}</h1>
            <p className="mt-4 text-neutral-300 text-lg">{t('hero_p')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#apply" className="btn btn-gold">{t('cta_primary')}</a>
              <a href="#trust" className="btn btn-outline">{t('cta_secondary')}</a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-neutral-400">
              <span className="tag">Instagram</span>
              <a href="https://www.instagram.com/garciabuilder" target="_blank" className="hover:text-white">@garciabuilder</a>
            </div>
            <div className="mt-6 grid grid-cols-3 max-w-md text-center">
              <div>
                <div className="text-2xl font-extrabold">127+</div>
                <div className="text-xs text-neutral-400">Transformações</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">12</div>
                <div className="text-xs text-neutral-400">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">5.0★</div>
                <div className="text-xs text-neutral-400">Avaliação Média</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card glow p-0 overflow-hidden">
              <img src="https://source.unsplash.com/1200x1600/?gym,strength" alt="Iron Brothers hero" className="aspect-[3/4] w-full h-auto object-cover"/>
            </div>
            <div className="absolute -bottom-5 -left-6 hidden md:block">
              <div className="card px-4 py-3 text-sm border border-neutral-700/70">
                <div className="font-semibold">Acompanhamento Semanal</div>
                <div className="text-neutral-400">Ajustes táticos no plano + WhatsApp 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST / STATS --- */}
      <section id="trust" className="py-10 border-y border-neutral-800/70 bg-neutral-950/70">
        <div className="ib-container grid md:grid-cols-4 gap-6 text-center">
          {[
            {kpi:'15K+',label:'Treinos Entregues'},
            {kpi:'95%',label:'Taxa de Sucesso'},
            {kpi:'3',label:'Idiomas (EN/PT/ES)'},
            {kpi:'100%',label:'Planos Personalizados'}
          ].map((i)=> (
            <div key={i.label} className="card py-6">
              <div className="text-3xl font-black text-white">{i.kpi}</div>
              <div className="text-neutral-400 text-sm mt-1">{i.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-16">
        <div className="ib-container">
          <h2 className="text-3xl md:text-4xl font-black">O que você recebe</h2>
          <p className="text-neutral-300 mt-2 max-w-2xl">Estrutura pensada para conversão e resultados: clareza no valor, prova social forte e chamada única para ação — princípios consagrados de páginas que mais convertem.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {title:'Treino por Fases',desc:'Blocos periodizados com progressão comprovada.'},
              {title:'Nutrição Simples',desc:'Alvos práticos, sem dietas extremas.'},
              {title:'Check-ins Semanais',desc:'Ajustes com base em dados reais.'},
              {title:'Técnica & Segurança',desc:'Cues de execução e prevenção de lesões.'},
              {title:'Habits & Mindset',desc:'Sistemas que mantêm consistência.'},
              {title:'Suporte 24/7',desc:'WhatsApp direto com o coach.'},
            ].map((f)=> (
              <div key={f.title} className="card p-6 hover:shadow-xl hover:shadow-[rgba(2,148,136,.15)] transition-shadow">
                <div className="text-[var(--ib-gold)] font-semibold">{f.title}</div>
                <p className="text-neutral-300 mt-2">{f.desc}</p>
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
