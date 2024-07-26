import React from 'react';
import Carousel from '../components/Carousel';
import QuickLinks from '../components/QuickLinks';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <Carousel />
      </section>
      <header className="text-center mb-8">
        <div className="mb-4">
          <img src="https://via.placeholder.com/100" alt="School Logo" className="mx-auto" />
        </div>
        <h1 className="text-4xl font-bold">Springdale Public School</h1>
        <p className="text-lg mt-4">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      </header>
      <section>
        <QuickLinks />
      </section>
    </div>
  );
}

export default Home;
