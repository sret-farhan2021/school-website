import React from 'react';
import { useInView } from 'react-intersection-observer';

function AboutUs() {
  const { ref: historyRef, inView: historyInView } = useInView({ triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: principalMessageRef, inView: principalMessageInView } = useInView({ triggerOnce: true });
  const { ref: infrastructureRef, inView: infrastructureInView } = useInView({ triggerOnce: true });

  const fixedHeightClass = 'h-24'; 

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section 
          className={`mb-8 text-center ${historyInView ? 'slide-in-visible' : 'slide-in'}`} 
          ref={historyRef} 
          aria-labelledby="history-heading"
        >
          <h2 id="history-heading" className="text-3xl font-bold mb-4 text-blue-600">History</h2>
          <p className={`text-lg mb-4 ${fixedHeightClass}`}>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
          <img 
            src="https://via.placeholder.com/600x300" 
            alt="Historical photo of Springdale Public School" 
            className="w-full h-auto rounded-lg shadow-md mx-auto" 
            loading="lazy"
          />
        </section>

        <section 
          className={`mb-8 text-center ${visionInView ? 'slide-in-visible' : 'slide-in'}`} 
          ref={visionRef} 
          aria-labelledby="vision-heading"
        >
          <h2 id="vision-heading" className="text-3xl font-bold mb-4 text-blue-600">Vision</h2>
          <p className={`text-lg mb-4 ${fixedHeightClass}`}>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          <img 
            src="https://via.placeholder.com/600x300" 
            alt="Vision of Springdale Public School" 
            className="w-full h-auto rounded-lg shadow-md mx-auto" 
            loading="lazy"
          />
        </section>

        <section 
          className={`mb-8 text-center ${missionInView ? 'slide-in-visible' : 'slide-in'}`} 
          ref={missionRef} 
          aria-labelledby="mission-heading"
        >
          <h2 id="mission-heading" className="text-3xl font-bold mb-4 text-blue-600">Mission</h2>
          <p className={`text-lg mb-4 ${fixedHeightClass}`}>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
          <img 
            src="https://via.placeholder.com/600x300" 
            alt="Mission of Springdale Public School" 
            className="w-full h-auto rounded-lg shadow-md mx-auto" 
            loading="lazy"
          />
        </section>

        <section 
          className={`mb-8 text-center ${principalMessageInView ? 'slide-in-visible' : 'slide-in'}`} 
          ref={principalMessageRef} 
          aria-labelledby="principal-message-heading"
        >
          <h2 id="principal-message-heading" className="text-3xl font-bold mb-4 text-blue-600">Principal's Message</h2>
          <p className={`text-lg mb-4 ${fixedHeightClass}`}>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
          <img 
            src="https://via.placeholder.com/600x300" 
            alt="Principal's message from Springdale Public School" 
            className="w-full h-auto rounded-lg shadow-md mx-auto" 
            loading="lazy"
          />
        </section>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Infrastructure and Facilities</h2>
      <p className="text-lg mb-8 text-center">Our school offers a range of top-notch facilities designed to enhance the learning experience:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section 
          className={`mb-8 text-center ${infrastructureInView ? 'slide-in-visible' : 'slide-in'}`} 
          ref={infrastructureRef} 
          aria-labelledby="infrastructure-heading"
        >
          <div className="mb-8">
            <p className={`text-lg mb-2 ${fixedHeightClass}`}>State-of-the-art science and computer labs</p>
            <img 
              src="https://via.placeholder.com/600x300" 
              alt="Science and Computer Labs at Springdale Public School" 
              className="w-full h-auto rounded-lg shadow-md mx-auto" 
              loading="lazy"
            />
          </div>
        </section>

        <section 
          className={`mb-8 text-center ${infrastructureInView ? 'slide-in-visible' : 'slide-in'}`} 
          ref={infrastructureRef} 
          aria-labelledby="infrastructure-heading"
        >
          <div className="mb-8">
            <p className={`text-lg mb-2 ${fixedHeightClass}`}>Spacious and well-equipped classrooms</p>
            <img 
              src="https://via.placeholder.com/600x300" 
              alt="Classrooms at Springdale Public School" 
              className="w-full h-auto rounded-lg shadow-md mx-auto" 
              loading="lazy"
            />
          </div>
        </section>

        <section 
          className={`mb-8 text-center ${infrastructureInView ? 'slide-in-visible' : 'slide-in'}`} 
          ref={infrastructureRef} 
          aria-labelledby="infrastructure-heading"
        >
          <div className="mb-8">
            <p className={`text-lg mb-2 ${fixedHeightClass}`}>Library with a vast collection of books and digital resources</p>
            <img 
              src="https://via.placeholder.com/600x300" 
              alt="Library at Springdale Public School" 
              className="w-full h-auto rounded-lg shadow-md mx-auto" 
              loading="lazy"
            />
          </div>
        </section>

        <section 
          className={`mb-8 text-center ${infrastructureInView ? 'slide-in-visible' : 'slide-in'}`} 
          ref={infrastructureRef} 
          aria-labelledby="infrastructure-heading"
        >
          <div className="mb-8">
            <p className={`text-lg mb-2 ${fixedHeightClass}`}>Sports facilities including a playground, gymnasium, and swimming pool</p>
            <img 
              src="https://via.placeholder.com/600x300" 
              alt="Sports Facilities at Springdale Public School" 
              className="w-full h-auto rounded-lg shadow-md mx-auto" 
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
