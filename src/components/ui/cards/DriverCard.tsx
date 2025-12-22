import React from 'react';
import type { Driver } from '../../../context/types.ts';
import { getTeamNameFromId } from '../../../utils/utils.ts';

type DriverCardProps = Driver & {
    onClick: () => void;
    disabled?: boolean;
};

export const DriverCard: React.FC<DriverCardProps> = ({ id, name, nationality, onClick, disabled }) => {
    const teamName = getTeamNameFromId(id);

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative flex flex-col justify-center items-center
                w-full max-w-[300px] aspect-square
                p-4 m-2
                rounded-xl border border-white/20
                bg-white/5 backdrop-blur-sm
                shadow-lg transition-all duration-300
                text-center
                disabled:opacity-30 disabled:cursor-not-allowed
                hover:not-disabled:scale-105 hover:not-disabled:bg-white/10 hover:not-disabled:border-white/40 hover:not-disabled:shadow-xl
                group
            `}
        >
            <div className="text-4xl font-bold text-white/20 absolute top-4 right-4 group-hover:text-white/40 transition-colors">
                #{id}
            </div>

            <h2 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                {name}
            </h2>

            <h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-2">
                {nationality}
            </h3>

            <h4 className="text-xs text-gray-500 font-semibold bg-black/30 px-3 py-1 rounded-full border border-white/5">
                {teamName}
            </h4>
        </button>
    );
};
