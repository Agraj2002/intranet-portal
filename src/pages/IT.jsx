
import React, { useState } from 'react'

export default function IT() {
  const [activeTab, setActiveTab] = useState('support')

  const supportTickets = [
    { id: 'IT-001', title: 'Email not working', status: 'Open', priority: 'High', assignedTo: 'John Smith', created: '2024-02-25' },
    { id: 'IT-002', title: 'Laptop keyboard issue', status: 'In Progress', priority: 'Medium', assignedTo: 'Sarah Johnson', created: '2024-02-24' },
    { id: 'IT-003', title: 'VPN connection problem', status: 'Resolved', priority: 'High', assignedTo: 'Mike Chen', created: '2024-02-23' },
    { id: 'IT-004', title: 'Software installation request', status: 'Open', priority: 'Low', assignedTo: 'Unassigned', created: '2024-02-22' },
    { id: 'IT-005', title: 'Network printer offline', status: 'In Progress', priority: 'Medium', assignedTo: 'David Brown', created: '2024-02-21' }
  ]

  const systemCirculars = [
    { id: 1, title: 'System Maintenance - March 2024', date: '2024-03-01', type: 'Maintenance', status: 'Scheduled' },
    { id: 2, title: 'Password Policy Update', date: '2024-02-28', type: 'Security', status: 'Active' },
    { id: 3, title: 'New Software Rollout - Office 365', date: '2024-02-25', type: 'Software', status: 'In Progress' },
    { id: 4, title: 'Backup Policy Changes', date: '2024-02-20', type: 'Policy', status: 'Active' },
    { id: 5, title: 'Network Security Update', date: '2024-02-15', type: 'Security', status: 'Completed' }
  ]

  const systemStatus = [
    { service: 'Email Server', status: 'Operational', uptime: '99.9%' },
    { service: 'File Server', status: 'Operational', uptime: '99.8%' },
    { service: 'VPN Gateway', status: 'Operational', uptime: '99.7%' },
    { service: 'Backup System', status: 'Operational', uptime: '99.9%' },
    { service: 'Database Server', status: 'Maintenance', uptime: '98.5%' }
  ]

  const tabs = [
    { id: 'support', name: 'Support Tickets', icon: '🎫' },
    { id: 'circulars', name: 'System Circulars', icon: '📢' },
    { id: 'status', name: 'System Status', icon: '📊' },
    { id: 'resources', name: 'Resources', icon: '📚' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-red-100 text-red-800'
      case 'In Progress': return 'bg-yellow-100 text-yellow-800'
      case 'Resolved': return 'bg-green-100 text-green-800'
      case 'Operational': return 'bg-green-100 text-green-800'
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800'
      case 'Scheduled': return 'bg-blue-100 text-blue-800'
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Completed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900">IT Support & Systems</h1>
          <p className="mt-1 text-sm text-gray-600">
            Technical support, system status, and IT resources.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Support Tickets Tab */}
          {activeTab === 'support' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Support Tickets</h3>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  Create Ticket
                </button>
              </div>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ticket ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Priority
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Assigned To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {supportTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {ticket.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {ticket.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                            {ticket.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ticket.assignedTo}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ticket.created}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* System Circulars Tab */}
          {activeTab === 'circulars' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">System Circulars</h3>
              <div className="grid gap-4">
                {systemCirculars.map((circular) => (
                  <div key={circular.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-gray-900">{circular.title}</h4>
                        <p className="text-sm text-gray-600">Type: {circular.type} • Date: {circular.date}</p>
                      </div>
                      <div className="ml-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(circular.status)}`}>
                          {circular.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Status Tab */}
          {activeTab === 'status' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">System Status</h3>
              <div className="grid gap-4">
                {systemStatus.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{service.service}</h4>
                        <p className="text-sm text-gray-600">Uptime: {service.uptime}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">IT Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'IT Policy Manual', type: 'PDF', size: '2.5 MB' },
                  { name: 'Software Installation Guide', type: 'PDF', size: '1.8 MB' },
                  { name: 'Network Troubleshooting', type: 'PDF', size: '3.2 MB' },
                  { name: 'Security Best Practices', type: 'PDF', size: '1.5 MB' },
                  { name: 'Backup Procedures', type: 'PDF', size: '2.1 MB' },
                  { name: 'VPN Setup Guide', type: 'PDF', size: '1.3 MB' }
                ].map((resource, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{resource.name}</h4>
                        <p className="text-xs text-gray-500">{resource.type} • {resource.size}</p>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
