import Link from 'next/link'

export const metadata = {
  title: 'Tech Blog & Documentation Hub - Home',
  description: 'Your comprehensive resource for tech articles, tutorials, and documentation.',
}

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tech Blog & Documentation Hub</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your comprehensive resource for tech articles, tutorials, and documentation
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Read Blog
          </Link>
          <Link 
            href="/docs"
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900"
          >
            View Documentation
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="grid md:grid-cols-2 gap-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Latest Articles</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/getting-started-with-nextjs" className="text-blue-600 hover:text-blue-800">
                Getting Started with Next.js
              </Link>
            </li>
            <li>
              <Link href="/blog/understanding-server-components" className="text-blue-600 hover:text-blue-800">
                Understanding Server Components
              </Link>
            </li>
            <li>
              <Link href="/blog/seo-best-practices" className="text-blue-600 hover:text-blue-800">
                SEO Best Practices
              </Link>
            </li>
          </ul>
          <Link 
            href="/blog"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800"
          >
            View all articles →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Documentation</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/docs/installation" className="text-blue-600 hover:text-blue-800">
                Installation Guide
              </Link>
            </li>
            <li>
              <Link href="/docs/quick-start" className="text-blue-600 hover:text-blue-800">
                Quick Start Guide
              </Link>
            </li>
            <li>
              <Link href="/docs/basic-concepts" className="text-blue-600 hover:text-blue-800">
                Basic Concepts
              </Link>
            </li>
          </ul>
          <Link 
            href="/docs"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800"
          >
            View all docs →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Our Platform?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-2">Comprehensive Content</h3>
            <p className="text-gray-600">In-depth articles and tutorials covering the latest in web development</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-2">Expert Documentation</h3>
            <p className="text-gray-600">Well-structured documentation for developers of all levels</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
            <p className="text-gray-600">Fresh content and updates to keep you current with the latest trends</p>
          </div>
        </div>
      </section>
    </div>
  )
}
