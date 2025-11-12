import React from 'react';
import asset from '../utils/asset';
import InteractiveButton from '../components/ui/InteractiveButton';
import styles from '../styles/landingStyles';

export default function NavigationBar({ language, onToggleLanguage, navItems }) {
	return (
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
					onClick={onToggleLanguage}
					style={{ padding: '10px 20px' }}
				>
					{language === 'en' ? 'Português' : 'English'}
				</InteractiveButton>
				<InteractiveButton variant="primary">
					{language === 'en' ? 'Apply Now' : 'Aplicar Agora'}
				</InteractiveButton>
			</div>
		</nav>
	);
}
