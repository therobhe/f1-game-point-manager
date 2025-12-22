import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/ui/buttons/BackButton.tsx';
import { useSeasonContext } from '../context/hooks.ts';
import { pointSystem } from '../utils/data.ts';

export const ConfigPointsystem: React.FC = () => {
	const { setActivePointSystem } = useSeasonContext();
	const navigate = useNavigate();

	const setPointSystemAndNavigate = (desiredSystem: number[]) => {
		setActivePointSystem(desiredSystem);
		navigate('/race/1');
	};

	/*Todo: implement option for custom scoring*/
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
			<div className="w-full max-w-4xl relative">
				<div className="absolute -top-12 left-0 md:top-0">
					<BackButton />
				</div>

				<div className="text-center mt-16 md:mt-0 mb-16">
					<h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 inline-block">
						Scoring
						<span className="block text-red-500 not-italic skew-x-0 tracking-widest text-xl mt-1 uppercase">System</span>
					</h1>
					<div className="h-1 w-24 bg-red-600 mx-auto mt-4 transform -skew-x-12"></div>
					<p className="mt-8 text-gray-400 text-sm italic">Choose the regulations for your championship campaign.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
					{[
						{ label: 'Modern', data: pointSystem.modern, desc: 'Current F1 points: 25-18-15-12-10-8-6-4-2-1' },
						{ label: 'Classic', data: pointSystem.classic, desc: '90s-00s Era: 10-8-6-5-4-3-2-1' },
						{ label: 'Retro', data: pointSystem.retro, desc: 'Vintage Era: 10-6-4-3-2-1' }
					].map((system) => (
						<div key={system.label} className="flex flex-col items-center gap-4 group">
							<button
								onClick={() => setPointSystemAndNavigate(system.data)}
								className={`
                                    relative overflow-hidden
                                    px-8 py-10 w-full
                                    ${system.label === 'Modern' ? 'bg-red-600' : 'bg-white/5 backdrop-blur-sm border-l-4 border-red-600'}
                                    rounded-none ${system.label === 'Modern' ? 'border-l-4 border-white' : ''}
                                    transform -skew-x-12
                                    transition-all duration-300 ease-out
                                    hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]
                                    flex items-center justify-center
                                `}
							>
								<span className="relative z-10 block text-2xl font-black text-white uppercase tracking-wider transform skew-x-12 italic">
									{system.label}
								</span>
								<div className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/30"></div>
							</button>
							<p className="text-[10px] text-gray-500 text-center uppercase tracking-widest px-2">
								{system.desc}
							</p>
						</div>
					))}
				</div>

				<div className="mt-20 text-center">
					<p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] opacity-50">
						Custom scoring regulations coming soon
					</p>
				</div>
			</div>
		</div>
	);
};
