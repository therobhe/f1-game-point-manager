import { useNavigate, useParams } from 'react-router-dom';
import { useSeasonContext } from '../../../context/hooks.ts';

export const NextRaceButton = () => {
	const navigate = useNavigate();
	const { raceId } = useParams<{raceId: string}>();
	const { raceCalendar } = useSeasonContext();
	
	const calenderLength = raceCalendar?.length;
	const currentRaceId = Number(raceId);
	
	const handleNext = () => {
		if(currentRaceId !== calenderLength) {
			const nextRaceId = Number(raceId) + 1;
			navigate(`/race/${nextRaceId}`);
			return;
		}
		navigate('/finish');
		return;
	};
	
	return (
		<button onClick={handleNext}>Next Race</button>
	);
};
