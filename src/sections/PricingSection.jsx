import React from 'react';
import Reveal from '../components/animations/Reveal';
import HoverLift from '../components/animations/HoverLift';
import styles from '../styles/landingStyles';

export default function PricingSection({ language, pricingTiers }) {
	return (
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
				{pricingTiers.map((tier, index) => (
					<Reveal key={tier.id} delay={index * 80}>
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
	);
}
