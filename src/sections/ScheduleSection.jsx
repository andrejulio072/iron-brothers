import React, { useState } from 'react';
import HoverLift from '../components/animations/HoverLift';
import styles from '../styles/landingStyles';

export default function ScheduleSection({ language, schedule, leadMagnet }) {
	const [formData, setFormData] = useState({ name: '', email: '', goal: '', website: '' });
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formError, setFormError] = useState('');

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		setFormError('');
	};

	const handleLeadFormSubmit = async (event) => {
		event.preventDefault();
		setFormError('');

		if (!formData.name || !formData.email || !formData.goal) {
			setFormError(language === 'en' ? 'Please fill in all fields.' : 'Por favor, preencha todos os campos.');
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			setFormError(language === 'en' ? 'Please enter a valid email address.' : 'Por favor, insira um endereço de e-mail válido.');
			return;
		}

		const endpoint = (import.meta && import.meta.env && import.meta.env.VITE_LEAD_ENDPOINT)
			|| (typeof window !== 'undefined' && window.IRON_LEAD_ENDPOINT);

		if (endpoint) {
			try {
				const res = await fetch(endpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name: formData.name,
						email: formData.email,
						goal: formData.goal,
						website: formData.website || ''
					})
				});
				if (!res.ok) {
					setFormError(language === 'en' ? 'Submission failed. Please try again later.' : 'Falha no envio. Tente novamente mais tarde.');
					return;
				}
			} catch (err) {
				setFormError(language === 'en' ? 'Network error. Please try again.' : 'Erro de rede. Tente novamente.');
				return;
			}
		}

		setFormSubmitted(true);
		setFormData({ name: '', email: '', goal: '', website: '' });

		setTimeout(() => setFormSubmitted(false), 5000);
	};

	return (
		<section style={styles.section} id="schedule">
			<div style={styles.sectionHeader}>
				<span style={styles.sectionLabel}>{language === 'en' ? 'Schedule' : 'Agenda'}</span>
				<h2 style={styles.sectionTitle}>{schedule.title}</h2>
				<p style={styles.sectionSubtitle}>{schedule.subtitle}</p>
			</div>
			<div style={styles.splitSection}>
				<HoverLift as="article" style={styles.glassCard} intensity="medium">
					<h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '14px', color: '#f8fafc' }}>
						{language === 'en' ? 'What to expect' : 'O que esperar'}
					</h3>
					<ul style={styles.list}>
						{schedule.bullets.map((bullet) => (
							<li key={bullet} style={styles.bulletItem}>
								<span style={{ color: '#38bdf8' }}>▹</span>
								<span>{bullet}</span>
							</li>
						))}
					</ul>

					<div style={{ marginTop: '24px' }}>
						<a
							href="https://calendly.com/iron-brothers/discovery"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								...styles.ctaButton,
								padding: '12px 28px',
								display: 'inline-block',
								textDecoration: 'none'
							}}
						>
							{language === 'en' ? 'Book Your Discovery Call' : 'Agende sua Call de Descoberta'}
						</a>
						<p style={styles.note}>{schedule.note}</p>
					</div>
				</HoverLift>
				<HoverLift as="article" style={styles.glassCard} intensity="medium">
					<h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '12px', color: '#f8fafc' }}>{leadMagnet.headline}</h3>
					<p style={styles.muted}>{leadMagnet.description}</p>

					{formSubmitted ? (
						<div
							style={{
								padding: '18px',
								background: 'rgba(34, 197, 94, 0.15)',
								border: '1px solid rgba(34, 197, 94, 0.3)',
								borderRadius: '12px',
								marginTop: '18px'
							}}
						>
							<p style={{ color: '#86efac', fontWeight: 500 }}>{leadMagnet.successMessage}</p>
						</div>
					) : (
						<form style={styles.leadForm} onSubmit={handleLeadFormSubmit}>
							<div style={{ position: 'absolute', left: '-5000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }} aria-hidden="true">
								<label htmlFor="lead-website">Website</label>
								<input
									id="lead-website"
									type="text"
									name="website"
									tabIndex={-1}
									autoComplete="off"
									value={formData.website}
									onChange={(event) => handleInputChange('website', event.target.value)}
								/>
							</div>
							<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
								<div>
									<label htmlFor="lead-name" style={{ display: 'block', marginBottom: '6px', fontSize: '14px', color: '#cbd5e1' }}>
										{leadMagnet.fields.name.label}
									</label>
									<input
										id="lead-name"
										type="text"
										required
										value={formData.name}
										onChange={(event) => handleInputChange('name', event.target.value)}
										placeholder={leadMagnet.fields.name.placeholder}
										style={styles.leadInput}
									/>
								</div>

								<div>
									<label htmlFor="lead-email" style={{ display: 'block', marginBottom: '6px', fontSize: '14px', color: '#cbd5e1' }}>
										{leadMagnet.fields.email.label}
									</label>
									<input
										id="lead-email"
										type="email"
										required
										value={formData.email}
										onChange={(event) => handleInputChange('email', event.target.value)}
										placeholder={leadMagnet.fields.email.placeholder}
										style={styles.leadInput}
									/>
								</div>

								<div>
									<label htmlFor="lead-goal" style={{ display: 'block', marginBottom: '6px', fontSize: '14px', color: '#cbd5e1' }}>
										{leadMagnet.fields.goal.label}
									</label>
									<input
										id="lead-goal"
										type="text"
										required
										value={formData.goal}
										onChange={(event) => handleInputChange('goal', event.target.value)}
										placeholder={leadMagnet.fields.goal.placeholder}
										style={styles.leadInput}
									/>
								</div>
							</div>

							{formError && (
								<p style={{ color: '#fca5a5', fontSize: '14px', marginTop: '8px' }}>{formError}</p>
							)}

							<button type="submit" style={{ ...styles.ctaButton, padding: '12px 24px', marginTop: '16px', width: '100%' }}>
								{leadMagnet.cta}
							</button>
						</form>
					)}

					<p style={{ ...styles.leadDisclaimer, marginTop: '12px' }}>{leadMagnet.disclaimer}</p>
				</HoverLift>
			</div>
		</section>
	);
}
