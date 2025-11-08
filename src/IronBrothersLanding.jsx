import React, { useMemo, useState } from 'react';

const navItems = [
	{ id: 'programs', label: { en: 'Programs', pt: 'Programas' } },
	{ id: 'coaches', label: { en: 'Coaches', pt: 'Treinadores' } },
	{ id: 'results', label: { en: 'Results', pt: 'Resultados' } },
	{ id: 'pricing', label: { en: 'Pricing', pt: 'Planos' } },
	{ id: 'testimonials', label: { en: 'Testimonials', pt: 'Depoimentos' } },
	{ id: 'shop', label: { en: 'Shop', pt: 'Loja' } },
	{ id: 'schedule', label: { en: 'Schedule', pt: 'Agenda' } },
	{ id: 'faq', label: { en: 'FAQ', pt: 'Perguntas' } }
];

const heroCopy = {
	en: {
		title: 'High-performance coaching for driven leaders and hybrid athletes.',
		subtitle:
			'Bespoke protocols empower founders, executives, and competitive athletes to drop 10kg in 12 weeks while stacking measurable strength, endurance, and resilience.',
		highlights: [
			'Adaptive periodization that flexes with board meetings, travel, and competition calendars',
			'Daily accountability with strategist check-ins, biofeedback audits, and recovery architecture',
			'In-person intensives in São Paulo and Dublin paired with remote performance labs'
		],
		primaryCta: 'Start Your Application',
		secondaryCta: 'Book a 15-Minute Call'
	},
	pt: {
		title: 'Coaching de alta performance para líderes e atletas híbridos.',
		subtitle:
			'Protocolos sob medida para fundadores, executivos e atletas competitivos perderem 10kg em 12 semanas enquanto elevam força, endurance e resiliência mensuráveis.',
		highlights: [
			'Periodização adaptativa que respeita reuniões, viagens e calendário de competições',
			'Accountability diária com check-ins do estrategista, auditorias de biofeedback e arquitetura de recuperação',
			'Imersões presenciais em São Paulo e Dublin combinadas com laboratórios de performance remotos'
		],
		primaryCta: 'Iniciar Aplicação',
		secondaryCta: 'Agende uma Call de 15 Minutos'
	}
};

const metrics = [
	{ value: '350+', label: { en: 'Athletes coached worldwide', pt: 'Atletas acompanhados globalmente' } },
	{ value: '22', label: { en: 'National titles supported', pt: 'Títulos nacionais apoiados' } },
	{ value: '4.9/5', label: { en: 'Client experience rating', pt: 'Avaliação média dos clientes' } },
	{ value: '12 yrs', label: { en: 'High-performance expertise', pt: 'Experiência em alta performance' } }
];

const heroImages = [
	{
		src: '/images/hero/kettlebell-training.jpg',
		fallback: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=720&q=80',
		alt: 'Athlete performing kettlebell swings inside an industrial gym',
		credit: 'Photo by Danielle Cerullo on Unsplash'
	},
	{
		src: '/images/hero/barbell-coaching.jpg',
		fallback: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=720&q=80',
		alt: 'Coach guiding athlete through barbell training plan',
		credit: 'Photo by Victor Freitas on Unsplash'
	},
	{
		src: '/images/hero/runner-stadium.jpg',
		fallback: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=720&q=80',
		alt: 'Runner training at dusk in a modern stadium',
		credit: 'Photo by Jonathan Borba on Unsplash'
	}
];

const trustBadges = [
	{
		name: { en: 'Cross-training affiliates', pt: 'Afiliados de Cross-training' },
		detail: {
			en: 'Programming partner to leading boxes in Brazil, US, and Europe.',
			pt: 'Parceiro de programação para boxes líderes no Brasil, EUA e Europa.'
		}
	},
	{
		name: { en: 'National athletes', pt: 'Atletas nacionais' },
		detail: {
			en: 'Preparation for elite qualifiers across functional fitness, triathlon, and jiu-jitsu.',
			pt: 'Preparação para seletivas de elite em fitness funcional, triathlon e jiu-jitsu.'
		}
	},
	{
		name: { en: 'Corporate leaders', pt: 'Líderes corporativos' },
		detail: {
			en: 'Performance systems customized for high-demand executive schedules.',
			pt: 'Sistemas de performance adaptados a agendas executivas de alta demanda.'
		}
	}
];

const programs = [
	{
		id: 'hybrid',
		name: { en: 'Hybrid Performance Blueprint', pt: 'Blueprint de Performance Híbrida' },
		description: {
			en: 'Personalized training and strategic coaching for hybrid athletes balancing strength, endurance, and lifestyle demands.',
			pt: 'Treinamento personalizado e coaching estratégico para atletas híbridos que equilibram força, endurance e rotina intensa.'
		},
		features: [
			{
				en: 'Weekly 1:1 strategy lab and adaptive periodization',
				pt: 'Sessão semanal de estratégia 1:1 e periodização adaptativa'
			},
			{
				en: 'Video breakdown with biomechanics annotations',
				pt: 'Análise em vídeo com anotações de biomecânica'
			},
			{
				en: 'Recovery, sleep, and stress dashboards reviewed weekly',
				pt: 'Painéis de recuperação, sono e estresse revisados semanalmente'
			}
		]
	},
	{
		id: 'elite',
		name: { en: 'Elite Podium Prep', pt: 'Preparação Elite para Pódio' },
		description: {
			en: 'High-touch season design for competitive athletes targeting qualifiers and championship podiums.',
			pt: 'Planejamento de temporada premium para atletas rumo a seletivas e pódios de campeonato.'
		},
		features: [
			{
				en: 'Competition simulations and quarterly in-person intensives',
				pt: 'Simulações de competição e imersões presenciais trimestrais'
			},
			{
				en: 'Integrated sports nutrition and supplementation oversight',
				pt: 'Supervisão integrada de nutrição esportiva e suplementação'
			},
			{
				en: 'Dedicated performance team with data analyst and recovery specialist',
				pt: 'Equipe dedicada com analista de dados e especialista em recuperação'
			}
		]
	},
	{
		id: 'executive',
		name: { en: 'Executive Vitality Lab', pt: 'Laboratório de Vitalidade Executiva' },
		description: {
			en: 'Sustainable high-performance systems for entrepreneurs and executives who refuse to trade health for growth.',
			pt: 'Sistemas de alta performance sustentáveis para empreendedores e executivos que não abrem mão da saúde.'
		},
		features: [
			{
				en: 'Time-compressed training built around travel cadence',
				pt: 'Treinos otimizados conforme ritmo de viagens'
			},
			{
				en: 'Concierge habit architecture and accountability touchpoints',
				pt: 'Arquitetura de hábitos com concierge e checkpoints de responsabilidade'
			},
			{
				en: 'Bi-annual labs and deep health diagnostics',
				pt: 'Exames semestrais e diagnósticos completos de saúde'
			}
		]
	}
];

