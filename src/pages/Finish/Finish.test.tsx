import { render, screen, fireEvent } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Finish } from '../Finish/Finish';
import { BrowserRouter } from 'react-router-dom';
import { useSeasonContext } from '../../context/hooks';
import { drivers } from '../../utils/data';

vi.mock('../../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
    </HelmetProvider>
);

describe('Finish', () => {
    const mockResetSeason = vi.fn();
    const mockDriverPoints = {
        [drivers[0].id]: 100,
        [drivers[1].id]: 80,
        [drivers[2].id]: 60,
    };

    beforeEach(() => {
        vi.clearAllMocks();
        (useSeasonContext as any).mockReturnValue({
            driverPoints: mockDriverPoints,
            resetSeason: mockResetSeason,
        });
    });

    it('renders the podium correctly', () => {
        render(<Finish />, { wrapper: Wrapper });

        expect(screen.getByText(/SEASON/i)).toBeInTheDocument();
        expect(screen.getByText(/FINALE/i)).toBeInTheDocument();

        // Check top 3 drivers
        expect(screen.getAllByText(drivers[0].name).length).toBeGreaterThan(0);
        expect(screen.getAllByText(drivers[1].name).length).toBeGreaterThan(0);
        expect(screen.getAllByText(drivers[2].name).length).toBeGreaterThan(0);

        // Check points
        expect(screen.getAllByText(/100/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/80/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/60/i).length).toBeGreaterThan(0);
    });

    it('calls resetSeason when "Back to Main Menu" is clicked', () => {
        render(<Finish />, { wrapper: Wrapper });

        const backButton = screen.getByText('Back to Main Menu');
        fireEvent.click(backButton);

        expect(mockResetSeason).toHaveBeenCalled();
    });
});
