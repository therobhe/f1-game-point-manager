/**
 * Test utilities with providers for testing components that use react-helmet-async
 */
import type { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { render, type RenderOptions } from '@testing-library/react';

/**
 * Wrapper component that provides all necessary context providers for testing
 */
export const AllProviders = ({ children }: { children: ReactNode }) => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </HelmetProvider>
    );
};

/**
 * Custom render function that wraps component with all providers
 */
export const renderWithProviders = (ui: ReactNode, options?: Omit<RenderOptions, 'wrapper'>) => {
    return render(ui, { wrapper: AllProviders, ...options });
};

/**
 * Router-only wrapper (for components that don't need Helmet but are already wrapped elsewhere)
 */
export const RouterWrapper = ({ children }: { children: ReactNode }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};

/**
 * Helmet-only wrapper (for tests that need to provide their own router)
 */
export const HelmetWrapper = ({ children }: { children: ReactNode }) => {
    return <HelmetProvider>{children}</HelmetProvider>;
};
