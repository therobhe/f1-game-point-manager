import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '../../config/seoConfig';

export interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    robots?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogType?: string;
    noindex?: boolean;
}

/**
 * SEO component for managing page metadata using react-helmet-async.
 * Updates <head> elements on route changes for improved search engine optimization.
 *
 * @param props - SEO metadata properties
 * @returns Helmet component with meta tags
 */
export const SEO: React.FC<SEOProps> = ({
    title = SEO_CONFIG.defaultTitle,
    description = SEO_CONFIG.defaultDescription,
    canonical,
    robots = 'index,follow',
    ogTitle,
    ogDescription,
    ogImage = SEO_CONFIG.defaultImage,
    ogType = 'website',
    noindex = false,
}) => {
    const fullTitle = title.includes(SEO_CONFIG.siteName) ? title : `${title} | ${SEO_CONFIG.siteName}`;
    const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : SEO_CONFIG.baseUrl);
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${SEO_CONFIG.baseUrl}${ogImage}`;
    const robotsContent = noindex ? 'noindex,nofollow' : robots;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={robotsContent} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content={SEO_CONFIG.siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={fullImageUrl} />
        </Helmet>
    );
};

export default SEO;
