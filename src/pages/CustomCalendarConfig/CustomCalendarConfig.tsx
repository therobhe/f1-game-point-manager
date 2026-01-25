import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarPreview } from '../../components/CalendarPreview/CalendarPreview.tsx';

import { BackButton } from '../../components/ui/buttons/BackButton/BackButton.tsx';
import { ResetCalendarButton } from '../../components/ui/buttons/ResetCalendarButton/ResetCalendarButton.tsx';
import { TrackCard } from '../../components/ui/cards/TrackCard/TrackCard.tsx';
import { useSeasonContext } from '../../context/hooks.ts';
import { tracks } from '../../utils/data.ts';

/**
 * CustomCalendarConfig Component
 *
 * This component allows users to configure a custom race calendar by selecting tracks.
 * Users can view a preview of the calendar, reset the calendar, and proceed to the next step.
 *
 * @returns {JSX.Element} The rendered CustomCalendarConfig component.
 */
export const CustomCalendarConfig: React.FC = () => {
	const { raceCalendar } = useSeasonContext();
	const isCalendarEmpty = !raceCalendar || raceCalendar.length === 0;
	
	/**
	 * Renders a list of TrackCard components for all available tracks.
	 *
	 * @returns {JSX.Element[]} An array of TrackCard components.
	 */
	const renderTrackCards = () => {
		return tracks.map(track =>
			<TrackCard key={track.id} {...track} />
		);
	};
	
	return (
		<div className="flex flex-col min-h-screen p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] pb-32">
			<div className="w-full max-w-6xl mx-auto relative">
				
				{/* Back button to navigate to the previous page */}
				<div className="absolute left-0 md:top-0">
					<BackButton />
				</div>
				
				{/* Header section with title and description */}
				<div className="text-center mt-16 md:mt-0 mb-8">
					<h1
						className="text-3xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 inline-flex flex-col md:gap-4">
						Track
						<span
							className="block text-red-500 not-italic skew-x-0 tracking-widest text-lg md:text-2xl uppercase">Selection</span>
					</h1>
				</div>
				
				{/* Instructional message */}
				<div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-8 backdrop-blur-sm">
					<p className="text-gray-400 text-sm leading-relaxed text-center italic">
						Click on the cards to add a track to the calendar. You do not have to use all the tracks (we all know the
						perfect amount of races is 16).
					</p>
				</div>
				
				{/* Track selection grid and calendar preview */}
				<div className="flex flex-col lg:flex-row gap-8 items-start">
					<div className="flex-1">
						<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
							{renderTrackCards()}
						</div>
					</div>
					
					<CalendarPreview />
				</div>
				
				{/* Footer with reset and continue buttons */}
				<div
					className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-md z-50">
					<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
						<ResetCalendarButton />
						
						{/* Continue button, disabled if the calendar is empty */}
						<Link
							to={isCalendarEmpty ? '#' : '/points'}
							className={`
        relative overflow-hidden group
        px-16 py-3
        bg-red-600 rounded-none border-l-4 border-white
        transform -skew-x-12
        transition-all duration-300 ease-out
                                ${isCalendarEmpty ? 'opacity-30 cursor-not-allowed contrast-50 grayscale' : 'hover:bg-red-700 hover:scale-105'}
                                flex items-center justify-center
                                min-w-[200px]
       `}
							onClick={(e) => isCalendarEmpty && e.preventDefault()}
						>
              <span
	              className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform skew-x-12">
                Continue
              </span>
							{!isCalendarEmpty && <div
								className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50"></div>}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
