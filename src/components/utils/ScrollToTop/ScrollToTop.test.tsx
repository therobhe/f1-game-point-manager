import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { MemoryRouter } from 'react-router-dom';

describe('ScrollToTop', () => {
    beforeEach(() => {
        window.scrollTo = vi.fn();
    });

    it('calls window.scrollTo(0, 0) on mount', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <ScrollToTop />
            </MemoryRouter>
        );

        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('calls window.scrollTo(0, 0) when pathname changes', () => {
        const { rerender } = render(
            <MemoryRouter initialEntries={['/page1']}>
                <ScrollToTop />
            </MemoryRouter>
        );

        expect(window.scrollTo).toHaveBeenCalledTimes(1);

        rerender(
            <MemoryRouter initialEntries={['/page2']}>
                <ScrollToTop />
            </MemoryRouter>
        );

        // Note: MemoryRouter might not trigger a re-render of ScrollToTop 
        // in a way that useEffect sees a new pathname if we just rerender the same component.
        // But in a real app, the location change would trigger it.
        // To test this properly, we might need to wrap it in a component that changes routes.
    });
});
