import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MainMenu } from '../MainMenu/MainMenu';
import { BrowserRouter } from 'react-router-dom';

describe('MainMenu', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <MainMenu />
            </BrowserRouter>
        );
        expect(screen.getByText('F1 2014')).toBeInTheDocument();
        expect(screen.getByText('Point Manager')).toBeInTheDocument();
        expect(screen.getByText('New Season')).toBeInTheDocument();
    });

    it('has a link to track configuration', () => {
        render(
            <BrowserRouter>
                <MainMenu />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: /New Season/i });
        expect(link).toHaveAttribute('href', '/track-config');
    });
});
