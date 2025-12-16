import { useSeasonContext } from '../../../context/hooks.ts';

export const ResetCalendarButton = () => {
	const { resetRaceCalendar } = useSeasonContext();
	return (
		<button onClick={resetRaceCalendar}>Reset Calendar</button>
	);
};
