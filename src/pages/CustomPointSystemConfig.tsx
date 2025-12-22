import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/ui/buttons/BackButton';
import { useSeasonContext } from '../context/hooks';

export const CustomPointSystemConfig: React.FC = () => {
	const { setActivePointSystem } = useSeasonContext();
	const navigate = useNavigate();
	
	// 22 positions initialized to 0
	const [ points, setPoints ] = useState<number[]>(Array(22).fill(0));
	
	const handleInputChange = (index: number, value: string) => {
		const newPoints = [ ...points ];
		newPoints[index] = parseInt(value) || 0;
		setPoints(newPoints);
	};
	
	const handlePointChange = (index: number, delta: number) => {
		setPoints(prevPoints => {
			const newPoints = [ ...prevPoints ];
			newPoints[index] = (newPoints[index] || 0) + delta;
			return newPoints;
		});
	};
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setActivePointSystem(points);
		navigate('/race/1');
	};
	
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen p-4 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]">
			<div className="w-full max-w-4xl relative">
				<div className="absolute left-0 md:top-0">
					<BackButton />
				</div>
				
				<div className="text-center mt-16 md:mt-0 mb-12">
					<h1
						className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform inline-block">
						Custom
						<span
							className="block text-red-500 not-italic skew-x-0 tracking-widest text-xl mt-1 uppercase">Scoring</span>
					</h1>
					<div className="h-1 w-24 bg-red-600 mx-auto mt-4 transform"></div>
					<p className="mt-8 text-gray-400 text-sm italic">Define points for each finishing position.</p>
				</div>
				
				<form onSubmit={handleSubmit} className="w-full">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
						{points.map((point, index) => (
							<div key={index} className="flex flex-col items-center gap-2">
								<label className="text-gray-500 text-xs uppercase tracking-wider italic">
									Pos {index + 1}
								</label>
								<div className="flex items-center justify-center gap-1">
									<button
										type="button"
										onClick={() => handlePointChange(index, -1)}
										className="px-3 py-1 bg-white/10 text-white font-bold rounded-md hover:bg-red-600 transition-colors transform"
									>
										<span className="inline-block transform">-</span>
									</button>
									<input
										type="number"
										value={point}
										onChange={(e) => handleInputChange(index, e.target.value)}
										className="w-20 bg-white/5 border-l-4 border-red-600 text-white text-center py-3 font-bold text-xl focus:outline-none focus:bg-white/10 transition-colors"
									/>
									<button
										type="button"
										onClick={() => handlePointChange(index, 1)}
										className="px-3 py-1 bg-white/10 text-white font-bold rounded-md hover:bg-red-600 transition-colors transform"
									>
										<span className="inline-block transform">+</span>
									</button>
								</div>
							</div>
						))}
					</div>
					
					<div className="flex justify-center">
						<button
							type="submit"
							className="
								relative overflow-hidden group
								px-16 py-3
								bg-blue-600 rounded-none border-l-4 border-white
								transform
								transition-all duration-300 ease-out
                                hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]
                                flex items-center justify-center
                                min-w-50
                            "
						>
							<span
								className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform">
								Start Season
							</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

