import { render, screen, fireEvent } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ConfigCalendar } from '../ConfigCalendar/ConfigCalendar';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useSeasonContext } from '../../context/hooks';
import { tracks } from '../../utils/data';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn(),
    };
});

vi.mock('../../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
    </HelmetProvider>
);

describe('ConfigCalendar', () => {
    const mockNavigate = vi.fn();
    const mockSetRaceCalendar = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useNavigate as any).mockReturnValue(mockNavigate);
        (useSeasonContext as any).mockReturnValue({
            setRaceCalendar: mockSetRaceCalendar,
        });
    });

    it('renders correctly', () => {
        render(<ConfigCalendar />, { wrapper: Wrapper });
        expect(screen.getByText(/Full 2014/i)).toBeInTheDocument();
        expect(screen.getByText(/Custom/i)).toBeInTheDocument();
    });

    it('selects full season and navigates to points page', () => {
        render(<ConfigCalendar />, { wrapper: Wrapper });

        fireEvent.click(screen.getByText(/Full 2014/i));
        expect(mockSetRaceCalendar).toHaveBeenCalledWith(tracks);
        expect(mockNavigate).toHaveBeenCalledWith('/points');
    });

    it('navigates to custom calendar page', () => {
        render(<ConfigCalendar />, { wrapper: Wrapper });

        fireEvent.click(screen.getByText(/Custom/i));
        expect(mockNavigate).toHaveBeenCalledWith('/custom-calendar');
    });
});
