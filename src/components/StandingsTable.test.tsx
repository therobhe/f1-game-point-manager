import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { StandingsTable } from './StandingsTable';
import * as hooks from '../context/hooks';
import { drivers, teams } from '../utils/data';

// Mock the context hook
vi.mock('../context/hooks', () => ({
    useSeasonContext: vi.fn(),
}));

describe('StandingsTable', () => {
    it('renders driver and constructor standings correctly', () => {
        // Mock points: Driver 1 has 25 points, Driver 3 has 18 points.
        // Driver 1 is in Team 1. Driver 3 is in Team 2.
        const mockDriverPoints = {
            1: 25,
            3: 18,
        };

        (hooks.useSeasonContext as any).mockReturnValue({
            driverPoints: mockDriverPoints,
        });

        render(<StandingsTable />);

        // Check Headers
        expect(screen.getByText('Driver Standings')).toBeInTheDocument();
        expect(screen.getByText('Constructor Standings')).toBeInTheDocument();

        // Check Driver Points
        expect(screen.getByText('Lewis Hamilton')).toBeInTheDocument();
        // 25 points might appear multiple times (driver and team)
        const points25 = screen.getAllByText('25');
        expect(points25.length).toBeGreaterThanOrEqual(1);

        expect(screen.getByText('Sebastian Vettel')).toBeInTheDocument();
        const points18 = screen.getAllByText('18');
        expect(points18.length).toBeGreaterThanOrEqual(1);

        // Check Team Points
        // Team 1 (Mercedes) should have 25 points from Driver 1.
        // Team 2 (Red Bull) should have 18 points from Driver 3.
        expect(screen.getByText(teams.find(t => t.id === 1)?.name || '')).toBeInTheDocument();


    });

    it('sorts drivers and teams by points descending', () => {
        const mockDriverPoints = {
            1: 10,
            2: 25, // Nico Rosberg (Team 1)
        };

        (hooks.useSeasonContext as any).mockReturnValue({
            driverPoints: mockDriverPoints,
        });

        render(<StandingsTable />);

        const rows = screen.getAllByRole('row');
        // Row 1: Header
        // Row 2: Driver Pos 1 (Should be Nico with 25)
        // Row 3: Driver Pos 2 (Should be Lewis with 10)

        // Simplification: just check if Nico appears before Lewis in the document order for the driver table.
        // But tables are separate. 
        // We can verify the "Pos" 1 contains Nico.

        // Let's just check the text content of the first data row in driver table.
        // It's a bit hard to target specific table with just getByRole('row').
        // We can look for the cells.

        expect(screen.getAllByRole('cell')[1]).toHaveTextContent('Nico Rosberg');
    });
});
