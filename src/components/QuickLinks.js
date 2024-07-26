import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

function QuickLinks() {
  const links = [
    { path: "/about-us", label: "About Us", img: "https://via.placeholder.com/150" },
    { path: "/academics", label: "Academics", img: "https://via.placeholder.com/150" },
    { path: "/admissions", label: "Admissions", img: "https://via.placeholder.com/150" },
    { path: "/faculty", label: "Faculty", img: "https://via.placeholder.com/150" },
    { path: "/students", label: "Students", img: "https://via.placeholder.com/150" },
    { path: "/gallery", label: "Gallery", img: "https://via.placeholder.com/150" },
    { path: "/contact-us", label: "Contact Us", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {links.map((link, index) => (
        <div key={index} className="text-center w-1/3 md:w-1/4">
          <LazyLoad height={200} offset={100}>
            <img src={link.img} alt={link.label} className="mx-auto mb-2" />
          </LazyLoad>
          <Link to={link.path} className="text-blue-500">{link.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default QuickLinks;
