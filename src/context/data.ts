import type { Driver, Team, Track } from './types.ts';

export const tracks: Track[] = [
	{id: 1, name: 'Melbourne - Australia', nationality: 'Australia'},
	{id: 2, name: 'Sepand - Malaysia', nationality: 'Malaysia'},
	{id: 3, name: 'Sakhir - Bahrain', nationality: 'Bahrain'},
	{id: 4, name: 'Shanghai - China', nationality: 'China'},
	{id: 5, name: 'Barcelona - Spain', nationality: 'Spain'},
	{id: 6, name: 'Monte Carlo - Monaco', nationality: 'Monaco'},
	{id: 7, name: 'Montréal - Canada', nationality: 'Canada'},
	{id: 8, name: 'Spielberg - Austria', nationality: 'Austria'},
	{id: 9, name: 'Silverstone - Great Britain', nationality: 'Great Britain'},
	{id: 10, name: 'Hockenheim - Germany', nationality: 'Germany'},
	{id: 11, name: 'Budapest - Hungary', nationality: 'Hungary'},
	{id: 12, name: 'Spa-Francorchamps - Belgium', nationality: 'Belgium'},
	{id: 13, name: 'Monza - Italy', nationality: 'Italy'},
	{id: 14, name: 'Singapore - Singapore', nationality: 'Singapore'},
	{id: 15, name: 'Suzuka - Japan', nationality: 'Japan'},
	{id: 16, name: 'Sotchi - Russia', nationality: 'Russia'},
	{id: 17, name: 'Austin - USA', nationality: 'USA'},
	{id: 18, name: 'Interlagos - Brazil', nationality: 'Brazil'},
	{id: 19, name: 'Yas Marina - Abu Dhabi', nationality: 'Abu Dhabi'}
];

export const drivers: Driver[] = [
	{id: 1, name: 'Lewis Hamilton', teamId: 1, nationality: 'Great Britain'},
	{id: 2, name: 'Nico Rosberg', teamId: 1, nationality: 'Germany'},
	{id: 3, name: 'Sebastian Vettel', teamId: 2, nationality: 'Germany'},
	{id: 4, name: 'Daniel Ricciardo', teamId: 2, nationality: 'Australia'},
	{id: 5, name: 'Fernando Alonso', teamId: 3, nationality: 'Spain'},
	{id: 6, name: 'Kimi Raikkönen', teamId: 3, nationality: 'Finland'},
	{id: 7, name: 'Romain Grosjean', teamId: 4, nationality: 'France'},
	{id: 8, name: 'Pastor Maldonado', teamId: 4, nationality: 'Venezuela'},
	{id: 9, name: 'Jenson Button', teamId: 5, nationality: 'Great Britain'},
	{id: 10, name: 'Kevin Magnussen', teamId: 5, nationality: 'Dansk'},
	{id: 11, name: 'Nico Hülkenberg', teamId: 6, nationality: 'Germany'},
	{id: 12, name: 'Sergio Pérez', teamId: 6, nationality: 'Mexico'},
	{id: 13, name: 'Adrian Sutil', teamId: 7, nationality: 'Germany'},
	{id: 14, name: 'Esteban Gutiérrez', teamId: 7, nationality: 'Mexico'},
	{id: 15, name: 'Jean-Éric Vergne', teamId: 8, nationality: 'France'},
	{id: 16, name: 'Daniil Kwjat', teamId: 8, nationality: 'Russia'},
	{id: 17, name: 'Felipe Massa', teamId: 9, nationality: 'Brazil'},
	{id: 18, name: 'Valtteri Bottas', teamId: 9, nationality: 'Finland'},
	{id: 19, name: 'Jules Bianchi', teamId: 10, nationality: 'France'},
	{id: 20, name: 'Max Chilton', teamId: 10, nationality: 'Great Britain'},
	{id: 21, name: 'Kamui Kobayashi', teamId: 11, nationality: 'Japan'},
	{id: 22, name: 'Marcus Ericsson', teamId: 11, nationality: 'Sweden'}
];

export const teams: Team[] = [
	{id: 1, name: 'Mercedes-AMG Petronas F1 Team'},
	{id: 2, name: 'Red Bull Racing'},
	{id: 3, name: 'Scuderia Ferrari'},
	{id: 4, name: 'Lotus F1 Team'},
	{id: 5, name: 'McLaren Mercedes'},
	{id: 6, name: 'Sahara Force India F1 Team'},
	{id: 7, name: 'Sauber F1 Team'},
	{id: 8, name: 'Scuderia Toro Rosso'},
	{id: 9, name: 'Williams Martini Racing'},
	{id: 10, name: 'Marussia F1 Team'},
	{id: 11, name: 'Caterham F1 Team'}
];