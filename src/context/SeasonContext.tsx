import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { DriverPoints, Track } from './types.ts';

type SeasonContextProps = {
	currentTrack: Track;
	setCurrentTrack: Dispatch<SetStateAction<Track>>;
	driverPoints: DriverPoints;
	setDriverPoints: Dispatch<SetStateAction<DriverPoints>>;
	raceCalendar: Track[];
	setRaceCalendar: Dispatch<SetStateAction<Track[]>>;
	addSingleRaceToRaceCalendar: (trackToAdd: Track) => void;
	resetRaceCalendar: () => void;
	activePointSystem: number[] | null;
	setActivePointSystem: Dispatch<SetStateAction<number[] | null>>;
};

export const SeasonContext = createContext<SeasonContextProps | undefined>(undefined);
