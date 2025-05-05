import { NextResponse } from 'next/server'

// Dummy user data
const DUMMY_USER = {
  email: 'test@example.com',
  password: 'password123'
}

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Get the token from cookies
  const token = request.cookies.get('auth-token')?.value

  // If user is on login page and has a token, redirect to home
  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // If user is not on login page and has no token, redirect to login
  if (pathname !== '/' && !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: ['/', '/home/:path*', '/blog/:path*', '/docs/:path*', '/categories/:path*', '/about/:path*']
} 