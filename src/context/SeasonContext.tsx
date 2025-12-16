import type { DriverPoints, Track } from './types.ts';
import { createContext, useContext } from 'react';

type SeasonContextProps = {
	currentTrack: Track;
	setCurrentTrack: (track: Track) => void;
	driverPoints: DriverPoints;
	setDriverPoints: (points: DriverPoints) => void;
	raceCalendar: Track[];
	setRaceCalendar: (calendar: Track[]) => void;
	addSingleRaceToRaceCalendar: (trackToAdd: Track) => void;
}

export const SeasonContext = createContext<SeasonContextProps | undefined>(undefined);

export const useSeasonContext = () => {
	const context = useContext(SeasonContext);
	if(!context) {
		throw new Error('useSeasonContext must be used within a SeasonProvider');
	}
	return context;
};