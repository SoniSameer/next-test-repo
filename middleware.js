import { NextResponse } from 'next/server'
import { getUserRole, hasRouteAccess } from './app/lib/users'


export function middleware(request) {
  const { pathname } = request.nextUrl

  // Get the token and user email from cookies
  const token = request.cookies.get('auth-token')?.value
  const userEmail = request.cookies.get('user-email')?.value

  // If user is on login page and has a token, redirect to home
  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  // If user is not on login page and has no token, redirect to login
  if (pathname !== '/' && !token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Check role-based access if user is authenticated
  if (token && userEmail) {
    const userRole = getUserRole(userEmail)
    
    // If user doesn't have access to the route, redirect to home
    if (!hasRouteAccess(userRole, pathname)) {
      return NextResponse.redirect(new URL('/home', request.url))
    }
  }

  return NextResponse.next()
}

// Configure which routes to run middleware on
export const config = {
  matcher: ['/', '/home/:path*', '/blog/:path*', '/docs/:path*', '/categories/:path*', '/about/:path*']
} 