import React from 'react';
import styled from 'styled-components';
import type { Driver } from '../../../context/types.ts';
import { getTeamNameFromId } from '../../../utils/utils.ts';

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
    cursor: pointer;
`;

type DriverCardProps = Driver & {
	onClick: () => void;
	disabled?: boolean;
};

export const DriverCard: React.FC<DriverCardProps> = ({ id, name, nationality, onClick, disabled }) => {
	const teamName = getTeamNameFromId(id);
	
	return (
		<Card onClick={onClick} disabled={disabled}>
			<h1>{id}</h1>
			<h2>{name}</h2>
			<h3>{nationality}</h3>
			<h4>{teamName}</h4>
		</Card>
	);
};
