"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { usePathname } from 'next/navigation'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/'

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isLoginPage && <Navbar />}
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
