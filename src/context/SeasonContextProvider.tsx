import { type ReactNode, useState } from 'react';
import { drivers, tracks } from '../utils/data.ts';
import { SeasonContext } from './SeasonContext.tsx';
import type { DriverPoints, Track } from './types.ts';

/**
 * Initializes the default driver points object.
 *
 * This object is created by reducing the `drivers` array into an object
 * where each driver's `id` is a key, and the value is set to 0.
 *
 * @constant
 * @type {DriverPoints}
 * @example
 * // Example output for two drivers with ids 'driver1' and 'driver2':
 * // { driver1: 0, driver2: 0 }
 */
const defaultDriverPoints: DriverPoints = drivers.reduce(
	(acc, driver) => ({ ...acc, [driver.id]: 0 }),
	{}
);

export const SeasonProvider = ({ children }: {children: ReactNode}) => {
	const [ raceCalendar, setRaceCalendar ] = useState<Track[]>([]);
	const [ currentTrack, setCurrentTrack ] = useState<Track>(tracks[0]);
	const [ driverPoints, setDriverPoints ] = useState<DriverPoints>(defaultDriverPoints);
	const [ activePointSystem, setActivePointSystem ] = useState<number[] | null>(null);
	
	const addSingleRaceToRaceCalendar = (trackToAdd: Track) => {
		setRaceCalendar(prev => [ ...prev, trackToAdd ]);
	};
	
	const resetRaceCalendar = () => {
		setRaceCalendar([]);
	};
	
	const providedValues = {
		currentTrack,
		setCurrentTrack,
		driverPoints,
		setDriverPoints,
		raceCalendar,
		setRaceCalendar,
		addSingleRaceToRaceCalendar,
		resetRaceCalendar,
		activePointSystem,
		setActivePointSystem
	};
	
	return (
		<SeasonContext.Provider value={providedValues}>
			{children}
		</SeasonContext.Provider>
	);
};
