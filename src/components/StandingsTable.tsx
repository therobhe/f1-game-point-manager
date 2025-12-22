import React, { useMemo } from 'react';
import { useSeasonContext } from '../context/hooks';
import { drivers, teams } from '../utils/data';

export const StandingsTable: React.FC = () => {
	const { driverPoints } = useSeasonContext();

	// Calculate Driver Standings
	const driverStandings = useMemo(() => {
		return drivers.map(driver => ({
			...driver,
			points: driverPoints[driver.id] || 0
		})).sort((a, b) => b.points - a.points);
	}, [driverPoints]);

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
	}, [driverPoints]);

	return (
		<div className="flex flex-col md:flex-row gap-8 w-full p-4">
			{/* Driver Standings */}
			<div className="flex-1 bg-gray-800 rounded-lg p-4 shadow-lg">
				<h2 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">Driver Standings</h2>
				<div className="overflow-x-auto">
					<table className="w-full text-left text-sm text-gray-300">
						<thead className="bg-gray-700 text-xs uppercase text-gray-400">
							<tr>
								<th scope="col" className="px-4 py-2">Pos</th>
								<th scope="col" className="px-4 py-2">Driver</th>
								<th scope="col" className="px-4 py-2 text-right">Points</th>
							</tr>
						</thead>
						<tbody>
							{driverStandings.map((driver, index) => (
								<tr key={driver.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
									<td className="px-4 py-2 font-medium text-white">{index + 1}</td>
									<td className="px-4 py-2">{driver.name}</td>
									<td className="px-4 py-2 text-right text-white font-bold">{driver.points}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			{/* Constructor Standings */}
			<div className="flex-1 bg-gray-800 rounded-lg p-4 shadow-lg">
				<h2 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">Constructor Standings</h2>
				<div className="overflow-x-auto">
					<table className="w-full text-left text-sm text-gray-300">
						<thead className="bg-gray-700 text-xs uppercase text-gray-400">
							<tr>
								<th scope="col" className="px-4 py-2">Pos</th>
								<th scope="col" className="px-4 py-2">Team</th>
								<th scope="col" className="px-4 py-2 text-right">Points</th>
							</tr>
						</thead>
						<tbody>
							{constructorStandings.map((team, index) => (
								<tr key={team.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
									<td className="px-4 py-2 font-medium text-white">{index + 1}</td>
									<td className="px-4 py-2">{team.name}</td>
									<td className="px-4 py-2 text-right text-white font-bold">{team.points}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};