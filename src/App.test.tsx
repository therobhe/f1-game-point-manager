import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { describe, expect, it } from 'vitest';
import App from './App';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
	<HelmetProvider>{children}</HelmetProvider>
);

// We can test the navigation mostly
describe('App Integration', () => {
	it('renders landing page on initial load', () => {
		// This is a bit complex to full integration test without mocking router fully or data.
		// But we can try rendering App and navigating.
		// The app uses BrowserRouter, so we should allow it.
		// However, we start at LandingPage.

		render(<App />, { wrapper: Wrapper });

		// Use getAllByText since there might be multiple elements with the same text
		expect(screen.getAllByText(/F1 2014/i).length).toBeGreaterThan(0);
		expect(screen.getAllByText(/Season Manager/i).length).toBeGreaterThan(0);

		// We can't easily click through everything quickly.
		// So checking if App renders without crashing is a good start.
	});
});
