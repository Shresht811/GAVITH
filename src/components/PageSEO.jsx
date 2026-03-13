import { useEffect } from 'react';

/**
 * PageSEO — Dynamically sets per-page meta tags via direct DOM manipulation.
 * Vite/React SPAs do not need react-helmet for basic meta updates.
 */
const PageSEO = ({ title, description, path = '/' }) => {
    useEffect(() => {
        const siteName = 'GAVITH';
        const fullTitle = `${title} | ${siteName}`;
        const url = `https://gavith.com${path}`;

        // Title
        document.title = fullTitle;

        // Helper to set a meta tag
        const setMeta = (selector, attr, content) => {
            let el = document.querySelector(selector);
            if (!el) {
                el = document.createElement('meta');
                const [attrName, attrValue] = attr;
                el.setAttribute(attrName, attrValue);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        setMeta('meta[name="description"]', ['name', 'description'], description);
        setMeta('meta[name="title"]', ['name', 'title'], fullTitle);

        // Open Graph
        setMeta('meta[property="og:title"]', ['property', 'og:title'], fullTitle);
        setMeta('meta[property="og:description"]', ['property', 'og:description'], description);
        setMeta('meta[property="og:url"]', ['property', 'og:url'], url);

        // Twitter Card
        setMeta('meta[name="twitter:title"]', ['name', 'twitter:title'], fullTitle);
        setMeta('meta[name="twitter:description"]', ['name', 'twitter:description'], description);
        setMeta('meta[name="twitter:url"]', ['name', 'twitter:url'], url);

        // Canonical
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', url);
    }, [title, description, path]);

    return null;
};

export default PageSEO;
