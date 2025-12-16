import { useSeasonContext } from '../../../context/SeasonContext.tsx';

export const ResetCalendarButton = () => {
	const { resetRaceCalendar } = useSeasonContext();
	return (
		<button onClick={resetRaceCalendar}>Reset Calendar</button>
	);
};
