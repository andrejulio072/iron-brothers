import React from 'react';
import styles from '../styles/landingStyles';

export default function ApplySection({ cta }) {
	return (
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
	);
}
