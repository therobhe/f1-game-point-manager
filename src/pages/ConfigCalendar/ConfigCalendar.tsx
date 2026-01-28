import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../../components/seo';
import { BackButton } from '../../components/ui/buttons/BackButton/BackButton.tsx';
import { PAGE_SEO } from '../../config/seoConfig';
import { useSeasonContext } from '../../context/hooks.ts';
import { tracks } from '../../utils/data.ts';

export const ConfigCalendar: React.FC = () => {
	const { setRaceCalendar } = useSeasonContext();
	const navigate = useNavigate();
	/**
	 * Selects the full 2014 season by setting the race calendar to the predefined `tracks` array
	 * and navigates the user to the points system page.
	 */
	const selectFullSeasonAndGoToPointsystem = () => {
		setRaceCalendar(tracks);
		navigate('/points');
	};

	/**
	 * Navigates the user to the custom calendar creation screen.
	 */
	const goToCalendarCreationScreen = () => {
		navigate('/custom-calendar');
	};

	return (
		<>
			<SEO
				title={PAGE_SEO.configCalendar.title}
				description={PAGE_SEO.configCalendar.description}
				robots={PAGE_SEO.configCalendar.robots}
			/>
			<main
				className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]">
				<div className="w-full max-w-4xl relative">
					<nav className="absolute left-0 md:top-0" aria-label="Back navigation">
						<BackButton />
					</nav>

					<div className="text-center mt-16 md:mt-0 mb-16">
						<h1
							className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 inline-block">
							Season
							<span
								className="block text-red-500 not-italic skew-x-0 tracking-widest text-xl mt-1 uppercase">Configuration</span>
						</h1>
						<div className="h-1 w-24 bg-red-600 mx-auto mt-4 transform -skew-x-12"></div>
					</div>

					<div className="flex flex-col md:flex-row gap-12 justify-center items-stretch px-4">
						{/* Option 1: Full Season */}
						<div className="flex-1 flex flex-col items-center gap-6 group">
							<button
								onClick={selectFullSeasonAndGoToPointsystem}
								className="
								relative overflow-hidden
                px-8 py-10 w-full
                bg-white/5 backdrop-blur-sm rounded-none border-l-4 border-red-600
                transform -skew-x-12
                transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]
                flex items-center justify-center
							"
							>
								<span
									className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform skew-x-12 text-center leading-tight">
									Full 2014<br />Season
								</span>
								<div
									className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50"></div>
							</button>
							<p className="text-gray-400 text-sm text-center leading-relaxed italic">
								Load the official 19-track calendar for the complete championship experience.
							</p>
						</div>

						{/* Option 2: Custom */}
						<div className="flex-1 flex flex-col items-center gap-6 group">
							<button
								onClick={goToCalendarCreationScreen}
								className="
								relative overflow-hidden
                px-8 py-10 w-full
                bg-white/5 backdrop-blur-sm rounded-none border-l-4 border-red-600
                rounded-none
                transform -skew-x-12
                transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]
                flex items-center justify-center
							"
							>
								<span
									className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform skew-x-12 text-center leading-tight">
									Custom<br />Calendar
								</span>
								<div
									className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50"></div>
							</button>
							<p className="text-gray-400 text-sm text-center leading-relaxed italic">
								Hand-pick your favorite circuits and build your own championship.
							</p>
						</div>
					</div>

					<div className="mt-20 text-center">
						<div
							className="inline-block p-1 rounded-full bg-white/5 border border-white/10 transition-colors hover:border-red-500/50 cursor-help group">
							<span
								className="px-4 py-1 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 group-hover:text-red-400">
								Select an option to proceed
							</span>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
