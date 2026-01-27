import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
			<div className="max-w-2xl w-full">
				{/* Headline with nostalgia hook */}
				<div className="relative mb-8 group cursor-default">
					<div
						className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
					<h1
						className="text-center relative text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12">
						F1 2014
						<span
							className="block text-2xl md:text-3xl font-bold tracking-widest text-red-500 mt-2 not-italic skew-x-0">
						Season Manager
					</span>
					</h1>
				</div>
				
				{/* Sub-line */}
				<p className="text-center text-gray-400 text-sm md:text-base mb-8 px-4">
					Restore split-screen season tracking in F1 2014 with this tiny web tool inspired by the split-screen seasons
					features from F1 2011.
				</p>
				
				{/* Short explanation */}
				<div className="bg-[#1a1a1a]/50 border border-gray-800 rounded p-6 mb-8 text-gray-300 leading-relaxed">
					<h2 className="text-white font-bold text-lg mb-3">Why does this tool exist?</h2>
					<p className="mb-3">
						I loved playing split-screen seasons with my little brother in F1 2011. At the time my Xbox 360 died, F1
						2014
						was the only F1 title available on Xbox One that featured split-screen mode.
					</p>
					<p className="mb-3">
						However, we were shocked that could only do one race before returning back to main menu, effectively killing
						the season aspect in F1 2014.
					</p>
					<p className="mb-3">
						So I coded this app.... and never made it public. But if there is just one soul searching for something like
						this - here you go!
					</p>
				</div>
				
				{/*image carousel*/}
				
				{/* Trust & transparency box */}
				<div className="bg-[#1a1a1a]/50 border border-gray-800 rounded p-6 mb-8">
					<h2 className="text-white font-bold text-lg mb-3">Features</h2>
					<ul className="text-gray-300 space-y-2 text-sm">
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>Track the official 2014 season calendar or create your custom calendar</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>You can choose between 3 different point systems</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>Free, no ads, no tracking, no data stored, no account required, runs in you browser</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>Source code available on <a href="https://github.com/therobhe/f1-game-point-manager" target="_blank"
							                                  rel="noopener noreferrer"
							                                  className="text-blue-400 hover:text-blue-300 underline">GitHub</a></span>
						</li>
					</ul>
				</div>
				
				{/* The button */}
				<div
					className="fixed left-6 bottom-14 z-50 flex-col items-center md:relative md:left-auto md:bottom-auto md:flex">
					<Link
						to="/track-config"
						className="inline-flex relative overflow-hidden group px-12 py-4 bg-red-600 rounded-none border-l-4 border-white transform -skew-x-12 transition-all duration-300 ease-out hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
					>
				    <span
					    className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform skew-x-12">
				      Start your season
				    </span>
						<div
							className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50" />
					</Link>
				</div>
			</div>
			
			{/* Tiny footer */}
			<p className="mt-16 text-gray-500 text-sm text-center">
				Made by a fellow F1 & couch co-op lover.
			</p>
		</div>
	);
};
