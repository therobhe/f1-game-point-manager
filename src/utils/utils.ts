import { teams } from './data.ts';

export const getFlagImgForNationality = (nationality: string): string => {
	return nationality;
};

export const getFlagUrl = (countryCode?: string, size = 64): string => {
	if (!countryCode) return `https://via.placeholder.com/${size}`;
	return `https://flagsapi.com/${countryCode}/flat/${size}.png`;
};


export const getTeamNameFromId = (id: number): string => {
	const target = teams.find((team) => team.id === id);
	return target ? target.name : id.toString();
};
