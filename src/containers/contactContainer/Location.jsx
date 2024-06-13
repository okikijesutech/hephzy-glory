import { FaEnvelope } from "react-icons/fa";
import { FaBuilding, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";

const Location = () => {
  const [locationRef, inView] = useInView();
  return (
    <div ref={locationRef} className='my-[120px]'>
      <p className='text-lg text-blue-600 font-bold text-center'>Location</p>
      <motion.h3
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className='text-3xl font-bold text-center mb-12 mt-4'
      >
        Our Location
      </motion.h3>
      <div className='w-[450px] mx-auto'>
        <div className='flex items-center justify-center gap-2'>
          <FaBuilding size={48} color='blue' />
          <p>38, Ayodele Okeowo, Soluyi, Gbagada, Lagos, Nigeria.</p>
        </div>

        <div className='flex items-center justify-center my-4 gap-2'>
          <FaEnvelope size={24} color='blue' />
          <p>hephzibahnps@gmail.com</p>
        </div>
        <div className='flex items-center justify-center  gap-2'>
          <FaPhone size={24} color='blue' />
          <p>+2348034256422</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
