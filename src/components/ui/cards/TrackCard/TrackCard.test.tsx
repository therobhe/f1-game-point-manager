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
        name: 'Monaco',
        nationality: 'Monaco' as const,
    };

    it('renders track information correctly', () => {
        (useSeasonContext as any).mockReturnValue({
            addSingleRaceToRaceCalendar: vi.fn(),
        });

        render(<TrackCard {...mockTrack} />);

        expect(screen.getAllByText('Monaco')).toHaveLength(2);
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
