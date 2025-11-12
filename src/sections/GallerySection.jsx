import React from 'react';
import Reveal from '../components/animations/Reveal';
import HoverLift from '../components/animations/HoverLift';
import InteractiveButton from '../components/ui/InteractiveButton';
import styles from '../styles/landingStyles';

export default function GallerySection({ language, showMore, onToggleShowMore }) {
	const baseImages = React.useMemo(
		() => [
			{ url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', alt: { en: 'Gym workout training', pt: 'Treino na academia' } },
			{ url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80', alt: { en: 'Weightlifting session', pt: 'Sessão de levantamento de peso' } },
			{ url: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80', alt: { en: 'Personal training session', pt: 'Sessão de treino pessoal' } },
			{ url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80', alt: { en: 'Functional fitness training', pt: 'Treino funcional' } },
			{ url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80', alt: { en: 'Group training class', pt: 'Aula de treino em grupo' } },
			{ url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80', alt: { en: 'Strength conditioning', pt: 'Condicionamento de força' } }
		],
		[]
	);
	const extraImages = React.useMemo(
		() => [
			{ url: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80', alt: { en: 'Kettlebell workout', pt: 'Treino com kettlebell' } },
			{ url: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80', alt: { en: 'Running track training', pt: 'Treino na pista de corrida' } },
			{ url: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=80', alt: { en: 'Mobility and flexibility work', pt: 'Trabalho de mobilidade' } },
			{ url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=800&q=80', alt: { en: 'Coaching moment', pt: 'Momento de coaching' } },
			{ url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80', alt: { en: 'Olympic lifting', pt: 'Levantamento olímpico' } },
			{ url: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=800&q=80', alt: { en: 'Recovery and regeneration', pt: 'Recuperação e regeneração' } }
		],
		[]
	);

	const images = showMore ? [...baseImages, ...extraImages] : baseImages;

	return (
		<section style={styles.section} id="gallery">
			<div style={styles.sectionHeader}>
				<span style={styles.sectionLabel}>{language === 'en' ? 'Gallery' : 'Galeria'}</span>
				<h2 style={styles.sectionTitle}>{language === 'en' ? 'Hybrid performance moments' : 'Momentos de performance híbrida'}</h2>
				<p style={styles.sectionSubtitle}>
					{language === 'en'
						? 'A curated glimpse into the environments, tools and execution culture that shape season breakthroughs.'
						: 'Um olhar selecionado sobre ambientes, ferramentas e a cultura de execução que impulsiona avanços de temporada.'}
				</p>
			</div>
			<div style={{ display: 'grid', gap: '18px', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
				{images.map((image, index) => (
					<Reveal key={image.url} delay={index * 55}>
						<HoverLift
							style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(148,163,184,0.25)', boxShadow: '0 16px 40px rgba(9,15,29,0.4)' }}
							intensity="soft"
						>
							<img
								src={image.url}
								alt={image.alt[language]}
								style={{ width: '100%', height: '220px', objectFit: 'cover', filter: 'brightness(0.92) saturate(1.15)' }}
								loading="lazy"
								decoding="async"
							/>
							<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.65), rgba(15,23,42,0.15))' }} />
						</HoverLift>
					</Reveal>
				))}
			</div>
			<div style={{ marginTop: '28px', textAlign: 'center' }}>
				<InteractiveButton variant="secondary" onClick={onToggleShowMore}>
					{showMore ? (language === 'en' ? 'Show Less' : 'Mostrar menos') : (language === 'en' ? 'Show More' : 'Mostrar mais')}
				</InteractiveButton>
			</div>
		</section>
	);
}
