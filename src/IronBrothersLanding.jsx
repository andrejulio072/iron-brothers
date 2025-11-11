import React, { useMemo, useState } from 'react';
import asset from './utils/asset';
import useParallax from './hooks/useParallax';
import Reveal from './components/animations/Reveal';
import HoverLift from './components/animations/HoverLift';
import InteractiveButton from './components/ui/InteractiveButton';
import MetricValue from './components/ui/MetricValue';
import styles from './styles/landingStyles';
import {
	navItems,
	heroCopy,
	metrics,
	heroImages,
	trustBadges,
	programs,
	coaches,
	results,
	pricingTiers,
	testimonials,
	faqs,
	scheduleCopy,
	leadMagnetCopy,
	shopPreview,
	ctaCopy,
	footerCopy
} from './content/landingContent';

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
										<MetricValue value={metric.value} />
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
							{ url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', alt: { en: 'Gym workout training', pt: 'Treino na academia' } },
							{ url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80', alt: { en: 'Weightlifting session', pt: 'Sessão de levantamento de peso' } },
							{ url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80', alt: { en: 'Personal training session', pt: 'Sessão de treino pessoal' } },
							{ url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80', alt: { en: 'Functional fitness training', pt: 'Treino funcional' } },
							{ url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80', alt: { en: 'Group training class', pt: 'Aula de treino em grupo' } },
							{ url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80', alt: { en: 'Strength conditioning', pt: 'Condicionamento de força' } },
						];
						const extra = [
							{ url: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80', alt: { en: 'Kettlebell workout', pt: 'Treino com kettlebell' } },
							{ url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80', alt: { en: 'Running track training', pt: 'Treino na pista de corrida' } },
							{ url: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=80', alt: { en: 'Mobility and flexibility work', pt: 'Trabalho de mobilidade' } },
							{ url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=800&q=80', alt: { en: 'Coaching moment', pt: 'Momento de coaching' } },
							{ url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80', alt: { en: 'Olympic lifting', pt: 'Levantamento olímpico' } },
							{ url: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=800&q=80', alt: { en: 'Recovery and regeneration', pt: 'Recuperação e regeneração' } },
						];
						const images = showMore ? [...baseImages, ...extra] : baseImages;
						return (
							<div style={{ display: 'grid', gap: '18px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
								{images.map((image, i) => (
									<Reveal key={image.url} delay={i * 55}>
										<HoverLift
											style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(148,163,184,0.25)', boxShadow: '0 16px 40px rgba(9,15,29,0.4)' }}
											intensity="soft"
										>
											<img
												src={image.url}
												alt={image.alt[language]}
												style={{ width: '100%', height: '220px', objectFit: 'cover', filter: 'brightness(0.92) saturate(1.15)' }}
												loading="lazy"
												decoding="async"
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
