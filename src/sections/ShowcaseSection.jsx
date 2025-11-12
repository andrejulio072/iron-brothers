import React from 'react';
import Reveal from '../components/animations/Reveal';
import styles from '../styles/landingStyles';

export default function ShowcaseSection({ language }) {
	return (
		<section style={{ ...styles.section, paddingTop: '0px' }} id="showcase">
			<Reveal>
				<div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(148,163,184,0.25)', boxShadow: '0 25px 60px -10px rgba(0,0,0,0.55)', marginBottom: '38px' }}>
					<video
						src="https://cdn.coverr.co/videos/coverr-a-man-training-his-body-1664/1080p.mp4"
						autoPlay
						muted
						loop
						playsInline
						style={{ width: '100%', height: '520px', objectFit: 'cover', filter: 'brightness(0.9) saturate(1.15)' }}
						poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80"
					/>
					<div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0.55), rgba(15,23,42,0.88))' }} />
					<div style={{ position: 'absolute', bottom: 28, left: 34, maxWidth: '640px' }}>
						<h2 style={{ fontSize: '34px', fontWeight: 700, color: '#f8fafc', marginBottom: '14px' }}>
							{language === 'en' ? 'Precision engineered execution' : 'Execução com engenharia de precisão'}
						</h2>
						<p style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgba(226,232,240,0.88)' }}>
							{language === 'en'
								? 'Data, recovery and tactical blocks merge in a cohesive season architecture. This is a glimpse of the hybrid lab environment.'
								: 'Dados, recuperação e blocos táticos se fundem em uma arquitetura de temporada coesa. Este é um vislumbre do ambiente híbrido do nosso laboratório.'}
						</p>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
