import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NextRaceButton } from '../components/ui/buttons/NextRaceButton.tsx';
import { DriverCard } from '../components/ui/cards/DriverCard.tsx';
import { useSeasonContext } from '../context/hooks.ts';
import { drivers } from '../utils/data.ts';

export const RaceResult: React.FC = () => {
	const { raceId } = useParams<{ raceId: string }>();
	const { setDriverPoints, activePointSystem, raceCalendar } = useSeasonContext();
	const [assignedDriverIds, setAssignedDriverIds] = useState<number[]>([]);

	// Find the current track from the race calendar
	const currentTrack = raceCalendar[Number(raceId) - 1];
	const pointsArray = activePointSystem ?? [];
	const nextPosition = assignedDriverIds.length;

	const handleDriverClick = (driverId: number) => {
		if (nextPosition >= pointsArray.length) return;
		if (assignedDriverIds.includes(driverId)) return;

		setDriverPoints(prev => ({
			...prev,
			[driverId]: prev[driverId] + pointsArray[nextPosition]
		}));

		setAssignedDriverIds(ids => [...ids, driverId]);
	};

	const renderDriverCards = () => {
		return drivers.map(driver => (
			<DriverCard
				key={driver.id}
				{...driver}
				onClick={() => handleDriverClick(driver.id)}
				disabled={assignedDriverIds.includes(driver.id) || nextPosition >= pointsArray.length}
			/>
		));
	};

	if (!currentTrack) {
		return <div>No track found for this race.</div>;
	}

	const isRaceComplete = nextPosition >= pointsArray.length;
	// NextRaceButton handles the logic for next race or finish internally based on current raceId and calendar length.

	return (
		<div className="flex flex-col gap-6 p-4 pb-12">
			<h1 className="text-3xl font-bold text-center text-white mb-2">Race Result for Event: {currentTrack.name}</h1>
			<div className="text-center text-xl text-yellow-400 font-semibold mb-6">
				{nextPosition < pointsArray.length
					? `${pointsArray[nextPosition]} points go to...`
					: 'All points assigned'}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
				{renderDriverCards()}
			</div>

			<div className="flex justify-center mt-8 pt-6 border-t border-white/10 w-full">
				{isRaceComplete && (
					<NextRaceButton
						to={`/standings/${raceId}`}
						label="View Standings"
					/>
				)}
			</div>
		</div>
	);
};
