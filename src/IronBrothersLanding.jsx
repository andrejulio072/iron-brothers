import React, { useMemo, useState } from 'react';
import useParallax from './hooks/useParallax';
import styles from './styles/landingStyles';
import NavigationBar from './layout/NavigationBar';
import FooterSection from './layout/FooterSection';
import HeroSection from './sections/HeroSection';
import ShowcaseSection from './sections/ShowcaseSection';
import GallerySection from './sections/GallerySection';
import TrustSection from './sections/TrustSection';
import ProgramsSection from './sections/ProgramsSection';
import CoachesSection from './sections/CoachesSection';
import ResultsSection from './sections/ResultsSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ShopSection from './sections/ShopSection';
import ScheduleSection from './sections/ScheduleSection';
import FaqSection from './sections/FaqSection';
import ApplySection from './sections/ApplySection';
import {
	navItems,
	heroCopy,
	metrics,
	heroImages,
	trustBadges,
	programs,
	coaches,
	results,
	pricingTiers,
	testimonials,
	faqs,
	scheduleCopy,
	leadMagnetCopy,
	shopPreview,
	ctaCopy,
	footerCopy
} from './content/landingContent';

export default function IronBrothersLanding() {
	const [language, setLanguage] = useState('en');
	const [showMore, setShowMore] = useState(false);

	const handleToggleLanguage = () => {
		setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'));
	};

	const handleGalleryToggle = () => {
		setShowMore((value) => !value);
	};

	const hero = useMemo(() => heroCopy[language], [language]);
	const cta = useMemo(() => ctaCopy[language], [language]);
	const schedule = useMemo(() => scheduleCopy[language], [language]);
	const leadMagnet = useMemo(() => leadMagnetCopy[language], [language]);
	const shop = useMemo(() => shopPreview[language], [language]);
	const footer = useMemo(() => footerCopy[language], [language]);
	const backdropRef = useParallax(0.05);

	return (
		<div style={styles.page} lang={language === 'pt' ? 'pt-BR' : 'en-US'}>
			<div style={styles.backdrop} aria-hidden="true" ref={backdropRef} />
			<div style={styles.content}>
				<NavigationBar language={language} onToggleLanguage={handleToggleLanguage} navItems={navItems} />
				<HeroSection language={language} hero={hero} heroImages={heroImages} metrics={metrics} />
				<ShowcaseSection language={language} />
				<GallerySection language={language} showMore={showMore} onToggleShowMore={handleGalleryToggle} />
				<TrustSection language={language} trustBadges={trustBadges} />
				<ProgramsSection language={language} programs={programs} />
				<CoachesSection language={language} coaches={coaches} />
				<ResultsSection language={language} results={results} />
				<PricingSection language={language} pricingTiers={pricingTiers} />
				<TestimonialsSection language={language} testimonials={testimonials} />
				<ShopSection language={language} shop={shop} />
				<ScheduleSection language={language} schedule={schedule} leadMagnet={leadMagnet} />
				<FaqSection language={language} faqs={faqs} />
				<ApplySection cta={cta} />
				<FooterSection footer={footer} />
			</div>
		</div>
	);
}
