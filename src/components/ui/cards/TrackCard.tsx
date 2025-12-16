import styled from 'styled-components';
import { useSeasonContext } from '../../../context/SeasonContext.tsx';
import type { Track } from '../../../context/types.ts';
import React from 'react';

const Card = styled.button`
    opacity: 0.6;
    border-radius: 8px;
    border: 1px solid #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 8px;
    text-align: center;
    aspect-ratio: 1 / 1;
    width: 100%;
    max-width: 300px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TrackCard: React.FC<Track> = ({ id, name, nationality }) => {
	const { addSingleRaceToRaceCalendar } = useSeasonContext();
	
	return (
		<Card onClick={() => addSingleRaceToRaceCalendar({ id, name, nationality })}>
			<h1>{id}</h1>
			<h2>{name}</h2>
			<h3>{nationality}</h3>
		</Card>
	);
};