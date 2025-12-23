import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BackButton } from '../BackButton/BackButton';
import { BrowserRouter } from 'react-router-dom';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe('BackButton', () => {
    it('renders correctly', () => {
        render(
            <BrowserRouter>
                <BackButton />
            </BrowserRouter>
        );
        expect(screen.getByText('Back')).toBeInTheDocument();
    });

    it('calls navigate(-1) when clicked', () => {
        render(
            <BrowserRouter>
                <BackButton />
            </BrowserRouter>
        );
        fireEvent.click(screen.getByRole('button'));
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
});
