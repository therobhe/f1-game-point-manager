import React from 'react';
import type { Driver } from '../../../../context/types.ts';
import { getTeamNameFromId } from '../../../../utils/utils.ts';

type DriverCardProps = Driver & {
	onClick: () => void;
	disabled?: boolean;
	assignedPosition?: number;
};

export const DriverCard: React.FC<DriverCardProps> = ({ name, nationality, teamId, onClick, disabled, assignedPosition }) => {
	const teamName = getTeamNameFromId(teamId);
	
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`
                relative flex flex-col justify-center items-center
                w-full max-w-[300px] aspect-square
                p-4
                rounded-xl border border-white
                bg-white/5 backdrop-blur-sm
                shadow-lg transition-all duration-300
                text-center
                disabled:opacity-30 disabled:cursor-not-allowed
                hover:not-disabled:scale-105 hover:not-disabled:bg-white/10 hover:not-disabled:border-white hover:not-disabled:shadow-xl
                group
            `}
		>
			{assignedPosition !== undefined && (
				<div className="absolute top-2 right-2 bg-yellow-500 text-black font-bold text-lg px-3 py-1 rounded-lg shadow-lg border-2 border-yellow-600">
					P{assignedPosition}
				</div>
			)}
			
			<h2 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
				{name}
			</h2>
			
			<h3 className="text-sm text-gray-400 font-medium tracking-wider uppercase mb-2">
				{nationality}
			</h3>
			
			<h4 className="text-xs text-gray-500 font-semibold bg-black/30 px-3 py-1 rounded-full border border-white">
				{teamName}
			</h4>
		</button>
	);
};
