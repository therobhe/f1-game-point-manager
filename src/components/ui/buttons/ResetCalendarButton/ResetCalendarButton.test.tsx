import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ResetCalendarButton } from '../ResetCalendarButton/ResetCalendarButton';
import { useSeasonContext } from '../../../../context/hooks';

vi.mock('../../../../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

describe('ResetCalendarButton', () => {
    it('calls resetRaceCalendar when clicked', () => {
        const mockReset = vi.fn();
        (useSeasonContext as any).mockReturnValue({
            resetRaceCalendar: mockReset,
        });

        render(<ResetCalendarButton />);

        fireEvent.click(screen.getByRole('button'));
        expect(mockReset).toHaveBeenCalled();
    });

    it('renders the correct text', () => {
        (useSeasonContext as any).mockReturnValue({
            resetRaceCalendar: vi.fn(),
        });

        render(<ResetCalendarButton />);
        expect(screen.getByText('Reset Calendar')).toBeInTheDocument();
    });
});