const coaches = [
	{
		name: 'Andre Garcia',
		role: { en: 'Hybrid Performance Architect', pt: 'Arquiteto de Performance Híbrida' },
		bio: {
			en: 'Founder of Garcia Builder and co-creator of Iron Brothers methodology. Andre engineers bespoke training and recovery ecosystems for high-performing executives and athletes who demand measurable outcomes without compromising their careers.',
			pt: 'Fundador da Garcia Builder e cocriador da metodologia Iron Brothers. Andre projeta ecossistemas de treino e recuperação sob medida para executivos e atletas de alto nível que buscam resultados mensuráveis sem sacrificar suas carreiras.'
		},
		specialties: {
			en: ['Executive body recomposition', 'Hybrid strength & conditioning periodization', 'Performance leadership coaching'],
			pt: ['Recomposição corporal para executivos', 'Periodização híbrida de força e condicionamento', 'Coaching de liderança em performance']
		},
		link: 'https://www.garciabuilder.fitness',
		linkLabel: { en: 'Visit Garcia Builder', pt: 'Visitar Garcia Builder' }
	},
	{
		name: 'Lucas Gabriel',
		role: { en: 'Metabolic Performance Coach', pt: 'Coach de Performance Metabólica' },
		bio: {
			en: 'Lucas leads metabolic diagnostics and on-the-ground intensives. He blends sports science with practical accountability routines that keep founders and athletes consistent during demanding seasons.',
			pt: 'Lucas lidera diagnósticos metabólicos e imersões presenciais. Ele combina ciência do esporte com rotinas práticas de accountability que mantêm fundadores e atletas consistentes em temporadas exigentes.'
		},
		specialties: {
			en: ['Metabolic testing & nutrition periodization', 'Competition prep camps in São Paulo and Dublin', 'Habit architecture for busy travel schedules'],
			pt: ['Testes metabólicos e periodização nutricional', 'Camps de preparação em São Paulo e Dublin', 'Arquitetura de hábitos para agendas intensas de viagens']
		}
	},
	{
		name: 'Specialist Collective',
		role: { en: 'Medical & recovery partners', pt: 'Rede médica e de recuperação' },
		bio: {
			en: 'A curated network of physiotherapists, sports physicians, and mindset coaches who plug into client roadmaps as needed for diagnostics, rehab, and high-stakes competition phases.',
			pt: 'Rede selecionada de fisioterapeutas, médicos do esporte e coaches de mindset que entram nos planos dos clientes conforme necessário para diagnósticos, reabilitação e fases de competição de alto nível.'
		},
		specialties: {
			en: ['Force-plate and HRV analytics', 'Integrated recovery protocols', 'Mindset performance labs'],
			pt: ['Análises de plataforma de força e HRV', 'Protocolos de recuperação integrados', 'Labs de performance mental']
		}
	}
];

const results = [
	{
		stat: '92%',
		label: { en: 'Clients hitting PR milestones every quarter', pt: 'Clientes atingindo recordes a cada trimestre' }
	},
	{
		stat: '38%',
		label: { en: 'Average increase in work capacity within 24 weeks', pt: 'Aumento médio de 38% na capacidade de trabalho em 24 semanas' }
	},
	{
		stat: '3.4x',
		label: { en: 'Return on energy reported by executive clients', pt: 'Retorno de energia relatado por executivos' }
	}
];

const pricingTiers = [
	{
		id: 'ascend',
		name: { en: 'Ascend', pt: 'Ascender' },
		price: { en: '$349 / month', pt: 'R$1.890 / mês' },
		description: {
			en: 'Foundational hybrid coaching for emerging athletes ready to level up with precision.',
			pt: 'Coaching híbrido fundamental para atletas em ascensão buscando precisão.'
		},
		features: [
			{
				en: 'Individual program with bi-weekly adjustments',
				pt: 'Programa individual com ajustes quinzenais'
			},
			{
				en: 'Monthly performance review call',
				pt: 'Revisão mensal de performance'
			},
			{
				en: 'Access to recovery and mobility library',
				pt: 'Acesso à biblioteca de recuperação e mobilidade'
			}
		]
	},
	{
		id: 'surge',
		name: { en: 'Surge', pt: 'Impulso' },
		price: { en: '$549 / month', pt: 'R$2.890 / mês' },
		description: {
			en: 'High-touch coaching for driven competitors integrating strength, skill, and endurance cycles.',
			pt: 'Coaching de alto contato para competidores integrando ciclos de força, habilidade e endurance.'
		},
		features: [
			{
				en: 'Weekly tactical sync with strategist',
				pt: 'Alinhamento tático semanal com estrategista'
			},
			{
				en: 'Comprehensive nutrition periodization',
				pt: 'Periodização nutricional completa'
			},
			{
				en: 'Unlimited technique reviews with 48-hour feedback',
				pt: 'Revisões técnicas ilimitadas com feedback em 48h'
			}
		]
	},
	{
		id: 'apex',
		name: { en: 'Apex', pt: 'Ápice' },
		price: { en: 'Apply for pricing', pt: 'Sob consulta' },
		description: {
			en: 'Invitation-only integrated performance department for podium-bound teams and executives.',
			pt: 'Departamento de performance integrado sob convite para equipes e executivos rumo ao pódio.'
		},
		features: [
			{
				en: 'Dedicated multidisciplinary staff and concierge support',
				pt: 'Equipe multidisciplinar dedicada e suporte concierge'
			},
			{
				en: 'Quarterly in-person camps and labs',
				pt: 'Camps e exames presenciais trimestrais'
			},
			{
				en: 'Custom tech stack integration and reporting',
				pt: 'Integração de tecnologia personalizada e relatórios exclusivos'
			}
		]
	}
];

