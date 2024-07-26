import React from 'react';

// Dummy data for students' achievements, council, and clubs
const achievements = [
  { title: 'National Level Math Olympiad Winner', image: 'https://via.placeholder.com/100' },
  { title: 'Gold Medalist in State Swimming Championship', image: 'https://via.placeholder.com/100' },
  { title: 'Winners of Inter-School Robotics Competition', image: 'https://via.placeholder.com/100' }
];

const studentCouncil = [
  { name: 'Amy Parker', role: 'President', image: 'https://via.placeholder.com/100' },
  { name: 'Rajiv Mehta', role: 'Vice President', image: 'https://via.placeholder.com/100' },
  { name: 'Lisa Wong', role: 'Secretary', image: 'https://via.placeholder.com/100' }
];

const clubs = [
  { name: 'Literary Society', image: 'https://via.placeholder.com/150' },
  { name: 'Environmental Club', image: 'https://via.placeholder.com/150' },
  { name: 'Astronomy Club', image: 'https://via.placeholder.com/150' },
  { name: 'Coding Club', image: 'https://via.placeholder.com/150' }
];

const activities = [
  'Music', 'Dance', 'Drama', 'Art', 'Sports', 'Robotics', 'Debate Club', 'Science Club'
];

const colors = [
  'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
];

const Students = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Life at Springdale</h2>

      {/* Student Life Section */}
      <div className="mb-12 text-center">
        <h3 className="text-3xl font-bold mb-6 ">Extracurricular Activities</h3>
        {/* Extracurricular Activities */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {activities.map((activity, index) => (
            <div key={index} className={`flex items-center justify-center w-32 h-32 rounded-full ${colors[index % colors.length]} text-white text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300`}>
              {activity}
            </div>
          ))}
        </div>

        {/* Clubs and Societies */}
        <h3 className="text-3xl font-bold mb-6">Clubs and Societies</h3>
        <div className="grid grid-cols-2 gap-8">
          {clubs.map((club, index) => (
            <div key={index} className="bg-white p-6 shadow-xl rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <img src={club.image} alt={club.name} className="w-32 h-32 object-cover mb-4 border-4 border-teal-500 rounded-full" />
              <h4 className="text-xl font-semibold text-teal-700">{club.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-12 text-center">
        <h3 className="text-3xl font-bold mb-6 ">Achievements</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <img src={achievement.image} alt={achievement.title} className="w-24 h-24 rounded-lg mb-4 object-cover border-4 border-teal-500" />
              <p className="text-lg font-semibold text-teal-700">{achievement.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Student Council Section */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-6">Student Council</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {studentCouncil.map((member, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-teal-500" />
              <h4 className="text-xl font-semibold text-teal-700 mb-1">{member.name}</h4>
              <p className="text-lg text-teal-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
