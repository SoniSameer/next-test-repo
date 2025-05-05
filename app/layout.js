"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const isLoginPage = pathname === '/'
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    // Get user email from cookies when component mounts
    const email = Cookies.get('user-email')
    if (email) {
      setUserEmail(email)
    }
  }, [])

  const handleLogout = () => {
    Cookies.remove('auth-token')
    Cookies.remove('user-email')
    router.push('/')
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isLoginPage && (
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <a href="/home" className="text-xl font-bold">TechHub</a>
                <span className="text-gray-300">Welcome, {userEmail}</span>
              </div>
              <div className="space-x-4 flex items-center">
                <a href="/blog" className="hover:text-gray-300">Blog</a>
                <a href="/docs" className="hover:text-gray-300">Documentation</a>
                <a href="/categories" className="hover:text-gray-300">Categories</a>
                <a href="/about" className="hover:text-gray-300">About</a>
                <button
                  onClick={handleLogout}
                  className="cursor-pointer ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition duration-300"
                >
                  Logout
                </button>
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
