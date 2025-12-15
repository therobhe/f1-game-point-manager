type PointsFor = 'Driver' | 'Team';

export type Driver = {
	id: number;
	name: string;
	teamId: number;
	points: number;
}

export type Team = {
	id: number;
	name: string;
	drivers: [ Driver, Driver ];
}

export type Track = {
	id: number;
	name: string;
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