const testimonials = [
	{
		name: 'Marina Oliveira',
		role: { en: 'Functional fitness athlete', pt: 'Atleta de fitness funcional' },
		quote: {
			en: 'The hybrid systems finally connected my strength, engine, and mindset. I qualified for my first national final with energy to spare.',
			pt: 'O sistema híbrido finalmente alinhou minha força, meu engine e minha mentalidade. Classifiquei para minha primeira final nacional com energia de sobra.'
		}
	},
	{
		name: 'Gabriel Santos',
		role: { en: 'Tech founder', pt: 'Fundador de startup' },
		quote: {
			en: 'Iron Brothers designed training that respected my travel schedule while boosting resilience. My team noticed the difference before I did.',
			pt: 'A Iron Brothers criou treinos que respeitam minha agenda de viagens e elevaram minha resiliência. Minha equipe percebeu a diferença antes de mim.'
		}
	},
	{
		name: 'Sarah Price',
		role: { en: 'Masters triathlete', pt: 'Triatleta masters' },
		quote: {
			en: 'Data reviews plus human coaching made every block intentional. I smashed my half Ironman time by 19 minutes.',
			pt: 'As análises de dados somadas ao coaching humano tornaram cada bloco intencional. Reduzi meu tempo no meio Ironman em 19 minutos.'
		}
	}
];

const faqs = [
	{
		question: { en: 'Who is the ideal Iron Brothers athlete?', pt: 'Quem é o atleta ideal para a Iron Brothers?' },
		answer: {
			en: 'We work best with athletes and leaders who already have training history, crave accountability, and want an expert team orchestrating their season.',
			pt: 'Trabalhamos melhor com atletas e líderes que já possuem histórico de treinos, buscam responsabilidade e desejam uma equipe especialista orquestrando a temporada.'
		}
	},
	{
		question: { en: 'Do you offer on-site sessions?', pt: 'Vocês oferecem sessões presenciais?' },
		answer: {
			en: 'Yes. We are remote-first but host quarterly intensives in São Paulo and Miami, and we travel for key competitions on the Apex tier.',
			pt: 'Sim. Somos remotos por padrão, mas promovemos imersões trimestrais em São Paulo e Miami e acompanhamos competições chave no plano Ápice.'
		}
	},
	{
		question: { en: 'What tools do you use?', pt: 'Quais ferramentas vocês utilizam?' },
		answer: {
			en: 'We integrate wearable data, force-plate assessments, HRV dashboards, and custom analytics to make decisions with precision.',
			pt: 'Integramos dados de wearables, testes de força, painéis de HRV e análises personalizadas para decisões com precisão.'
		}
	}
];

const scheduleCopy = {
	en: {
		title: 'Book your strategic discovery call',
		subtitle:
			'Lock in a 30-minute virtual session to map goals, availability, and the high-performance infrastructure you need. Use the Calendly link below to secure your slot.',
		bullets: [
			'Pre-call intake covering lifestyle, training age, and time constraints',
			'Collaborative roadmap outlining hybrid training phases and accountability cadence',
			'Clarity on which Iron Brothers program tier accelerates your goals'
		],
		note: 'Discovery calls are complimentary and commitment-free. Book now to secure priority slots.'
	},
	pt: {
		title: 'Agende sua call estratégica de descoberta',
		subtitle:
			'Reserve uma sessão virtual de 30 minutos para mapear objetivos, disponibilidade e a infraestrutura de alta performance que você precisa. Use o link Calendly abaixo para garantir sua vaga.',
		bullets: [
			'Pré-call cobrindo rotina, histórico de treinos e restrições de agenda',
			'Plano colaborativo destacando fases de treino híbrido e cadência de accountability',
			'Clareza sobre qual plano Iron Brothers acelera seus resultados'
		],
		note: 'As calls de descoberta são gratuitas e sem compromisso. Agende agora e garanta horários prioritários.'
	}
};

const leadMagnetCopy = {
	en: {
		headline: 'Get Your Free Performance Blueprint',
		description:
			'We will create a custom tactical roadmap based on your goals, availability, and training history. Share a few details below to unlock your personalized starter plan.',
		fields: {
			name: { label: 'Full name', placeholder: 'Andre Garcia' },
			email: { label: 'Email address', placeholder: 'andre@example.com' },
			goal: { label: 'Primary goal', placeholder: 'e.g., Drop 10kg while building strength' }
		},
		cta: 'Get My Blueprint',
		disclaimer: 'By submitting you agree to receive Iron Brothers insights. No spam. Unsubscribe any time.',
		successMessage: 'Blueprint sent! Check your inbox (and spam folder) for your personalized roadmap.'
	},
	pt: {
		headline: 'Receba Seu Blueprint de Performance Gratuito',
		description:
			'Criaremos um plano tático personalizado com base nos seus objetivos, disponibilidade e histórico de treinos. Compartilhe alguns detalhes abaixo para desbloquear seu plano inicial.',
		fields: {
			name: { label: 'Nome completo', placeholder: 'Andre Garcia' },
			email: { label: 'Endereço de e-mail', placeholder: 'andre@exemplo.com' },
			goal: { label: 'Objetivo principal', placeholder: 'ex: Perder 10kg enquanto ganho força' }
		},
		cta: 'Receber Meu Blueprint',
		disclaimer: 'Ao enviar você concorda em receber insights da Iron Brothers. Sem spam. Descadastre-se a qualquer momento.',
		successMessage: 'Blueprint enviado! Confira sua caixa de entrada (e spam) para seu plano personalizado.'
	}
};

