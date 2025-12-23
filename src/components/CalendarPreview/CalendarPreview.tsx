import React from 'react';
import { useSeasonContext } from '../../context/hooks.ts';

export const CalendarPreview: React.FC = () => {
    const { raceCalendar, setRaceCalendar } = useSeasonContext();

    const handleRemoveRace = (indexToRemove: number) => {
        setRaceCalendar(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="w-full lg:w-80 flex flex-col gap-4 animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-6 bg-red-600 transform -skew-x-12"></div>
                <h2 className="text-xl font-black italic uppercase text-white tracking-tighter">
                    Calendar <span className="text-red-500">Preview</span>
                </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md">
                {raceCalendar.length === 0 ? (
                    <div className="p-8 text-center">
                        <p className="text-gray-500 italic text-sm">No races selected yet.</p>
                    </div>
                ) : (
                    <div className="flex flex-col max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {raceCalendar.map((track, index) => (
                            <div
                                key={`${track.id}-${index}`}
                                className="group relative flex items-center p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                            >
                                {/* Accent bar on hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

                                {/* Race Number */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-none border border-white/20 flex items-center justify-center transform -skew-x-12 mr-4 bg-white/5 group-hover:bg-red-600/20 group-hover:border-red-500/50 transition-all">
                                    <span className="text-sm font-black italic text-white transform skew-x-12">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Race Info */}
                                <div className="flex flex-col min-w-0 flex-1">
                                    <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-0.5 opacity-80">
                                        {track.nationality}
                                    </div>
                                    <div className="text-sm font-black italic uppercase text-white tracking-tight truncate">
                                        {track.name}
                                    </div>
                                </div>

                                {/* Delete Button */}
                                <button
                                    onClick={() => handleRemoveRace(index)}
                                    className="
                                        ml-2 p-2 
                                        text-gray-500 hover:text-white hover:bg-red-600/20 
                                        transform transition-all duration-300
                                        border border-transparent hover:border-red-500/50
                                        -skew-x-12
                                    "
                                    title="Remove Race"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform skew-x-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="p-4 bg-white/5 border-t border-white/10">
                    <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold">
                        <span className="text-gray-400">Total Races</span>
                        <span className="text-red-500 text-lg italic">{raceCalendar.length}</span>
                    </div>
                </div>
            </div>

            <style>{`
				.custom-scrollbar::-webkit-scrollbar {
					width: 4px;
				}
				.custom-scrollbar::-webkit-scrollbar-track {
					background: rgba(255, 255, 255, 0.05);
				}
				.custom-scrollbar::-webkit-scrollbar-thumb {
					background: rgba(220, 38, 38, 0.5);
					border-radius: 2px;
				}
				.custom-scrollbar::-webkit-scrollbar-thumb:hover {
					background: rgba(220, 38, 38, 0.8);
				}
			`}</style>
        </div>
    );
};
