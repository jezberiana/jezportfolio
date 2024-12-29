import { getPosts } from '@/app/utils/utils';
import { baseURL, routes as routesConfig } from '@/app/resources';
import { routing } from '@/i18n/routing';

interface Post {
    slug: string;
    metadata: {
        publishedAt: string;
    };
}

export default async function sitemap() {
    const locales = routing.locales;
    const includeLocalePrefix = locales.length > 1;

    let works: { url: string; lastModified: string }[] = [];
    try {
        works = locales.flatMap((locale) =>
            getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]).map((post: Post) => ({
                url: `${baseURL}${includeLocalePrefix ? `/${locale}` : ''}/work/${post.slug}`,
                lastModified: post.metadata?.publishedAt || new Date().toISOString().split('T')[0],
            }))
        );
    } catch (error) {
        console.error('Error fetching posts for sitemap:', error);
    }

    const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

    const routes = locales.flatMap((locale) =>
        activeRoutes.map((route) => ({
            url: `${baseURL}${includeLocalePrefix ? `/${locale}` : ''}${route !== '/' ? route : ''}`,
            lastModified: new Date().toISOString().split('T')[0],
        }))
    );

    // Combine and remove duplicates
    const uniqueUrls = Array.from(new Set([...routes, ...works].map((item) => item.url))).map((url) =>
        [...routes, ...works].find((item) => item.url === url)
    );

    return uniqueUrls;
}