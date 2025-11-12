import React from 'react';
import Reveal from '../components/animations/Reveal';
import HoverLift from '../components/animations/HoverLift';
import styles from '../styles/landingStyles';

export default function ShopSection({ language, shop }) {
	return (
		<section style={styles.section} id="shop">
			<div style={styles.sectionHeader}>
				<span style={styles.sectionLabel}>{language === 'en' ? 'Store' : 'Loja'}</span>
				<h2 style={styles.sectionTitle}>{shop.title}</h2>
				<p style={styles.sectionSubtitle}>{shop.subtitle}</p>
			</div>
			<div style={styles.cardGrid}>
				{shop.items.map((item, index) => (
					<Reveal key={item.name} delay={index * 70}>
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
	);
}
