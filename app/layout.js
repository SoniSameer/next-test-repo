import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech Blog & Documentation Hub',
  description: 'A comprehensive platform for tech articles and documentation',
  openGraph: {
    title: 'Tech Blog & Documentation Hub',
    description: 'A comprehensive platform for tech articles and documentation',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold">TechHub</a>
            <div className="space-x-4">
              <a href="/blog" className="hover:text-gray-300">Blog</a>
              <a href="/docs" className="hover:text-gray-300">Documentation</a>
              <a href="/categories" className="hover:text-gray-300">Categories</a>
              <a href="/about" className="hover:text-gray-300">About</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2025 Tech Blog & Documentation Hub. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
