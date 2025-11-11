import { useEffect, useRef } from 'react';

const useParallax = (multiplier = 0.12) => {
	const ref = useRef(null);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const el = ref.current;
		if (!el) return;
		let rafId;
		const onScroll = () => {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				const rect = el.getBoundingClientRect();
				const center = rect.top + rect.height / 2 - window.innerHeight / 2;
				const translate = center * -multiplier;
				el.style.transform = `translateY(${translate.toFixed(1)}px)`;
			});
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			cancelAnimationFrame(rafId);
		};
	}, [multiplier]);

	return ref;
};

export default useParallax;
