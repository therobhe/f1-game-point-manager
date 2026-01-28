/**
 * Sitemap Generator for F1 2014 Season Manager
 * 
 * This script generates a sitemap.xml file for static/indexable routes.
 * Run with: node scripts/generate-sitemap.js
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration - Update this with your production domain
const BASE_URL = process.env.SITE_URL || 'https://f1-2014-season-manager.com';

// Define indexable routes with their priority and change frequency
const routes = [
    { path: '/', priority: 1.0, changefreq: 'monthly' },
    { path: '/track-config', priority: 0.8, changefreq: 'monthly' },
    { path: '/points', priority: 0.8, changefreq: 'monthly' },
];

/**
 * Generates the sitemap XML content
 */
function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];

    const urlEntries = routes.map(route => `
    <url>
        <loc>${BASE_URL}${route.path}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${route.changefreq}</changefreq>
        <priority>${route.priority}</priority>
    </url>`).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Writes the sitemap to the dist directory
 */
function writeSitemap() {
    const sitemap = generateSitemap();
    const outputPath = resolve(__dirname, '../dist/sitemap.xml');

    try {
        writeFileSync(outputPath, sitemap, 'utf-8');
        console.log(`✅ Sitemap generated: ${outputPath}`);
        console.log(`📍 Routes included: ${routes.length}`);
        routes.forEach(route => {
            console.log(`   - ${BASE_URL}${route.path}`);
        });
    } catch (error) {
        // If dist doesn't exist, try public folder for dev
        const publicPath = resolve(__dirname, '../public/sitemap.xml');
        try {
            writeFileSync(publicPath, sitemap, 'utf-8');
            console.log(`✅ Sitemap generated: ${publicPath}`);
        } catch (err) {
            console.error('❌ Error writing sitemap:', err.message);
            process.exit(1);
        }
    }
}

// Run the generator
writeSitemap();
