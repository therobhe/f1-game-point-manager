/**
 * Type definition for extending the Window object to include GoatCounter-specific properties.
 */
interface GoatCounter {
	count?: (opts?: {path?: string; title?: string; ref?: string}) => void;
}

type GoatWindow = Window & {goatcounter?: GoatCounter; __goatcounter_loaded?: boolean};

/**
 * Loads the GoatCounter analytics script into the document.
 *
 * This function ensures that the script is only loaded once by checking the `__goatcounter_loaded` flag.
 * The script is appended to the document head and configured with the provided site URL.
 *
 * @param {string} siteUrl - The URL of the GoatCounter site to track analytics for. Defaults to 'https://therobhe.goatcounter.com/count'.
 */
export function loadGoatCounter(siteUrl = 'https://therobhe.goatcounter.com/count') {
	const w = window as GoatWindow;
	if(w.__goatcounter_loaded) return; // Prevent loading the script multiple times.
	const s = document.createElement('script');
	s.async = true; // Load the script asynchronously to avoid blocking the main thread.
	s.src = 'https://gc.zgo.at/count.js'; // GoatCounter script source.
	s.setAttribute('data-goatcounter', siteUrl); // Set the site URL for tracking.
	document.head.appendChild(s); // Append the script to the document head.
	w.__goatcounter_loaded = true; // Mark the script as loaded.
}

/**
 * Tracks a pageview using GoatCounter analytics.
 *
 * This function calls the GoatCounter `count` method to log a pageview. If no path is provided,
 * it defaults to the current window location (pathname and search query).
 *
 * @param {string} [path] - The path to track. Defaults to the current location's pathname and search query.
 */
export function trackPageview(path?: string) {
	const w = window as GoatWindow;
	// Check if the GoatCounter object and its `count` method are available.
	if(w.goatcounter && typeof w.goatcounter.count === 'function') {
		w.goatcounter.count({ path: path ?? window.location.pathname + window.location.search });
	}
}
