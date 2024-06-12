import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Botton";
import header from "../assets/header.jpg";

const Header = () => {
  return (
    <section className='flex flex-col w-full md:flex-row items-center'>
      <div className='relative'>
        <div className='md:w-[750px] h-[600px] '>
          <img
            src={header}
            className='w-full h-full object-cover rounded-[15px]'
            alt='image showing kids in a class with there teacher'
          />
        </div>
        <motion.div
          className='absolute hidden md:block bottom-[100px] right-10 bg-white rounded-[15px] px-4 py-3'
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.8 }}
        >
          <p className='max-w-[300px] relative pl-3'>
            <span className='absolute left-0 top-0 h-full w-1 bg-blue-500'></span>
            I love going to Hephzy-Glory School because the teachers are kind
            and the classes are fun. I have learned so much!
          </p>
          <p>Olivia Wilson</p>
        </motion.div>
      </div>
      <div className='mt-10 md:mt-0 md:ml-[100px] w-full text-center md:text-left'>
        <p className='text-blue-700'>Welcome to hephzy glory school</p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='my-6 md:my-10  text-4xl font-bold md:w-[450px] leading-10 md:text-5xl'
        >
          Hephzy-Glory School - Nurturing the Future
        </motion.h1>
        <p className='text-sm  md:text-xl mx-auto md:mx-0 w-[90%] md:w-[450px]'>
          Hephzy-Glory School is a nursery, primary, and secondary school
          located at 38 Ayodele Okeowo Soluyi Gbagada Lagos, Nigeria. We are
          dedicated to providing a comprehensive and engaging education that
          prepares our students for success in the future.
        </p>
        <Link to='/Contact'>
          <Button name={"GET STARTED"} />
        </Link>
      </div>
    </section>
  );
};

export default Header;
