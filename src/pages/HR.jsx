
import React, { useState } from 'react'

export default function HR() {
  const [activeTab, setActiveTab] = useState('policies')

  const policies = [
    { id: 1, title: 'Employee Handbook 2024', category: 'General', lastUpdated: '2024-01-15', status: 'Active' },
    { id: 2, title: 'Remote Work Policy', category: 'Work Arrangements', lastUpdated: '2024-02-01', status: 'Active' },
    { id: 3, title: 'Code of Conduct', category: 'Ethics', lastUpdated: '2024-01-20', status: 'Active' },
    { id: 4, title: 'Leave Policy', category: 'Benefits', lastUpdated: '2024-01-10', status: 'Active' },
    { id: 5, title: 'Performance Review Guidelines', category: 'Performance', lastUpdated: '2024-02-15', status: 'Active' }
  ]

  const jobRoles = [
    { id: 1, title: 'Software Engineer', department: 'Engineering', level: 'Mid-Level', openings: 3, posted: '2024-02-20' },
    { id: 2, title: 'Product Manager', department: 'Product', level: 'Senior', openings: 1, posted: '2024-02-18' },
    { id: 3, title: 'UX Designer', department: 'Design', level: 'Mid-Level', openings: 2, posted: '2024-02-15' },
    { id: 4, title: 'Data Analyst', department: 'Analytics', level: 'Junior', openings: 2, posted: '2024-02-12' },
    { id: 5, title: 'Marketing Specialist', department: 'Marketing', level: 'Mid-Level', openings: 1, posted: '2024-02-10' }
  ]

  const epfInfo = {
    employeeContribution: '12%',
    employerContribution: '12%',
    totalContribution: '24%',
    currentBalance: '₹2,45,000',
    lastUpdated: '2024-02-01'
  }

  const benefits = [
    { name: 'Health Insurance', coverage: 'Family', provider: 'HealthCare Plus', status: 'Active' },
    { name: 'Life Insurance', coverage: '₹10,00,000', provider: 'LifeSecure', status: 'Active' },
    { name: 'Dental Insurance', coverage: 'Individual', provider: 'DentalCare', status: 'Active' },
    { name: 'Gym Membership', coverage: 'Corporate', provider: 'FitLife', status: 'Active' },
    { name: 'Transport Allowance', coverage: 'Monthly', provider: 'Company', status: 'Active' }
  ]

  const tabs = [
    { id: 'policies', name: 'Policies', count: policies.length },
    { id: 'jobs', name: 'Job Openings', count: jobRoles.length },
    { id: 'epf', name: 'EPF & Benefits', count: benefits.length },
    { id: 'forms', name: 'Forms & Documents', count: 8 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900">Human Resources</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage policies, job openings, employee benefits, and more.
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
                {tab.name}
                <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                  activeTab === tab.id
                    ? 'bg-indigo-100 text-indigo-600'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Policies Tab */}
          {activeTab === 'policies' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Company Policies</h3>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  Add New Policy
                </button>
              </div>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Policy
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Updated
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {policies.map((policy) => (
                      <tr key={policy.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{policy.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {policy.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {policy.lastUpdated}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            {policy.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-indigo-600 hover:text-indigo-900 mr-3">View</button>
                          <button className="text-gray-600 hover:text-gray-900">Download</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Job Openings Tab */}
          {activeTab === 'jobs' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Current Job Openings</h3>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                  Post New Job
                </button>
              </div>
              <div className="grid gap-4">
                {jobRoles.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{job.title}</h4>
                        <p className="text-sm text-gray-600">{job.department} • {job.level}</p>
                        <p className="text-xs text-gray-500 mt-1">Posted on {job.posted}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {job.openings} opening{job.openings > 1 ? 's' : ''}
                        </span>
                        <div className="mt-2">
                          <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EPF & Benefits Tab */}
          {activeTab === 'epf' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">EPF Information</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Employee Contribution</p>
                      <p className="text-lg font-semibold text-gray-900">{epfInfo.employeeContribution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Employer Contribution</p>
                      <p className="text-lg font-semibold text-gray-900">{epfInfo.employerContribution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Contribution</p>
                      <p className="text-lg font-semibold text-gray-900">{epfInfo.totalContribution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Current Balance</p>
                      <p className="text-lg font-semibold text-gray-900">{epfInfo.currentBalance}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Last updated: {epfInfo.lastUpdated}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Employee Benefits</h3>
                <div className="grid gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">{benefit.name}</h4>
                          <p className="text-sm text-gray-600">Coverage: {benefit.coverage}</p>
                          <p className="text-xs text-gray-500">Provider: {benefit.provider}</p>
                        </div>
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {benefit.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Forms & Documents Tab */}
          {activeTab === 'forms' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Forms & Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Leave Application Form',
                  'Expense Reimbursement Form',
                  'Travel Request Form',
                  'Performance Review Form',
                  'Training Request Form',
                  'Equipment Request Form',
                  'Change of Address Form',
                  'Emergency Contact Form'
                ].map((form, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{form}</h4>
                        <p className="text-xs text-gray-500">PDF Document</p>
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
