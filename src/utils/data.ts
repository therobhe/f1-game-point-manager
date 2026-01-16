import type { Driver, Team, Track } from '../context/types.ts';

/**
 * List of all tracks in the 2014 season.
 * Each track contains an id, name, and nationality.
 *
 * @type {Track[]}
 */
export const tracks: Track[] = [
	{ id: 1, name: 'Melbourne', nationality: 'Australia' },
	{ id: 2, name: 'Sepang', nationality: 'Malaysia' },
	{ id: 3, name: 'Sakhir', nationality: 'Bahrain' },
	{ id: 4, name: 'Shanghai', nationality: 'China' },
	{ id: 5, name: 'Barcelona', nationality: 'Spain' },
	{ id: 6, name: 'Monte Carlo', nationality: 'Monaco' },
	{ id: 7, name: 'Montréal', nationality: 'Canada' },
	{ id: 8, name: 'Spielberg', nationality: 'Austria' },
	{ id: 9, name: 'Silverstone', nationality: 'Great Britain' },
	{ id: 10, name: 'Hockenheim', nationality: 'Germany' },
	{ id: 11, name: 'Budapest', nationality: 'Hungary' },
	{ id: 12, name: 'Spa-Francorchamps', nationality: 'Belgium' },
	{ id: 13, name: 'Monza', nationality: 'Italy' },
	{ id: 14, name: 'Singapore', nationality: 'Singapore' },
	{ id: 15, name: 'Suzuka', nationality: 'Japan' },
	{ id: 16, name: 'Sotchi', nationality: 'Russia' },
	{ id: 17, name: 'Austin', nationality: 'USA' },
	{ id: 18, name: 'Interlagos', nationality: 'Brazil' },
	{ id: 19, name: 'Yas Marina', nationality: 'Abu Dhabi' }
];

/**
 * List of all drivers participating in the 2014 season.
 * Each driver contains an id, name, teamId, and nationality.
 *
 * @type {Driver[]}
 */
export const drivers: Driver[] = [
	{ id: 1, name: 'Lewis Hamilton', teamId: 1, nationality: 'Great Britain' },
	{ id: 2, name: 'Nico Rosberg', teamId: 1, nationality: 'Germany' },
	{ id: 3, name: 'Sebastian Vettel', teamId: 2, nationality: 'Germany' },
	{ id: 4, name: 'Daniel Ricciardo', teamId: 2, nationality: 'Australia' },
	{ id: 5, name: 'Fernando Alonso', teamId: 3, nationality: 'Spain' },
	{ id: 6, name: 'Kimi Raikkönen', teamId: 3, nationality: 'Finland' },
	{ id: 7, name: 'Romain Grosjean', teamId: 4, nationality: 'France' },
	{ id: 8, name: 'Pastor Maldonado', teamId: 4, nationality: 'Venezuela' },
	{ id: 9, name: 'Jenson Button', teamId: 5, nationality: 'Great Britain' },
	{ id: 10, name: 'Kevin Magnussen', teamId: 5, nationality: 'Denmark' },
	{ id: 11, name: 'Nico Hülkenberg', teamId: 6, nationality: 'Germany' },
	{ id: 12, name: 'Sergio Pérez', teamId: 6, nationality: 'Mexico' },
	{ id: 13, name: 'Adrian Sutil', teamId: 7, nationality: 'Germany' },
	{ id: 14, name: 'Esteban Gutiérrez', teamId: 7, nationality: 'Mexico' },
	{ id: 15, name: 'Jean-Éric Vergne', teamId: 8, nationality: 'France' },
	{ id: 16, name: 'Daniil Kvyat', teamId: 8, nationality: 'Russia' },
	{ id: 17, name: 'Felipe Massa', teamId: 9, nationality: 'Brazil' },
	{ id: 18, name: 'Valtteri Bottas', teamId: 9, nationality: 'Finland' },
	{ id: 19, name: 'Jules Bianchi', teamId: 10, nationality: 'France' },
	{ id: 20, name: 'Max Chilton', teamId: 10, nationality: 'Great Britain' },
	{ id: 21, name: 'Kamui Kobayashi', teamId: 11, nationality: 'Japan' },
	{ id: 22, name: 'Marcus Ericsson', teamId: 11, nationality: 'Sweden' }
];

/**
 * List of all teams participating in the 2014 season.
 * Each team contains an id and name.
 *
 * @type {Team[]}
 */
export const teams: Team[] = [
	{ id: 1, name: 'Mercedes-AMG Petronas F1 Team', nationality: 'Germany' },
	{ id: 2, name: 'Red Bull Racing', nationality: 'Austria' },
	{ id: 3, name: 'Scuderia Ferrari', nationality: 'Italy' },
	{ id: 4, name: 'Lotus F1 Team', nationality: 'Great Britain' },
	{ id: 5, name: 'McLaren Mercedes', nationality: 'Great Britain' },
	{ id: 6, name: 'Sahara Force India F1 Team', nationality: 'Great Britain' },
	{ id: 7, name: 'Sauber F1 Team', nationality: 'Switzerland' },
	{ id: 8, name: 'Scuderia Toro Rosso', nationality: 'Italy' },
	{ id: 9, name: 'Williams Martini Racing', nationality: 'Great Britain' },
	{ id: 10, name: 'Marussia F1 Team', nationality: 'Russia' },
	{ id: 11, name: 'Caterham F1 Team', nationality: 'Malaysia' }
];

export const pointSystem = {
	modern: [ 25, 18, 15, 12, 10, 8, 6, 4, 2, 1 ],
	classic: [ 10, 8, 6, 5, 4, 3, 2, 1 ],
	retro: [ 10, 6, 4, 3, 2, 1 ]
};
