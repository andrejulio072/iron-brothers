import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import IronBrothersLanding from './IronBrothersLanding';

describe('Image Loading Tests', () => {
	it('should render all pricing tier images', () => {
		render(<IronBrothersLanding />);

		// Check for pricing images by alt text
		const ascendImg = screen.queryByAltText(/Athlete starting hybrid plan/i);
		const surgeImg = screen.queryByAltText(/Intense competitor training/i);
		const apexImg = screen.queryByAltText(/Elite team preparation/i);

		expect(ascendImg).toBeTruthy();
		expect(surgeImg).toBeTruthy();
		expect(apexImg).toBeTruthy();

		// Verify images have src attributes
		if (ascendImg) expect(ascendImg.src).toBeTruthy();
		if (surgeImg) expect(surgeImg.src).toBeTruthy();
		if (apexImg) expect(apexImg.src).toBeTruthy();
	});

	it('should render all program images', () => {
		render(<IronBrothersLanding />);

		const hybridImg = screen.queryByAltText(/Hybrid athlete training/i);
		const eliteImg = screen.queryByAltText(/Podium preparation/i);
		const executiveImg = screen.queryByAltText(/Executive training/i);

		expect(hybridImg).toBeTruthy();
		expect(eliteImg).toBeTruthy();
		expect(executiveImg).toBeTruthy();

		if (hybridImg) expect(hybridImg.src).toBeTruthy();
		if (eliteImg) expect(eliteImg.src).toBeTruthy();
		if (executiveImg) expect(executiveImg.src).toBeTruthy();
	});

	it('should render all shop item images', () => {
		render(<IronBrothersLanding />);

		// Shop items use name as alt text
		const starterKitImg = screen.queryByAltText(/Hybrid Performance Starter Kit/i);
		const fuelBundleImg = screen.queryByAltText(/Executive Fuel Bundle/i);
		const apparelImg = screen.queryByAltText(/Signature Apparel Drop/i);

		expect(starterKitImg).toBeTruthy();
		expect(fuelBundleImg).toBeTruthy();
		expect(apparelImg).toBeTruthy();

		if (starterKitImg) expect(starterKitImg.src).toBeTruthy();
		if (fuelBundleImg) expect(fuelBundleImg.src).toBeTruthy();
		if (apparelImg) expect(apparelImg.src).toBeTruthy();
	});

	it('should render coach images', () => {
		render(<IronBrothersLanding />);

		const andreImg = screen.queryByAltText(/Andre Garcia/i);
		const lucasImg = screen.queryByAltText(/Lucas Gabriel/i);

		expect(andreImg).toBeTruthy();
		expect(lucasImg).toBeTruthy();

		if (andreImg) expect(andreImg.src).toBeTruthy();
		if (lucasImg) expect(lucasImg.src).toBeTruthy();
	});

	it('should render testimonial avatars', () => {
		render(<IronBrothersLanding />);

		const marinaAvatar = screen.queryByAltText(/Portrait of athlete Marina/i);
		const gabrielAvatar = screen.queryByAltText(/Portrait of founder Gabriel/i);
		const sarahAvatar = screen.queryByAltText(/Portrait of athlete Sarah/i);

		expect(marinaAvatar).toBeTruthy();
		expect(gabrielAvatar).toBeTruthy();
		expect(sarahAvatar).toBeTruthy();

		if (marinaAvatar) expect(marinaAvatar.src).toBeTruthy();
		if (gabrielAvatar) expect(gabrielAvatar.src).toBeTruthy();
		if (sarahAvatar) expect(sarahAvatar.src).toBeTruthy();
	});

	it('should render gallery images', () => {
		const { container } = render(<IronBrothersLanding />);

		// Gallery section should have multiple images
		const gallerySection = container.querySelector('#gallery');
		expect(gallerySection).toBeTruthy();

		if (gallerySection) {
			const images = gallerySection.querySelectorAll('img');
			expect(images.length).toBeGreaterThan(0);

			// Check that all images have src
			images.forEach(img => {
				expect(img.src).toBeTruthy();
			});
		}
	});
});
