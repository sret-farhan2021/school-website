import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Academics</h2>

      <div className="overflow-x-auto mb-8">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xl font-semibold">Level</th>
              <th className="px-4 py-2 text-left text-xl font-semibold">Subjects</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Primary (Grades 1-5)</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-5">
                  <li>English</li>
                  <li>Mathematics</li>
                  <li>Science</li>
                  <li>Social Studies</li>
                  <li>Art</li>
                  <li>Physical Education</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Secondary (Grades 6-10)</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-5">
                  <li>English</li>
                  <li>Mathematics</li>
                  <li>Science (Physics, Chemistry, Biology)</li>
                  <li>Social Studies</li>
                  <li>Computer Science</li>
                  <li>Physical Education</li>
                  <li>Art</li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Senior Secondary (Grades 11-12)</td>
              <td className="border px-4 py-2">
                <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
                  <div>
                    <strong>Science Stream:</strong>
                    <ul className="list-disc pl-5">
                      <li>Physics</li>
                      <li>Chemistry</li>
                      <li>Biology</li>
                      <li>Mathematics</li>
                      <li>Computer Science</li>
                      <li>English</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Commerce Stream:</strong>
                    <ul className="list-disc pl-5">
                      <li>Accountancy</li>
                      <li>Business Studies</li>
                      <li>Economics</li>
                      <li>Mathematics</li>
                      <li>English</li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Teaching Methodologies</h3>
          <p className="text-lg">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 lg:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Educational Resources</h3>
          <p className="text-lg">Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
        </div>
      </div>
    </div>
  );
};

export default Academics;
