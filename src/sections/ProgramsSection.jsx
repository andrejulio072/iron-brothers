import React from 'react';
import Reveal from '../components/animations/Reveal';
import HoverLift from '../components/animations/HoverLift';
import styles from '../styles/landingStyles';

export default function ProgramsSection({ language, programs }) {
	return (
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
				{programs.map((program, index) => (
					<Reveal key={program.id} delay={index * 80}>
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
	);
}
