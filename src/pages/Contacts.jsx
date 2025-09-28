
import React, { useState } from 'react'

export default function Contacts() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const employees = [
    { id: 1, name: 'John Doe', email: 'john.doe@yourcompany.com', department: 'Engineering', position: 'Senior Developer', phone: '+91 98765 43210', location: 'Mumbai' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@yourcompany.com', department: 'Marketing', position: 'Marketing Manager', phone: '+91 98765 43211', location: 'Delhi' },
    { id: 3, name: 'Mike Wilson', email: 'mike.wilson@yourcompany.com', department: 'HR', position: 'HR Manager', phone: '+91 98765 43212', location: 'Bangalore' },
    { id: 4, name: 'Sarah Jones', email: 'sarah.jones@yourcompany.com', department: 'Finance', position: 'Finance Manager', phone: '+91 98765 43213', location: 'Mumbai' },
    { id: 5, name: 'David Brown', email: 'david.brown@yourcompany.com', department: 'IT', position: 'IT Manager', phone: '+91 98765 43214', location: 'Pune' },
    { id: 6, name: 'Emily Davis', email: 'emily.davis@yourcompany.com', department: 'Design', position: 'UX Designer', phone: '+91 98765 43215', location: 'Bangalore' },
    { id: 7, name: 'Robert Johnson', email: 'robert.johnson@yourcompany.com', department: 'Sales', position: 'Sales Director', phone: '+91 98765 43216', location: 'Delhi' },
    { id: 8, name: 'Lisa Anderson', email: 'lisa.anderson@yourcompany.com', department: 'Operations', position: 'Operations Manager', phone: '+91 98765 43217', location: 'Mumbai' },
    { id: 9, name: 'Tom Wilson', email: 'tom.wilson@yourcompany.com', department: 'Engineering', position: 'DevOps Engineer', phone: '+91 98765 43218', location: 'Pune' },
    { id: 10, name: 'Amy Chen', email: 'amy.chen@yourcompany.com', department: 'Product', position: 'Product Manager', phone: '+91 98765 43219', location: 'Bangalore' }
  ]

  const departments = ['all', 'Engineering', 'Marketing', 'HR', 'Finance', 'IT', 'Design', 'Sales', 'Operations', 'Product']

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || employee.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  const getDepartmentColor = (department) => {
    const colors = {
      'Engineering': 'bg-blue-100 text-blue-800',
      'Marketing': 'bg-green-100 text-green-800',
      'HR': 'bg-purple-100 text-purple-800',
      'Finance': 'bg-yellow-100 text-yellow-800',
      'IT': 'bg-red-100 text-red-800',
      'Design': 'bg-pink-100 text-pink-800',
      'Sales': 'bg-indigo-100 text-indigo-800',
      'Operations': 'bg-gray-100 text-gray-800',
      'Product': 'bg-orange-100 text-orange-800'
    }
    return colors[department] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900">Employee Directory</h1>
          <p className="mt-1 text-sm text-gray-600">
            Find and connect with your colleagues across the organization.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">Search employees</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search by name, email, or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:w-48">
              <label htmlFor="department" className="sr-only">Filter by department</label>
              <select
                id="department"
                className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departments.filter(dept => dept !== 'all').map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Employees ({filteredEmployees.length})
            </h3>
            <div className="text-sm text-gray-500">
              Showing {filteredEmployees.length} of {employees.length} employees
            </div>
          </div>
          
          {filteredEmployees.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No employees found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEmployees.map((employee) => (
                <div key={employee.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center">
                        <span className="text-white font-medium text-lg">
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-medium text-gray-900 truncate">{employee.name}</h4>
                      <p className="text-sm text-gray-600 truncate">{employee.position}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1 ${getDepartmentColor(employee.department)}`}>
                        {employee.department}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="flex-shrink-0 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate">{employee.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="flex-shrink-0 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{employee.phone}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="flex-shrink-0 mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{employee.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
                      Contact
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                      Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
