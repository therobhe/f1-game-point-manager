import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadGoatCounter, trackPageview } from './utils.ts';

/**
 * A React component that wraps the application and integrates GoatCounter analytics.
 *
 * This component ensures that:
 * - The GoatCounter script is loaded once when the app starts.
 * - Pageviews are tracked on every route change within the app.
 *
 * @param {React.ReactNode} children - The child components to be rendered inside the wrapper.
 * @returns {JSX.Element} The wrapped child components.
 */
export default function AnalyticsRouterWrapper({ children }: {children: React.ReactNode}) {
	const location = useLocation();
	
	/**
	 * useEffect hook to load the GoatCounter script once when the app starts.
	 * This ensures the analytics script is added to the document head.
	 */
	useEffect(() => {
		loadGoatCounter();
	}, []);
	
	/**
	 * useEffect hook to track pageviews on route changes.
	 * This calls the GoatCounter `trackPageview` function with the current path and query string.
	 */
	useEffect(() => {
		trackPageview(location.pathname + location.search);
	}, [ location ]);
	
	return <>{children}</>;
}
