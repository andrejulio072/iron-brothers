import React from 'react';
import Reveal from '../components/animations/Reveal';
import HoverLift from '../components/animations/HoverLift';
import styles from '../styles/landingStyles';

export default function TestimonialsSection({ language, testimonials }) {
	return (
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
				{testimonials.map((testimonial, index) => (
					<Reveal key={testimonial.name} delay={index * 70}>
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
	);
}
