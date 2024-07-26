import React from 'react';

// Dummy data for faculty profiles
const facultyProfiles = [
  { name: 'John Doe', role: 'Principal', image: 'https://via.placeholder.com/150', qualifications: 'M.Ed', experience: '20 years' },
  { name: 'Jane Smith', role: 'Vice Principal', image: 'https://via.placeholder.com/150', qualifications: 'M.Sc. in Physics', experience: '15 years' },
  { name: 'Emily Johnson', role: 'English Teacher', image: 'https://via.placeholder.com/150', qualifications: 'M.A. in English', experience: '10 years' },
  { name: 'Michael Brown', role: 'Mathematics Teacher', image: 'https://via.placeholder.com/150', qualifications: 'M.Sc. in Mathematics', experience: '8 years' },
  { name: 'Sophia Davis', role: 'Science Teacher', image: 'https://via.placeholder.com/150', qualifications: 'M.Sc. in Chemistry', experience: '12 years' },
  { name: 'David Wilson', role: 'Computer Science Teacher', image: 'https://via.placeholder.com/150', qualifications: 'B.Tech in Computer Science', experience: '5 years' }
];

const Faculty = () => {
  // Separate principal from other faculty
  const principal = facultyProfiles.find(profile => profile.role === 'Principal');
  const otherFaculty = facultyProfiles.filter(profile => profile.role !== 'Principal');

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Faculty</h2>

      {principal && (
        <div className="flex justify-center mb-8 px-4">
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/3 bg-white p-4 shadow-lg rounded-lg shadow-yellow-500">
            <img src={principal.image} alt={principal.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">{principal.name}</h3>
            <p className="text-lg font-medium mb-1">{principal.role}</p>
            <p className="text-sm mb-1">Qualifications: {principal.qualifications}</p>
            <p className="text-sm">Experience: {principal.experience}</p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-6">
        {otherFaculty.map((profile, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg">
              <img src={profile.image} alt={profile.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
              <p className="text-lg font-medium mb-1">{profile.role}</p>
              <p className="text-sm mb-1">Qualifications: {profile.qualifications}</p>
              <p className="text-sm">Experience: {profile.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
