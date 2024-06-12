import useInView from "../hooks/useInView";
import { motion } from "framer-motion";
import expert from "../assets/expert.webp";

const Expert = () => {
  const [expertRef, inView] = useInView(false);

  return (
    <div
      ref={expertRef}
      className='relative mx-[15px] md:mx-[175px] my-[120px] bg-cover bg-no-repeat bg-center text-white rounded-2xl h-[275px] flex items-center justify-center'
      style={{ backgroundImage: `url(${expert})` }}
    >
      <div className='absolute inset-0 bg-black opacity-70 rounded-2xl'></div>
      <div className='relative flex  flex-col items-center gap-2 md:gap-5'>
        <p className='text-blue-500'>Join Us</p>
        <motion.h3
          initial={{ y: 25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.8 }}
          className='text-3xl md:text-5xl font-bold'
        >
          Be an Expert With Us
        </motion.h3>
        <p className='w-[400px] text-center'>
          Our programs are designed to challenge and engage students, providing
          a comprehensive education that prepares them for success in the
          future.
        </p>
      </div>
    </div>
  );
};

export default Expert;
