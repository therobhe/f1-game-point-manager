import { Link } from 'react-router-dom';

const StartButton = () => {
	return (
		<div
			className="fixed inset-x-0 bottom-14 z-50 flex justify-center sm:relative sm:inset-x-auto sm:bottom-auto">
			<Link
				to="/track-config"
				className="inline-flex relative overflow-hidden group px-12 py-4 bg-red-600 rounded-none border-l-4 border-white transform -skew-x-12 transition-all duration-300 ease-out hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
			>
				<span
					className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform skew-x-12">
					Start your Season
				</span>
				<div
					className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50" />
			</Link>
		</div>
	);
};

export default StartButton;
