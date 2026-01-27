import React, { useEffect, useState } from 'react';

type ImageProps = {
	images: {src: string, alt: string}[];
};

/**
 * ImageSlider component for the Landing Page.
 * Displays a carousel of images with automatic sliding and manual navigation.
 *
 * @component
 * @returns {JSX.Element} The rendered ImageSlider component.
 */
const ImageSlider: React.FC<ImageProps> = ({ images }) => {
	const [ activeIndex, setActiveIndex ] = useState(0);
	const hasImages = Array.isArray(images) && images.length > 0;
	
	// Even if we early-return later when there are no images, hooks must be called unconditionally.
	useEffect(() => {
		if(!hasImages) return;
		
		// Only set up the interval when we have at least one image
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 10000);
		
		return () => clearInterval(interval);
	}, [ images.length, hasImages ]);
	
	// If there are no images, render nothing (guard against division by zero in modulo ops)
	if(!hasImages) {
		return null;
	}
	
	// Normalize activeIndex for renders so we never rely on state being within bounds
	const displayIndex = activeIndex % images.length;
	
	const goToPrevious = () => {
		if(!hasImages) return;
		setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};
	
	const goToNext = () => {
		if(!hasImages) return;
		setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
	};
	
	const goToSlide = (index: number) => {
		if(!hasImages) return;
		setActiveIndex(Math.max(0, Math.min(index, images.length - 1)));
	};
	
	return (
		<div className="relative w-full mb-8">
			{/* Image Container */}
			<div className="relative overflow-hidden rounded-lg border border-gray-800">
				{images.map((image, index) => (
					<img
						key={index}
						src={image.src}
						alt={image.alt}
						className={`w-full h-auto object-cover transition-opacity duration-500 ease-in-out ${
							index === displayIndex
								? 'opacity-100'
								: 'opacity-0 absolute top-0 left-0'
						}`}
					/>
				))}
				
				{/* Previous Button */}
				<button
					onClick={goToPrevious}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
					aria-label="Previous image"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
				</button>
				
				{/* Next Button */}
				<button
					onClick={goToNext}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
					aria-label="Next image"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>
			
			{/* Dot Navigation */}
			<div className="flex justify-center mt-4 space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-3 h-3 rounded-full border-2 border-gray-400 transition-colors ${
							index === displayIndex
								? 'bg-gray-400'
								: 'bg-transparent hover:border-gray-300'
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
