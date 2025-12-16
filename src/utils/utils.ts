import { teams } from './data.ts';

export const getFlagImgForNationality = (nationality: string): string => {
	return nationality;
};

export const getTeamNameFromId = (id: number): string => {
	const target = teams.find((team) => team.id === id);
	return target ? target.name : id.toString();
};
