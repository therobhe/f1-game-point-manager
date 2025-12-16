import React from 'react';
import { BackButton } from '../components/ui/buttons/BackButton.tsx';
import { tracks } from '../context/data.ts';
import { useSeasonContext } from '../context/SeasonContext.tsx';
import { useNavigate } from 'react-router-dom';

export const ConfigCalendar: React.FC = () => {
	const { setRaceCalendar } = useSeasonContext();
	const navigate = useNavigate();
	
	/**
	 * Selects the full 2014 season by setting the race calendar to the predefined `tracks` array
	 * and navigates the user to the points system page.
	 */
	const selectFullSeasonAndGoToPointsystem = () => {
		setRaceCalendar(tracks);
		navigate('/points');
	};
	
	/**
	 * Navigates the user to the custom calendar creation screen.
	 */
	const goToCalendarCreationScreen = () => {
		navigate('/custom-calendar');
	};
	
	return (
		<>
			<BackButton />
			<h1 >Config Calendar</h1 >
			<button onClick={selectFullSeasonAndGoToPointsystem} >Full 2014 Season</button >
			<button onClick={goToCalendarCreationScreen} >Custom Calendar</button >
		</>
	);
};