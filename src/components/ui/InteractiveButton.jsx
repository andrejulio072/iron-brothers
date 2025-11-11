import React, { useState } from 'react';

const InteractiveButton = ({ variant = 'primary', children, onClick, style = {}, type = 'button' }) => {
	const [hover, setHover] = useState(false);
	const base =
		variant === 'primary'
			? {
				background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
				color: '#0f172a',
			}
			: {
				background: 'rgba(15, 23, 42, 0.7)',
				color: '#e2e8f0',
				border: '1px solid rgba(148, 163, 184, 0.35)',
			};
	const glow = hover
		? variant === 'primary'
			? '0 18px 40px rgba(96,165,250,0.45)'
			: '0 10px 26px rgba(15,23,42,0.55)'
		: variant === 'primary'
		? '0 10px 24px rgba(96,165,250,0.35)'
		: '0 6px 18px rgba(15,23,42,0.45)';

	return (
		<button
			type={type}
			onClick={onClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				border: 'none',
				borderRadius: '999px',
				padding: '12px 26px',
				fontSize: 14,
				fontWeight: 600,
				cursor: 'pointer',
				boxShadow: glow,
				transition: 'box-shadow 220ms ease, transform 120ms ease',
				transform: hover ? 'translateY(-1px)' : 'translateY(0)',
				...base,
				...style,
			}}
		>
			{children}
		</button>
	);
};

export default InteractiveButton;
