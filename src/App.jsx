
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import HR from './pages/HR'
import Finance from './pages/Finance'
import IT from './pages/IT'
import Contacts from './pages/Contacts'
import Gallery from './pages/Gallery'
import OrgChart from './pages/OrgChart'
import Login from './pages/Login'
import { useSelector } from 'react-redux'

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/it" element={<IT />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/orgchart" element={<OrgChart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
