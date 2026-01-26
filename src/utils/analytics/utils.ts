/**
 * Type definition for extending the Window object to include GoatCounter-specific properties.
 */
interface GoatCounter {
	count?: (opts?: {path?: string; title?: string; ref?: string}) => void;
}

type GoatWindow = Window & {goatcounter?: GoatCounter; __goatcounter_loaded?: boolean};

// Queue for tracking events that happen before the script is loaded
const queue: Array<() => void> = [];

/**
 * Loads the GoatCounter analytics script into the document.
 *
 * This function ensures that the script is only loaded once by checking the `__goatcounter_loaded` flag.
 * The script is appended to the document head and configured with the provided site URL.
 * It also sets up an onload handler to process any queued tracking events.
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
	// Disable automatic tracking on load to have full manual control via the router wrapper
	s.setAttribute('data-goatcounter-settings', '{"no_onload": true}');
	
	s.onload = () => {
		// Process any events that were queued while the script was loading
		queue.forEach((task) => task());
		queue.length = 0;
	};
	
	document.head.appendChild(s); // Append the script to the document head.
	w.__goatcounter_loaded = true; // Mark the script as loaded.
}

/**
 * Tracks a pageview using GoatCounter analytics.
 *
 * This function calls the GoatCounter `count` method to log a pageview. If no path is provided,
 * it defaults to the current window location (pathname and search query).
 * If the analytics script is not yet loaded, the event is queued and processed when the script loads.
 *
 * @param {string} [path] - The path to track. Defaults to the current location's pathname and search query.
 */
export function trackPageview(path?: string) {
	const w = window as GoatWindow;
	const track = () => {
		if(w.goatcounter && typeof w.goatcounter.count === 'function') {
			w.goatcounter.count({ path: path ?? window.location.pathname + window.location.search });
		}
	};
	
	// Check if the GoatCounter object and its `count` method are available.
	if(w.goatcounter && typeof w.goatcounter.count === 'function') {
		track();
	} else {
		// Queue the event if script is not ready
		queue.push(track);
	}
}
