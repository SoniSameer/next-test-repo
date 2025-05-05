import Link from 'next/link'

// This would typically come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn the basics of Next.js and how to create your first application.',
    date: '2024-03-20',
    category: 'Next.js',
    slug: 'getting-started-with-nextjs'
  },
  {
    id: 2,
    title: 'Understanding Server Components',
    excerpt: 'A deep dive into React Server Components and their benefits.',
    date: '2024-03-19',
    category: 'React',
    slug: 'understanding-server-components'
  },
  {
    id: 3,
    title: 'SEO Best Practices',
    excerpt: 'Learn how to optimize your Next.js application for search engines.',
    date: '2024-03-18',
    category: 'SEO',
    slug: 'seo-best-practices'
  }
]

export const metadata = {
  title: 'Blog - Tech Blog & Documentation Hub',
  description: 'Latest articles and tutorials about web development, Next.js, and more.',
}

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <div className="text-gray-600 mb-2">
              <span>{post.date}</span> • <span>{post.category}</span>
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 