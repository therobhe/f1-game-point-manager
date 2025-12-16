import { useNavigate, useParams } from 'react-router-dom';

export const NextRaceButton = () => {
	const navigate = useNavigate();
	const { raceId } = useParams<{raceId: string}>();
	
	const handleNext = () => {
		const nextRaceId = Number(raceId) + 1;
		navigate(`/race/${nextRaceId}`);
	};
	
	return (
		<button onClick={handleNext}>Next Race</button>
	);
};
