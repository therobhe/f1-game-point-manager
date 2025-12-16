import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { NextRaceButton } from '../components/ui/buttons/NextRaceButton.tsx';
import { DriverCard } from '../components/ui/cards/DriverCard.tsx';
import { useSeasonContext } from '../context/SeasonContext.tsx';
import { drivers } from '../utils/data.ts';

const DriverCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 2fr;
    grid-gap: 8px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const RaceResult: React.FC = () => {
	const { raceId } = useParams<{raceId: string}>();
	const { setDriverPoints, activePointSystem, raceCalendar } = useSeasonContext();
	const [ assignedDriverIds, setAssignedDriverIds ] = useState<number[]>([]);
	
	// Find the current track from the race calendar
	const currentTrack = raceCalendar[Number(raceId) - 1];
	
	const pointsArray = activePointSystem ?? [];
	const nextPosition = assignedDriverIds.length;
	
	const handleDriverClick = (driverId: number) => {
		if(nextPosition >= pointsArray.length) return;
		if(assignedDriverIds.includes(driverId)) return;
		
		setDriverPoints(prev => ({
			...prev,
			[driverId]: prev[driverId] + pointsArray[nextPosition]
		}));
		
		setAssignedDriverIds(ids => [ ...ids, driverId ]);
	};
	
	// Reset assigned drivers when the race changes
	useEffect(() => {
		setAssignedDriverIds([]);
	}, [ raceId ]);
	
	if(!currentTrack) {
		return <div>No track found for this race.</div>;
	}
	
	return (
		<>
			<h1>Race Result for Event: {currentTrack.name}</h1>
			<span>
                {nextPosition < pointsArray.length
	                ? `${pointsArray[nextPosition]} points go to...`
	                : 'All points assigned'}
            </span>
			<DriverCardGrid>
				{drivers.map(driver => (
					<DriverCard
						key={driver.id}
						{...driver}
						onClick={() => handleDriverClick(driver.id)}
						disabled={assignedDriverIds.includes(driver.id) || nextPosition >= pointsArray.length}
					/>
				))}
			</DriverCardGrid>
			<NextRaceButton />
		</>
	);
};
