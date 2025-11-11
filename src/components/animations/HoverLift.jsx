import React, { useState } from 'react';

const HoverLift = ({ as = 'div', children, style = {}, intensity = 'medium' }) => {
	const [hover, setHover] = useState(false);
	const Comp = as;
	const lift = intensity === 'soft'
		? { dy: 2, shadow: '0 14px 32px rgba(8, 15, 33, 0.28)' }
		: intensity === 'strong'
		? { dy: 6, shadow: '0 40px 70px rgba(8, 15, 33, 0.45)' }
		: { dy: 4, shadow: '0 28px 56px rgba(8, 15, 33, 0.38)' };

	return (
		<Comp
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={{
				transition: 'transform 200ms ease, box-shadow 220ms ease, border-color 200ms ease',
				transform: hover ? `translateY(-${lift.dy}px)` : 'translateY(0)',
				boxShadow: hover && (style.boxShadow ? lift.shadow : lift.shadow),
				border: style.border
					? hover
						? style.border.replace(/0\.25\)/, '0.38)')
						: style.border
					: undefined,
				...style,
			}}
		>
			{children}
		</Comp>
	);
};

export default HoverLift;
