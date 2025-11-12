import React from 'react';
import Reveal from '../components/animations/Reveal';
import MetricValue from '../components/ui/MetricValue';
import styles from '../styles/landingStyles';

export default function ResultsSection({ language, results }) {
	return (
		<section style={styles.section} id="results">
			<div style={styles.sectionHeader}>
				<span style={styles.sectionLabel}>{language === 'en' ? 'Results' : 'Resultados'}</span>
				<h2 style={styles.sectionTitle}>
					{language === 'en' ? 'Outcomes that compound season after season' : 'Resultados que escalam temporada após temporada'}
				</h2>
				<p style={styles.sectionSubtitle}>
					{language === 'en'
						? 'Every block is tracked, reviewed, and iterated. The consistency builds wins in training, boardrooms, and on the field.'
						: 'Cada bloco é monitorado, revisado e ajustado. A consistência gera vitórias nos treinos, nos negócios e nas arenas.'}
				</p>
			</div>
			<div style={styles.resultsGrid}>
				{results.map((result, index) => (
					<Reveal key={result.stat} style={styles.resultCard} delay={index * 80}>
						<MetricValue value={result.stat} />
						<p style={styles.muted}>{result.label[language]}</p>
					</Reveal>
				))}
			</div>
		</section>
	);
}
