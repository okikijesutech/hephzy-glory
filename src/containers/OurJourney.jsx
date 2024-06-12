import Countup from "react-countup";
import { useEffect, useRef, useState } from "react";

const OurJourney = () => {
  const [inView, setInView] = useState(false);
  const journeyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(journeyRef.current); // Unobserve after first intersection
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }

    return () => {
      if (journeyRef.current) {
        observer.unobserve(journeyRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={journeyRef}
      className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[350px] my-[120px]'
    >
      <div className='text-center md:text-left'>
        <p className='text-blue-600 font-bold text-lg'>Our Journey</p>
        <h3 className='text-3xl md:text-4xl font-extrabold my-3 md:my-5'>
          Get in Touch With Us
        </h3>
        <p className='w-[425px] text-lg font-light'>
          We welcome your inquiries and feedback. Please feel free to contact us
          to learn more about our programs and services.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
        <div className='flex flex-col items-center'>
          <p className='text-blue-600 text-3xl md:text-5xl font-bold'>
            {inView && <Countup start={0} end={75} duration={3} />}k+
          </p>
          <p>Satisfied Students</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-blue-600 text-3xl md:text-5xl font-bold'>
            {inView && <Countup start={0} end={100} duration={3} />}+
          </p>
          <p>Expert Instructor</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-blue-600 text-3xl md:text-5xl font-bold'>
            {inView && <Countup start={0} end={50} duration={3} />}+
          </p>
          <p>Locations</p>
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-blue-600 text-3xl md:text-5xl font-bold'>
            {inView && <Countup start={0} end={15} duration={3} />}+
          </p>
          <p>Selectable Class</p>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
