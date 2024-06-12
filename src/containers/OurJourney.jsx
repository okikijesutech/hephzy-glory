import { motion } from "framer-motion";
import Countup from "react-countup";
import useInView from "../hooks/useInView";

const OurJourney = () => {
  const [journeyRef, inView] = useInView();

  return (
    <div
      ref={journeyRef}
      className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[350px] my-[120px]'
    >
      <div className='text-center md:text-left'>
        <p className='text-blue-600 font-bold text-lg'>Our Journey</p>
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className='text-3xl md:text-4xl font-extrabold my-3 md:my-5'
        >
          Get in Touch With Us
        </motion.h3>
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
