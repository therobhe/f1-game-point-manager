import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRaceButton } from '../NextRaceButton/NextRaceButton';
import { BrowserRouter, useNavigate, useParams } from 'react-router-dom';
import { useSeasonContext } from '../../../../context/hooks';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: vi.fn(),
        useParams: vi.fn(),
    };
});

vi.mock('../../../../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

describe('NextRaceButton', () => {
    const mockNavigate = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useNavigate as any).mockReturnValue(mockNavigate);
    });

    it('navigates to the provided "to" prop if present', () => {
        (useParams as any).mockReturnValue({ raceId: '1' });
        (useSeasonContext as any).mockReturnValue({ raceCalendar: [{}, {}] });

        render(
            <BrowserRouter>
                <NextRaceButton to="/custom-path" />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(mockNavigate).toHaveBeenCalledWith('/custom-path');
    });

    it('navigates to the next race if not at the end of the calendar', () => {
        (useParams as any).mockReturnValue({ raceId: '1' });
        (useSeasonContext as any).mockReturnValue({ raceCalendar: [{}, {}] });

        render(
            <BrowserRouter>
                <NextRaceButton />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(mockNavigate).toHaveBeenCalledWith('/race/2');
    });

    it('navigates to /finish if at the end of the calendar', () => {
        (useParams as any).mockReturnValue({ raceId: '2' });
        (useSeasonContext as any).mockReturnValue({ raceCalendar: [{}, {}] });

        render(
            <BrowserRouter>
                <NextRaceButton />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(mockNavigate).toHaveBeenCalledWith('/finish');
    });
});
