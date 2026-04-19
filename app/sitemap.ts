import type { MetadataRoute } from 'next'

const siteUrl = "https://screening.remedic.it"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
