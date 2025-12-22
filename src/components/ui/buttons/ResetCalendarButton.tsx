import { useSeasonContext } from '../../../context/hooks.ts';

export const ResetCalendarButton = () => {
	const { resetRaceCalendar } = useSeasonContext();
	return (
		<button
			onClick={resetRaceCalendar}
			className="
				group relative overflow-hidden
				px-8 py-3 
				bg-transparent border-2 border-white/10 hover:border-white/30
				transform -skew-x-12 transform-gpu
				transition-all duration-300 ease-out
				hover:bg-white/5
				flex items-center justify-center
			"
		>
			<span
				className="relative z-10 block text-lg font-black italic text-gray-400 group-hover:text-white uppercase tracking-widest transform skew-x-12 transition-colors">
				Reset Calendar
			</span>
			<div className="absolute inset-0 h-full w-0 bg-white/5 transition-all duration-300 group-hover:w-full"></div>
		</button>
	);
};
