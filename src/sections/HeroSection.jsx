import React from 'react';
import useParallax from '../hooks/useParallax';
import HoverLift from '../components/animations/HoverLift';
import MetricValue from '../components/ui/MetricValue';
import styles from '../styles/landingStyles';

export default function HeroSection({ language, hero, heroImages, metrics }) {
	const visualsRef = useParallax(0.08);

	return (
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
			<div style={styles.heroVisuals} ref={visualsRef}>
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
	);
}
