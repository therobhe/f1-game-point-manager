import React, { useMemo } from 'react';
import { useSeasonContext } from '../context/hooks';
import { drivers, teams } from '../utils/data';

const PodiumItem: React.FC<{
	position: number;
	name: string;
	points: number;
	label: string;
	color: string;
	delay: string;
}> = ({ position, name, points, label, color, delay }) => {
	const height = position === 1 ? 'h-64' : position === 2 ? 'h-48' : 'h-32';
	const order = position === 1 ? 'order-2' : position === 2 ? 'order-1' : 'order-3';

	return (
		<div className={`flex flex-col items-center ${order} ${delay} animate-fade-in-up`}>
			<div className="text-white font-bold mb-2 text-center">
				<div className="text-xl">{name}</div>
				<div className="text-sm text-gray-400">{label} • {points} pts</div>
			</div>
			<div className={`w-32 ${height} ${color} rounded-t-lg flex items-start justify-center pt-4 shadow-lg border-t-4 border-white/20`}>
				<span className="text-4xl font-bold text-white drop-shadow-md">{position}</span>
			</div>
		</div>
	);
};

export const Finish: React.FC = () => {
	const { driverPoints } = useSeasonContext();

	const topDrivers = useMemo(() => {
		return drivers.map(driver => ({
			...driver,
			points: driverPoints[driver.id] || 0
		}))
			.sort((a, b) => b.points - a.points)
			.slice(0, 3);
	}, [driverPoints]);

	const topConstructors = useMemo(() => {
		const teamPoints: Record<number, number> = {};

		drivers.forEach(driver => {
			const points = driverPoints[driver.id] || 0;
			teamPoints[driver.teamId] = (teamPoints[driver.teamId] || 0) + points;
		});

		return teams.map(team => ({
			...team,
			points: teamPoints[team.id] || 0
		}))
			.sort((a, b) => b.points - a.points)
			.slice(0, 3);
	}, [driverPoints]);

	return (
		<div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
			<h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600 mb-12 animate-pulse">
				Season Finale
			</h1>

			<style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
            `}</style>

			{/* Drivers Podium */}
			<div className="mb-20 w-full max-w-4xl">
				<h2 className="text-3xl text-white font-bold text-center mb-10 border-b border-gray-700 pb-4">
					Drivers Championship
				</h2>
				<div className="flex justify-center items-end gap-4">
					{topDrivers[1] && (
						<PodiumItem
							position={2}
							name={topDrivers[1].name}
							points={topDrivers[1].points}
							label={topDrivers[1].nationality}
							color="bg-gray-400"
							delay="animation-delay-200"
						/>
					)}
					{topDrivers[0] && (
						<PodiumItem
							position={1}
							name={topDrivers[0].name}
							points={topDrivers[0].points}
							label={topDrivers[0].nationality}
							color="bg-yellow-500"
							delay="animation-delay-0"
						/>
					)}
					{topDrivers[2] && (
						<PodiumItem
							position={3}
							name={topDrivers[2].name}
							points={topDrivers[2].points}
							label={topDrivers[2].nationality}
							color="bg-amber-700"
							delay="animation-delay-400"
						/>
					)}
				</div>
			</div>

			{/* Constructors Podium */}
			<div className="w-full max-w-4xl">
				<h2 className="text-3xl text-white font-bold text-center mb-10 border-b border-gray-700 pb-4">
					Constructors Championship
				</h2>
				<div className="flex justify-center items-end gap-4">
					{topConstructors[1] && (
						<PodiumItem
							position={2}
							name={topConstructors[1].name}
							points={topConstructors[1].points}
							label="Team"
							color="bg-blue-600"
							delay="animation-delay-200"
						/>
					)}
					{topConstructors[0] && (
						<PodiumItem
							position={1}
							name={topConstructors[0].name}
							points={topConstructors[0].points}
							label="Team"
							color="bg-red-600"
							delay="animation-delay-0"
						/>
					)}
					{topConstructors[2] && (
						<PodiumItem
							position={3}
							name={topConstructors[2].name}
							points={topConstructors[2].points}
							label="Team"
							color="bg-green-600"
							delay="animation-delay-400"
						/>
					)}
				</div>
			</div>

			<div className="mt-20">
				<a href="/" className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-colors">
					Back to Menu
				</a>
			</div>
		</div>
	);
};