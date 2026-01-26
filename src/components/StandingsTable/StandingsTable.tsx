import React, { useMemo } from 'react';
import { useSeasonContext } from '../../context/hooks';
import { drivers, teams } from '../../utils/data';

export const StandingsTable: React.FC = () => {
	const { driverPoints } = useSeasonContext();
	
	// Calculate Driver Standings
	const driverStandings = useMemo(() => {
		return drivers.map(driver => ({
			...driver,
			points: driverPoints[driver.id] || 0
		})).sort((a, b) => b.points - a.points);
	}, [ driverPoints ]);
	
	// Calculate Constructor Standings
	const constructorStandings = useMemo(() => {
		const teamPoints: Record<number, number> = {};
		
		drivers.forEach(driver => {
			const points = driverPoints[driver.id] || 0;
			teamPoints[driver.teamId] = (teamPoints[driver.teamId] || 0) + points;
		});
		
		return teams.map(team => ({
			...team,
			points: teamPoints[team.id] || 0
		})).sort((a, b) => b.points - a.points);
	}, [ driverPoints ]);
	
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
			{/* Driver Standings */}
			<div className="flex flex-col">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-2 h-8 bg-red-600 transform -skew-x-12"></div>
					<h2 className="text-2xl font-black italic uppercase text-white tracking-tighter">Drivers</h2>
				</div>
				<div className="overflow-x-auto rounded-lg border border-white/5 bg-black/20">
					<table className="w-full text-left border-collapse">
						<thead>
						<tr className="bg-white/5 border-b border-white/10">
							<th className="px-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400 italic">Pos</th>
							<th className="px-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400 italic">Driver</th>
							<th
								className="px-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400 italic text-right">Points
							</th>
						</tr>
						</thead>
						<tbody className="divide-y divide-white/5">
						{driverStandings.map((driver, index) => (
							<tr key={driver.id} className="hover:bg-white/5 transition-colors group">
								<td className="px-4 py-4">
										<span className={`
                                            inline-flex items-center justify-center w-6 h-6 rounded-sm text-xs font-bold
                                            ${index === 0 ? 'bg-yellow-500 text-black' :
											index === 1 ? 'bg-gray-300 text-black' :
												index === 2 ? 'bg-amber-700 text-white' : 'text-gray-400'}
                                        `}>
											{index + 1}
										</span>
								</td>
								<td className="px-4 py-4">
									<div className="flex flex-col">
										<span className="text-white font-bold tracking-tight">{driver.name}</span>
										<span className="text-[10px] text-gray-500 uppercase tracking-widest">{driver.nationality}</span>
									</div>
								</td>
								<td className="px-4 py-4 text-right">
										<span
											className="text-xl font-black text-white italic tracking-tighter group-hover:text-red-500 transition-colors">
											{driver.points}
										</span>
								</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
			
			{/* Constructor Standings */}
			<div className="flex flex-col">
				<div className="flex items-center gap-3 mb-6">
					<div className="w-2 h-8 bg-blue-600 transform -skew-x-12"></div>
					<h2 className="text-2xl font-black italic uppercase text-white tracking-tighter">Constructors</h2>
				</div>
				<div className="overflow-x-auto rounded-lg border border-white/5 bg-black/20">
					<table className="w-full text-left border-collapse">
						<thead>
						<tr className="bg-white/5 border-b border-white/10">
							<th className="px-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400 italic">Pos</th>
							<th className="px-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400 italic">Team</th>
							<th
								className="px-4 py-3 text-xs font-black uppercase tracking-widest text-gray-400 italic text-right">Points
							</th>
						</tr>
						</thead>
						<tbody className="divide-y divide-white/5">
						{constructorStandings.map((team, index) => (
							<tr key={team.id} className="hover:bg-white/5 transition-colors group">
								<td className="px-4 py-4">
										<span className={`
                                            inline-flex items-center justify-center w-6 h-6 rounded-sm text-xs font-bold
                                            ${index === 0 ? 'bg-yellow-500 text-black' :
											index === 1 ? 'bg-gray-300 text-black' :
												index === 2 ? 'bg-amber-700 text-white' : 'text-gray-400'}
                                        `}>
											{index + 1}
										</span>
								</td>
								<td className="px-4 py-4">
									<div className="flex flex-col">
										<span className="text-white font-bold tracking-tight">{team.name}</span>
										<span className="text-[10px] text-gray-500 uppercase tracking-widest">{team.nationality}</span>
									</div>
								</td>
								<td className="px-4 py-4 text-right">
										<span
											className="text-xl font-black text-white italic tracking-tighter group-hover:text-blue-500 transition-colors">
											{team.points}
										</span>
								</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
