import { render, screen, fireEvent } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RaceResult } from '../RaceResult/RaceResult';
import { BrowserRouter, useParams } from 'react-router-dom';
import { useSeasonContext } from '../../context/hooks';
import { drivers } from '../../utils/data';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useParams: vi.fn(),
    };
});

vi.mock('../../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

// Mock NextRaceButton to avoid deep testing here
vi.mock('../../components/ui/buttons/NextRaceButton/NextRaceButton', () => ({
    NextRaceButton: ({ label }: { label: string }) => <button>{label}</button>,
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
    </HelmetProvider>
);

describe('RaceResult', () => {
    const mockSetDriverPoints = vi.fn();
    const mockRaceCalendar = [
        { id: 1, name: 'Melbourne', nationality: 'Australia' },
    ];
    const mockPointSystem = [25, 18, 15]; // Only top 3 get points

    beforeEach(() => {
        vi.clearAllMocks();
        (useParams as any).mockReturnValue({ raceId: '1' });
        (useSeasonContext as any).mockReturnValue({
            setDriverPoints: mockSetDriverPoints,
            activePointSystem: mockPointSystem,
            raceCalendar: mockRaceCalendar,
        });
    });

    it('renders correctly with current track', () => {
        render(<RaceResult />, { wrapper: Wrapper });
        expect(screen.getByText('Melbourne')).toBeInTheDocument();
        expect(screen.getByText(/Assign P1:/i)).toBeInTheDocument();
        expect(screen.getByText(/25 Pts/i)).toBeInTheDocument();
    });

    it('assigns points to a driver and moves to next position', () => {
        render(<RaceResult />, { wrapper: Wrapper });

        const firstDriver = screen.getByText(drivers[0].name);
        fireEvent.click(firstDriver);

        expect(mockSetDriverPoints).toHaveBeenCalled();
        // Check if it moves to P2
        expect(screen.getByText(/Assign P2:/i)).toBeInTheDocument();
        expect(screen.getByText(/18 Pts/i)).toBeInTheDocument();
    });

    it('allows removing assignment by clicking already assigned driver', () => {
        render(<RaceResult />, { wrapper: Wrapper });

        const firstDriverName = drivers[0].name;
        const firstDriverButton = screen.getByText(firstDriverName).closest('button');

        // First click: assign driver to P1
        fireEvent.click(firstDriverButton!);

        expect(mockSetDriverPoints).toHaveBeenCalledTimes(1);
        expect(firstDriverButton).not.toBeDisabled();

        // Second click: remove assignment
        fireEvent.click(firstDriverButton!);

        expect(mockSetDriverPoints).toHaveBeenCalledTimes(2);
        expect(firstDriverButton).not.toBeDisabled();
    });

    it('displays position overlay on assigned drivers', () => {
        render(<RaceResult />, { wrapper: Wrapper });

        const firstDriverButton = screen.getByText(drivers[0].name).closest('button');
        const secondDriverButton = screen.getByText(drivers[1].name).closest('button');

        // Assign P1
        fireEvent.click(firstDriverButton!);
        expect(screen.getByText('P1')).toBeInTheDocument();

        // Assign P2
        fireEvent.click(secondDriverButton!);
        expect(screen.getByText('P2')).toBeInTheDocument();
    });

    it('shows "All Points Assigned" and "View Standings" button when finished', () => {
        render(<RaceResult />, { wrapper: Wrapper });

        // Assign P1, P2, P3
        fireEvent.click(screen.getByText(drivers[0].name));
        fireEvent.click(screen.getByText(drivers[1].name));
        fireEvent.click(screen.getByText(drivers[2].name));

        expect(screen.getByText('All Points Assigned')).toBeInTheDocument();
        expect(screen.getByText('View Standings')).toBeInTheDocument();
    });

    it('renders error message if track not found', () => {
        (useParams as any).mockReturnValue({ raceId: '2' }); // Only 1 track in mock

        render(<RaceResult />, { wrapper: Wrapper });

        expect(screen.getByText('No track found for this race.')).toBeInTheDocument();
    });
});
