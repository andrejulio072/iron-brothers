import React, { useMemo, useState, useEffect, useRef } from 'react';

// Helper to build local asset paths respecting Vite base on GitHub Pages
const asset = (file) => {
	const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) || '/';
	return `${base}assets/${file}`;
};

// Intersection Observer based reveal wrapper for premium fade/slide animations
const Reveal = ({ as = 'div', children, style = {}, delay = 0 }) => {
	const Comp = as;
	const ref = useRef(null);
		useEffect(() => {
		const el = ref.current;
		if (!el) return;
		el.style.opacity = '0';
		el.style.transform = 'translateY(24px)';
		el.style.transition = 'opacity 700ms cubic-bezier(0.19, 1, 0.22, 1), transform 700ms cubic-bezier(0.19, 1, 0.22, 1)';
		el.style.transitionDelay = `${delay}ms`;
			// In tests (jsdom) or environments without IntersectionObserver, reveal immediately
			if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
				el.style.opacity = '1';
				el.style.transform = 'translateY(0)';
				return;
			}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					el.style.opacity = '1';
					el.style.transform = 'translateY(0)';
					io.unobserve(el);
				}
			});
		}, { threshold: 0.25 });
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return <Comp ref={ref} style={style}>{children}</Comp>;
};

// Animated number component for metrics
const MetricValue = ({ value }) => {
	const [display, setDisplay] = useState(value);
	useEffect(() => {
		const match = String(value).match(/^([0-9\.]+)(.*)$/);
		if (!match) return; // non-numeric start, leave as-is
		const target = parseFloat(match[1]);
		const suffix = match[2];
		let startTs; const duration = 1200;
		const step = (ts) => {
			if (!startTs) startTs = ts;
			const progress = Math.min((ts - startTs) / duration, 1);
			const current = Math.round(progress * target);
			setDisplay(`${current}${suffix}`);
			if (progress < 1) requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	}, [value]);
	return <div style={{ fontSize: '34px', fontWeight: 700, color: '#60a5fa', marginBottom: '6px' }}>{display}</div>;
};

// Interactive button with subtle hover glow
const InteractiveButton = ({ variant = 'primary', children, onClick, style = {} }) => {
	const [hover, setHover] = useState(false);
	const base = variant === 'primary' ? {
		background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
		color: '#0f172a',
	} : {
		background: 'rgba(15, 23, 42, 0.7)',
		color: '#e2e8f0',
		border: '1px solid rgba(148, 163, 184, 0.35)'
	};
	const glow = hover
		? (variant === 'primary' ? '0 18px 40px rgba(96,165,250,0.45)' : '0 10px 26px rgba(15,23,42,0.55)')
		: (variant === 'primary' ? '0 10px 24px rgba(96,165,250,0.35)' : '0 6px 18px rgba(15,23,42,0.45)');
	return (
		<button
			type="button"
			onClick={onClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				border: 'none',
				borderRadius: '999px',
				padding: '12px 26px',
				fontSize: 14,
				fontWeight: 600,
				cursor: 'pointer',
				boxShadow: glow,
				transition: 'box-shadow 220ms ease, transform 120ms ease',
				transform: hover ? 'translateY(-1px)' : 'translateY(0)',
				...base,
				...style,
			}}
		>
			{children}
		</button>
	);
};

// Hover lift microinteraction component for cards
const HoverLift = ({ as = 'div', children, style = {}, intensity = 'medium' }) => {
	const [hover, setHover] = useState(false);
	const Comp = as;
	const lift = intensity === 'soft' ? { dy: 2, shadow: '0 14px 32px rgba(8, 15, 33, 0.28)' } :
		intensity === 'strong' ? { dy: 6, shadow: '0 40px 70px rgba(8, 15, 33, 0.45)' } :
		{ dy: 4, shadow: '0 28px 56px rgba(8, 15, 33, 0.38)' };
	return (
		<Comp
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				transition: 'transform 200ms ease, box-shadow 220ms ease, border-color 200ms ease',
				transform: hover ? `translateY(-${lift.dy}px)` : 'translateY(0)',
				boxShadow: hover && (style.boxShadow ? lift.shadow : lift.shadow),
				border: style.border ? (hover ? style.border.replace(/0\.25\)/, '0.38)') : style.border) : undefined,
				...style,
			}}
		>
			{children}
		</Comp>
	);
};

