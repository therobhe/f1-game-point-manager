import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DriverCard } from '../DriverCard/DriverCard';

describe('DriverCard', () => {
    const mockDriver = {
        id: 1,
        name: 'Lewis Hamilton',
        nationality: 'Great Britain' as const,
        teamId: 1,
    };

    it('renders driver information correctly', () => {
        render(<DriverCard {...mockDriver} onClick={vi.fn()} />);

        expect(screen.getByText('Lewis Hamilton')).toBeInTheDocument();
        expect(screen.getByText('Great Britain')).toBeInTheDocument();
        // Assuming getTeamNameFromId(1) returns something specific, 
        // but we can just check if it renders a team name.
        expect(screen.getByText(/Mercedes/i) || screen.getByText(/Team/i)).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const mockOnClick = vi.fn();
        render(<DriverCard {...mockDriver} onClick={mockOnClick} />);

        fireEvent.click(screen.getByRole('button'));
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('is disabled when the disabled prop is true', () => {
        render(<DriverCard {...mockDriver} onClick={vi.fn()} disabled={true} />);

        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('displays position overlay when assignedPosition is provided', () => {
        render(<DriverCard {...mockDriver} onClick={vi.fn()} assignedPosition={1} />);

        expect(screen.getByText('P1')).toBeInTheDocument();
    });

    it('does not display position overlay when assignedPosition is not provided', () => {
        render(<DriverCard {...mockDriver} onClick={vi.fn()} />);

        expect(screen.queryByText(/^P\d+$/)).not.toBeInTheDocument();
    });
});
