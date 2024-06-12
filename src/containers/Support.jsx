import { motion } from "framer-motion";
import useInView from "../hooks/useInView";
import slogo from "../assets/slogo.jpg";

const Support = () => {
  const [supportRef, inView] = useInView(false);

  return (
    <section ref={supportRef} className='py-10 md:px-[250px] my-[120px]'>
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.8 }}
        className='text-center text-lg font-extralight'
      >
        Supported by:
      </motion.h3>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.8 }}
        className='flex flex-col md:flex-row items-center justify-evenly mt-24'
      >
        {[
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
        ].map((support, index) => (
          <div key={index} className='flex items-center gap-1 md:gap-4'>
            <img src={support.img} alt='' className='w-[60px]' />
            <p>{support.name}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Support;
