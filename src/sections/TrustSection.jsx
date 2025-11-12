import React from 'react';
import Reveal from '../components/animations/Reveal';
import HoverLift from '../components/animations/HoverLift';
import styles from '../styles/landingStyles';

export default function TrustSection({ language, trustBadges }) {
	return (
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
				{trustBadges.map((badge, index) => (
					<Reveal key={badge.name.en} delay={index * 70}>
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
	);
}
