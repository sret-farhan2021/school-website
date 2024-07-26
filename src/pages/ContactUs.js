import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="p-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-8">Contact Us</h2>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-6">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <p className="text-lg mb-4">Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
            <p className="text-lg mb-4">Phone: +1 (123) 456-7890</p>
            <p className="text-lg mb-6">Email: <a href="mailto:info@springdale.edu" className="text-blue-600 hover:underline">info@springdale.edu</a></p>
            
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Springdale%20Public%20School,%20123%20Education%20Lane,%20Cityville,%20State,+(SpringDale%20Public%20School)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Google Maps Location"
              loading="lazy"
              aria-label="Google Maps Location"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
