import type { DriverPoints, Track } from './types.ts';
import { type ReactNode, useState } from 'react';
import { drivers, tracks } from './data.ts';
import { SeasonContext } from './SeasonContext.tsx';

// init the score for each driver
const defaultDriverPoints: DriverPoints = drivers.reduce(
	(acc, driver) => ({ ...acc, [driver.id]: 0 }),
	{}
);

export const SeasonProvider = ({ children }: { children: ReactNode }) => {
	const [ raceCalendar, setRaceCalendar ] = useState<Track[]>([]);
	const [ currentTrack, setCurrentTrack ] = useState<Track>(tracks[0]);
	const [ driverPoints, setDriverPoints ] = useState<DriverPoints>(defaultDriverPoints);
	
	const addSingleRaceToRaceCalendar = (trackToAdd: Track) => {
		setRaceCalendar(prev => [ ...prev, trackToAdd ]);
	};
	
	const providedValues = {
		currentTrack,
		setCurrentTrack,
		driverPoints,
		setDriverPoints,
		raceCalendar,
		setRaceCalendar,
		addSingleRaceToRaceCalendar
	};
	
	return (
		<SeasonContext.Provider value={providedValues} >
			{children}
		</SeasonContext.Provider >
	);
};