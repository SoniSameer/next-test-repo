"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function Navbar() {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
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
  )
} 