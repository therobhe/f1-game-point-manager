import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/ui/buttons/BackButton/BackButton.tsx';
import { useSeasonContext } from '../../context/hooks.ts';
import { pointSystem } from '../../utils/data.ts';

/**
 * ConfigPointSystem Component
 *
 * This component allows users to select a predefined point system for a racing season
 * or navigate to a custom point system configuration page.
 *
 * @returns {JSX.Element} The rendered ConfigPointSystem component.
 */
export const ConfigPointSystem: React.FC = () => {
	const { setActivePointSystem } = useSeasonContext();
	const navigate = useNavigate();
	
	/**
	 * Sets the active point system and navigates to the first race page.
	 *
	 * @param {number[]} desiredSystem - The point system to be set as active.
	 */
	const setPointSystemAndNavigate = (desiredSystem: number[]) => {
		setActivePointSystem(desiredSystem);
		navigate('/race/1');
	};
	
	
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen p-4 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]">
			<div className="w-full max-w-4xl relative">
				
				{/* Back button to navigate to the previous page */}
				<div className="absolute left-0 md:top-0">
					<BackButton />
				</div>
				
				{/* Header section with title and description */}
				<div className="text-center mt-16 md:mt-0 mb-16">
					<h1
						className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 inline-block">
						Scoring
						<span
							className="block text-red-500 not-italic skew-x-0 tracking-widest text-xl mt-1 uppercase">System</span>
					</h1>
					<div className="h-1 w-24 bg-red-600 mx-auto mt-4 transform -skew-x-12"></div>
					<p className="mt-8 text-gray-400 text-sm italic">Choose the regulations for your championship campaign.</p>
				</div>
				
				{/* Grid of predefined point systems */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
					{[
						{ label: 'Modern', data: pointSystem.modern, desc: 'Current F1 points: 25-18-15-12-10-8-6-4-2-1' },
						{ label: 'Classic', data: pointSystem.classic, desc: '00s Era: 10-8-6-5-4-3-2-1' },
						{ label: 'Retro', data: pointSystem.retro, desc: 'Vintage Era: 10-6-4-3-2-1' }
					].map((system) => (
						<div key={system.label} className="flex flex-col items-center gap-4 group">
							
							{/* Button to select a predefined point system */}
							<button
								onClick={() => setPointSystemAndNavigate(system.data)}
								className={`
                                    relative overflow-hidden
                                    px-8 py-10 w-full
                                    bg-white/5 backdrop-blur-sm rounded-none border-l-4 border-red-600
                                    transform -skew-x-12
                                    transition-all duration-300 ease-out
                                    hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]
                                    flex items-center justify-center
                                `}
							>
								<span
									className="relative z-10 block text-2xl font-black text-white uppercase tracking-wider transform skew-x-12 italic">
									{system.label}
								</span>
								<div
									className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/30"></div>
							</button>
							
							{/* Description of the point system */}
							<p className="text-[10px] text-gray-500 text-center uppercase tracking-widest px-2">
								{system.desc}
							</p>
						</div>
					))}
				</div>
				
				{/* Button to navigate to the custom point system configuration page */}
				<div className="grid grid-cols-1 gap-6 px-4 mt-8">
					<div className="flex flex-col items-center gap-4 group">
						<button
							onClick={() => navigate('/custom-pointsystem-config')}
							className="
								relative overflow-hidden
								px-8 py-10 w-full
								bg-white/5 backdrop-blur-sm border-l-4 border-red-600
								rounded-none
								transform -skew-x-12
								transition-all duration-300 ease-out
								hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]
								flex items-center justify-center
							"
						>
							<span
								className="relative z-10 block text-2xl font-black text-white uppercase tracking-wider transform skew-x-12 italic">
								Custom
							</span>
							<div
								className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/30"></div>
						</button>
						
						{/* Description for the custom point system option */}
						<p className="text-[10px] text-gray-500 text-center uppercase tracking-widest px-2">
							Define your own point system
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
