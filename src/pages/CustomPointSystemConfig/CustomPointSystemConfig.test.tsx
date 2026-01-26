import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import type { Mock } from 'vitest';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useSeasonContext } from '../../context/hooks';
import { CustomPointSystemConfig } from './CustomPointSystemConfig';

vi.mock('react-router-dom', async() => {
	const actual = await vi.importActual('react-router-dom');
	return {
		...actual,
		useNavigate: vi.fn(),
	};
});

vi.mock('../../context/hooks', () => ({
	useSeasonContext: vi.fn(),
}));

describe('CustomPointSystemConfig', () => {
	const mockNavigate = vi.fn();
	const mockSetActivePointSystem = vi.fn();
	
	beforeEach(() => {
		vi.clearAllMocks();
		const mockedUseNavigate = useNavigate as unknown as Mock;
		mockedUseNavigate.mockReturnValue(mockNavigate);
		const mockedUseSeasonContext = useSeasonContext as unknown as Mock;
		mockedUseSeasonContext.mockReturnValue({
			setActivePointSystem: mockSetActivePointSystem,
		});
	});
	
	it('renders correctly', () => {
		render(
			<BrowserRouter>
				<CustomPointSystemConfig />
			</BrowserRouter>
		);
		expect(screen.getByText('Custom')).toBeInTheDocument();
		expect(screen.getByText('Scoring')).toBeInTheDocument();
		// Check if some position inputs are rendered
		expect(screen.getByText('Pos 1')).toBeInTheDocument();
		expect(screen.getByText('Pos 10')).toBeInTheDocument();
	});
	
	it('updates points when input changes', () => {
		render(
			<BrowserRouter>
				<CustomPointSystemConfig />
			</BrowserRouter>
		);
		
		const p1Input = screen.getAllByRole('spinbutton')[0]; // First input is P1
		fireEvent.change(p1Input, { target: { value: '50' } });
		
		expect(p1Input).toHaveValue(50);
	});
	
	it('updates points when plus/minus buttons are clicked', () => {
		render(
			<BrowserRouter>
				<CustomPointSystemConfig />
			</BrowserRouter>
		);
		
		const p1Input = screen.getAllByRole('spinbutton')[0];
		// Select buttons via aria-label to avoid Unicode minus issues
		const minusButton = screen.getAllByLabelText(/Decrease points for position/i)[0];
		const plusButton = screen.getAllByLabelText(/Increase points for position/i)[0];
		
		fireEvent.click(plusButton);
		expect(p1Input).toHaveValue(1);
		
		fireEvent.click(minusButton);
		expect(p1Input).toHaveValue(0);
	});
	
	it('submits the form and navigates', () => {
		render(
			<BrowserRouter>
				<CustomPointSystemConfig />
			</BrowserRouter>
		);
		
		const p1Input = screen.getAllByRole('spinbutton')[0];
		fireEvent.change(p1Input, { target: { value: '25' } });
		
		const submitButton = screen.getByText('Start Season');
		fireEvent.click(submitButton);
		
		expect(mockSetActivePointSystem).toHaveBeenCalled();
		const submittedPoints = mockSetActivePointSystem.mock.calls[0][0];
		expect(submittedPoints[0]).toBe(25);
		expect(mockNavigate).toHaveBeenCalledWith('/race/1');
	});
});
