import { teams } from './data.ts';

export const getFlagUrl = (countryCode?: string, size = 64): string => {
	if(!countryCode) return `https://via.placeholder.com/${size}`;
	const code = countryCode.toLowerCase();
	return `https://flagcdn.com/${code}.svg`;
};


export const getTeamNameFromId = (id: number): string => {
	const target = teams.find((team) => team.id === id);
	return target ? target.name : id.toString();
};
