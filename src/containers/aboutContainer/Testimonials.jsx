import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import test from "../../assets/testimony.webp";

function Testimonials() {
  const [usRef, inView] = useInView();
  const [imgRef, imgInView] = useInView();
  return (
    <div className='my-[120px]'>
      <p className='text-blue-600 text-lg text-center'>Testimonials</p>
      <motion.h3
        ref={usRef}
        initial={{ y: 30, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className='text-3xl md:text-4xl font-bold text-center mt-6'
      >
        Our Happy Customers
      </motion.h3>
      <div className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 mt-10'>
        <div className='flex flex-col items-center md:items-start'>
          <FaQuoteLeft size={48} />
          <p className='w-[450px] text-xl md:text-2xl font-bold text-center md:text-left mt-6 mb-8'>
            Hephzy-Glory has been a great school for my children. The teachers
            are excellent and the facilities are top-notch. I highly recommend
            this school.
          </p>
          <div className='flex gap-3'>
            <FaStar size={32} color='grey' />
            <FaStar size={32} color='grey' />
            <FaStar size={32} color='grey' />
            <FaStar size={32} color='grey' />
            <FaStar size={32} color='grey' />
          </div>
          <p className='text-lg text-blue-600 mt-6'>Mrs. Adeniyi</p>
        </div>
        <motion.div
          ref={imgRef}
          initial={{ y: 50, opacity: 0 }}
          animate={imgInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.8 }}
          className='w-[450px] '
        >
          <img src={test} alt='' className='w-full h-full rounded-xl' />
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
