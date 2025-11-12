import React from 'react';
import styles from '../styles/landingStyles';

export default function FooterSection({ footer }) {
	return (
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
	);
}
