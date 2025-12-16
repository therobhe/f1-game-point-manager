import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/ui/buttons/BackButton.tsx';
import { useSeasonContext } from '../context/SeasonContext.tsx';
import { pointSystem } from '../utils/data.ts';

export const ConfigPointsystem: React.FC = () => {
	const { setActivePointSystem } = useSeasonContext();
	const navigate = useNavigate();
	
	const setPointSystemAndNavigate = (desiredSystem: number[]) => {
		setActivePointSystem(desiredSystem);
		navigate('/race/1');
	};
	
	/*Todo: implement option for custom scoring*/
	return (
		<>
			<BackButton />
			<h1>Config Points</h1>
			<span>Choose the point system you want to use</span>
			<div>
				<button onClick={() => setPointSystemAndNavigate(pointSystem.modern)}>Modern</button>
				<button onClick={() => setPointSystemAndNavigate(pointSystem.classic)}>Classic</button>
				<button onClick={() => setPointSystemAndNavigate(pointSystem.retro)}>Retro</button>
			</div>
		</>
	);
};
