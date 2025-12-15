type PointsFor = 'Driver' | 'Team';

type Nationality =
	'Germany'
	| 'Great Britain'
	| 'Brazil'
	| 'Mexico'
	| 'Japan'
	| 'Sweden'
	| 'France'
	| 'Russia'
	| 'Finland'
	| 'Dansk'
	| 'Venezuela'
	| 'China'
	| 'Bahrain'
	| 'Abu Dhabi'
	| 'Singapore'
	| 'Italy'
	| 'USA'
	| 'Belgium'
	| 'Hungary'
	| 'Austria'
	| 'Canada'
	| 'Monaco'
	| 'Spain'
	| 'Malaysia'
	| 'Australia';

export type Driver = {
	id: number;
	name: string;
	teamId: number;
	nationality: Nationality;
}

export type Team = {
	id: number;
	name: string;
}

export type Track = {
	id: number;
	name: string;
	nationality: Nationality;
}

export type PointHistory = {
	entityId: number;
	pointsFor: PointsFor;
	points: number;
	timestamp: Date;
};

export type RaceCalendar = {
	year: number;
	tracks: Track[];
}
