import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../../components/seo';
import { BackButton } from '../../components/ui/buttons/BackButton/BackButton';
import { PAGE_SEO } from '../../config/seoConfig';
import { useSeasonContext } from '../../context/hooks';

/**
 * CustomPointSystemConfig Component
 *
 * This component allows users to configure a custom point system for a racing season.
 * Users can adjust points for each finishing position and submit the configuration.
 *
 * @returns {JSX.Element} The rendered CustomPointSystemConfig component.
 */
export const CustomPointSystemConfig: React.FC = () => {
	const { setActivePointSystem } = useSeasonContext();
	const navigate = useNavigate();
	const [points, setPoints] = useState<number[]>(Array(22).fill(0));

	/**
	 * Handles changes in the input fields for points.
	 *
	 * @param {number} index - The index of the position being updated.
	 * @param {string} value - The new value entered by the user.
	 */
	const handleInputChange = (index: number, value: string) => {
		const newPoints = [...points];
		newPoints[index] = parseInt(value) || 0;
		setPoints(newPoints);
	};

	/**
	 * Adjusts the points for a specific position by a given delta.
	 *
	 * @param {number} index - The index of the position being updated.
	 * @param {number} delta - The amount to adjust the points by (e.g., +1 or -1).
	 */
	const handlePointChange = (index: number, delta: number) => {
		setPoints(prevPoints => {
			const newPoints = [...prevPoints];
			newPoints[index] = (newPoints[index] || 0) + delta;
			return newPoints;
		});
	};

	/**
	 * Handles the form submission to save the custom point system and navigate to the race page.
	 *
	 * @param {React.FormEvent} e - The form submission event.
	 */
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setActivePointSystem(points);
		navigate('/race/1');
	};

	return (
		<>
			<SEO
				title={PAGE_SEO.customPointSystem.title}
				description={PAGE_SEO.customPointSystem.description}
				robots={PAGE_SEO.customPointSystem.robots}
			/>
			<main
				className="flex flex-col items-center justify-center min-h-screen p-4 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]">
				<div className="w-full max-w-4xl relative">
					{/* Back button to navigate to the previous page */}
					<nav className="absolute left-0 md:top-0" aria-label="Back navigation">
						<BackButton />
					</nav>

					{/* Header section with title and description */}
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

					{/* Form to configure points for each position */}
					<form onSubmit={handleSubmit} className="w-full">
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
							{points.map((point, index) => {
								const position = index + 1;
								const inputId = `points-pos-${position}`;

								return (
									<div key={index} className="flex flex-col items-center gap-2">
										{/* Linked label using htmlFor */}
										<label
											htmlFor={inputId}
											className="text-gray-500 text-xs uppercase tracking-wider italic"
										>
											Pos {position}
										</label>
										<div className="flex items-center justify-center">
											{/* Button to decrease points */}
											<button
												type="button"
												aria-label={`Decrease points for position ${position}`}
												onClick={() => handlePointChange(index, -1)}
												disabled={point === 0}
												className="w-10 py-3 bg-white/10 text-white font-bold rounded-l-md rounded-r-none hover:bg-red-600 transition-colors disabled:opacity-50"
											>
												<span className="inline-block">−</span>
											</button>

											{/* Input with id matching label and proper name attribute */}
											<input
												id={inputId}
												name={`points_pos_${position}`}
												type="number"
												value={point}
												min={0}
												step={1}
												onChange={(e) => handleInputChange(index, e.target.value)}
												className="w-20 bg-white/5 border-y-2 border-red-600 text-white text-center py-3 font-bold text-xl focus:outline-none focus:bg-white/10 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
											/>

											{/* Button to increase points */}
											<button
												type="button"
												aria-label={`Increase points for position ${position}`}
												onClick={() => handlePointChange(index, 1)}
												className="w-10 py-3 bg-white/10 text-white font-bold rounded-r-md rounded-l-none hover:bg-red-600 transition-colors"
											>
												<span className="inline-block">+</span>
											</button>
										</div>
									</div>
								);
							})}
						</div>

						{/* Submit button to save the configuration */}
						<div className="flex justify-center">
							<button
								type="submit"
								className="
        relative overflow-hidden group
        px-16 py-3
        bg-red-600 rounded-none border-l-4 border-white
        transform transform-gpu
        transition-all duration-300 ease-out
        hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]
        flex items-center justify-center
        min-w-50"
							>
								<span
									className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform">
									Start Season
								</span>
							</button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
};
