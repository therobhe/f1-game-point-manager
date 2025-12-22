import React from "react";
import { useParams } from 'react-router-dom';
import { StandingsTable } from '../components/StandingsTable.tsx';
import { NextRaceButton } from '../components/ui/buttons/NextRaceButton.tsx';
import { useSeasonContext } from '../context/hooks.ts';

export const Standings: React.FC = () => {
    const { raceId } = useParams<{ raceId: string }>();
    const { raceCalendar } = useSeasonContext();

    const nextRaceId = Number(raceId) + 1;
    const hasNextRace = nextRaceId <= raceCalendar.length;

    return (
        <div className="flex flex-col gap-6 p-4">
            <h1 className="text-3xl font-bold text-center text-white mb-2">Season Standings</h1>

            <div className="mt-8">
                <StandingsTable />
            </div>

            <div className="flex justify-center mt-6">
                <NextRaceButton
                    to={hasNextRace ? `/race/${nextRaceId}` : '/finish'}
                    label={hasNextRace ? "Next Race" : "Finish Season"}
                />
            </div>
        </div>
    )
}