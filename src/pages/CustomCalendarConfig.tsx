import React from 'react';
import { Link } from 'react-router-dom';

import { BackButton } from '../components/ui/buttons/BackButton.tsx';
import { ResetCalendarButton } from '../components/ui/buttons/ResetCalendarButton.tsx';
import { TrackCard } from '../components/ui/cards/TrackCard.tsx';
import { useSeasonContext } from '../context/hooks.ts';
import { tracks } from '../utils/data.ts';

export const CustomCalendarConfig: React.FC = () => {
	const { raceCalendar } = useSeasonContext();
	const renderTrackCards = () => {
		return tracks.map(track =>
			<TrackCard key={track.id} {...track} />
		);
	};

	const isCalendarEmpty = !raceCalendar || raceCalendar.length === 0;

	return (
		<div className="flex flex-col min-h-screen p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] pb-32">
			<div className="w-full max-w-6xl mx-auto relative">
				<div className="flex items-center mb-8">
					<BackButton />
					<div className="ml-6">
						<h1 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 inline-flex flex-col md:flex-row md:items-baseline md:gap-4">
							Track
							<span className="block md:inline-block text-red-500 not-italic skew-x-0 tracking-widest text-lg md:text-2xl uppercase">Selection</span>
						</h1>
					</div>
				</div>

				<div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 backdrop-blur-sm">
					<p className="text-gray-400 text-sm leading-relaxed text-center italic">
						"Click on the cards to add a track to the calendar. You do not have to use all the tracks (we all know the perfect amount of races is 16)."
					</p>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
					{renderTrackCards()}
				</div>

				{/* Floating Bottom Navigation Block */}
				<div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-md z-50">
					<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
						<ResetCalendarButton />

						<Link
							to={isCalendarEmpty ? "#" : "/points"}
							className={`
								relative overflow-hidden group
								px-16 py-3 
								bg-blue-600 rounded-none border-l-4 border-white
								transform -skew-x-12
								transition-all duration-300 ease-out
                                ${isCalendarEmpty ? 'opacity-30 cursor-not-allowed contrast-50 grayscale' : 'hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]'}
                                flex items-center justify-center
                                min-w-[200px]
							`}
							onClick={(e) => isCalendarEmpty && e.preventDefault()}
						>
							<span className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform skew-x-12">
								Continue
							</span>
							{!isCalendarEmpty && <div className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-800/50"></div>}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
