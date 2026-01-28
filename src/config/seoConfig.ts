export const SEO_CONFIG = {
    baseUrl: 'https://f1-2014-season-manager.com', // Update with your actual domain
    siteName: 'F1 2014 Season Manager',
    defaultTitle: 'F1 2014 Season Manager - Split-Screen Season Tracking Tool',
    defaultDescription:
        'Restore split-screen season tracking in F1 2014 with this web tool. Track driver standings, constructor championships, and manage custom race calendars inspired by F1 2011.',
    defaultImage: '/android-chrome-512x512.png',
    twitterHandle: '@your_handle', // Update with your actual handle
};

export interface PageSEO {
    title: string;
    description: string;
    canonical?: string;
    robots?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
}

export const PAGE_SEO: Record<string, PageSEO> = {
    home: {
        title: 'F1 2014 Season Manager - Split-Screen Season Tracking Tool',
        description:
            'Restore split-screen season tracking in F1 2014. Track driver standings, constructor championships, and manage race calendars. Inspired by F1 2011 split-screen seasons.',
        robots: 'index,follow',
    },
    configCalendar: {
        title: 'Season Configuration | F1 2014 Season Manager',
        description:
            'Configure your F1 2014 season. Choose the full 19-track calendar or create a custom championship with your favorite circuits.',
        robots: 'index,follow',
    },
    customCalendar: {
        title: 'Custom Calendar | F1 2014 Season Manager',
        description:
            'Build your own F1 2014 championship calendar. Select from 19 official circuits to create your perfect race season.',
        robots: 'noindex,follow',
    },
    configPointSystem: {
        title: 'Point System Configuration | F1 2014 Season Manager',
        description:
            'Choose your F1 2014 points system. Use the official 2014 scoring or create a custom point distribution for your championship.',
        robots: 'index,follow',
    },
    customPointSystem: {
        title: 'Custom Point System | F1 2014 Season Manager',
        description: 'Create a custom F1 point scoring system for your championship season.',
        robots: 'noindex,follow',
    },
    raceResult: {
        title: 'Race Result | F1 2014 Season Manager',
        description: 'Assign race positions and points to drivers after each grand prix in your F1 2014 championship.',
        robots: 'noindex,nofollow',
    },
    standings: {
        title: 'Championship Standings | F1 2014 Season Manager',
        description: 'View the current driver and constructor championship standings in your F1 2014 season.',
        robots: 'noindex,nofollow',
    },
    finish: {
        title: 'Season Finale | F1 2014 Season Manager',
        description: 'View the final championship results for your F1 2014 season.',
        robots: 'noindex,nofollow',
    },
};

export const STRUCTURED_DATA = {
    website: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.baseUrl,
        description: SEO_CONFIG.defaultDescription,
    },
    webApplication: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.baseUrl,
        description: SEO_CONFIG.defaultDescription,
        applicationCategory: 'GameApplication',
        operatingSystem: 'Web Browser',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        featureList: [
            'Split-screen season tracking',
            'Driver championship standings',
            'Constructor championship standings',
            'Custom race calendars',
            'Custom point systems',
        ],
    },
    organization: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.baseUrl,
        logo: `${SEO_CONFIG.baseUrl}/android-chrome-512x512.png`,
    },
};
