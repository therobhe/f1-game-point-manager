import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/ui/buttons/BackButton.tsx';
import { useSeasonContext } from '../context/SeasonContext.tsx';
import { pointSystem } from '../utils/data.ts';

export const ConfigPointsystem: React.FC = () => {
	const { raceCalendar, setActivePointSystem } = useSeasonContext();
	const navigate = useNavigate();
	console.log(raceCalendar);
	
	const setPointSysteAndNavigate = (desiredSystem: number[]) => {
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
				<button onClick={() => setPointSysteAndNavigate(pointSystem.modern)}>Modern</button>
				<button onClick={() => setPointSysteAndNavigate(pointSystem.classic)}>Classic</button>
				<button onClick={() => setPointSysteAndNavigate(pointSystem.retro)}>Retro</button>
			</div>
		</>
	);
};
