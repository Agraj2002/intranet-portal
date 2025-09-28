
import React, { useState } from 'react'

export default function Finance() {
  const [activeTab, setActiveTab] = useState('overview')

  const financialOverview = {
    totalRevenue: '₹12,50,000',
    monthlyExpenses: '₹8,75,000',
    netProfit: '₹3,75,000',
    profitMargin: '30%',
    cashFlow: '₹2,25,000'
  }

  const accounts = [
    { id: 1, name: 'Operating Account', balance: '₹5,25,000', type: 'Primary', status: 'Active' },
    { id: 2, name: 'Payroll Account', balance: '₹1,50,000', type: 'Payroll', status: 'Active' },
    { id: 3, name: 'Investment Account', balance: '₹8,75,000', type: 'Investment', status: 'Active' },
    { id: 4, name: 'Emergency Fund', balance: '₹2,00,000', type: 'Savings', status: 'Active' }
  ]

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'accounts', name: 'Accounts', icon: '🏦' },
    { id: 'investments', name: 'Investments', icon: '📈' },
    { id: 'taxation', name: 'Taxation', icon: '📋' },
    { id: 'gst', name: 'GST', icon: '🏛️' },
    { id: 'transactions', name: 'Transactions', icon: '💳' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900">Finance & Accounting</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage accounts, investments, taxation, and financial reporting.
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
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Financial Overview</h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                <div className="bg-green-50 overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                          <span className="text-white text-sm font-medium">R</span>
                        </div>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
                          <dd className="text-lg font-medium text-gray-900">{financialOverview.totalRevenue}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-500 rounded-md flex items-center justify-center">
                          <span className="text-white text-sm font-medium">E</span>
                        </div>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Monthly Expenses</dt>
                          <dd className="text-lg font-medium text-gray-900">{financialOverview.monthlyExpenses}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                          <span className="text-white text-sm font-medium">P</span>
                        </div>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Net Profit</dt>
                          <dd className="text-lg font-medium text-gray-900">{financialOverview.netProfit}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                          <span className="text-white text-sm font-medium">M</span>
                        </div>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Profit Margin</dt>
                          <dd className="text-lg font-medium text-gray-900">{financialOverview.profitMargin}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 overflow-hidden shadow rounded-lg">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                          <span className="text-white text-sm font-medium">C</span>
                        </div>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">Cash Flow</dt>
                          <dd className="text-lg font-medium text-gray-900">{financialOverview.cashFlow}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accounts Tab */}
          {activeTab === 'accounts' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Bank Accounts</h3>
              <div className="grid gap-4">
                {accounts.map((account) => (
                  <div key={account.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{account.name}</h4>
                        <p className="text-sm text-gray-600">Type: {account.type}</p>
                        <p className="text-xs text-gray-500">Status: {account.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-semibold text-gray-900">{account.balance}</p>
                        <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs placeholder */}
          {activeTab !== 'overview' && activeTab !== 'accounts' && (
            <div className="text-center py-12">
              <p className="text-gray-500">This section is under development.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
