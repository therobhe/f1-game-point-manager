import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CalendarPreview } from '../CalendarPreview/CalendarPreview';
import { useSeasonContext } from '../../context/hooks';

vi.mock('../../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

describe('CalendarPreview', () => {
    it('renders "No races selected yet" when calendar is empty', () => {
        (useSeasonContext as any).mockReturnValue({
            raceCalendar: [],
            setRaceCalendar: vi.fn(),
        });

        render(<CalendarPreview />);
        expect(screen.getByText('No races selected yet.')).toBeInTheDocument();
    });

    it('renders the list of races when calendar is not empty', () => {
        const mockCalendar = [
            { id: 1, name: 'Monaco', nationality: 'Monegasque' },
            { id: 2, name: 'Silverstone', nationality: 'British' },
        ];
        (useSeasonContext as any).mockReturnValue({
            raceCalendar: mockCalendar,
            setRaceCalendar: vi.fn(),
        });

        render(<CalendarPreview />);
        expect(screen.getByText('Monaco')).toBeInTheDocument();
        expect(screen.getByText('Silverstone')).toBeInTheDocument();
        expect(screen.getByText('01')).toBeInTheDocument();
        expect(screen.getByText('02')).toBeInTheDocument();
    });

    it('calls setRaceCalendar when a race is removed', () => {
        const mockCalendar = [
            { id: 1, name: 'Monaco', nationality: 'Monegasque' },
        ];
        const mockSetRaceCalendar = vi.fn();
        (useSeasonContext as any).mockReturnValue({
            raceCalendar: mockCalendar,
            setRaceCalendar: mockSetRaceCalendar,
        });

        render(<CalendarPreview />);

        // Find the remove button (it's an SVG inside a button)
        const removeButton = screen.getByRole('button');
        fireEvent.click(removeButton);

        expect(mockSetRaceCalendar).toHaveBeenCalled();

        // Verify the functional update logic
        const updateFn = mockSetRaceCalendar.mock.calls[0][0];
        const result = updateFn(mockCalendar);
        expect(result).toEqual([]);
    });
});