// Parallax hook for subtle vertical motion
const useParallax = (multiplier = 0.12) => {
	const ref = useRef(null);
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const el = ref.current;
		if (!el) return;
		let rafId;
		const onScroll = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				const rect = el.getBoundingClientRect();
				const center = rect.top + rect.height / 2 - window.innerHeight / 2;
				const translate = center * -multiplier;
				el.style.transform = `translateY(${translate.toFixed(1)}px)`;
			});
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			cancelAnimationFrame(rafId);
		};
	}, [multiplier]);
	return ref;
};

// Tabbed code examples component
const TechExamples = ({ language }) => {
	const tabs = [
		{
			id: 'react',
			label: 'React',
			code: `function Metric({ value }) {
	const [n, setN] = React.useState(0);
	React.useEffect(() => {
		let raf; const start = performance.now();
		const dur = 900, target = Number(value) || 0;
		const step = (t) => {
			const p = Math.min((t - start) / dur, 1);
			setN(Math.round(p * target));
			if (p < 1) raf = requestAnimationFrame(step);
		};
		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [value]);
	return <strong>{n}</strong>;
}`
		},
		{
			id: 'js',
			label: 'JavaScript',
			code: `export function periodize(weeks, focus) {
	const blocks = [];
	for (let w = 1; w <= weeks; w++) {
		blocks.push({ week: w, load: focus === 'strength' ? 0.7 + w*0.02 : 0.6 + w*0.03 });
	}
	return blocks;
}`
		},
		{
			id: 'ts',
			label: 'TypeScript',
			code: `type Block = { week: number; load: number };
export function deload<T extends Block>(plan: T[], pct: number = 0.2): T[] {
	return plan.map(b => ({ ...b, load: +(b.load * (1 - pct)).toFixed(2) } as T));
}`
		},
		{
			id: 'rb',
			label: 'Ruby',
			code: `def rolling_avg(values, window = 7)
	values.each_cons(window).map { |w| (w.sum / w.length.to_f).round(2) }
end`
		}
	];
	const [active, setActive] = useState(tabs[0].id);
	const copy = {
		en: { run: 'Run mentally', note: 'Snippets are illustrative and simplified.' },
		pt: { run: 'Execute mentalmente', note: 'Os trechos são ilustrativos e simplificados.' }
	};
	return (
		<div>
			<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
				{tabs.map((t) => (
					<InteractiveButton
						key={t.id}
						variant={active === t.id ? 'primary' : 'secondary'}
						onClick={() => setActive(t.id)}
						style={{ padding: '8px 16px' }}
					>
						{t.label}
					</InteractiveButton>
				))}
			</div>
			<Reveal>
				<HoverLift style={{ ...styles.glassCard, padding: 0 }}>
					<pre style={{ margin: 0, padding: 18, overflowX: 'auto', background: 'rgba(2,6,23,0.65)', borderRadius: '20px' }}>
						<code>
							{tabs.find((t) => t.id === active)?.code}
						</code>
					</pre>
				</HoverLift>
			</Reveal>
			<p style={{ ...styles.muted, marginTop: 10 }}>{copy[language].note}</p>
		</div>
	);
};

