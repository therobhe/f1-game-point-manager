import React from 'react';
import { useSeasonContext } from '../../../../context/hooks.ts';
import type { Track } from '../../../../context/types.ts';
import { getFlagUrl } from '../../../../utils/utils.ts';

export const TrackCard: React.FC<Track> = ({ id, name, nationality, countryCode }) => {
	const { addSingleRaceToRaceCalendar } = useSeasonContext();
	const flagUrl = getFlagUrl(countryCode);
	
	return (
		<button
			onClick={() => addSingleRaceToRaceCalendar({ id, name, nationality })}
			className={`
				relative flex flex-col justify-center items-center
				w-full max-w-[300px] aspect-square
				p-4
				rounded-xl border border-white
				bg-white/5 backdrop-blur-sm
				shadow-lg transition-all duration-300
				text-center
				hover:scale-105 hover:bg-red-500/10 hover:border-red-500 hover:shadow-xl
				group
			`}
		>
			<span
				aria-hidden="true"
				className="absolute inset-0 rounded-xl bg-center bg-contain bg-no-repeat opacity-10 pointer-events-none"
				style={{ backgroundImage: `url(${flagUrl})` }}
			/>
			<div className="relative z-10 flex flex-col items-center">
				<h2 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
					{name}
				</h2>
				
				<h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase">
					{nationality}
				</h3>
			</div>
		</button>
	);
};
