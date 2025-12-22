import { useNavigate, useParams } from 'react-router-dom';
import { useSeasonContext } from '../../../context/hooks.ts';

export const NextRaceButton: React.FC<{ to?: string; label?: string }> = ({ to, label }) => {
	const navigate = useNavigate();
	const { raceId } = useParams<{ raceId: string }>();
	const { raceCalendar } = useSeasonContext();

	const calenderLength = raceCalendar?.length;
	const currentRaceId = Number(raceId);

	const handleNext = () => {
		if (to) {
			navigate(to);
			return;
		}

		if (currentRaceId !== calenderLength) {
			const nextRaceId = Number(raceId) + 1;
			navigate(`/race/${nextRaceId}`);
			return;
		}
		navigate('/finish');
		return;
	};

	return (
		<button
			onClick={handleNext}
			className="
				relative overflow-hidden group
				px-16 py-4 
				bg-red-600 rounded-none border-l-4 border-white
				transform -skew-x-12
				transition-all duration-300 ease-out
				hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]
				flex items-center justify-center
				min-w-[240px]
			"
		>
			<span className="relative z-10 block text-xl font-black italic uppercase text-white tracking-widest transform skew-x-12">
				{label || "Next Race"}
			</span>
			<div className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50"></div>
		</button>
	);
};
