import React, { useMemo, useState } from 'react';
import Reveal from '../components/animations/Reveal';
import HoverLift from '../components/animations/HoverLift';
import InteractiveButton from '../components/ui/InteractiveButton';
import styles from '../styles/landingStyles';

const codeTabs = [
	{
		id: 'react',
		label: 'React',
		code: `function Metric({ value }) {
	const [n, setN] = React.useState(0);
	React.useEffect(() => {
		let raf;
		const start = performance.now();
		const duration = 900;
		const target = Number(value) || 0;

		const step = (timestamp) => {
			const progress = Math.min((timestamp - start) / duration, 1);
			setN(Math.round(progress * target));
			if (progress < 1) raf = requestAnimationFrame(step);
		};

		raf = requestAnimationFrame(step);
		return () => cancelAnimationFrame(raf);
	}, [value]);

	return <strong>{n}</strong>;
}`
	},
	{
		id: 'javascript',
		label: 'JavaScript',
		code: `export function periodize(weeks, focus) {
	const blocks = [];
	for (let week = 1; week <= weeks; week += 1) {
		const base = focus === 'strength' ? 0.7 : 0.6;
		const increment = focus === 'strength' ? 0.02 : 0.03;
		blocks.push({ week, load: +(base + week * increment).toFixed(2) });
	}
	return blocks;
}`
	},
	{
		id: 'typescript',
		label: 'TypeScript',
		code: `type Block = { week: number; load: number };

export function deload<T extends Block>(plan: T[], percentage = 0.2): T[] {
	return plan.map((block) => ({
		...block,
		load: +(block.load * (1 - percentage)).toFixed(2)
	})) as T[];
}`
	},
	{
		id: 'ruby',
		label: 'Ruby',
		code: `def rolling_avg(values, window = 7)
	values.each_cons(window).map { |slice| (slice.sum / slice.length.to_f).round(2) }
end`
	}
];

const techCopy = {
	en: {
		run: 'Run mentally',
		note: 'Snippets are illustrative and simplified.'
	},
	pt: {
		run: 'Execute mentalmente',
		note: 'Trechos ilustrativos e simplificados.'
	}
};

function TechExamples({ language }) {
	const [activeTab, setActiveTab] = useState(codeTabs[0].id);
	const activeCode = useMemo(() => codeTabs.find((tab) => tab.id === activeTab)?.code ?? '', [activeTab]);

	return (
		<div>
			<p style={{ ...styles.sectionLabel, display: 'inline-block', marginBottom: 12 }}>{techCopy[language].run}</p>
			<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
				{codeTabs.map((tab) => (
					<InteractiveButton
						key={tab.id}
						variant={tab.id === activeTab ? 'primary' : 'secondary'}
						onClick={() => setActiveTab(tab.id)}
						style={{ padding: '8px 16px' }}
					>
						{tab.label}
					</InteractiveButton>
				))}
			</div>
			<Reveal>
				<pre
					style={{
						margin: 0,
						padding: 18,
						overflowX: 'auto',
						background: 'rgba(2,6,23,0.65)',
						borderRadius: '20px',
						border: '1px solid rgba(148,163,184,0.18)',
						fontFamily: '"Fira Code", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
						fontSize: '13px',
						lineHeight: 1.65
					}}
				>
					<code>{activeCode}</code>
				</pre>
			</Reveal>
			<p style={{ ...styles.muted, marginTop: 10 }}>{techCopy[language].note}</p>
		</div>
	);
}

export default function TechSection({ language, tech }) {
	return (
		<section style={styles.section} id="tech">
			<div style={styles.sectionHeader}>
				<span style={styles.sectionLabel}>{tech.label}</span>
				<h2 style={styles.sectionTitle}>{tech.title}</h2>
				<p style={styles.sectionSubtitle}>{tech.subtitle}</p>
			</div>
			<div style={styles.splitSection}>
				<HoverLift as="article" style={styles.glassCard} intensity="medium">
					<h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#f8fafc' }}>{tech.stackTitle}</h3>
					<p style={{ ...styles.muted, marginBottom: '16px' }}>{tech.stackSubtitle}</p>
					<ul style={{ ...styles.list, display: 'flex', flexDirection: 'column', gap: '14px' }}>
						{tech.integrations.map((integration) => (
							<li key={integration.name.en} style={{ display: 'flex', gap: '12px' }}>
								<span style={{ color: '#38bdf8' }}>▹</span>
								<div>
									<p style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>{integration.name[language]}</p>
									<p style={styles.muted}>{integration.description[language]}</p>
								</div>
							</li>
						))}
					</ul>
					<p style={{ ...styles.note, marginTop: '18px' }}>{tech.note}</p>
				</HoverLift>
				<HoverLift as="article" style={{ ...styles.glassCard, padding: '24px' }} intensity="medium">
					<TechExamples language={language} />
				</HoverLift>
			</div>
		</section>
	);
}
