import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()
    return [
        {
            url: 'https://jspcs.online',
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        // ── Madurai Local SEO Pages ────────────────────────────────
        {
            url: 'https://jspcs.online/laptop-service-center-in-madurai',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jspcs.online/computer-service-center-in-madurai',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jspcs.online/chip-level-service-in-madurai',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jspcs.online/custom-gaming-pc-build-in-madurai',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://jspcs.online/desktop-repair-service-in-madurai',
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ]
}