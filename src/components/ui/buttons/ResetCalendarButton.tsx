import { useSeasonContext } from '../../../context/SeasonContext.tsx';

export const ResetCalendarButton = () => {
	const { raceCalendar, resetRaceCalendar } = useSeasonContext();
	console.log(raceCalendar);
	return (
		<button onClick={resetRaceCalendar}>Reset Calendar</button>
	);
};
