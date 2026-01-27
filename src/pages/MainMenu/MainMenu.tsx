import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenu: React.FC = () => {
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
			<div className="max-w-2xl w-full">
				{/* Headline with nostalgia hook */}
				<div className="relative mb-8 group cursor-default">
					<div
						className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
					<h1
						className="text-center relative text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12">
						Restore split-screen<br />season tracking in F1 2014
					</h1>
				</div>
				
				{/* Sub-line */}
				<p className="text-center text-gray-400 text-sm md:text-base mb-8 px-4">
					A tiny web tool inspired by the split-screen seasons that still worked in F1 2011.
				</p>
				
				{/* Short explanation */}
				<div className="bg-[#1a1a1a]/50 border border-gray-800 rounded p-6 mb-8 text-gray-300 leading-relaxed">
					<p className="mb-3">
						In F1 2011, local split-screen players could run full seasons with proper championship points.
					</p>
					<p className="mb-3">
						This feature was removed in later games, including F1 2014.
					</p>
					<p>
						This free, open-source web app lets you manually track custom seasons so couch co-op still works.
					</p>
				</div>
				
				{/* Trust & transparency box */}
				<div className="bg-[#1a1a1a]/50 border border-gray-800 rounded p-6 mb-8">
					<h2 className="text-white font-bold text-lg mb-3">About this tool</h2>
					<ul className="text-gray-300 space-y-2 text-sm">
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>No account required</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>No ads, no tracking, no data stored</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>Runs entirely in your browser</span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>Source code available on <a href="https://github.com/therobhe/f1-game-point-manager" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">GitHub</a></span>
						</li>
						<li className="flex items-start">
							<span className="text-green-500 mr-2">✓</span>
							<span>Hosted on Netlify</span>
						</li>
					</ul>
				</div>
				
				{/* The button */}
				<div className="flex flex-col items-center">
					<Link
						to="/track-config"
						className="
							relative overflow-hidden group
							px-12 py-4 
							bg-red-600 rounded-none border-l-4 border-white
							transform -skew-x-12
							transition-all duration-300 ease-out
							hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]
						"
					>
						<span className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform skew-x-12">
							→ Start Season Tracker
						</span>
						<div
							className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50"></div>
					</Link>
					<p className="mt-3 text-gray-500 text-xs text-center">
						(You can bookmark the tracker directly after opening it)
					</p>
				</div>
			</div>
			
			{/* Tiny footer */}
			<p className="mt-16 text-gray-500 text-sm text-center">
				Made by a fellow F1 2014 split-screen player
			</p>
		</div>
	);
};
