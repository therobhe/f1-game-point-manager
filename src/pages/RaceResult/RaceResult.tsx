import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '../../components/seo';
import { NextRaceButton } from '../../components/ui/buttons/NextRaceButton/NextRaceButton.tsx';
import { DriverCard } from '../../components/ui/cards/DriverCard/DriverCard.tsx';
import { PAGE_SEO } from '../../config/seoConfig';
import { useSeasonContext } from '../../context/hooks.ts';
import { drivers } from '../../utils/data.ts';

export const RaceResult: React.FC = () => {
	const { raceId } = useParams<{ raceId: string }>();
	const { setDriverPoints, activePointSystem, raceCalendar } = useSeasonContext();
	const [assignedDriverIds, setAssignedDriverIds] = useState<number[]>([]);
	const [driverPositions, setDriverPositions] = useState<{ [driverId: number]: number }>({});
	const [unassignedPosition, setUnassignedPosition] = useState<number | null>(null);
	const [nextSequentialPosition, setNextSequentialPosition] = useState(0);

	// Find the current track from the race calendar
	const currentTrack = raceCalendar[Number(raceId) - 1];
	const pointsArray = activePointSystem ?? [];

	const getNextPositionWithPoints = (from: number): number => {
		return pointsArray.findIndex((points, index) => index >= from && points > 0);
	};

	// If there's an unassigned position, use that; otherwise find the next sequential position with points
	const nextPositionWithPoints = unassignedPosition !== null
		? unassignedPosition
		: getNextPositionWithPoints(nextSequentialPosition);

	const handleDriverClick = (driverId: number) => {
		// If driver is already assigned, remove the assignment
		if (assignedDriverIds.includes(driverId)) {
			const assignedPosition = driverPositions[driverId];

			// Validate that the position exists and is within bounds
			if (assignedPosition === undefined || assignedPosition < 0 || assignedPosition >= pointsArray.length) return;

			// Only allow unassigning if this is the most recently assigned position
			// (either the unassigned position slot, or the last sequential position)
			if (unassignedPosition !== null) {
				// There's already an unassigned position waiting to be filled
				return;
			}

			const pointsToRemove = pointsArray[assignedPosition];

			// Remove points
			setDriverPoints(prev => ({
				...prev,
				[driverId]: (prev[driverId] || 0) - pointsToRemove
			}));

			// Remove from assigned drivers
			setAssignedDriverIds(ids => ids.filter(id => id !== driverId));

			// Remove position mapping
			const newPositions = { ...driverPositions };
			delete newPositions[driverId];
			setDriverPositions(newPositions);

			// Set this position as the one that needs to be reassigned
			setUnassignedPosition(assignedPosition);

			return;
		}

		if (nextPositionWithPoints === -1) return; // All points assigned

		setDriverPoints(prev => ({
			...prev,
			[driverId]: (prev[driverId] || 0) + pointsArray[nextPositionWithPoints]
		}));

		setAssignedDriverIds(ids => [...ids, driverId]);
		setDriverPositions(prev => ({ ...prev, [driverId]: nextPositionWithPoints }));

		// If we're filling an unassigned position, clear it; otherwise advance the sequential position
		if (unassignedPosition !== null) {
			setUnassignedPosition(null);
		} else {
			setNextSequentialPosition(nextPositionWithPoints + 1);
		}
	};

	const renderDriverCards = () => {
		return drivers.map(driver => (
			<DriverCard
				key={driver.id}
				{...driver}
				onClick={() => handleDriverClick(driver.id)}
				disabled={!assignedDriverIds.includes(driver.id) && nextPositionWithPoints === -1}
				assignedPosition={driverPositions[driver.id] !== undefined ? driverPositions[driver.id] + 1 : undefined}
			/>
		));
	};

	if (!currentTrack) {
		return <div>No track found for this race.</div>;
	}

	const isRaceComplete = nextPositionWithPoints === -1;
	// NextRaceButton handles the logic for next race or finish internally based on current raceId and calendar length.

	return (
		<>
			<SEO
				title={`${currentTrack.name} Result | F1 2014 Season Manager`}
				description={PAGE_SEO.raceResult.description}
				robots={PAGE_SEO.raceResult.robots}
			/>
			<main className="flex flex-col min-h-screen p-4 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f] pb-32">
				<article className="w-full max-w-6xl mx-auto relative mt-8">
					<header className="text-center mb-12">
						<h1
							className="text-3xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 inline-block">
							Event Result:
							<span className="block text-red-500 not-italic skew-x-0 tracking-widest text-xl mt-1 uppercase">
								{currentTrack.name}
							</span>
						</h1>
						<div className="h-1 w-24 bg-red-600 mx-auto mt-4 transform -skew-x-12"></div>
					</header>

					<div className="flex justify-center mb-12">
						<div className="relative group">
							<div
								className="absolute -inset-1 bg-linear-to-r from-yellow-500 to-yellow-700 rounded blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
							<div
								className="text-center relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-yellow-500/30 rounded-lg">
								<span className="text-xl md:text-2xl font-bold text-yellow-500 tracking-tight italic">
									{nextPositionWithPoints !== -1
										? <><span className="text-white uppercase not-italic text-sm tracking-[0.2em] block mb-1 opacity-50">Assign P{nextPositionWithPoints + 1}:</span> {pointsArray[nextPositionWithPoints]} Pts</>
										: 'All Points Assigned'}
								</span>
							</div>
						</div>
					</div>

					<section className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
						{renderDriverCards()}
					</section>

					{/* Floating Bottom Navigation Block */}
					<nav
						className="fixed bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black via-black/90 to-transparent backdrop-blur-md z-50"
						aria-label="Race navigation">
						<div className="max-w-6xl mx-auto flex justify-center">
							{isRaceComplete && (
								<NextRaceButton
									to={`/standings/${raceId}`}
									label="View Standings"
								/>
							)}
						</div>
					</nav>
				</article>
			</main>
		</>
	);
};
