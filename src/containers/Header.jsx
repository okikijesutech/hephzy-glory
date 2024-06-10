import { motion } from "framer-motion";
import header from "../assets/header.jpg";

const Header = () => {
  return (
    <section className='flex flex-col md:flex-row items-center '>
      <div className='relative'>
        <div className='md:w-[750px] h-[600px] '>
          <img
            src={header}
            className='w-full h-full object-cover rounded-[15px]'
            alt='image showing kids in a class with there teacher'
          />
        </div>
        <motion.div
          className='absolute bottom-[100px] right-10 bg-white rounded-[15px] px-4 py-3'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className='max-w-[300px] relative pl-3'>
            <span className='absolute left-0 top-0 h-full w-1 bg-blue-500'></span>
            I love going to Hephzy-Glory School because the teachers are kind
            and the classes are fun. I have learned so much!
          </p>
          <p>Olivia Wilson</p>
        </motion.div>
      </div>
      <div className='mt-10 md:mt-0 md:ml-[100px] text-center md:text-left'>
        <p className='text-blue-700'>Welcome to hephzy glory school</p>
        <h1 className='my-10  text-2xl md:text-6xl'>
          Hephzy-Glory <br /> School - Nurturing the Future
        </h1>
        <p className='text-sm md:text-lg w-[300px] md:w-[450px] '>
          Hephzy-Glory School is a nursery, primary, and secondary school
          located at 38 Ayodele Okeowo Soluyi Gbagada Lagos, Nigeria. We are
          dedicated to providing a comprehensive and engaging education that
          prepares our students for success in the future.
        </p>
        <button className='bg-blue-400 px-4 py-3 mt-10 text-xl mx-auto md:mx-0'>
          GET STARTED
        </button>
      </div>
    </section>
  );
};

export default Header;