const navItems = [
	{ id: 'programs', label: { en: 'Programs', pt: 'Programas' } },
	{ id: 'coaches', label: { en: 'Coaches', pt: 'Treinadores' } },
	{ id: 'results', label: { en: 'Results', pt: 'Resultados' } },
	{ id: 'pricing', label: { en: 'Pricing', pt: 'Planos' } },
	{ id: 'testimonials', label: { en: 'Testimonials', pt: 'Depoimentos' } },
	{ id: 'shop', label: { en: 'Shop', pt: 'Loja' } },
	{ id: 'tech', label: { en: 'Tech', pt: 'Tecnologia' } },
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
		src: 'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1400&q=80',
		alt: 'Athlete performing kettlebell swings inside an industrial gym',
		credit: 'Photo by Danielle Cerullo on Unsplash'
	},
	{
		src: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1400&q=80',
		alt: 'Coach guiding athlete through barbell training plan',
		credit: 'Photo by Victor Freitas on Unsplash'
	},
	{
		src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1400&q=80',
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
		},
		image: {
			url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Cross-training gym partners', pt: 'Parceiros de academias de cross-training' }
		}
	},
	{
		name: { en: 'National athletes', pt: 'Atletas nacionais' },
		detail: {
			en: 'Preparation for elite qualifiers across functional fitness, triathlon, and jiu-jitsu.',
			pt: 'Preparação para seletivas de elite em fitness funcional, triathlon e jiu-jitsu.'
		},
		image: {
			url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'National level athlete', pt: 'Atleta em nível nacional' }
		}
	},
	{
		name: { en: 'Corporate leaders', pt: 'Líderes corporativos' },
		detail: {
			en: 'Performance systems customized for high-demand executive schedules.',
			pt: 'Sistemas de performance adaptados a agendas executivas de alta demanda.'
		},
		image: {
			url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Corporate team leadership', pt: 'Liderança corporativa' }
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
		image: {
			url: 'https://images.unsplash.com/photo-1571731956672-ac8e8b9b0d55?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Hybrid athlete training', pt: 'Treino de atleta híbrido' }
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
		image: {
			url: 'https://images.unsplash.com/photo-1549045337-967927d923c2?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Podium preparation', pt: 'Preparação para pódio' }
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
		image: {
			url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Executive training', pt: 'Treino para executivos' }
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
		image: {
			url: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Andre Garcia coaching portrait', pt: 'Retrato profissional de Andre Garcia' }
		},
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
		image: {
			url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Lucas Gabriel coaching portrait', pt: 'Retrato profissional de Lucas Gabriel' }
		},
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
		image: {
			url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Medical and recovery specialist team', pt: 'Equipe de especialistas médicos e recuperação' }
		},
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
		price: { en: '$349 / month', pt: '$349 / mês' },
		description: {
			en: 'Foundational hybrid coaching for emerging athletes ready to level up with precision.',
			pt: 'Coaching híbrido fundamental para atletas em ascensão buscando precisão.'
		},
		image: {
			url: 'https://images.unsplash.com/photo-1530825899616-6db10fb88cdd?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Athlete starting hybrid plan', pt: 'Atleta iniciando plano híbrido' }
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
		price: { en: '$549 / month', pt: '$549 / mês' },
		description: {
			en: 'High-touch coaching for driven competitors integrating strength, skill, and endurance cycles.',
			pt: 'Coaching de alto contato para competidores integrando ciclos de força, habilidade e endurance.'
		},
		image: {
			url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Intense competitor training', pt: 'Treino intenso de competidor' }
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
		price: { en: 'Apply for pricing', pt: 'Consulte preço' },
		description: {
			en: 'Invitation-only integrated performance department for podium-bound teams and executives.',
			pt: 'Departamento de performance integrado sob convite para equipes e executivos rumo ao pódio.'
		},
		image: {
			url: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
			alt: { en: 'Elite team preparation', pt: 'Preparação de equipe elite' }
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
		},
		avatar: {
			url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
			alt: { en: 'Portrait of athlete Marina', pt: 'Retrato da atleta Marina' }
		}
	},
	{
		name: 'Gabriel Santos',
		role: { en: 'Tech founder', pt: 'Fundador de startup' },
		quote: {
			en: 'Iron Brothers designed training that respected my travel schedule while boosting resilience. My team noticed the difference before I did.',
			pt: 'A Iron Brothers criou treinos que respeitam minha agenda de viagens e elevaram minha resiliência. Minha equipe percebeu a diferença antes de mim.'
		},
		avatar: {
			url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
			alt: { en: 'Portrait of founder Gabriel', pt: 'Retrato do fundador Gabriel' }
		}
	},
	{
		name: 'Sarah Price',
		role: { en: 'Masters triathlete', pt: 'Triatleta masters' },
		quote: {
			en: 'Data reviews plus human coaching made every block intentional. I smashed my half Ironman time by 19 minutes.',
			pt: 'As análises de dados somadas ao coaching humano tornaram cada bloco intencional. Reduzi meu tempo no meio Ironman em 19 minutos.'
		},
		avatar: {
			url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
			alt: { en: 'Portrait of athlete Sarah', pt: 'Retrato da atleta Sarah' }
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
			{ name: 'Hybrid Performance Starter Kit', detail: 'Mobility tools, premium straps, and programming companion workbook.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80' },
			{ name: 'Executive Fuel Bundle', detail: 'Clinically-backed supplements and nutrition frameworks for travel-heavy weeks.', image: 'https://images.unsplash.com/photo-1514512364185-4c2b346927ff?auto=format&fit=crop&w=800&q=80' },
			{ name: 'Signature Apparel Drop', detail: 'Limited-run technical wear co-created with Iron Brothers athletes.', image: 'https://images.unsplash.com/photo-1528702748617-73efc2c5a3f3?auto=format&fit=crop&w=800&q=80' }
		],
		note: 'Join the waitlist to receive early access and launch-day bonuses.'
	},
	pt: {
		title: 'Loja Iron Brothers (Em Breve)',
		subtitle:
			'Equipamentos selecionados, pacotes de programas e essenciais de recuperação com o mesmo nível de excelência do nosso coaching. Checkout via Shopify disponível em breve.',
		items: [
			{ name: 'Kit Performance Híbrida', detail: 'Ferramentas de mobilidade, straps premium e workbook de programação.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80' },
			{ name: 'Combo Energia Executiva', detail: 'Suplementos com respaldo clínico e frameworks nutricionais para semanas de viagem.', image: 'https://images.unsplash.com/photo-1514512364185-4c2b346927ff?auto=format&fit=crop&w=800&q=80' },
			{ name: 'Drop de Apparel Assinatura', detail: 'Vestuário técnico em tiragem limitada cocriado com atletas Iron Brothers.', image: 'https://images.unsplash.com/photo-1528702748617-73efc2c5a3f3?auto=format&fit=crop&w=800&q=80' }
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
	cardImage: {
		width: '100%',
		height: 160,
		objectFit: 'cover',
		borderRadius: '14px',
		marginBottom: '14px'
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
	const [showMore, setShowMore] = useState(false);
	const [formData, setFormData] = useState({ name: '', email: '', goal: '', website: '' });
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formError, setFormError] = useState('');

	const handleLeadFormSubmit = async (event) => {
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

		// Optional backend POST wiring if endpoint configured
		const endpoint = (import.meta && import.meta.env && import.meta.env.VITE_LEAD_ENDPOINT)
			|| (typeof window !== 'undefined' && window.IRON_LEAD_ENDPOINT);

		if (endpoint) {
			try {
				const res = await fetch(endpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: formData.name,
						email: formData.email,
						goal: formData.goal,
						website: formData.website || '' // honeypot
					})
				});
				if (!res.ok) {
					setFormError(language === 'en' ? 'Submission failed. Please try again later.' : 'Falha no envio. Tente novamente mais tarde.');
					return;
				}
			} catch (err) {
				setFormError(language === 'en' ? 'Network error. Please try again.' : 'Erro de rede. Tente novamente.');
				return;
			}
		} else {
			// Fallback: local success without network
			// console.log('Lead capture (local):', formData);
		}

		setFormSubmitted(true);
		setFormData({ name: '', email: '', goal: '', website: '' });

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
			<div style={styles.backdrop} aria-hidden="true" ref={useParallax(0.05)} />
			<div style={styles.content}>
				<nav style={styles.navbar} aria-label={language === 'en' ? 'Main navigation' : 'Navegação principal'}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
						<img src={asset('logo1.jpg')} alt="Iron Brothers logo" style={{ width: 28, height: 28, borderRadius: 6 }} />
						<span style={styles.navBrand}>Iron Brothers</span>
					</div>
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
						<InteractiveButton
							variant="secondary"
							onClick={() => setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'))}
							style={{ padding: '10px 20px' }}
						>
							{language === 'en' ? 'Português' : 'English'}
						</InteractiveButton>
						<InteractiveButton variant="primary">
							{language === 'en' ? 'Apply Now' : 'Aplicar Agora'}
						</InteractiveButton>
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
					<div style={styles.heroVisuals} ref={useParallax(0.08)}>
						<div style={styles.imageStack}>
							{heroImages.map((image) => (
								<HoverLift as="figure" key={image.src} style={styles.imageCard} intensity="soft">
									<img
										src={image.src}
										alt={image.alt}
										style={styles.heroImage}
										loading="lazy"
										decoding="async"
										onError={undefined}
									/>
									<figcaption style={styles.imageCredit}>{image.credit}</figcaption>
								</HoverLift>
							))}
						</div>
						<div style={styles.metricPanel}>
			{/* Metrics now wrapped with HoverLift for subtle lift on hover of each card */}
							<h2 style={{ ...styles.sectionTitle, fontSize: '20px', marginBottom: '16px' }}>
								{language === 'en' ? 'By the numbers' : 'Em números'}
							</h2>
							<div style={styles.metricsGrid}>
								{metrics.map((metric) => (
									<HoverLift key={metric.value} style={styles.metricCard} intensity="soft">
										<div style={styles.metricValue}>{metric.value}</div>
										<p style={styles.muted}>{metric.label[language]}</p>
									</HoverLift>
								))}
							</div>
						</div>
					</div>
				</header>

				{/* Premium video showcase section */}
				<section style={{ ...styles.section, paddingTop: '0px' }} id="showcase">
					<Reveal>
						<div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(148,163,184,0.25)', boxShadow: '0 25px 60px -10px rgba(0,0,0,0.55)', marginBottom: '38px' }}>
							<video
								src="https://cdn.coverr.co/videos/coverr-a-man-training-his-body-1664/1080p.mp4"
								autoPlay
								muted
								loop
								playsInline
								style={{ width: '100%', height: '520px', objectFit: 'cover', filter: 'brightness(0.9) saturate(1.15)' }}
								poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80"
							/>
							<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0.55), rgba(15,23,42,0.88))' }} />
							<div style={{ position: 'absolute', bottom: 28, left: 34, maxWidth: '640px' }}>
								<h2 style={{ fontSize: '34px', fontWeight: 700, color: '#f8fafc', marginBottom: '14px' }}>
									{language === 'en' ? 'Precision engineered execution' : 'Execução com engenharia de precisão'}
								</h2>
								<p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(226,232,240,0.88)' }}>
									{language === 'en'
										? 'Data, recovery and tactical blocks merge in a cohesive season architecture. This is a glimpse of the hybrid lab environment.'
										: 'Dados, recuperação e blocos táticos se fundem em uma arquitetura de temporada coesa. Este é um vislumbre do ambiente híbrido do nosso laboratório.'}
								</p>
							</div>
						</div>
					</Reveal>
				</section>

				{/* Premium image gallery */}
				<section style={styles.section} id="gallery">
					<div style={styles.sectionHeader}>
						<span style={styles.sectionLabel}>{language === 'en' ? 'Gallery' : 'Galeria'}</span>
						<h2 style={styles.sectionTitle}>{language === 'en' ? 'Hybrid performance moments' : 'Momentos de performance híbrida'}</h2>
						<p style={styles.sectionSubtitle}>
							{language === 'en'
								? 'A curated glimpse into the environments, tools and execution culture that shape season breakthroughs.'
								: 'Um olhar selecionado sobre ambientes, ferramentas e a cultura de execução que impulsiona avanços de temporada.'}
						</p>
					</div>
					{(() => {
						const baseImages = [
							'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', // gym workout
							'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80', // weightlifting
							'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80', // training session
							'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80', // functional fitness
							'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80', // group training
							'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80', // strength conditioning
						];
						const extra = [
							'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80', // kettlebell
							'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80', // running track
							'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=80', // mobility work
							'https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=800&q=80', // coaching moment
							'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80', // olympic lifting
							'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=800&q=80', // recovery focus
						];
						const images = showMore ? [...baseImages, ...extra] : baseImages;
						return (
							<div style={{ display: 'grid', gap: '18px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
								{images.map((url, i) => (
									<Reveal key={url} delay={i * 55}>
										<HoverLift
											style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(148,163,184,0.25)', boxShadow: '0 16px 40px rgba(9,15,29,0.4)' }}
											intensity="soft"
										>
											<img
												src={url}
												alt={language === 'en' ? 'Gallery image' : 'Imagem da galeria'}
												style={{ width: '100%', height: '220px', objectFit: 'cover', filter: 'brightness(0.92) saturate(1.15)' }}
												loading="lazy"
											/>
											<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.65), rgba(15,23,42,0.15))' }} />
										</HoverLift>
									</Reveal>
								))}
							</div>
						);
					})()}
					<div style={{ marginTop: '28px', textAlign: 'center' }}>
						<InteractiveButton variant="secondary" onClick={() => setShowMore((v) => !v)}>
							{showMore ? (language === 'en' ? 'Show Less' : 'Mostrar menos') : (language === 'en' ? 'Show More' : 'Mostrar mais')}
						</InteractiveButton>
					</div>
				</section>

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
						{trustBadges.map((badge, idx) => (
							<Reveal key={badge.name.en} delay={idx * 70}>
								<HoverLift style={styles.glassCard}>
									{badge.image && (
										<img
											src={badge.image.url}
											alt={badge.image.alt[language]}
											loading="lazy"
											style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: '12px', marginBottom: '14px' }}
										/>
									)}
									<h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#e2e8f0' }}>
										{badge.name[language]}
									</h3>
									<p style={styles.muted}>{badge.detail[language]}</p>
								</HoverLift>
							</Reveal>
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
						{programs.map((program, idx) => (
							<Reveal key={program.id} delay={idx * 80}>
								<HoverLift as="article" style={styles.glassCard} intensity="medium">
									{program.image && (
										<img
											src={program.image.url}
											alt={program.image.alt[language]}
											loading="lazy"
											style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: '14px', marginBottom: '16px' }}
										/>
									)}
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
								</HoverLift>
							</Reveal>
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
						{coaches.map((coach, idx) => (
							<Reveal key={coach.name} delay={idx * 75}>
								<HoverLift style={styles.glassCard} intensity="medium">
									{coach.image && (
										<img
											src={coach.image.url}
											alt={coach.image.alt[language]}
											style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: '12px', marginBottom: '14px', filter: 'brightness(0.95) contrast(1.05)' }}
											loading="lazy"
											decoding="async"
										/>
									)}
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
								</HoverLift>
							</Reveal>
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
						{results.map((result, idx) => (
							<Reveal key={result.stat} style={styles.resultCard} delay={idx * 80}>
								<MetricValue value={result.stat} />
								<p style={styles.muted}>{result.label[language]}</p>
							</Reveal>
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
						{pricingTiers.map((tier, idx) => (
							<Reveal key={tier.id} delay={idx * 80}>
								<HoverLift as="article" style={styles.pricingCard} intensity="strong">
									{tier.image && (
										<img
											src={tier.image.url}
											alt={tier.image.alt[language]}
											loading="lazy"
											style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: '14px', marginBottom: '14px' }}
										/>
									)}
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
								</HoverLift>
							</Reveal>
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
						{testimonials.map((testimonial, idx) => (
							<Reveal key={testimonial.name} delay={idx * 70}>
								<HoverLift as="article" style={styles.glassCard} intensity="medium">
									{testimonial.avatar && (
										<img
											src={testimonial.avatar.url}
											alt={testimonial.avatar.alt[language]}
											loading="lazy"
											style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: '50%', marginBottom: '14px', border: '2px solid rgba(148,163,184,0.35)' }}
										/>
									)}
									<p style={styles.quote}>“{testimonial.quote[language]}”</p>
									<p style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>{testimonial.name}</p>
									<p style={styles.muted}>{testimonial.role[language]}</p>
								</HoverLift>
							</Reveal>
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
						{shop.items.map((item, idx) => (
							<Reveal key={item.name} delay={idx * 70}>
								<HoverLift as="article" style={styles.glassCard} intensity="soft">
									{item.image && (
										<img
											src={item.image}
											alt={item.name}
											loading="lazy"
											style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: '12px', marginBottom: '12px' }}
										/>
									)}
									<h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: '#f8fafc' }}>{item.name}</h3>
									<p style={styles.muted}>{item.detail}</p>
								</HoverLift>
							</Reveal>
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
						<HoverLift as="article" style={styles.glassCard} intensity="medium">
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
						</HoverLift>
						<HoverLift as="article" style={styles.glassCard} intensity="medium">
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
									{/* Honeypot field for spam bots */}
									<div style={{ position: 'absolute', left: '-5000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
										<label htmlFor="lead-website">Website</label>
										<input
											id="lead-website"
											type="text"
											name="website"
											tabIndex={-1}
											autoComplete="off"
											value={formData.website}
											onChange={(e) => handleInputChange('website', e.target.value)}
										/>
									</div>
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
						</HoverLift>
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
