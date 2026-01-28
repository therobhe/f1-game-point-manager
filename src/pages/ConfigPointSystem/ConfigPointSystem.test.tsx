import { render, screen, fireEvent } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ConfigPointSystem } from '../ConfigPointSystem/ConfigPointSystem';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useSeasonContext } from '../../context/hooks';
import { pointSystem } from '../../utils/data';

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

describe('ConfigPointSystem', () => {
    const mockNavigate = vi.fn();
    const mockSetActivePointSystem = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useNavigate as any).mockReturnValue(mockNavigate);
        (useSeasonContext as any).mockReturnValue({
            setActivePointSystem: mockSetActivePointSystem,
        });
    });

    it('renders correctly', () => {
        render(<ConfigPointSystem />, { wrapper: Wrapper });
        expect(screen.getByText('Modern')).toBeInTheDocument();
        expect(screen.getByText('Classic')).toBeInTheDocument();
        expect(screen.getByText('Retro')).toBeInTheDocument();
        expect(screen.getByText('Custom')).toBeInTheDocument();
    });

    it('selects modern point system and navigates to race 1', () => {
        render(<ConfigPointSystem />, { wrapper: Wrapper });

        fireEvent.click(screen.getByText('Modern'));
        expect(mockSetActivePointSystem).toHaveBeenCalledWith(pointSystem.modern);
        expect(mockNavigate).toHaveBeenCalledWith('/race/1');
    });

    it('navigates to custom point system page', () => {
        render(<ConfigPointSystem />, { wrapper: Wrapper });

        fireEvent.click(screen.getByText('Custom'));
        expect(mockNavigate).toHaveBeenCalledWith('/custom-pointsystem-config');
    });
});
