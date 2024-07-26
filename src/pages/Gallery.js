import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';

// Dummy data for gallery images and videos
const galleryItems = [
  { id: 1, type: 'photo', src: 'https://via.placeholder.com/600?text=Sports+Day', caption: 'Students participating in various sports events.', category: 'Event', date: '2023-05-15' },
  { id: 2, type: 'photo', src: 'https://via.placeholder.com/600?text=Science+Exhibition', caption: 'Students presenting their science projects.', category: 'Event', date: '2023-06-10' },
  { id: 3, type: 'photo', src: 'https://via.placeholder.com/600?text=Cultural+Fest', caption: 'Students performing in the cultural fest.', category: 'Event', date: '2023-07-20' },
  { id: 4, type: 'photo', src: 'https://via.placeholder.com/600?text=Classroom', caption: 'A glimpse of our interactive classrooms.', category: 'Infrastructure', date: '2023-08-05' },
  { id: 5, type: 'photo', src: 'https://via.placeholder.com/600?text=Library', caption: 'Students reading and studying in the school library.', category: 'Infrastructure', date: '2023-09-15' },
  { id: 6, type: 'video', src: 'https://via.placeholder.com/600?text=School+Tour', caption: 'Virtual tour of Springdale Public School.', category: 'Video', date: '2023-10-01' },
  { id: 7, type: 'video', src: 'https://via.placeholder.com/600?text=Annual+Function', caption: 'Highlights from the Annual Function 2023.', category: 'Video', date: '2023-11-10' }
];

const filterOptions = ['All', 'Event', 'Infrastructure', 'Video'];
const dateOptions = ['All', '2023-05-15', '2023-06-10', '2023-07-20', '2023-08-05', '2023-09-15', '2023-10-01', '2023-11-10'];

const LightboxGallery = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');

  const handleItemClick = (item) => {
    setSelectedItem(item.id === selectedItem?.id ? null : item);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
    setSelectedItem(null); // Reset selection on filter change
  };

  const handleDateFilterChange = (e) => {
    setDateFilter(e.target.value);
    setSelectedItem(null); // Reset selection on filter change
  };

  const filteredItems = galleryItems.filter(item => 
    (categoryFilter === 'All' || item.category === categoryFilter) &&
    (dateFilter === 'All' || item.date === dateFilter)
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* Category Filter */}
          <div className="relative flex-1 min-w-[150px]">
            <label htmlFor="category-filter" className="block text-lg font-semibold mb-2 text-gray-700">Category</label>
            <select
              id="category-filter"
              value={categoryFilter}
              onChange={handleCategoryFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Date Filter */}
          <div className="relative flex-1 min-w-[150px]">
            <label htmlFor="date-filter" className="block text-lg font-semibold mb-2 text-gray-700">Date</label>
            <select
              id="date-filter"
              value={dateFilter}
              onChange={handleDateFilterChange}
              className="w-full p-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {dateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Photos Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Photos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {filteredItems.filter(item => item.type === 'photo').map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-0 cursor-pointer ${item.id === selectedItem?.id ? 'border-4 border-teal-500' : ''}`}
              onClick={() => handleItemClick(item)}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => { if (e.key === 'Enter') handleItemClick(item); }}
              aria-label={item.caption}
            >
              <LazyLoad height={300} offset={100}>
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </LazyLoad>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Item */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full">
            {selectedItem.type === 'photo' ? (
              <LazyLoad height={600} offset={100}>
                <img
                  src={selectedItem.src}
                  alt={selectedItem.caption}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  loading="lazy"
                />
              </LazyLoad>
            ) : (
              <LazyLoad height={600} offset={100}>
                <video controls className="max-w-full max-h-[90vh] rounded-lg" loading="lazy">
                  <source src={selectedItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </LazyLoad>
            )}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <p className="text-center text-white mt-4">{selectedItem.caption}</p>
          </div>
        </div>
      )}

      {/* Videos Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-center">Videos</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredItems.filter(item => item.type === 'video').map((video) => (
            <div
              key={video.id}
              className="w-full cursor-pointer bg-gray-200 rounded-lg overflow-hidden shadow-md"
              onClick={() => handleItemClick(video)}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => { if (e.key === 'Enter') handleItemClick(video); }}
              aria-label={video.caption}
            >
              <LazyLoad height={300} offset={100}>
                <img
                  src={video.src}
                  alt={video.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </LazyLoad>
              <div className="p-2 text-center text-sm text-gray-700">
                {video.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LightboxGallery;
