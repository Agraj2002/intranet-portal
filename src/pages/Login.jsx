
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/store'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  // Mock user database - in real app, this would be an API call
  const validUsers = [
    { email: 'admin@yourcompany.com', password: 'admin123', name: 'Admin User', role: 'Admin' },
    { email: 'john.doe@yourcompany.com', password: 'password123', name: 'John Doe', role: 'Manager' },
    { email: 'jane.smith@yourcompany.com', password: 'password123', name: 'Jane Smith', role: 'Employee' },
    { email: 'mike.wilson@yourcompany.com', password: 'password123', name: 'Mike Wilson', role: 'HR Manager' },
    { email: 'sarah.jones@yourcompany.com', password: 'password123', name: 'Sarah Jones', role: 'Finance Manager' },
    { email: 'david.brown@yourcompany.com', password: 'password123', name: 'David Brown', role: 'IT Manager' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Check if email is from company domain
    if (!email.endsWith('@yourcompany.com')) {
      setError('Access restricted to company domain users only.')
      setLoading(false)
      return
    }

    // Find user in mock database
    const user = validUsers.find(u => u.email === email && u.password === password)
    
    if (user) {
      dispatch(login({ 
        email: user.email, 
        name: user.name, 
        role: user.role 
      }))
    } else {
      setError('Invalid email or password.')
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Company Intranet Portal
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Demo accounts available:
            </p>
            <div className="mt-2 text-xs text-gray-500 space-y-1">
              <div>admin@yourcompany.com / admin123</div>
              <div>john.doe@yourcompany.com / password123</div>
              <div>jane.smith@yourcompany.com / password123</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