const shopPreview = {
	en: {
		title: 'Iron Brothers Store (Coming Soon)',
		subtitle:
			'Curated gear, program bundles, and recovery essentials designed with the same high standards as our coaching experience. Integrated Shopify checkout launches soon.',
		items: [
			{ name: 'Hybrid Performance Starter Kit', detail: 'Mobility tools, premium straps, and programming companion workbook.' },
			{ name: 'Executive Fuel Bundle', detail: 'Clinically-backed supplements and nutrition frameworks for travel-heavy weeks.' },
			{ name: 'Signature Apparel Drop', detail: 'Limited-run technical wear co-created with Iron Brothers athletes.' }
		],
		note: 'Join the waitlist to receive early access and launch-day bonuses.'
	},
	pt: {
		title: 'Loja Iron Brothers (Em Breve)',
		subtitle:
			'Equipamentos selecionados, pacotes de programas e essenciais de recuperação com o mesmo nível de excelência do nosso coaching. Checkout via Shopify disponível em breve.',
		items: [
			{ name: 'Kit Performance Híbrida', detail: 'Ferramentas de mobilidade, straps premium e workbook de programação.' },
			{ name: 'Combo Energia Executiva', detail: 'Suplementos com respaldo clínico e frameworks nutricionais para semanas de viagem.' },
			{ name: 'Drop de Apparel Assinatura', detail: 'Vestuário técnico em tiragem limitada cocriado com atletas Iron Brothers.' }
		],
		note: 'Entre na lista de espera para receber acesso antecipado e bônus de lançamento.'
	}
};

const ctaCopy = {
	en: {
		headline: 'This is your call to lead the next season.',
		paragraph:
			'Apply now and we will audit your current training, recovery, and lifestyle map to design an actionable roadmap tailored to your goals.',
		primary: 'Start My Application',
		secondary: 'Download Overview Deck'
	},
	pt: {
		headline: 'Este é o chamado para liderar sua próxima temporada.',
		paragraph:
			'Envie sua aplicação e auditaremos seus treinos, recuperação e rotina para criar um plano prático alinhado aos seus objetivos.',
		primary: 'Começar Aplicação',
		secondary: 'Baixar Apresentação'
	}
};

const footerCopy = {
	en: {
		rights: '© Iron Brothers High Performance. All rights reserved.',
		links: [
			{ label: 'Privacy', href: '#privacy' },
			{ label: 'Terms', href: '#terms' },
			{ label: 'Careers', href: '#careers' }
		]
	},
	pt: {
		rights: '© Iron Brothers High Performance. Todos os direitos reservados.',
		links: [
			{ label: 'Privacidade', href: '#privacy' },
			{ label: 'Termos', href: '#terms' },
			{ label: 'Carreiras', href: '#careers' }
		]
	}
};

