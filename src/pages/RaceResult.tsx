import React, { useState } from 'react';
import styled from 'styled-components';
import { NextRaceButton } from '../components/ui/buttons/NextRaceButton.tsx';
import { DriverCard } from '../components/ui/cards/DriverCard.tsx';
import { useSeasonContext } from '../context/SeasonContext.tsx';
import type { DriverPoints } from '../context/types.ts';
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
	const { driverPoints, setDriverPoints, activePointSystem, currentTrack } = useSeasonContext();
	const [ position, setPosition ] = useState(0);
	
	const pointsArray = activePointSystem ?? [];
	
	console.log(driverPoints);
	
	const handleDriverClick = (driverId: number) => {
		if(position >= pointsArray.length) return;
		
		setDriverPoints((prev: DriverPoints) => ({
			...prev,
			[driverId]: prev[driverId] + pointsArray[position]
		}));
		
		setPosition(pos => pos + 1);
	};
	
	const renderDriverCards = () => {
		return drivers.map(driver => (
			<DriverCard
				key={driver.id}
				{...driver}
				onClick={() => handleDriverClick(driver.id)}
			/>
		));
	};
	
	return (
		<>
			<h1>Race Result for Event: {currentTrack.name}</h1>
			<span>
        {position < pointsArray.length
	        ? `${pointsArray[position]} points go to...`
	        : 'All points assigned'}
      </span>
			<DriverCardGrid>
				{renderDriverCards()}
			</DriverCardGrid>
			<NextRaceButton />
		</>
	);
};
