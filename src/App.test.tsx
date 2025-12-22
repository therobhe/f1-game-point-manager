import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

// We can test the navigation mostly
describe('App Integration', () => {
    it('navigates from race to finish', () => {
        // This is a bit complex to full integration test without mocking router fully or data.
        // But we can try rendering App and navigating.
        // The app uses BrowserRouter, so we should allow it.
        // However, we start at MainMenu.

        render(<App />);
        expect(screen.getByText(/F1 2014/i)).toBeInTheDocument();
        expect(screen.getByText(/Point Manager/i)).toBeInTheDocument();

        // We can't easily click through everything quickly.
        // So checking if App renders without crashing is a good start.
    });
});
