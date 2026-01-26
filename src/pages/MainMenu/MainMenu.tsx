import React from 'react';
import { Link } from 'react-router-dom';

export const MainMenu: React.FC = () => {
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
			<div className="relative mb-12 group cursor-default">
				<div
					className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
				<h1
					className="text-center relative text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12">
					F1 2014
					<span className="block text-2xl md:text-3xl font-bold tracking-widest text-red-500 mt-2 not-italic skew-x-0">
						Season Manager
					</span>
				</h1>
			</div>
			
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
					New Season
				</span>
				<div
					className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50"></div>
			</Link>
			
			<p className="mt-16 text-gray-500 text-sm font-mono opacity-50">
				Developed by F1 Fans for F1 Fans
			</p>
		</div>
	);
};
