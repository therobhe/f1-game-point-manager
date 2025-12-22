import React from 'react';
import { useSeasonContext } from '../../../context/hooks.ts';
import type { Track } from '../../../context/types.ts';

export const TrackCard: React.FC<Track> = ({ id, name, nationality }) => {
    const { addSingleRaceToRaceCalendar } = useSeasonContext();

    return (
        <button
            onClick={() => addSingleRaceToRaceCalendar({ id, name, nationality })}
            className={`
                relative flex flex-col justify-center items-center
                w-full max-w-[300px] aspect-square
                p-4 m-2
                rounded-xl border border-white/20
                bg-white/5 backdrop-blur-sm
                shadow-lg transition-all duration-300
                text-center
                hover:scale-105 hover:bg-white/10 hover:border-white/40 hover:shadow-xl
                group
            `}
        >
            <div className="text-4xl font-bold text-white/20 absolute top-4 right-4 group-hover:text-white/40 transition-colors">
                #{id}
            </div>

            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {name}
            </h2>

            <h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase">
                {nationality}
            </h3>
        </button>
    );
};
