import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BackButton } from '../components/ui/buttons/BackButton.tsx';
import { TrackCard } from '../components/ui/cards/TrackCard.tsx';
import { tracks } from '../utils/data.ts';

const TrackCardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 2fr;
    grid-gap: 8px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const CustomCalendarConfig: React.FC = () => {
	
	return (
		<>
			{/*Todo: introduce reset calendar button*/}
			{/*Todo: introduce current calendar display*/}
			<BackButton />
			<h1>Custom Calendar Config</h1>
			<span>Click on the cards to add a track to the calendar. You do not have to use all the tracks (we all know the perfect amount of races is 16)</span>
			<TrackCardGrid>
				{tracks.map(track =>
					<TrackCard key={track.id} id={track.id} name={track.name} nationality={track.nationality} />
				)}
			</TrackCardGrid>
			<Link to="/points">Next</Link>
		</>
	);
};
