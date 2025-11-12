import asset from '../utils/asset';

export const navItems = [
	{ id: 'programs', label: { en: 'Programs', pt: 'Programas' } },
	{ id: 'coaches', label: { en: 'Coaches', pt: 'Treinadores' } },
	{ id: 'results', label: { en: 'Results', pt: 'Resultados' } },
	{ id: 'pricing', label: { en: 'Pricing', pt: 'Planos' } },
	{ id: 'testimonials', label: { en: 'Testimonials', pt: 'Depoimentos' } },
	{ id: 'shop', label: { en: 'Shop', pt: 'Loja' } },
	{ id: 'schedule', label: { en: 'Schedule', pt: 'Agenda' } },
	{ id: 'faq', label: { en: 'FAQ', pt: 'Perguntas' } }
];

export const heroCopy = {
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

export const metrics = [
	{ value: '350+', label: { en: 'Athletes coached worldwide', pt: 'Atletas acompanhados globalmente' } },
	{ value: '22', label: { en: 'National titles supported', pt: 'Títulos nacionais apoiados' } },
	{ value: '4.9/5', label: { en: 'Client experience rating', pt: 'Avaliação média dos clientes' } },
	{ value: '12 yrs', label: { en: 'High-performance expertise', pt: 'Experiência em alta performance' } }
];

export const heroImages = [
	{
		src: 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=1400',
		alt: 'Athlete performing kettlebell swings inside an industrial gym',
		credit: 'Photo by Victor Freitas on Pexels'
	},
	{
		src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1400',
		alt: 'Coach guiding athlete through barbell training plan',
		credit: 'Photo by Victor Freitas on Pexels'
	},
	{
		src: 'https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1400',
		alt: 'Runner training at dusk in a modern stadium',
		credit: 'Photo by Tembela Bohle on Pexels'
	}
];

export const trustBadges = [
	{
		name: { en: 'Cross-training affiliates', pt: 'Afiliados de Cross-training' },
		detail: {
			en: 'Programming partner to leading boxes in Brazil, US, and Europe.',
			pt: 'Parceiro de programação para boxes líderes no Brasil, EUA e Europa.'
		},
		image: {
			url: 'https://images.pexels.com/photos/4164502/pexels-photo-4164502.jpeg?auto=compress&cs=tinysrgb&w=800',
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
			url: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=800',
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
			url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
			alt: { en: 'Corporate team leadership', pt: 'Liderança corporativa' }
		}
	}
];

export const programs = [
	{
		id: 'hybrid',
		name: { en: 'Hybrid Performance Blueprint', pt: 'Blueprint de Performance Híbrida' },
		description: {
			en: 'Remote training and online coaching for hybrid athletes balancing strength, endurance, and demanding schedules.',
			pt: 'Treinamento remoto e coaching online para atletas híbridos que equilibram força, endurance e rotina intensa.'
		},
		image: {
			url: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800',
			alt: { en: 'Hybrid athlete remote training', pt: 'Treino remoto de atleta híbrido' }
		},
		features: [
			{
				en: '▹ Weekly video strategy sessions and adaptive programming',
				pt: '▹ Sessões semanais de estratégia por vídeo e programação adaptativa'
			},
			{
				en: '▹ Form video analysis with detailed technique feedback',
				pt: '▹ Análise de vídeo de técnica com feedback detalhado'
			},
			{
				en: '▹ Recovery, sleep, and stress tracking via app integration',
				pt: '▹ Tracking de recuperação, sono e estresse via integração de apps'
			}
		]
	},
	{
		id: 'elite',
		name: { en: 'Elite Competition Prep', pt: 'Preparação Elite para Competição' },
		description: {
			en: 'High-touch remote coaching for competitive athletes targeting championships and podium finishes.',
			pt: 'Coaching remoto intensivo para atletas competitivos buscando campeonatos e pódios.'
		},
		image: {
			url: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
			alt: { en: 'Elite competition preparation', pt: 'Preparação para competição elite' }
		},
		features: [
			{
				en: '▹ Virtual competition simulations and remote testing protocols',
				pt: '▹ Simulações virtuais de competição e protocolos de teste remotos'
			},
			{
				en: '▹ Integrated sports nutrition and supplement guidance online',
				pt: '▹ Orientação online integrada de nutrição esportiva e suplementação'
			},
			{
				en: '▹ Dedicated remote performance team with data analysis',
				pt: '▹ Equipe remota dedicada de performance com análise de dados'
			}
		]
	},
	{
		id: 'executive',
		name: { en: 'Executive Vitality Program', pt: 'Programa de Vitalidade Executiva' },
		description: {
			en: 'Flexible online coaching for entrepreneurs and executives who need sustainable high-performance without gym dependency.',
			pt: 'Coaching online flexível para empreendedores e executivos que precisam de alta performance sustentável sem depender de academia.'
		},
		image: {
			url: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
			alt: { en: 'Executive online training', pt: 'Treino online para executivos' }
		},
		features: [
			{
				en: '▹ Time-optimized workouts adaptable to travel and home setup',
				pt: '▹ Treinos otimizados adaptáveis para viagens e setup caseiro'
			},
			{
				en: '▹ Remote habit coaching and accountability via messaging',
				pt: '▹ Coaching remoto de hábitos e accountability via mensagens'
			},
			{
				en: '▹ Quarterly virtual health assessments and goal planning',
				pt: '▹ Avaliações virtuais trimestrais de saúde e planejamento de metas'
			}
		]
	}
];

export const coaches = [
	{
		name: 'Andre Garcia',
		image: {
			url: asset('andre_profile.jpg'),
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
			url: asset('lucas_posing.jpg'),
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
			url: 'https://images.pexels.com/photos/8401135/pexels-photo-8401135.jpeg?auto=compress&cs=tinysrgb&w=800',
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

export const results = [
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

export const pricingTiers = [
	{
		id: 'ascend',
		name: { en: 'Ascend', pt: 'Ascender' },
		price: { en: '£97 / month', pt: '£97 / mês' },
		description: {
			en: 'Essential online coaching for athletes building their first structured training system remotely.',
			pt: 'Coaching online essencial para atletas construindo seu primeiro sistema de treino estruturado remotamente.'
		},
		image: {
			url: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
			alt: { en: 'Online training program', pt: 'Programa de treino online' }
		},
		features: [
			{
				en: '✓ Custom training program with weekly remote check-ins',
				pt: '✓ Programa de treino personalizado com check-ins remotos semanais'
			},
			{
				en: '✓ Monthly 1:1 video call for performance review',
				pt: '✓ Chamada de vídeo mensal 1:1 para revisão de performance'
			},
			{
				en: '✓ Full access to online exercise library & tutorials',
				pt: '✓ Acesso completo à biblioteca online de exercícios e tutoriais'
			},
			{
				en: '✓ Mobile app for workout tracking and instant messaging',
				pt: '✓ App mobile para acompanhamento e mensagens instantâneas'
			}
		]
	},
	{
		id: 'surge',
		name: { en: 'Surge', pt: 'Impulso' },
		price: { en: '£177 / month', pt: '£177 / mês' },
		description: {
			en: 'Comprehensive remote coaching with nutrition, technique analysis, and weekly strategy sessions.',
			pt: 'Coaching remoto completo com nutrição, análise técnica e sessões semanais de estratégia.'
		},
		image: {
			url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
			alt: { en: 'Remote coaching session', pt: 'Sessão de coaching remoto' }
		},
		features: [
			{
				en: '✓ Everything in Ascend, plus:',
				pt: '✓ Tudo do plano Ascender, mais:'
			},
			{
				en: '✓ Weekly video strategy calls with dedicated coach',
				pt: '✓ Chamadas semanais de estratégia por vídeo com coach dedicado'
			},
			{
				en: '✓ Complete online nutrition planning & macro tracking',
				pt: '✓ Planejamento nutricional completo online e tracking de macros'
			},
			{
				en: '✓ Unlimited video form checks (24-48h review)',
				pt: '✓ Análises ilimitadas de técnica em vídeo (revisão em 24-48h)'
			},
			{
				en: '✓ Competition prep support & remote peak planning',
				pt: '✓ Suporte para competição e planejamento remoto de pico'
			}
		]
	},
	{
		id: 'apex',
		name: { en: 'Apex', pt: 'Ápice' },
		price: { en: '£297 / month', pt: '£297 / mês' },
		description: {
			en: 'Elite online performance system with multidisciplinary team and priority support.',
			pt: 'Sistema de performance online elite com equipe multidisciplinar e suporte prioritário.'
		},
		image: {
			url: 'https://images.pexels.com/photos/4164759/pexels-photo-4164759.jpeg?auto=compress&cs=tinysrgb&w=800',
			alt: { en: 'Elite online coaching', pt: 'Coaching online elite' }
		},
		features: [
			{
				en: '✓ Everything in Surge, plus:',
				pt: '✓ Tudo do plano Impulso, mais:'
			},
			{
				en: '✓ Dedicated remote team (coach, nutritionist, recovery specialist)',
				pt: '✓ Equipe remota dedicada (coach, nutricionista, especialista em recuperação)'
			},
			{
				en: '✓ Priority support via WhatsApp/Telegram (response within 4h)',
				pt: '✓ Suporte prioritário via WhatsApp/Telegram (resposta em até 4h)'
			},
			{
				en: '✓ Biometric data integration (Whoop, Garmin, Apple Watch)',
				pt: '✓ Integração de dados biométricos (Whoop, Garmin, Apple Watch)'
			},
			{
				en: '✓ Monthly performance reports with data-driven adjustments',
				pt: '✓ Relatórios mensais de performance com ajustes baseados em dados'
			}
		]
	}
];

export const testimonials = [
	{
		name: 'Marina Oliveira',
		role: { en: 'Functional fitness athlete', pt: 'Atleta de fitness funcional' },
		quote: {
			en: 'The hybrid systems finally connected my strength, engine, and mindset. I qualified for my first national final with energy to spare.',
			pt: 'O sistema híbrido finalmente alinhou minha força, meu engine e minha mentalidade. Classifiquei para minha primeira final nacional com energia de sobra.'
		},
		avatar: {
			url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
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
			url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
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
			url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
			alt: { en: 'Portrait of athlete Sarah', pt: 'Retrato da atleta Sarah' }
		}
	}
];

export const faqs = [
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

export const scheduleCopy = {
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

export const leadMagnetCopy = {
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

export const shopPreview = {
	en: {
		title: 'Iron Brothers Store (Coming Soon)',
		subtitle:
			'Curated gear, program bundles, and recovery essentials designed with the same high standards as our coaching experience. Integrated Shopify checkout launches soon.',
		items: [
			{ name: 'Hybrid Performance Starter Kit', detail: 'Mobility tools, premium straps, and programming companion workbook.', image: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800' },
			{ name: 'Executive Fuel Bundle', detail: 'Clinically-backed supplements and nutrition frameworks for travel-heavy weeks.', image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800' },
			{ name: 'Signature Apparel Drop', detail: 'Limited-run technical wear co-created with Iron Brothers athletes.', image: 'https://images.pexels.com/photos/8436575/pexels-photo-8436575.jpeg?auto=compress&cs=tinysrgb&w=800' }
		],
		note: 'Join the waitlist to receive early access and launch-day bonuses.'
	},
	pt: {
		title: 'Loja Iron Brothers (Em Breve)',
		subtitle:
			'Equipamentos selecionados, pacotes de programas e essenciais de recuperação com o mesmo nível de excelência do nosso coaching. Checkout via Shopify disponível em breve.',
		items: [
			{ name: 'Kit Performance Híbrida', detail: 'Ferramentas de mobilidade, straps premium e workbook de programação.', image: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800' },
			{ name: 'Combo Energia Executiva', detail: 'Suplementos com respaldo clínico e frameworks nutricionais para semanas de viagem.', image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800' },
			{ name: 'Drop de Apparel Assinatura', detail: 'Vestuário técnico em tiragem limitada cocriado com atletas Iron Brothers.', image: 'https://images.pexels.com/photos/8436575/pexels-photo-8436575.jpeg?auto=compress&cs=tinysrgb&w=800' }
		],
		note: 'Entre na lista de espera para receber acesso antecipado e bônus de lançamento.'
	}
};

export const ctaCopy = {
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

export const footerCopy = {
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
