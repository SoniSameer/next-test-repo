export default function sitemap() {
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000'
    : 'https://your-domain.com' // Replace with your actual domain in production

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Blog posts (dynamic routes)
  const blogPosts = [
    'getting-started-with-nextjs',
    'understanding-server-components',
    'seo-best-practices',
  ]

  const blogRoutes = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
} 