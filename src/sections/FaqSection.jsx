import React from 'react';
import styles from '../styles/landingStyles';

export default function FaqSection({ language, faqs }) {
	return (
		<section style={styles.section} id="faq">
			<div style={styles.sectionHeader}>
				<span style={styles.sectionLabel}>{language === 'en' ? 'FAQ' : 'Perguntas'}</span>
				<h2 style={styles.sectionTitle}>
					{language === 'en' ? 'Answers before you apply' : 'Respostas antes de aplicar'}
				</h2>
				<p style={styles.sectionSubtitle}>
					{language === 'en'
						? 'Still deciding? These are the questions we hear most from high-performing athletes and professionals.'
						: 'Ainda em dúvida? Estas são as perguntas mais comuns de atletas e profissionais de alta performance.'}
				</p>
			</div>
			<div>
				{faqs.map((faq) => (
					<article key={faq.question.en} style={styles.faqItem}>
						<h3 style={styles.faqQuestion}>{faq.question[language]}</h3>
						<p style={styles.muted}>{faq.answer[language]}</p>
					</article>
				))}
			</div>
		</section>
	);
}
