import type { MetadataRoute } from 'next'

const siteUrl = "https://screening.remedic.it"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: siteUrl,
  }
}
