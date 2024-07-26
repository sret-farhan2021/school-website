import React from 'react';

function Admissions() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Admissions</h2>
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Process</h3>
        <p className="text-lg text-gray-600 mb-6">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Criteria</h3>
        <p className="text-lg text-gray-600 mb-6">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      </div>
      
      <div className="bg-blue-100 shadow-lg rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Important Dates</h3>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
          <li><strong>Admission Form Availability:</strong> March 1st</li>
          <li><strong>Last Date for Submission:</strong> March 31st</li>
          <li><strong>Entrance Test:</strong> April 15th</li>
          <li><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Downloads</h3>
        <p className="text-lg text-gray-600 mb-6">You can download the admission forms from the link below.</p>
        <div className="text-center">
          <a href="#" className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">Download Admission Form</a>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
