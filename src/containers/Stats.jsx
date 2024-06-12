import { motion } from "framer-motion";
import useInView from "../hooks/useInView";
import bgImage from "../assets/bg-image.jpg";
import Countup from "react-countup";

const Stats = () => {
  const [statsRef, inView] = useInView();

  return (
    <section
      ref={statsRef}
      className='relative flex flex-col md:flex-row gap-[100px] items-center justify-center p-[90px] md:p-[250px] my-[50px] bg-cover bg-center bg-no-repeat text-white font-bold text-xl'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "tween", duration: 2 }}
        className='relative flex flex-col items-center'
      >
        <p className='text-blue-400 text-3xl md:text-5xl'>
          {inView && <Countup start={0} end={100} duration={3} />}+
        </p>
        <p>Awards Winning</p>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "tween", duration: 2 }}
        className='relative flex flex-col items-center'
      >
        <p className='text-blue-400 text-3xl md:text-5xl'>
          {inView && <Countup start={0} end={500} duration={3} />}+
        </p>
        <p>Our Equipment</p>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "tween", duration: 2 }}
        className='relative flex flex-col items-center'
      >
        <p className='text-blue-400 text-3xl md:text-5xl'>
          {inView && <Countup start={0} end={250} duration={3} />}+
        </p>
        <p>Field Expertise</p>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "tween", duration: 2 }}
        className='relative flex flex-col items-center'
      >
        <p className='text-blue-400 text-3xl md:text-5xl'>
          {inView && <Countup start={0} end={2} duration={3} />}+
        </p>
        <p>Locations</p>
      </motion.div>
    </section>
  );
};

export default Stats;
