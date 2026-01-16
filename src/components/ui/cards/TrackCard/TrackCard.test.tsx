import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TrackCard } from '../TrackCard/TrackCard';
import { useSeasonContext } from '../../../../context/hooks';

vi.mock('../../../../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

describe('TrackCard', () => {
    const mockTrack = {
        id: 1,
        name: 'Circuit of the Americas',
        nationality: 'USA' as const,
    };

    it('renders track information correctly', () => {
        (useSeasonContext as any).mockReturnValue({
            addSingleRaceToRaceCalendar: vi.fn(),
        });

        render(<TrackCard {...mockTrack} />);

        expect(screen.getByText('Circuit of the Americas')).toBeInTheDocument();
        expect(screen.getByText('USA')).toBeInTheDocument();
    });

    it('calls addSingleRaceToRaceCalendar when clicked', () => {
        const mockAddRace = vi.fn();
        (useSeasonContext as any).mockReturnValue({
            addSingleRaceToRaceCalendar: mockAddRace,
        });

        render(<TrackCard {...mockTrack} />);

        fireEvent.click(screen.getByRole('button'));
        expect(mockAddRace).toHaveBeenCalledWith(mockTrack);
    });
});
