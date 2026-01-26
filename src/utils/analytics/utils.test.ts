import { beforeEach, describe, expect, it, vi } from 'vitest';
import { loadGoatCounter, trackPageview } from './utils';

describe('analytics utils', () => {
	beforeEach(() => {
		document.head.innerHTML = '';
		// @ts-ignore
		delete window.goatcounter;
		// @ts-ignore
		delete window.__goatcounter_loaded;
		vi.clearAllMocks();
	});
	
	it('queues trackPageview calls if script is not loaded and flushes them on load', () => {
		// 1. Call trackPageview while script is missing
		trackPageview('/test-path');
		
		// 2. Setup mock for future execution
		const mockCount = vi.fn();
		// @ts-ignore
		window.goatcounter = { count: mockCount };
		
		// 3. Load the script
		loadGoatCounter();
		
		// 4. Verify script attributes
		const scripts = document.head.getElementsByTagName('script');
		expect(scripts.length).toBe(1);
		const script = scripts[0];
		expect(script.getAttribute('data-goatcounter-settings')).toContain('no_onload');
		
		// 5. Simulate script onload event
		// The loadGoatCounter function assigns an onload handler.
		// We need to call it.
		if(script.onload) {
			// @ts-ignore
			script.onload(new Event('load'));
		}
		
		// 6. Verify the queued task was executed
		expect(mockCount).toHaveBeenCalledWith({ path: '/test-path' });
	});
	
	it('tracks immediately if script is already available', () => {
		const mockCount = vi.fn();
		// @ts-ignore
		window.goatcounter = { count: mockCount };
		
		trackPageview('/immediate');
		
		expect(mockCount).toHaveBeenCalledWith({ path: '/immediate' });
	});
	
	it('loadGoatCounter sets global loaded flag', () => {
		loadGoatCounter();
		// @ts-ignore
		expect(window.__goatcounter_loaded).toBe(true);
	});
});
