import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { LandingPage } from './LandingPage.tsx';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
	<HelmetProvider>
		<BrowserRouter>{children}</BrowserRouter>
	</HelmetProvider>
);

describe('LandingPage', () => {
	it('renders correctly', () => {
		render(<LandingPage />, { wrapper: Wrapper });
		expect(screen.getByText('F1 2014')).toBeInTheDocument();
		expect(screen.getByText('Season Manager')).toBeInTheDocument();
		expect(screen.getByText('Start your Season')).toBeInTheDocument();
	});

	it('has a link to track configuration', () => {
		render(<LandingPage />, { wrapper: Wrapper });
		const link = screen.getByRole('link', { name: /Start your Season/i });
		expect(link).toHaveAttribute('href', '/track-config');
	});
});
