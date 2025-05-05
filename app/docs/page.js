export const metadata = {
  title: 'Documentation - Tech Blog & Documentation Hub',
  description: 'Comprehensive documentation for web development technologies and best practices.',
}

const documentationSections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start Guide', href: '/docs/quick-start' },
      { title: 'Basic Concepts', href: '/docs/basic-concepts' },
    ]
  },
  {
    title: 'Core Features',
    items: [
      { title: 'Routing', href: '/docs/routing' },
      { title: 'Data Fetching', href: '/docs/data-fetching' },
      { title: 'Rendering', href: '/docs/rendering' },
    ]
  },
  {
    title: 'Advanced Topics',
    items: [
      { title: 'Performance Optimization', href: '/docs/performance' },
      { title: 'Deployment', href: '/docs/deployment' },
      { title: 'Security', href: '/docs/security' },
    ]
  }
]

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Documentation</h1>
      
      <div className="grid gap-8 md:grid-cols-3">
        {documentationSections.map((section) => (
          <div key={section.title} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="text-gray-700 mb-4">
          If you can't find what you're looking for, check out our blog section
          or reach out to our support team.
        </p>
        <a
          href="/blog"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Visit Blog
        </a>
      </div>
    </div>
  )
} 