import { Link } from "react-router-dom";
import us from "../assets/us.webp";
import { FaCircleCheck } from "react-icons/fa6";
import Countup from "react-countup";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [inView, setInView] = useState(false);
  const countupRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(countupRef.current); // Unobserve after first intersection
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (countupRef.current) {
      observer.observe(countupRef.current);
    }

    return () => {
      if (countupRef.current) {
        observer.unobserve(countupRef.current);
      }
    };
  }, []);

  return (
    <section className='flex flex-col md:flex-row items-center justify-center gap-y-[20px] gap-x-[100px] mx-0 md:mx-[180px] my-[120px]'>
      <div className='w-full'>
        <p className='text-blue-600 mb-8 md:mb-6 font-bold text-center md:text-left'>
          About
        </p>
        <h3 className='text-3xl md:text-5xl mx-auto md:mx-0 w-[80%] md:w-[450px] font-bold text-center md:text-left mb-4'>
          Helping Children Discover Their Full Potential
        </h3>
        <div className='w-[450px] mx-auto md:mx-0 md:w-[500px]'>
          <img
            src={us}
            className='w-full h-full object-contain rounded-3xl'
            alt=''
          />
        </div>
      </div>
      <div className='w-full ml-10 md:ml-0'>
        <p className='mb-4 text-center md:text-left'>Our Programs</p>
        <div>
          <div className='flex items-center gap-4'>
            <FaCircleCheck />
            <p className='text-lg'>
              {" "}
              <b>Safe and Nurturing Environment</b>
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <FaCircleCheck />
            <p className='text-lg'>
              <b>Comprehensive Curriculum</b>
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <FaCircleCheck />
            <p className='text-lg'>
              <b>Experienced Teachers</b>
            </p>
          </div>
        </div>
        <Link to='/about'>
          <button className='bg-blue-600 w-[90%] md:w-[30%] text-white mt-5 py-3 px-4 rounded hover:bg-blue-700 transition-colors'>
            More about us
          </button>
        </Link>
        <div
          ref={countupRef}
          className='flex flex-col md:flex-row gap-12 mt-12 items-center justify-center'
        >
          <div className='flex flex-col items-center'>
            <p className='text-blue-400 text-3xl md:text-5xl'>
              {inView && <Countup start={0} end={250} duration={3} />}+
            </p>
            <p>Graduated</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-blue-400 text-3xl md:text-5xl'>
              {inView && <Countup start={0} end={640} duration={3} />}+
            </p>
            <p>School projects</p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-blue-400 text-3xl md:text-5xl'>
              {inView && <Countup start={0} end={800} duration={3} />}+
            </p>
            <p>Applicants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
