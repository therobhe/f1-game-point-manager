import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CustomCalendarConfig } from '../CustomCalendarConfig/CustomCalendarConfig';
import { BrowserRouter } from 'react-router-dom';
import { useSeasonContext } from '../../context/hooks';
import { tracks } from '../../utils/data';

vi.mock('../../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

// Mock CalendarPreview to avoid deep testing here
vi.mock('../../components/CalendarPreview/CalendarPreview', () => ({
    CalendarPreview: () => <div data-testid="calendar-preview">Calendar Preview</div>,
}));

describe('CustomCalendarConfig', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        (useSeasonContext as any).mockReturnValue({
            raceCalendar: [],
            addSingleRaceToRaceCalendar: vi.fn(),
        });
    });

    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <CustomCalendarConfig />
            </BrowserRouter>
        );
        expect(screen.getByText('Track')).toBeInTheDocument();
        expect(screen.getByText('Selection')).toBeInTheDocument();
        expect(screen.getByTestId('calendar-preview')).toBeInTheDocument();
    });

    it('renders all track cards', () => {
        render(
            <BrowserRouter>
                <CustomCalendarConfig />
            </BrowserRouter>
        );
        // Check if some tracks from data are rendered
        expect(screen.getByText(tracks[0].name)).toBeInTheDocument();
        expect(screen.getByText(tracks[1].name)).toBeInTheDocument();
    });

    it('disables "Continue" button when calendar is empty', () => {
        render(
            <BrowserRouter>
                <CustomCalendarConfig />
            </BrowserRouter>
        );
        const continueButton = screen.getByText('Continue').closest('a');
        // In the component, it's a Link with pointer-events-none if empty
        expect(continueButton).toHaveClass('opacity-30');
    });

    it('enables "Continue" button when calendar is not empty', () => {
        (useSeasonContext as any).mockReturnValue({
            raceCalendar: [{ id: 1, name: 'Monaco', nationality: 'Monegasque' }],
            addSingleRaceToRaceCalendar: vi.fn(),
        });

        render(
            <BrowserRouter>
                <CustomCalendarConfig />
            </BrowserRouter>
        );
        const continueButton = screen.getByText('Continue').closest('a');
        expect(continueButton).not.toHaveClass('opacity-30');
    });
});
