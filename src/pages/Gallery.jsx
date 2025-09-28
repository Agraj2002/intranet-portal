
import React, { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ['all', 'Events', 'Team', 'Office', 'Celebrations', 'Meetings']

  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop', title: 'Team Meeting', category: 'Meetings', date: '2024-02-20', photographer: 'John Doe' },
    { id: 2, src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop', title: 'Office Space', category: 'Office', date: '2024-02-18', photographer: 'Jane Smith' },
    { id: 3, src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop', title: 'Company Party', category: 'Celebrations', date: '2024-02-15', photographer: 'Mike Wilson' },
    { id: 4, src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop', title: 'Team Building', category: 'Events', date: '2024-02-12', photographer: 'Sarah Jones' },
    { id: 5, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', title: 'Product Launch', category: 'Events', date: '2024-02-10', photographer: 'David Brown' },
    { id: 6, src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop', title: 'Team Lunch', category: 'Team', date: '2024-02-08', photographer: 'Emily Davis' },
    { id: 7, src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop', title: 'Office Renovation', category: 'Office', date: '2024-02-05', photographer: 'Robert Johnson' },
    { id: 8, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop', title: 'Birthday Celebration', category: 'Celebrations', date: '2024-02-03', photographer: 'Lisa Anderson' },
    { id: 9, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop', title: 'Client Meeting', category: 'Meetings', date: '2024-02-01', photographer: 'Tom Wilson' },
    { id: 10, src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', title: 'Workshop Session', category: 'Events', date: '2024-01-28', photographer: 'Amy Chen' },
    { id: 11, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop', title: 'Team Standup', category: 'Team', date: '2024-01-25', photographer: 'John Doe' },
    { id: 12, src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop', title: 'New Office Setup', category: 'Office', date: '2024-01-22', photographer: 'Jane Smith' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900">Photo Gallery</h1>
          <p className="mt-1 text-sm text-gray-600">
            Share and explore company photos, events, and memories.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Photos' : category}
                <span className="ml-2 text-xs opacity-75">
                  ({category === 'all' ? images.length : images.filter(img => img.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              {selectedCategory === 'all' ? 'All Photos' : `${selectedCategory} Photos`} ({filteredImages.length})
            </h3>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Upload Photos
            </button>
          </div>
          
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No photos found</h3>
              <p className="mt-1 text-sm text-gray-500">No photos in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredImages.map((image) => (
                <div key={image.id} className="group relative">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage(image)}
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{image.title}</h4>
                    <p className="text-xs text-gray-500">{image.date} • {image.photographer}</p>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 mt-1">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setSelectedImage(null)}></div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900">{selectedImage.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {selectedImage.date} • Photographer: {selectedImage.photographer}
                      </p>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 mt-2">
                        {selectedImage.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    // Download functionality would go here
                    console.log('Download image:', selectedImage.title)
                  }}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