const styles = {
	page: {
		position: 'relative',
		minHeight: '100vh',
		fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
		background: 'radial-gradient(circle at top, #1f2a44, #0c111f)',
		color: '#f3f4f6',
		overflowX: 'hidden',
		paddingBottom: '96px'
	},
	backdrop: {
		position: 'fixed',
		inset: 0,
		background: 'radial-gradient(circle at 20% 20%, rgba(96, 165, 250, 0.15), transparent 55%), radial-gradient(circle at 80% 10%, rgba(248, 113, 113, 0.12), transparent 45%)',
		zIndex: 0,
		pointerEvents: 'none'
	},
	content: {
		position: 'relative',
		zIndex: 1,
		maxWidth: '1180px',
		margin: '0 auto',
		padding: '0 32px'
	},
	navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '32px 0'
	},
	navBrand: {
		fontSize: '20px',
		fontWeight: 700,
		letterSpacing: '0.08em',
		textTransform: 'uppercase'
	},
	navLinks: {
		display: 'flex',
		gap: '24px',
		listStyle: 'none',
		margin: 0
	},
	navLink: {
		fontSize: '15px',
		color: '#e0e7ff',
		textDecoration: 'none',
		fontWeight: 500
	},
	navActions: {
		display: 'flex',
		gap: '12px',
		alignItems: 'center'
	},
	toggleButton: {
		background: 'rgba(30, 41, 59, 0.6)',
		color: '#bfdbfe',
		border: '1px solid rgba(148, 163, 184, 0.3)',
		borderRadius: '999px',
		padding: '8px 18px',
		fontSize: '14px',
		cursor: 'pointer',
		backdropFilter: 'blur(6px)'
	},
	ctaButton: {
		background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
		color: '#0f172a',
		border: 'none',
		borderRadius: '999px',
		padding: '10px 24px',
		fontSize: '14px',
		fontWeight: 600,
		cursor: 'pointer'
	},
	hero: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
		gap: '32px',
		paddingBottom: '64px'
	},
	heroVisuals: {
		display: 'flex',
		flexDirection: 'column',
		gap: '24px'
	},
	imageStack: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gap: '16px'
	},
	imageCard: {
		position: 'relative',
		overflow: 'hidden',
		borderRadius: '18px',
		border: '1px solid rgba(148, 163, 184, 0.25)',
		boxShadow: '0 20px 45px rgba(9, 15, 29, 0.35)'
	},
	heroImage: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		display: 'block',
		filter: 'saturate(1.15) contrast(1.05)'
	},
	imageCredit: {
		position: 'absolute',
		bottom: '12px',
		left: '16px',
		padding: '6px 10px',
		borderRadius: '999px',
		background: 'rgba(15, 23, 42, 0.7)',
		color: 'rgba(226, 232, 240, 0.86)',
		fontSize: '11px',
		letterSpacing: '0.08em',
		textTransform: 'uppercase'
	},
	heroTitle: {
		fontSize: '52px',
		fontWeight: 700,
		lineHeight: 1.05,
		marginBottom: '24px',
		color: '#f8fafc'
	},
	heroSubtitle: {
		fontSize: '18px',
		color: 'rgba(226, 232, 240, 0.88)',
		marginBottom: '24px',
		maxWidth: '540px'
	},
	heroHighlights: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
		margin: 0,
		padding: 0,
		listStyle: 'none'
	},
	highlight: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: '12px',
		padding: '14px 18px',
		background: 'rgba(30, 41, 59, 0.55)',
		borderRadius: '14px',
		border: '1px solid rgba(148, 163, 184, 0.2)'
	},
	metricsGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
		gap: '24px',
		marginBottom: '64px'
	},
	metricPanel: {
		background: 'rgba(15, 23, 42, 0.55)',
		border: '1px solid rgba(148, 163, 184, 0.2)',
		borderRadius: '20px',
		padding: '24px',
		backdropFilter: 'blur(14px)'
	},
	metricCard: {
		background: 'rgba(15, 23, 42, 0.55)',
		border: '1px solid rgba(148, 163, 184, 0.2)',
		borderRadius: '18px',
		padding: '24px',
		textAlign: 'center'
	},
	metricValue: {
		fontSize: '32px',
		fontWeight: 700,
		color: '#bfdbfe'
	},
	section: {
		marginBottom: '80px'
	},
	sectionHeader: {
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		marginBottom: '32px'
	},
	sectionLabel: {
		fontSize: '13px',
		letterSpacing: '0.3em',
		textTransform: 'uppercase',
		color: 'rgba(148, 163, 184, 0.7)'
	},
	sectionTitle: {
		fontSize: '36px',
		fontWeight: 600,
		color: '#f8fafc'
	},
	sectionSubtitle: {
		fontSize: '17px',
		color: 'rgba(226, 232, 240, 0.8)',
		maxWidth: '620px'
	},
	cardGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
		gap: '24px'
	},
	splitSection: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
		gap: '28px',
		alignItems: 'flex-start'
	},
	glassCard: {
		background: 'rgba(15, 23, 42, 0.72)',
		border: '1px solid rgba(148, 163, 184, 0.25)',
		borderRadius: '20px',
		padding: '28px',
		boxShadow: '0 24px 48px rgba(8, 15, 33, 0.35)',
		backdropFilter: 'blur(12px)'
	},
	list: {
		listStyle: 'none',
		margin: 0,
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '12px'
	},
	bulletItem: {
		display: 'flex',
		gap: '10px',
		color: 'rgba(226, 232, 240, 0.9)'
	},
	muted: {
		color: 'rgba(148, 163, 184, 0.8)',
		fontSize: '15px'
	},
	resultsGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
		gap: '24px',
		marginTop: '32px'
	},
	resultCard: {
		background: 'rgba(30, 41, 59, 0.38)',
		borderRadius: '16px',
		border: '1px solid rgba(148, 163, 184, 0.2)',
		padding: '24px'
	},
	pricingCard: {
		background: 'rgba(15, 23, 42, 0.75)',
		border: '1px solid rgba(59, 130, 246, 0.35)',
		borderRadius: '22px',
		padding: '32px',
		boxShadow: '0 30px 60px rgba(14, 23, 42, 0.4)'
	},
	quote: {
		fontSize: '17px',
		color: 'rgba(226, 232, 240, 0.9)',
		lineHeight: 1.6,
		marginBottom: '18px'
	},
	faqItem: {
		borderBottom: '1px solid rgba(148, 163, 184, 0.2)',
		padding: '20px 0'
	},
	faqQuestion: {
		fontSize: '18px',
		fontWeight: 500,
		color: '#f8fafc',
		marginBottom: '8px'
	},
	ctaSection: {
		background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.2), rgba(129, 140, 248, 0.1))',
		border: '1px solid rgba(148, 163, 184, 0.25)',
		borderRadius: '26px',
		padding: '48px',
		boxShadow: '0 32px 60px rgba(12, 23, 48, 0.35)',
		backdropFilter: 'blur(14px)',
		textAlign: 'center'
	},
	ctaTitle: {
		fontSize: '32px',
		fontWeight: 600,
		marginBottom: '16px'
	},
	ctaParagraph: {
		fontSize: '17px',
		color: 'rgba(226, 232, 240, 0.85)',
		maxWidth: '580px',
		margin: '0 auto 28px auto'
	},
	ctaActions: {
		display: 'flex',
		justifyContent: 'center',
		gap: '16px',
		flexWrap: 'wrap'
	},
	secondaryButton: {
		background: 'rgba(15, 23, 42, 0.7)',
		color: '#e2e8f0',
		border: '1px solid rgba(148, 163, 184, 0.35)',
		borderRadius: '999px',
		padding: '12px 26px',
		fontSize: '14px',
		fontWeight: 500,
		cursor: 'pointer'
	},
	leadForm: {
		display: 'flex',
		flexDirection: 'column',
		gap: '12px',
		marginTop: '20px'
	},
	leadInput: {
		background: 'rgba(15, 23, 42, 0.7)',
		border: '1px solid rgba(148, 163, 184, 0.35)',
		borderRadius: '12px',
		padding: '12px 16px',
		color: '#f8fafc',
		fontSize: '14px'
	},
	leadDisclaimer: {
		color: 'rgba(148, 163, 184, 0.75)',
		fontSize: '12px',
		lineHeight: 1.5
	},
	note: {
		color: 'rgba(148, 163, 184, 0.85)',
		fontSize: '14px',
		marginTop: '18px',
		lineHeight: 1.6
	},
	footer: {
		marginTop: '80px',
		paddingTop: '32px',
		borderTop: '1px solid rgba(148, 163, 184, 0.2)',
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
		alignItems: 'center'
	},
	footerLinks: {
		display: 'flex',
		gap: '24px',
		listStyle: 'none',
		padding: 0,
		margin: 0,
		fontSize: '14px'
	}
};

