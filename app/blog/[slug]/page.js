import { notFound } from 'next/navigation'

// This would typically come from a CMS or API
const blogPosts = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js',
    content: `
      Next.js is a powerful framework for building React applications. In this article,
      we'll explore the basics of Next.js and how to create your first application.

      ## Why Next.js?

      Next.js provides several benefits:
      - Server-side rendering
      - Static site generation
      - API routes
      - File-based routing
      - Built-in CSS support

      ## Getting Started

      To create a new Next.js project, run:
      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`
    `,
    date: '2024-03-20',
    category: 'Next.js',
    author: 'John Doe'
  },
  'understanding-server-components': {
    title: 'Understanding Server Components',
    content: `
      React Server Components are a new way to build React applications that
      can improve performance and reduce bundle size.

      ## What are Server Components?

      Server Components allow you to write UI that can be rendered and cached
      on the server, reducing the amount of JavaScript sent to the client.
    `,
    date: '2024-03-19',
    category: 'React',
    author: 'Jane Smith'
  },
  'seo-best-practices': {
    title: 'SEO Best Practices',
    content: `
      Search Engine Optimization (SEO) is crucial for making your Next.js
      application discoverable on the web.

      ## Key SEO Practices

      1. Use proper meta tags
      2. Implement structured data
      3. Create a sitemap
      4. Optimize images
      5. Ensure mobile responsiveness
    `,
    date: '2024-03-18',
    category: 'SEO',
    author: 'Mike Johnson'
  }
}

// Helper function to get post data
async function getPost(slug) {
  return blogPosts[slug]
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} - Tech Blog & Documentation Hub`,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    }
  }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto prose lg:prose-xl">
      <h1>{post.title}</h1>
      <div className="text-gray-600 mb-8">
        <span>{post.date}</span> • <span>{post.category}</span> • <span>{post.author}</span>
      </div>
      <div className="prose prose-lg">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
} 