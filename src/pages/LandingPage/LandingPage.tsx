import React from 'react';
import Features from '../../components/LandingPage/Features.tsx';
import Header from '../../components/LandingPage/Header.tsx';
import Motivation from '../../components/LandingPage/Motivation.tsx';
import StartButton from '../../components/LandingPage/StartButton.tsx';
import { SEO, StructuredData } from '../../components/seo';
import ImageSlider from '../../components/ui/ImageSlider.tsx';
import { PAGE_SEO, STRUCTURED_DATA } from '../../config/seoConfig';
import { homepageImages } from '../../utils/data.ts';

export const LandingPage: React.FC = () => {
	return (
		<>
			<SEO
				title={PAGE_SEO.home.title}
				description={PAGE_SEO.home.description}
				robots={PAGE_SEO.home.robots}
			/>
			<StructuredData data={[STRUCTURED_DATA.website, STRUCTURED_DATA.webApplication]} />
			<main
				className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
				<article className="max-w-2xl w-full">
					<Header />
					<p className="text-center text-gray-400 text-sm md:text-base mb-8 px-4">
						Restore split-screen season tracking in F1 2014 with this tiny web tool inspired by the split-screen seasons
						features from F1 2011.
					</p>
					<Motivation />
					<ImageSlider images={homepageImages} />
					<Features />
					<StartButton />
				</article>
				<footer className="mt-16 text-gray-500 text-sm text-center">
					Made by a fellow F1 &amp; couch co-op lover.
				</footer>
			</main>
		</>
	);
};
