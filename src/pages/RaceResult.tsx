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
		<div className="flex flex-col min-h-screen p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] pb-32">
			<div className="w-full max-w-6xl mx-auto relative mt-8">
				<div className="text-center mb-12">
					<h1 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 inline-block">
						Event Result:
						<span className="block text-red-500 not-italic skew-x-0 tracking-widest text-xl mt-1 uppercase">
							{currentTrack.name}
						</span>
					</h1>
					<div className="h-1 w-24 bg-red-600 mx-auto mt-4 transform -skew-x-12"></div>
				</div>

				<div className="flex justify-center mb-12">
					<div className="relative group">
						<div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
						<div className="relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-yellow-500/30 rounded-lg">
							<span className="text-xl md:text-2xl font-bold text-yellow-500 tracking-tight italic">
								{nextPosition < pointsArray.length
									? <><span className="text-white uppercase not-italic text-sm tracking-[0.2em] block mb-1 opacity-50">Assigning Points:</span> {pointsArray[nextPosition]} Pts</>
									: 'All Points Assigned'}
							</span>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
					{renderDriverCards()}
				</div>

				{/* Floating Bottom Navigation Block */}
				<div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-md z-50">
					<div className="max-w-6xl mx-auto flex justify-center">
						{isRaceComplete && (
							<NextRaceButton
								to={`/standings/${raceId}`}
								label="View Standings"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
