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
        <div className="flex flex-col min-h-screen p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] pb-32">
            <div className="w-full max-w-6xl mx-auto relative mt-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white uppercase transform -skew-x-12 inline-block">
                        Championship
                        <span className="block text-red-500 not-italic skew-x-0 tracking-widest text-xl mt-1 uppercase">
                            Standings
                        </span>
                    </h1>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-4 transform -skew-x-12"></div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                    <div className="p-4 md:p-8">
                        <StandingsTable />
                    </div>
                </div>

                {/* Floating Bottom Navigation Block */}
                <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-md z-50">
                    <div className="max-w-6xl mx-auto flex justify-center">
                        <NextRaceButton
                            to={hasNextRace ? `/race/${nextRaceId}` : '/finish'}
                            label={hasNextRace ? "Next Race" : "Finish Season"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}