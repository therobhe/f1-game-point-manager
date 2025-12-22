import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
	const navigate = useNavigate();

	return (
		<button
			onClick={() => navigate(-1)}
			className="
				group relative flex items-center justify-center
				px-6 py-2 
				bg-white/5 hover:bg-white/10
				border border-white/20 hover:border-white/40
				transform -skew-x-12
				transition-all duration-300 ease-out
				hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
			"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-4 w-4 mr-2 text-red-500 transform skew-x-12 group-hover:-translate-x-1 transition-transform"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
			</svg>
			<span className="text-sm font-black italic uppercase text-white tracking-widest transform skew-x-12">
				Back
			</span>
		</button>
	);
};