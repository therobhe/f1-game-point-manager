import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Standings } from '../Standings/Standings';
import { BrowserRouter, useParams } from 'react-router-dom';
import { useSeasonContext } from '../../context/hooks';

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

// Mock StandingsTable and NextRaceButton
vi.mock('../../components/StandingsTable/StandingsTable', () => ({
    StandingsTable: () => <div data-testid="standings-table">Standings Table</div>,
}));

vi.mock('../../components/ui/buttons/NextRaceButton/NextRaceButton', () => ({
    NextRaceButton: ({ label }: { label: string }) => <button>{label}</button>,
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
    </HelmetProvider>
);

describe('Standings', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        (useSeasonContext as any).mockReturnValue({
            raceCalendar: [{}, {}], // 2 races
        });
    });

    it('renders correctly', () => {
        (useParams as any).mockReturnValue({ raceId: '1' });
        render(<Standings />, { wrapper: Wrapper });
        expect(screen.getByText('Championship')).toBeInTheDocument();
        expect(screen.getByText('Standings')).toBeInTheDocument();
        expect(screen.getByTestId('standings-table')).toBeInTheDocument();
    });

    it('shows "Next Race" button if there are more races', () => {
        (useParams as any).mockReturnValue({ raceId: '1' });
        render(<Standings />, { wrapper: Wrapper });
        expect(screen.getByText('Next Race')).toBeInTheDocument();
    });

    it('shows "Finish Season" button if it was the last race', () => {
        (useParams as any).mockReturnValue({ raceId: '2' });
        render(<Standings />, { wrapper: Wrapper });
        expect(screen.getByText('Finish Season')).toBeInTheDocument();
    });
});
