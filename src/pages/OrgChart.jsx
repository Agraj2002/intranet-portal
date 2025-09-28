
import React, { useState } from 'react'

export default function OrgChart() {
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const departments = ['all', 'Executive', 'Engineering', 'Marketing', 'HR', 'Finance', 'IT', 'Sales', 'Operations']

  const orgStructure = {
    Executive: [
      { id: 1, name: 'CEO', title: 'Chief Executive Officer', email: 'ceo@yourcompany.com', reportsTo: null, level: 0 },
      { id: 2, name: 'CTO', title: 'Chief Technology Officer', email: 'cto@yourcompany.com', reportsTo: 1, level: 1 },
      { id: 3, name: 'CFO', title: 'Chief Financial Officer', email: 'cfo@yourcompany.com', reportsTo: 1, level: 1 },
      { id: 4, name: 'COO', title: 'Chief Operating Officer', email: 'coo@yourcompany.com', reportsTo: 1, level: 1 }
    ],
    Engineering: [
      { id: 5, name: 'VP Engineering', title: 'VP of Engineering', email: 'vp.eng@yourcompany.com', reportsTo: 2, level: 2 },
      { id: 6, name: 'Senior Dev Lead', title: 'Senior Development Lead', email: 'dev.lead@yourcompany.com', reportsTo: 5, level: 3 },
      { id: 7, name: 'DevOps Manager', title: 'DevOps Manager', email: 'devops@yourcompany.com', reportsTo: 5, level: 3 },
      { id: 8, name: 'QA Lead', title: 'QA Lead', email: 'qa.lead@yourcompany.com', reportsTo: 5, level: 3 }
    ],
    Marketing: [
      { id: 9, name: 'Marketing Director', title: 'Marketing Director', email: 'marketing@yourcompany.com', reportsTo: 1, level: 2 },
      { id: 10, name: 'Content Manager', title: 'Content Manager', email: 'content@yourcompany.com', reportsTo: 9, level: 3 },
      { id: 11, name: 'Social Media Manager', title: 'Social Media Manager', email: 'social@yourcompany.com', reportsTo: 9, level: 3 }
    ],
    HR: [
      { id: 12, name: 'HR Director', title: 'HR Director', email: 'hr.director@yourcompany.com', reportsTo: 1, level: 2 },
      { id: 13, name: 'Recruitment Manager', title: 'Recruitment Manager', email: 'recruitment@yourcompany.com', reportsTo: 12, level: 3 },
      { id: 14, name: 'Employee Relations', title: 'Employee Relations Manager', email: 'relations@yourcompany.com', reportsTo: 12, level: 3 }
    ],
    Finance: [
      { id: 15, name: 'Finance Director', title: 'Finance Director', email: 'finance.director@yourcompany.com', reportsTo: 3, level: 2 },
      { id: 16, name: 'Accounting Manager', title: 'Accounting Manager', email: 'accounting@yourcompany.com', reportsTo: 15, level: 3 },
      { id: 17, name: 'Financial Analyst', title: 'Senior Financial Analyst', email: 'analyst@yourcompany.com', reportsTo: 15, level: 3 }
    ],
    IT: [
      { id: 18, name: 'IT Director', title: 'IT Director', email: 'it.director@yourcompany.com', reportsTo: 2, level: 2 },
      { id: 19, name: 'System Admin', title: 'System Administrator', email: 'sysadmin@yourcompany.com', reportsTo: 18, level: 3 },
      { id: 20, name: 'Network Engineer', title: 'Network Engineer', email: 'network@yourcompany.com', reportsTo: 18, level: 3 }
    ],
    Sales: [
      { id: 21, name: 'Sales Director', title: 'Sales Director', email: 'sales.director@yourcompany.com', reportsTo: 1, level: 2 },
      { id: 22, name: 'Account Manager', title: 'Senior Account Manager', email: 'accounts@yourcompany.com', reportsTo: 21, level: 3 },
      { id: 23, name: 'Business Dev', title: 'Business Development Manager', email: 'bizdev@yourcompany.com', reportsTo: 21, level: 3 }
    ],
    Operations: [
      { id: 24, name: 'Operations Director', title: 'Operations Director', email: 'ops.director@yourcompany.com', reportsTo: 4, level: 2 },
      { id: 25, name: 'Project Manager', title: 'Senior Project Manager', email: 'projects@yourcompany.com', reportsTo: 24, level: 3 },
      { id: 26, name: 'Facilities Manager', title: 'Facilities Manager', email: 'facilities@yourcompany.com', reportsTo: 24, level: 3 }
    ]
  }

  const getLevelColor = (level) => {
    const colors = {
      0: 'bg-purple-100 text-purple-800 border-purple-200',
      1: 'bg-blue-100 text-blue-800 border-blue-200',
      2: 'bg-green-100 text-green-800 border-green-200',
      3: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    }
    return colors[level] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getDepartmentColor = (dept) => {
    const colors = {
      'Executive': 'bg-purple-50 border-purple-200',
      'Engineering': 'bg-blue-50 border-blue-200',
      'Marketing': 'bg-green-50 border-green-200',
      'HR': 'bg-pink-50 border-pink-200',
      'Finance': 'bg-yellow-50 border-yellow-200',
      'IT': 'bg-red-50 border-red-200',
      'Sales': 'bg-indigo-50 border-indigo-200',
      'Operations': 'bg-gray-50 border-gray-200'
    }
    return colors[dept] || 'bg-gray-50 border-gray-200'
  }

  const renderOrgChart = (department) => {
    const employees = orgStructure[department] || []
    const levels = {}
    
    // Group employees by level
    employees.forEach(emp => {
      if (!levels[emp.level]) levels[emp.level] = []
      levels[emp.level].push(emp)
    })

    return (
      <div className="space-y-6">
        {Object.keys(levels).sort((a, b) => parseInt(a) - parseInt(b)).map(level => (
          <div key={level} className="flex flex-wrap gap-4 justify-center">
            {levels[level].map(employee => (
              <div key={employee.id} className={`p-4 rounded-lg border-2 ${getLevelColor(employee.level)} min-w-[200px] text-center`}>
                <h4 className="font-semibold text-sm">{employee.name}</h4>
                <p className="text-xs opacity-75 mt-1">{employee.title}</p>
                <p className="text-xs opacity-60 mt-1">{employee.email}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  const renderFullOrgChart = () => {
    return (
      <div className="space-y-8">
        {Object.keys(orgStructure).map(dept => (
          <div key={dept} className={`p-6 rounded-lg border-2 ${getDepartmentColor(dept)}`}>
            <h3 className="text-lg font-semibold mb-4 text-center">{dept} Department</h3>
            {renderOrgChart(dept)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900">Organization Chart</h1>
          <p className="mt-1 text-sm text-gray-600">
            Explore the company structure and reporting relationships.
          </p>
        </div>
      </div>

      {/* Department Filter */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
                <span className="ml-2 text-xs opacity-75">
                  ({dept === 'all' ? Object.values(orgStructure).flat().length : orgStructure[dept]?.length || 0})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Organization Chart */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              {selectedDepartment === 'all' ? 'Complete Organization Chart' : `${selectedDepartment} Department`}
            </h3>
            <div className="text-sm text-gray-500">
              {selectedDepartment === 'all' 
                ? `${Object.values(orgStructure).flat().length} employees across ${Object.keys(orgStructure).length} departments`
                : `${orgStructure[selectedDepartment]?.length || 0} employees`
              }
            </div>
          </div>
          
          {selectedDepartment === 'all' ? renderFullOrgChart() : renderOrgChart(selectedDepartment)}
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Level Legend</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-purple-100 border border-purple-200"></div>
              <span className="text-sm text-gray-600">C-Level (0)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-blue-100 border border-blue-200"></div>
              <span className="text-sm text-gray-600">VP Level (1)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-green-100 border border-green-200"></div>
              <span className="text-sm text-gray-600">Director (2)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded bg-yellow-100 border border-yellow-200"></div>
              <span className="text-sm text-gray-600">Manager (3)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
