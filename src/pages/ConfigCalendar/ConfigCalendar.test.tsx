import { render, screen, fireEvent } from '@testing-library/react';
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
        render(
            <BrowserRouter>
                <ConfigCalendar />
            </BrowserRouter>
        );
        expect(screen.getByText(/Full 2014/i)).toBeInTheDocument();
        expect(screen.getByText(/Custom/i)).toBeInTheDocument();
    });

    it('selects full season and navigates to points page', () => {
        render(
            <BrowserRouter>
                <ConfigCalendar />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText(/Full 2014/i));
        expect(mockSetRaceCalendar).toHaveBeenCalledWith(tracks);
        expect(mockNavigate).toHaveBeenCalledWith('/points');
    });

    it('navigates to custom calendar page', () => {
        render(
            <BrowserRouter>
                <ConfigCalendar />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText(/Custom/i));
        expect(mockNavigate).toHaveBeenCalledWith('/custom-calendar');
    });
});
