import React from 'react';
import { Link } from 'react-router-dom';

import { BackButton } from '../components/ui/buttons/BackButton.tsx';
import { ResetCalendarButton } from '../components/ui/buttons/ResetCalendarButton.tsx';
import { TrackCard } from '../components/ui/cards/TrackCard.tsx';
import { tracks } from '../utils/data.ts';

export const CustomCalendarConfig: React.FC = () => {
	/*Todo: disable link if calendar length === 0*/
	const renderTrackCards = () => {
		return tracks.map(track =>
			<TrackCard key={track.id} {...track} />
		);
	};
	return (
		<div className="flex flex-col gap-6 p-4 pb-24"> {/* Added pb-24 for safe scrolling area */}
			<div className="flex justify-between items-center">
				<BackButton />
				<h1 className="text-2xl font-bold text-white">Custom Calendar Config</h1>
			</div>

			<p className="text-gray-300 text-sm text-center max-w-2xl mx-auto">
				Click on the cards to add a track to the calendar. You do not have to use all the tracks (we all know the perfect amount of races is 16).
			</p>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
				{renderTrackCards()}
			</div>

			<div className="flex flex-col items-center gap-4 mt-8 pt-6 border-t border-white/10 w-full">
				<ResetCalendarButton />
				<Link
					to="/points"
					className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
				>
					Next
				</Link>
			</div>
		</div>
	);
};
