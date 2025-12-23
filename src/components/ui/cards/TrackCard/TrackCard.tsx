import React from 'react';
import { useSeasonContext } from '../../../../context/hooks.ts';
import type { Track } from '../../../../context/types.ts';

export const TrackCard: React.FC<Track> = ({ id, name, nationality }) => {
	const { addSingleRaceToRaceCalendar } = useSeasonContext();
	
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
                hover:scale-105 hover:bg-white/10 hover:border-white hover:shadow-xl
                group
            `}
		>
			<h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
				{name}
			</h2>
			
			<h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase">
				{nationality}
			</h3>
		</button>
	);
};