export default function IronBrothersLanding() {
	const [language, setLanguage] = useState('en');
	const [formData, setFormData] = useState({ name: '', email: '', goal: '' });
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formError, setFormError] = useState('');

	const handleLeadFormSubmit = (event) => {
		event.preventDefault();
		setFormError('');

		// Basic validation
		if (!formData.name || !formData.email || !formData.goal) {
			setFormError(language === 'en' ? 'Please fill in all fields.' : 'Por favor, preencha todos os campos.');
			return;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			setFormError(language === 'en' ? 'Please enter a valid email address.' : 'Por favor, insira um endereço de e-mail válido.');
			return;
		}

		// TODO: Replace with actual CRM webhook (Formspree, Zapier, or custom endpoint)
		console.log('Lead capture:', formData);

		setFormSubmitted(true);
		setFormData({ name: '', email: '', goal: '' });

		// Reset success message after 5 seconds
		setTimeout(() => setFormSubmitted(false), 5000);
	};

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		setFormError('');
	};
	const hero = useMemo(() => heroCopy[language], [language]);
	const cta = useMemo(() => ctaCopy[language], [language]);
	const schedule = useMemo(() => scheduleCopy[language], [language]);
	const leadMagnet = useMemo(() => leadMagnetCopy[language], [language]);
	const shop = useMemo(() => shopPreview[language], [language]);
	const footer = useMemo(() => footerCopy[language], [language]);

	return (
		<div style={styles.page} lang={language === 'pt' ? 'pt-BR' : 'en-US'}>
			<div style={styles.backdrop} aria-hidden="true" />
			<div style={styles.content}>
				<nav style={styles.navbar} aria-label={language === 'en' ? 'Main navigation' : 'Navegação principal'}>
					<span style={styles.navBrand}>Iron Brothers</span>
					<ul style={styles.navLinks}>
						{navItems.map((item) => (
							<li key={item.id}>
								<a style={styles.navLink} href={`#${item.id}`}>
									{item.label[language]}
								</a>
							</li>
						))}
					</ul>
					<div style={styles.navActions}>
						<button
							type="button"
							style={styles.toggleButton}
							onClick={() => setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'))}
						>
							{language === 'en' ? 'Português' : 'English'}
						</button>
						<button type="button" style={styles.ctaButton}>
							{language === 'en' ? 'Apply Now' : 'Aplicar Agora'}
						</button>
					</div>
				</nav>

				<header style={styles.hero} id="hero">
					<div>
						<h1 style={styles.heroTitle}>{hero.title}</h1>
						<p style={styles.heroSubtitle}>{hero.subtitle}</p>
						<ul style={styles.heroHighlights}>
							{hero.highlights.map((highlight) => (
								<li key={highlight} style={styles.highlight}>
									<span style={{ fontWeight: 600, color: '#f8fafc' }}>•</span>
									<span style={{ color: 'rgba(226, 232, 240, 0.9)', fontSize: '15px' }}>{highlight}</span>
								</li>
							))}
						</ul>
						<div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
							<button type="button" style={styles.ctaButton}>
								{hero.primaryCta}
							</button>
							<button type="button" style={styles.secondaryButton}>
								{hero.secondaryCta}
							</button>
						</div>
					</div>
					<div style={styles.heroVisuals}>
						<div style={styles.imageStack}>
							{heroImages.map((image) => (
								<figure key={image.src} style={styles.imageCard}>
									<img
										src={image.src}
										alt={image.alt}
										style={styles.heroImage}
										loading="lazy"
										onError={(e) => {
											if (image.fallback && e.target.src !== image.fallback) {
												e.target.src = image.fallback;
											}
										}}
									/>
									<figcaption style={styles.imageCredit}>{image.credit}</figcaption>
								</figure>
							))}
						</div>
						<div style={styles.metricPanel}>
							<h2 style={{ ...styles.sectionTitle, fontSize: '20px', marginBottom: '16px' }}>
								{language === 'en' ? 'By the numbers' : 'Em números'}
							</h2>
							<div style={styles.metricsGrid}>
								{metrics.map((metric) => (
									<div key={metric.value} style={styles.metricCard}>
										<div style={styles.metricValue}>{metric.value}</div>
										<p style={styles.muted}>{metric.label[language]}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</header>

				<section style={styles.section} id="trust">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Trusted by' : 'Confiado por'}</span>
						<h2 style={styles.sectionTitle}>
							{language === 'en'
								? 'Performance partners across continents'
								: 'Parceiros de performance em vários continentes'}
						</h2>
						<p style={styles.sectionSubtitle}>
							{language === 'en'
								? 'We scale coaching systems for training facilities, professional athletes, and executive teams that demand measurable outcomes.'
								: 'Escalamos sistemas de coaching para centros de treinamento, atletas profissionais e equipes executivas que exigem resultados mensuráveis.'}
						</p>
					</div>
					<div style={styles.cardGrid}>
						{trustBadges.map((badge) => (
							<div key={badge.name.en} style={styles.glassCard}>
								<h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#e2e8f0' }}>
									{badge.name[language]}
								</h3>
								<p style={styles.muted}>{badge.detail[language]}</p>
							</div>
						))}
					</div>
				</section>

				<section style={styles.section} id="programs">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Programs' : 'Programas'}</span>
						<h2 style={styles.sectionTitle}>
							{language === 'en' ? 'Built-for-you systems to accelerate your season' : 'Sistemas sob medida para acelerar sua temporada'}
						</h2>
						<p style={styles.sectionSubtitle}>
							{language === 'en'
								? 'Every program merges precision training, human coaching, and tech-assisted insights for momentum you can feel.'
								: 'Cada programa combina treinamento preciso, coaching humano e insights assistidos por tecnologia para gerar progresso real.'}
						</p>
					</div>
					<div style={styles.cardGrid}>
						{programs.map((program) => (
							<article key={program.id} style={styles.glassCard}>
								<h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px', color: '#f8fafc' }}>
									{program.name[language]}
								</h3>
								<p style={{ ...styles.muted, marginBottom: '18px' }}>{program.description[language]}</p>
								<ul style={styles.list}>
									{program.features.map((feature) => (
										<li key={feature.en} style={{ display: 'flex', gap: '10px', color: 'rgba(226, 232, 240, 0.88)' }}>
											<span style={{ color: '#93c5fd' }}>▹</span>
											<span>{feature[language]}</span>
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				<section style={styles.section} id="coaches">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Coaches' : 'Treinadores'}</span>
						<h2 style={styles.sectionTitle}>
							{language === 'en' ? 'Your multidisciplinary performance unit' : 'Sua unidade multidisciplinar de performance'}
						</h2>
						<p style={styles.sectionSubtitle}>
							{language === 'en'
								? 'Season architects, technical specialists, and recovery strategists work in sync to engineer your next breakthrough.'
								: 'Arquitetos de temporada, especialistas técnicos e estrategistas de recuperação trabalham em conjunto para seu próximo grande avanço.'}
						</p>
					</div>
					<div style={styles.cardGrid}>
						{coaches.map((coach) => (
							<div key={coach.name} style={styles.glassCard}>
								<h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '6px', color: '#e2e8f0' }}>{coach.name}</h3>
								<p style={{ ...styles.muted, marginBottom: '14px' }}>{coach.role[language]}</p>
								<p style={styles.muted}>{coach.bio[language]}</p>
								{coach.specialties && (
									<ul style={{ ...styles.list, marginTop: '16px' }}>
										{coach.specialties[language].map((item) => (
											<li key={item} style={{ display: 'flex', gap: '10px', color: 'rgba(226, 232, 240, 0.88)' }}>
												<span style={{ color: '#38bdf8' }}>▹</span>
												<span>{item}</span>
											</li>
										))}
									</ul>
								)}
								{coach.link && (
									<a
										href={coach.link}
										target="_blank"
										rel="noopener noreferrer"
										style={{ ...styles.secondaryButton, marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
									>
										<span>{coach.linkLabel ? coach.linkLabel[language] : language === 'en' ? 'Learn more' : 'Saiba mais'}</span>
										<span aria-hidden="true">↗</span>
									</a>
								)}
							</div>
						))}
					</div>
				</section>

				<section style={styles.section} id="results">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Results' : 'Resultados'}</span>
						<h2 style={styles.sectionTitle}>
							{language === 'en' ? 'Outcomes that compound season after season' : 'Resultados que escalam temporada após temporada'}
						</h2>
						<p style={styles.sectionSubtitle}>
							{language === 'en'
								? 'Every block is tracked, reviewed, and iterated. The consistency builds wins in training, boardrooms, and on the field.'
								: 'Cada bloco é monitorado, revisado e ajustado. A consistência gera vitórias nos treinos, nos negócios e nas arenas.'}
						</p>
					</div>
					<div style={styles.resultsGrid}>
						{results.map((result) => (
							<div key={result.stat} style={styles.resultCard}>
								<div style={{ fontSize: '34px', fontWeight: 700, color: '#60a5fa', marginBottom: '12px' }}>{result.stat}</div>
								<p style={styles.muted}>{result.label[language]}</p>
							</div>
						))}
					</div>
				</section>

				<section style={styles.section} id="pricing">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Pricing' : 'Planos'}</span>
						<h2 style={styles.sectionTitle}>
							{language === 'en' ? 'Choose your lane and accelerate' : 'Escolha sua rota e acelere'}
						</h2>
						<p style={styles.sectionSubtitle}>
							{language === 'en'
								? 'Flexible tiers, dedicated experts, and integrated support so you stay focused on execution.'
								: 'Planos flexíveis, especialistas dedicados e suporte integrado para você focar na execução.'}
						</p>
					</div>
					<div style={styles.cardGrid}>
						{pricingTiers.map((tier) => (
							<article key={tier.id} style={styles.pricingCard}>
								<h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px', color: '#f8fafc' }}>{tier.name[language]}</h3>
								<div style={{ fontSize: '18px', fontWeight: 600, color: '#93c5fd', marginBottom: '12px' }}>{tier.price[language]}</div>
								<p style={{ ...styles.muted, marginBottom: '18px' }}>{tier.description[language]}</p>
								<ul style={styles.list}>
									{tier.features.map((feature) => (
										<li key={feature.en} style={{ display: 'flex', gap: '10px', color: 'rgba(226, 232, 240, 0.88)' }}>
											<span style={{ color: '#a855f7' }}>▹</span>
											<span>{feature[language]}</span>
										</li>
									))}
								</ul>
								<button type="button" style={{ ...styles.secondaryButton, marginTop: '24px', width: '100%' }}>
									{language === 'en' ? 'Apply for this tier' : 'Aplicar para este plano'}
								</button>
							</article>
						))}
					</div>
				</section>

				<section style={styles.section} id="testimonials">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Testimonials' : 'Depoimentos'}</span>
						<h2 style={styles.sectionTitle}>
							{language === 'en' ? 'Athletes and leaders building momentum' : 'Atletas e líderes construindo momentum'}
						</h2>
						<p style={styles.sectionSubtitle}>
							{language === 'en'
								? 'Stories from Iron Brothers clients who turned consistent execution into permanent advantage.'
								: 'Histórias de clientes Iron Brothers que transformaram execução consistente em vantagem permanente.'}
						</p>
					</div>
					<div style={styles.cardGrid}>
						{testimonials.map((testimonial) => (
							<article key={testimonial.name} style={styles.glassCard}>
								<p style={styles.quote}>“{testimonial.quote[language]}”</p>
								<p style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>{testimonial.name}</p>
								<p style={styles.muted}>{testimonial.role[language]}</p>
							</article>
						))}
					</div>
				</section>

				<section style={styles.section} id="shop">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Store' : 'Loja'}</span>
						<h2 style={styles.sectionTitle}>{shop.title}</h2>
						<p style={styles.sectionSubtitle}>{shop.subtitle}</p>
					</div>
					<div style={styles.cardGrid}>
						{shop.items.map((item) => (
							<article key={item.name} style={styles.glassCard}>
								<h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#f8fafc' }}>{item.name}</h3>
								<p style={styles.muted}>{item.detail}</p>
							</article>
						))}
					</div>
					<div style={{ marginTop: '28px', textAlign: 'center' }}>
						<button type="button" style={{ ...styles.ctaButton, padding: '12px 28px' }}>
							{language === 'en' ? 'Join the waitlist' : 'Entrar na lista de espera'}
						</button>
						<p style={{ ...styles.muted, marginTop: '12px' }}>{shop.note}</p>
					</div>
				</section>

				<section style={styles.section} id="schedule">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Schedule' : 'Agenda'}</span>
						<h2 style={styles.sectionTitle}>{schedule.title}</h2>
						<p style={styles.sectionSubtitle}>{schedule.subtitle}</p>
					</div>
					<div style={styles.splitSection}>
						<article style={styles.glassCard}>
							<h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '14px', color: '#f8fafc' }}>
								{language === 'en' ? 'What to expect' : 'O que esperar'}
							</h3>
							<ul style={styles.list}>
								{schedule.bullets.map((bullet) => (
									<li key={bullet} style={styles.bulletItem}>
										<span style={{ color: '#38bdf8' }}>▹</span>
										<span>{bullet}</span>
									</li>
								))}
							</ul>

							<div style={{ marginTop: '24px' }}>
								<a
									href="https://calendly.com/iron-brothers/discovery"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										...styles.ctaButton,
										padding: '12px 28px',
										display: 'inline-block',
										textDecoration: 'none'
									}}
								>
									{language === 'en' ? 'Book Your Discovery Call' : 'Agende sua Call de Descoberta'}
								</a>
								<p style={styles.note}>{schedule.note}</p>
							</div>
						</article>
						<article style={styles.glassCard}>
							<h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px', color: '#f8fafc' }}>{leadMagnet.headline}</h3>
							<p style={styles.muted}>{leadMagnet.description}</p>

							{formSubmitted ? (
								<div
									style={{
										padding: '18px',
										background: 'rgba(34, 197, 94, 0.15)',
										border: '1px solid rgba(34, 197, 94, 0.3)',
										borderRadius: '12px',
										marginTop: '18px'
									}}
								>
									<p style={{ color: '#86efac', fontWeight: 500 }}>{leadMagnet.successMessage}</p>
								</div>
							) : (
								<form style={styles.leadForm} onSubmit={handleLeadFormSubmit}>
									<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
										<div>
											<label htmlFor="lead-name" style={{ display: 'block', marginBottom: '6px', fontSize: '14px', color: '#cbd5e1' }}>
												{leadMagnet.fields.name.label}
											</label>
											<input
												id="lead-name"
												type="text"
												required
												value={formData.name}
												onChange={(e) => handleInputChange('name', e.target.value)}
												placeholder={leadMagnet.fields.name.placeholder}
												style={styles.leadInput}
											/>
										</div>

										<div>
											<label htmlFor="lead-email" style={{ display: 'block', marginBottom: '6px', fontSize: '14px', color: '#cbd5e1' }}>
												{leadMagnet.fields.email.label}
											</label>
											<input
												id="lead-email"
												type="email"
												required
												value={formData.email}
												onChange={(e) => handleInputChange('email', e.target.value)}
												placeholder={leadMagnet.fields.email.placeholder}
												style={styles.leadInput}
											/>
										</div>

										<div>
											<label htmlFor="lead-goal" style={{ display: 'block', marginBottom: '6px', fontSize: '14px', color: '#cbd5e1' }}>
												{leadMagnet.fields.goal.label}
											</label>
											<input
												id="lead-goal"
												type="text"
												required
												value={formData.goal}
												onChange={(e) => handleInputChange('goal', e.target.value)}
												placeholder={leadMagnet.fields.goal.placeholder}
												style={styles.leadInput}
											/>
										</div>
									</div>

									{formError && (
										<p style={{ color: '#fca5a5', fontSize: '14px', marginTop: '8px' }}>{formError}</p>
									)}

									<button type="submit" style={{ ...styles.ctaButton, padding: '12px 24px', marginTop: '16px', width: '100%' }}>
										{leadMagnet.cta}
									</button>
								</form>
							)}

							<p style={{ ...styles.leadDisclaimer, marginTop: '12px' }}>{leadMagnet.disclaimer}</p>
						</article>
					</div>
				</section>

				<section style={styles.section} id="faq">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'FAQ' : 'Perguntas'}</span>
						<h2 style={styles.sectionTitle}>
							{language === 'en' ? 'Answers before you apply' : 'Respostas antes de aplicar'}
						</h2>
						<p style={styles.sectionSubtitle}>
							{language === 'en'
								? 'Still deciding? These are the questions we hear most from high-performing athletes and professionals.'
								: 'Ainda em dúvida? Estas são as perguntas mais comuns de atletas e profissionais de alta performance.'}
						</p>
					</div>
					<div>
						{faqs.map((faq) => (
							<article key={faq.question.en} style={styles.faqItem}>
								<h3 style={styles.faqQuestion}>{faq.question[language]}</h3>
								<p style={styles.muted}>{faq.answer[language]}</p>
							</article>
						))}
					</div>
				</section>

				<section style={styles.ctaSection} id="apply">
					<h2 style={styles.ctaTitle}>{cta.headline}</h2>
					<p style={styles.ctaParagraph}>{cta.paragraph}</p>
					<div style={styles.ctaActions}>
						<button type="button" style={{ ...styles.ctaButton, padding: '14px 32px' }}>
							{cta.primary}
						</button>
						<button type="button" style={{ ...styles.secondaryButton, padding: '14px 32px' }}>
							{cta.secondary}
						</button>
					</div>
				</section>

				<footer style={styles.footer}>
					<span style={{ ...styles.navBrand, fontSize: '18px' }}>Iron Brothers</span>
					<ul style={styles.footerLinks}>
						{footer.links.map((link) => (
							<li key={link.label}>
								<a href={link.href} style={{ color: 'rgba(226, 232, 240, 0.75)', textDecoration: 'none' }}>
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<p style={{ ...styles.muted, textAlign: 'center' }}>{footer.rights}</p>
				</footer>
			</div>
		</div>
	);
}
