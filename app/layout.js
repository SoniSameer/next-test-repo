"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/'

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isLoginPage && (
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <a href="/home" className="text-xl font-bold">TechHub</a>
              <div className="space-x-4">
                <a href="/blog" className="hover:text-gray-300">Blog</a>
                <a href="/docs" className="hover:text-gray-300">Documentation</a>
                <a href="/categories" className="hover:text-gray-300">Categories</a>
                <a href="/about" className="hover:text-gray-300">About</a>
              </div>
            </div>
          </nav>
        )}
        <main className={`container mx-auto px-4 py-8 ${isLoginPage ? '' : 'mt-4'}`}>
          {children}
        </main>
        {!isLoginPage && (
          <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
              <p>© 2025 Tech Blog & Documentation Hub. All rights reserved.</p>
            </div>
          </footer>
        )}
      </body>
    </html>
  )
}
