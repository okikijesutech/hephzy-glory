import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import useInView from "../hooks/useInView";
import nursery from "../assets/nursery.webp";
import secondary from "../assets/secondary.webp";
import primary from "../assets/primary.webp";

const OurPrograms = () => {
  const [programRef, sectionInView] = useInView();
  const [cardRef, cardInView] = useInView();
  const [buttonRef, buttonInView] = useInView();
  return (
    <div
      ref={programRef}
      className='flex flex-col items-center justify-center gap-8 my-[120px] text-center md:text-left'
    >
      <p className='text-blue-700 font-semibold text-xl'>Our program</p>
      <motion.h3
        initial={{ y: 50, opacity: 0 }}
        animate={sectionInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.8 }}
        className='text-4xl font-bold'
      >
        Grade Programs
      </motion.h3>
      <motion.div
        ref={cardRef}
        initial={{ y: 50, opacity: 0 }}
        animate={cardInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.8 }}
        className='flex flex-col md:flex-row gap-14 mt-4 md:mt-8'
      >
        {[
          {
            img: nursery,
            title: "Nursery",
            description:
              "Our Nursery program provides a safe and nurturing environment for our youngest students to learn and grow. We focus on building a strong foundation in language arts, math, and science, as well as social and emotional development.",
          },
          {
            img: primary,
            title: "Primary",
            description:
              "Our Primary program builds on the strong foundation established in Nursery, providing a curriculum that challenges students to explore new ideas and concepts. We offer Language Arts, Mathematics Mastery, Science Explorers, and other engaging subjects.",
          },
          {
            img: secondary,
            title: "Secondary",
            description:
              "Our Secondary program prepares students for success in the future, focusing on academic rigor and personal development. We offer a wide range of courses, including Science, Arts, and Commerce, and extracurricular activities that help students develop leadership and teamwork skills.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center md:items-start'
          >
            <div className='w-[425px] md:w-[300px]'>
              <img
                src={item.img}
                alt='Nursery Program'
                className='w-full h-full object-contain rounded-[25px]'
              />
            </div>
            <h4 className='text-2xl mt-4'>{item.title}</h4>
            <p className='w-[90%] md:w-[300px] mx-auto md:mx-0 font-extralight'>
              {item.description}
            </p>
            <motion.button
              ref={buttonRef}
              initial={{ y: 50, opacity: 0 }}
              animate={buttonInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className='flex items-center gap-2 mt-3 text-blue-700'
            >
              Read More <FaChevronRight />
            </motion.button>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurPrograms;
