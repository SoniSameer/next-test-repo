// User data that can be used across the application
export const USERS = [
  {
    email: 'test@example.com',
    password: 'password123',
    role: 'user'
  },
  {
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  }
]

// Helper function to validate user credentials
export function validateUser(email, password) {
  return USERS.find(user => user.email === email && user.password === password)
}

// Helper function to get user role from email
export function getUserRole(email) {
  const user = USERS.find(user => user.email === email)
  return user ? user.role : null
}

// Helper function to check if user has access to a route
export function hasRouteAccess(role, pathname) {
  // Define route access rules
  const routeRules = {
    '/docs': ['admin'],
    '/docs/': ['admin'],
    '/docs/:path*': ['admin'],
    // Add more route rules as needed
  }

  // Check if the path matches any rules
  for (const [route, allowedRoles] of Object.entries(routeRules)) {
    if (pathname.startsWith(route.replace('/:path*', ''))) {
      return allowedRoles.includes(role)
    }
  }

  // If no specific rule exists, allow access
  return true
} 