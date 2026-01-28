import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/seo';
import { PAGE_SEO } from '../../config/seoConfig';
import { useSeasonContext } from '../../context/hooks';
import { drivers, teams } from '../../utils/data';

const MobileResultItem: React.FC<{
	position: number;
	name: string;
	points: number;
	label: string;
	color: string;
	delay: string;
}> = ({ position, name, points, label, color, delay }) => {
	return (
		<div className={`
			flex items-center gap-4 p-4 mb-3 
			${color} border-l-4 border-white/50 
			transform -skew-x-6 animate-fade-in-up ${delay}
			shadow-lg backdrop-blur-md
		`}>
			<div className="flex-shrink-0 w-10 text-3xl font-black italic text-white/40 transform skew-x-6">
				{position}
			</div>
			<div className="flex-1 transform skew-x-6">
				<div
					className="text-lg font-black uppercase text-white tracking-tight leading-tight line-clamp-2 overflow-hidden">
					{name}
				</div>
				<div className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1 opacity-80">
					{label}
				</div>
			</div>
			<div className="text-xl font-black italic text-white transform skew-x-6 flex items-baseline">
				{points} <span className="text-[10px] not-italic opacity-50 ml-1">PTS</span>
			</div>
		</div>
	);
};

const PodiumItem: React.FC<{
	position: number;
	name: string;
	points: number;
	label: string;
	color: string;
	delay: string;
}> = ({ position, name, points, label, color, delay }) => {
	const height = position === 1 ? 'h-56 md:h-80' : position === 2 ? 'h-40 md:h-60' : 'h-28 md:h-40';
	const order = position === 1 ? 'order-2' : position === 2 ? 'order-1' : 'order-3';

	return (
		<div
			className={`flex flex-col items-center ${order} ${delay} animate-fade-in-up w-full max-w-[120px] md:max-w-none px-1 md:px-0`}>
			<div className="relative mb-6 text-center w-full">
				<div
					className="text-sm md:text-xl font-black tracking-tighter text-white uppercase transform -skew-x-12 leading-tight truncate px-1 overflow-hidden">
					{name}
				</div>
				<div
					className="text-[8px] md:text-xs text-red-500 font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] mt-1 opacity-80">
					{label} • {points} Pts
				</div>
			</div>
			<div className={`
                relative w-full md:w-48 ${height} ${color} 
                rounded-t-none border-l-2 md:border-l-4 border-white/50
                flex items-start justify-center pt-4 md:pt-8 
                transform -skew-x-3 md:-skew-x-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                transition-all duration-500 hover:translate-y-[-10px]
            `}>
				<span
					className="text-4xl md:text-8xl font-black italic text-white/10 transform skew-x-3 md:skew-x-6 select-none leading-none">
					{position}
				</span>

				{/* Top Accent Line */}
				<div className="absolute top-0 left-0 right-0 h-[2px] bg-white/30"></div>

				{/* Glow effect for P1 */}
				{position === 1 && (
					<div
						className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none"></div>
				)}
			</div>
		</div>
	);
};

