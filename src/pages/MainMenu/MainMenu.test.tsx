import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { MainMenu } from './MainMenu.tsx';

describe('MainMenu', () => {
	it('renders correctly', () => {
		render(
			<BrowserRouter>
				<MainMenu />
			</BrowserRouter>
		);
		expect(screen.getByText(/Restore split-screen/i)).toBeInTheDocument();
		expect(screen.getByText(/season tracking in F1 2014/i)).toBeInTheDocument();
		expect(screen.getByText(/Start Season Tracker/i)).toBeInTheDocument();
	});
	
	it('has a link to track configuration', () => {
		render(
			<BrowserRouter>
				<MainMenu />
			</BrowserRouter>
		);
		const link = screen.getByRole('link', { name: /Start Season Tracker/i });
		expect(link).toHaveAttribute('href', '/track-config');
	});
	
	it('displays transparency information', () => {
		render(
			<BrowserRouter>
				<MainMenu />
			</BrowserRouter>
		);
		expect(screen.getByText(/About this tool/i)).toBeInTheDocument();
		expect(screen.getByText(/No account required/i)).toBeInTheDocument();
		expect(screen.getByText(/No ads, no tracking, no data stored/i)).toBeInTheDocument();
		expect(screen.getByText(/Runs entirely in your browser/i)).toBeInTheDocument();
	});
	
	it('displays the nostalgia hook and explanation', () => {
		render(
			<BrowserRouter>
				<MainMenu />
			</BrowserRouter>
		);
		expect(screen.getByText(/A tiny web tool inspired by the split-screen seasons/i)).toBeInTheDocument();
		expect(screen.getByText(/In F1 2011, local split-screen players could run full seasons/i)).toBeInTheDocument();
	});
	
	it('displays the footer message', () => {
		render(
			<BrowserRouter>
				<MainMenu />
			</BrowserRouter>
		);
		expect(screen.getByText(/Made by a fellow F1 2014 split-screen player/i)).toBeInTheDocument();
	});
});
