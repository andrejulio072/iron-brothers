import React from 'react';
import Reveal from '../components/animations/Reveal';
import HoverLift from '../components/animations/HoverLift';
import styles from '../styles/landingStyles';

export default function CoachesSection({ language, coaches }) {
	return (
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
				{coaches.map((coach, index) => (
					<Reveal key={coach.name} delay={index * 75}>
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
	);
}
