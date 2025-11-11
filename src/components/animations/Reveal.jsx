import React, { useEffect, useRef } from 'react';

const Reveal = ({ as = 'div', children, style = {}, delay = 0 }) => {
	const Comp = as;
	const ref = useRef(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		el.style.opacity = '0';
		el.style.transform = 'translateY(24px)';
		el.style.transition = 'opacity 700ms cubic-bezier(0.19, 1, 0.22, 1), transform 700ms cubic-bezier(0.19, 1, 0.22, 1)';
		el.style.transitionDelay = `${delay}ms`;

		if (typeof window === 'undefined' || typeof window.IntersectionObserver === 'undefined') {
			el.style.opacity = '1';
			el.style.transform = 'translateY(0)';
			return;
		}

		const io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					el.style.opacity = '1';
					el.style.transform = 'translateY(0)';
					io.unobserve(el);
				}
			});
		}, { threshold: 0.25 });

		io.observe(el);
		return () => io.disconnect();
	}, [delay]);

	return (
		<Comp ref={ref} style={style}>
			{children}
		</Comp>
	);
};

export default Reveal;
