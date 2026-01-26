import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import AnalyticsRouterWrapper from './AnalyticsRouterWrapper';
import * as analyticsUtils from './utils';

// Mock the analytics utils
vi.mock('./utils', () => ({
	loadGoatCounter: vi.fn(),
	trackPageview: vi.fn(),
}));

describe('AnalyticsRouterWrapper', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	
	it('renders children correctly', () => {
		render(
			<MemoryRouter initialEntries={[ '/' ]}>
				<AnalyticsRouterWrapper>
					<div data-testid="child">Child Content</div>
				</AnalyticsRouterWrapper>
			</MemoryRouter>
		);
		
		expect(screen.getByTestId('child')).toBeInTheDocument();
		expect(screen.getByText('Child Content')).toBeInTheDocument();
	});
	
	it('calls loadGoatCounter on mount', () => {
		render(
			<MemoryRouter initialEntries={[ '/' ]}>
				<AnalyticsRouterWrapper>
					<div>Child</div>
				</AnalyticsRouterWrapper>
			</MemoryRouter>
		);
		
		expect(analyticsUtils.loadGoatCounter).toHaveBeenCalledTimes(1);
	});
	
	it('calls trackPageview on mount and whenever location changes', async() => {
		const user = userEvent.setup();
		const NavigateButton = () => {
			const navigate = useNavigate();
			return <button onClick={() => navigate('/new-page')}>Go</button>;
		};
		
		render(
			<MemoryRouter initialEntries={[ '/' ]}>
				<AnalyticsRouterWrapper>
					<Routes>
						<Route path="/" element={<NavigateButton />} />
						<Route path="/new-page" element={<div>New Page</div>} />
					</Routes>
				</AnalyticsRouterWrapper>
			</MemoryRouter>
		);
		
		// Initial trackPageview call on mount for "/"
		expect(analyticsUtils.trackPageview).toHaveBeenCalledWith('/');
		
		// Trigger navigation
		const button = screen.getByText('Go');
		await user.click(button);
		
		// Should call trackPageview for "/new-page"
		await waitFor(() => {
			expect(analyticsUtils.trackPageview).toHaveBeenCalledWith('/new-page');
		});
		expect(analyticsUtils.trackPageview).toHaveBeenCalledTimes(2);
	});
});
