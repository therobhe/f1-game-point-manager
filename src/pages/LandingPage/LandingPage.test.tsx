import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { LandingPage } from './LandingPage.tsx';

describe('LandingPage', () => {
	it('renders correctly', () => {
		render(
			<BrowserRouter>
				<LandingPage />
			</BrowserRouter>
		);
		expect(screen.getByText('F1 2014')).toBeInTheDocument();
		expect(screen.getByText('Season Manager')).toBeInTheDocument();
		expect(screen.getByText('Start your Season')).toBeInTheDocument();
	});
	
	it('has a link to track configuration', () => {
		render(
			<BrowserRouter>
				<LandingPage />
			</BrowserRouter>
		);
		const link = screen.getByRole('link', { name: /Start your Season/i });
		expect(link).toHaveAttribute('href', '/track-config');
	});
});
