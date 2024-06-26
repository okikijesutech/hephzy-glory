import { motion } from "framer-motion";
import useInView from "../../hooks/useInView";
import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
  const [usRef, inView] = useInView();
  return (
    <div className='mb-[120px]'>
      <p className='text-blue-500 text-center'>Our Features</p>
      <motion.h3
        ref={usRef}
        initial={{ y: 40, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className='text-3xl md:text-4xl font-bold text-center mt-6'
      >
        Our Features Set Us Apart
      </motion.h3>
      <div className='flex flex-col md:flex-row items-center justify-center gap-16 mt-14'>
        <div className='text-center flex flex-col items-center gap-6'>
          <FaCheckCircle size={48} color='blue' />
          <h4 className='font-bold text-2xl'>Language Arts</h4>
          <p className='w-[250px] text-md'>
            Our Language Arts program is designed to provide students with
            strong reading, writing and communication skills, building a solid
            foundation for academic success.
          </p>
        </div>
        <div className='text-center flex flex-col items-center gap-6'>
          <FaCheckCircle size={48} color='blue' />
          <h4 className='font-bold text-2xl'>Mathematics Mastery</h4>
          <p className='w-[250px] text-md'>
            Our Mathematics Mastery program is tailored to help students develop
            a deep understanding of mathematical concepts, equipping them with
            critical thinking skills and the ability to solve complex problems.
          </p>
        </div>
        <div className='text-center flex flex-col items-center gap-6'>
          <FaCheckCircle size={48} color='blue' />
          <h4 className='font-bold text-2xl'>Science Explorers</h4>
          <p className='w-[250px] text-md'>
            Our Science Explorers program inspires students to explore the world
            of science through hands-on experiments, developing their curiosity
            and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
