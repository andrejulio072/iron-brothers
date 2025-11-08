import React, { useMemo, useState } from 'react';

const navItems = [
	{ id: 'programs', label: { en: 'Programs', pt: 'Programas' } },
	{ id: 'coaches', label: { en: 'Coaches', pt: 'Treinadores' } },
	{ id: 'results', label: { en: 'Results', pt: 'Resultados' } },
	{ id: 'pricing', label: { en: 'Pricing', pt: 'Planos' } },
	{ id: 'testimonials', label: { en: 'Testimonials', pt: 'Depoimentos' } },
	{ id: 'faq', label: { en: 'FAQ', pt: 'Perguntas' } }
];

const heroCopy = {
	en: {
		title: 'Future-proof coaching for relentless athletes.',
		subtitle:
			'Iron Brothers delivers elite hybrid training with battle-tested programming, data-driven feedback loops, and human accountability that keeps you closing the gap between today and your podium goals.',
		highlights: [
			'Remote-first with in-person intensives in São Paulo and Miami',
			'Dedicated strategist, recovery audits, and performance nutrition built-in',
			'Structured for entrepreneurs, executives, and competitive athletes'
		],
		primaryCta: 'Start Your Application',
		secondaryCta: 'Schedule a Discovery Call'
	},
	pt: {
		title: 'Treinamento de próxima geração para atletas incansáveis.',
		subtitle:
			'A Iron Brothers oferece coaching híbrido de alto nível com programação validada, feedback guiado por dados e responsabilidade humana para acelerar seus resultados dentro e fora das competições.',
		highlights: [
			'Remoto por padrão com imersões presenciais em São Paulo e Miami',
			'Estrategista dedicado, auditorias de recuperação e nutrição de performance inclusos',
			'Estrutura ideal para empreendedores, executivos e atletas competitivos'
		],
		primaryCta: 'Iniciar Aplicação',
		secondaryCta: 'Agende uma Conversa'
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
		src: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=720&q=80',
		alt: 'Athlete performing kettlebell swings inside an industrial gym',
		credit: 'Photo by Danielle Cerullo on Unsplash'
	},
	{
		src: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=720&q=80',
		alt: 'Coach guiding athlete through barbell training plan',
		credit: 'Photo by Victor Freitas on Unsplash'
	},
	{
		src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=720&q=80',
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
		name: 'Leonardo Monteiro',
		role: { en: 'Head Performance Strategist', pt: 'Estrategista-chefe de Performance' },
		bio: {
			en: 'Former pro thrower turned hybrid coach. Oversees methodology, data analytics, and game-day execution plans for elite rosters.',
			pt: 'Ex-atleta profissional de arremesso. Lidera metodologia, análise de dados e planos de execução em competição para o roster elite.'
		}
	},
	{
		name: 'Ana Ribeiro',
		role: { en: 'Strength and Biomechanics Lead', pt: 'Líder de Força e Biomecânica' },
		bio: {
			en: 'Masters in kinesiology with a decade coaching weightlifting and CrossFit Games hopefuls. Focus on technical economy and durability.',
			pt: 'Mestre em cinesiologia com dez anos treinando halterofilismo e atletas rumo ao CrossFit Games. Foco em economia técnica e longevidade.'
		}
	},
	{
		name: 'Daniel Costa',
		role: { en: 'Endurance Architect', pt: 'Arquiteto de Endurance' },
		bio: {
			en: 'Builds aerobic engines for triathletes and functional athletes, blending lab testing with field work for consistent breakthroughs.',
			pt: 'Constrói motores aeróbicos para triatletas e atletas funcionais, combinando testes laboratoriais e práticas em campo.'
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
	const hero = useMemo(() => heroCopy[language], [language]);
	const cta = useMemo(() => ctaCopy[language], [language]);
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
									<img src={image.src} alt={image.alt} style={styles.heroImage} loading="lazy" />
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