export const Finish: React.FC = () => {
	const { driverPoints, resetSeason } = useSeasonContext();

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
		<>
			<SEO
				title={PAGE_SEO.finish.title}
				description={PAGE_SEO.finish.description}
				robots={PAGE_SEO.finish.robots}
			/>
			<main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] flex flex-col items-center py-20 px-4">
				<header className="relative mb-20 group cursor-default">
					<div
						className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
					<h1
						className="relative text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 text-center">
						SEASON
						<span className="block text-2xl md:text-3xl font-bold tracking-[0.4em] text-red-500 mt-2 not-italic skew-x-0">
							FINALE
						</span>
					</h1>
				</header>

				<style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animation-delay-0 { animation-delay: 0s; }
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-400 { animation-delay: 0.4s; }
            `}</style>

				{/* Drivers Podium */}
				<div className="mb-8 w-full max-w-5xl">
					<div className="flex items-center gap-3 mb-12 justify-center">
						<div className="w-2 h-8 bg-red-600 transform -skew-x-12"></div>
						<h2 className="text-3xl font-black italic uppercase text-white tracking-tighter">Drivers Championship</h2>
					</div>
					{/* Mobile List View */}
					<div className="md:hidden flex flex-col w-full max-w-md mx-auto">
						{topDrivers[0] && (
							<MobileResultItem
								position={1}
								name={topDrivers[0].name}
								points={topDrivers[0].points}
								label={topDrivers[0].nationality}
								color="bg-gradient-to-r from-yellow-500/20 to-yellow-600/5 border-yellow-500/50"
								delay="animation-delay-0"
							/>
						)}
						{topDrivers[1] && (
							<MobileResultItem
								position={2}
								name={topDrivers[1].name}
								points={topDrivers[1].points}
								label={topDrivers[1].nationality}
								color="bg-white/10 border-white/20"
								delay="animation-delay-200"
							/>
						)}
						{topDrivers[2] && (
							<MobileResultItem
								position={3}
								name={topDrivers[2].name}
								points={topDrivers[2].points}
								label={topDrivers[2].nationality}
								color="bg-amber-900/10 border-amber-900/30"
								delay="animation-delay-400"
							/>
						)}
					</div>

					{/* Desktop Podium View */}
					<div className="hidden md:flex justify-center items-end gap-2 md:gap-8 min-h-[400px]">
						{topDrivers[1] && (
							<PodiumItem
								position={2}
								name={topDrivers[1].name}
								points={topDrivers[1].points}
								label={topDrivers[1].nationality}
								color="bg-white/10 backdrop-blur-md border border-white/10"
								delay="animation-delay-200"
							/>
						)}
						{topDrivers[0] && (
							<PodiumItem
								position={1}
								name={topDrivers[0].name}
								points={topDrivers[0].points}
								label={topDrivers[0].nationality}
								color="bg-gradient-to-b from-yellow-500/30 to-yellow-600/10 backdrop-blur-md border border-yellow-500/50"
								delay="animation-delay-0"
							/>
						)}
						{topDrivers[2] && (
							<PodiumItem
								position={3}
								name={topDrivers[2].name}
								points={topDrivers[2].points}
								label={topDrivers[2].nationality}
								color="bg-amber-900/20 backdrop-blur-md border border-amber-900/30"
								delay="animation-delay-400"
							/>
						)}
					</div>
				</div>

				{/* Constructors Podium */}
				<div className="w-full max-w-5xl mb-8">
					<div className="flex items-center gap-3 mb-12 justify-center">
						<div className="w-2 h-8 bg-blue-600 transform -skew-x-12"></div>
						<h2 className="text-3xl font-black italic uppercase text-white tracking-tighter">Constructors
							Championship</h2>
					</div>
					{/* Mobile List View */}
					<div className="md:hidden flex flex-col w-full max-w-md mx-auto">
						{topConstructors[0] && (
							<MobileResultItem
								position={1}
								name={topConstructors[0].name}
								points={topConstructors[0].points}
								label={topConstructors[0].nationality}
								color="bg-gradient-to-b from-yellow-500/30 to-yellow-600/10 backdrop-blur-md border border-yellow-500/50"
								delay="animation-delay-0"
							/>
						)}
						{topConstructors[1] && (
							<MobileResultItem
								position={2}
								name={topConstructors[1].name}
								points={topConstructors[1].points}
								label={topConstructors[1].nationality}
								color="bg-white/10 backdrop-blur-md border border-white/10"
								delay="animation-delay-200"
							/>
						)}
						{topConstructors[2] && (
							<MobileResultItem
								position={3}
								name={topConstructors[2].name}
								points={topConstructors[2].points}
								label={topConstructors[2].nationality}
								color="bg-amber-900/20 backdrop-blur-md border border-amber-900/30"
								delay="animation-delay-400"
							/>
						)}
					</div>

					{/* Desktop Podium View */}
					<div className="hidden md:flex justify-center items-end gap-2 md:gap-8 min-h-[400px]">
						{topConstructors[1] && (
							<PodiumItem
								position={2}
								name={topConstructors[1].name}
								points={topConstructors[1].points}
								label={topConstructors[1].nationality}
								color="bg-blue-900/20 backdrop-blur-md border border-blue-900/30"
								delay="animation-delay-200"
							/>
						)}
						{topConstructors[0] && (
							<PodiumItem
								position={1}
								name={topConstructors[0].name}
								points={topConstructors[0].points}
								label={topConstructors[0].nationality}
								color="bg-gradient-to-b from-red-600/30 to-red-800/10 backdrop-blur-md border border-red-600/50"
								delay="animation-delay-0"
							/>
						)}
						{topConstructors[2] && (
							<PodiumItem
								position={3}
								name={topConstructors[2].name}
								points={topConstructors[2].points}
								label={topConstructors[2].nationality}
								color="bg-green-900/20 backdrop-blur-md border border-green-900/30"
								delay="animation-delay-400"
							/>
						)}
					</div>
				</div>

				<div>
					<Link
						to="/"
						onClick={resetSeason}
						className="
                        relative overflow-hidden group
                        px-12 py-4 
                        bg-red-600 rounded-none border-l-4 border-white
                        transform -skew-x-12
                        transition-all duration-300 ease-out
                        hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]
                        flex items-center justify-center
                    "
					>
						<span
							className="relative z-10 block text-xl font-bold text-white uppercase tracking-wider transform skew-x-12">
							Back to Main Menu
						</span>
						<div
							className="absolute inset-0 h-full w-full scale-0 rounded-none transition-all duration-300 group-hover:scale-100 group-hover:bg-red-800/50"></div>
					</Link>
				</div>
			</main>
		</>
	);
};
