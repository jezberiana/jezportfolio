import { baseURL } from '@/app/resources';

export default function robots() {
    const isProduction = process.env.NODE_ENV === 'production';

    return {
        rules: [
            {
                userAgent: '*',
                disallow: isProduction ? [] : ['/'],
            },
        ],
        sitemap: isProduction ? `${baseURL}/sitemap.xml` : undefined,
    };
}