import React, { useEffect, useState } from 'react';

const MetricValue = ({ value }) => {
	const [display, setDisplay] = useState(value);

	useEffect(() => {
		const match = String(value).match(/^([0-9\.]+)(.*)$/);
		if (!match) return;
		const target = parseFloat(match[1]);
		const suffix = match[2];
		let startTs;
		const duration = 1200;
		const step = (ts) => {
			if (!startTs) startTs = ts;
			const progress = Math.min((ts - startTs) / duration, 1);
			const current = Math.round(progress * target);
			setDisplay(`${current}${suffix}`);
			if (progress < 1) requestAnimationFrame(step);
		};
		requestAnimationFrame(step);
	}, [value]);

	return <div style={{ fontSize: '34px', fontWeight: 700, color: '#60a5fa', marginBottom: '6px' }}>{display}</div>;
};

export default MetricValue;
