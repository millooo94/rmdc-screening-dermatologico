import type { MetadataRoute } from 'next'

const siteUrl = "https://screening.remedic.it"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Facebot',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
