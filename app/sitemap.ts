import type { MetadataRoute } from 'next'

const siteUrl = "https://screening.remedic.it"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/share`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/share-2`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
