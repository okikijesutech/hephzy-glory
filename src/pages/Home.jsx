import header from "../assets/header.jpg";
import slogo from "../assets/slogo.jpg";
import us from "../assets/us.webp";
import nursery from "../assets/nursery.webp";
import secondary from "../assets/secondary.webp";
import primary from "../assets/primary.webp";
import whyUs from "../assets/why-us.webp";
import { motion } from "framer-motion";
import { FaTicketAlt, FaChevronRight } from "react-icons/fa";

const supporters = [
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
];

const Home = () => {
  return (
    <div className='mt-[70px]'>
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
      <section className='py-10 md:px-[250px]'>
        <h3 className='text-center text-xl '>Supported by:</h3>
        <div className='flex flex-col md:flex-row items-center justify-evenly mt-10'>
          {supporters.map((support, index) => (
            <div key={index} className='flex items-center gap-4'>
              <img src={support.img} alt='' className='w-[50px]' />
              <p>{support.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='flex flex-col md:flex-row items-center justify-center gap-[100px]'>
        <div>
          <p className='text-blue-600 mb-6'>
            <b>About</b>
          </p>
          <h3 className='text-4xl '>
            <b>
              Helping Children <br /> Discover Their Full <br /> Potential
            </b>
          </h3>
          <div className='w-[500px]'>
            <img
              src={us}
              className='w-full h-full object-contain rounded-3xl'
              alt=''
            />
          </div>
        </div>
        <div>
          <p className='mb-4'>Our Programs</p>
          <div>
            <div className='flex items-center gap-4'>
              <FaTicketAlt />
              <p className='text-lg'>
                {" "}
                <b>Safe and Nurturing Environment</b>
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <FaTicketAlt />
              <p className='text-lg'>
                <b>Comprehensive Curriculum</b>
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <FaTicketAlt />
              <p className='text-lg'>
                <b>Experienced Teachers</b>
              </p>
            </div>
          </div>
          <button className='bg-blue-500 px-4 py-3 my-10'>More about us</button>
          <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
            <div>
              <p className='text-blue-400 text-3xl'>250+</p>
              <p>Graduated</p>
            </div>
            <div>
              <p className='text-blue-400 text-3xl'>640+</p>
              <p>School projects</p>
            </div>
            <div>
              <p className='text-blue-400 text-3xl'>800+</p>
              <p>Applicants</p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col md:flex-row gap-[100px] items-center justify-center p-[275px] m-[50px]'>
        <div>
          <p className='text-blue-400 text-3xl'>100+</p>
          <p>Awards Winning</p>
        </div>
        <div>
          <p className='text-blue-400 text-3xl'>500+</p>
          <p>Our Equipment</p>
        </div>
        <div>
          <p className='text-blue-400 text-3xl'>250+</p>
          <p>Field Expertise</p>
        </div>
        <div>
          <p className='text-blue-400 text-3xl'>2+</p>
          <p>Locations</p>
        </div>
      </section>
      <section className='flex flex-col items-center justify-center gap-8'>
        <p className='text-blue-500'>our program</p>
        <h3 className='text-4xl'>Grade Programs</h3>
        <div className='flex flex-col md:flex-row gap-14 mt-8'>
          <div>
            <div className='w-[300px]'>
              <img
                src={nursery}
                alt=''
                className='w-full h-full object-contain rounded-lg'
              />
            </div>
            <h4 className='text-2xl mt-4'>Nursery</h4>
            <p className='w-[300px]'>
              Our Nursery program provides a safe and nurturing environment for
              our youngest students to learn and grow. We focus on building a
              strong foundation in language arts, math, and science, as well as
              social and emotional development.
            </p>
            <button className='flex items-center gap-2 mt-3 text-blue-700'>
              Read More <FaChevronRight />
            </button>
          </div>
          <div>
            <div className='w-[300px]'>
              <img
                src={primary}
                alt=''
                className='w-full h-full object-contain rounded-lg'
              />
            </div>
            <h4 className='text-2xl mt-4'>Primary</h4>
            <p className='w-[300px]'>
              Our Primary program builds on the strong foundation established in
              Nursery, providing a curriculum that challenges students to
              explore new ideas and concepts. We offer Language Arts,
              Mathematics Mastery, Science Explorers, and other engaging
              subjects.
            </p>
            <button className='flex items-center gap-2 mt-3 text-blue-700'>
              Read More <FaChevronRight />
            </button>
          </div>
          <div>
            <div className='w-[300px]'>
              <img
                src={secondary}
                alt=''
                className='w-full h-full object-contain rounded-lg'
              />
            </div>

            <h4 className='text-2xl mt-4'>Secondary</h4>
            <p className='w-[300px]'>
              Our Secondary program prepares students for success in the future,
              focusing on academic rigor and personal development. We offer a
              wide range of courses, including Science, Arts, and Commerce, and
              extracurricular activities that help students develop leadership
              and teamwork skills.
            </p>
            <button className='flex items-center gap-2 mt-3 text-blue-700'>
              Read More <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
      <section className='flex flex-col md:flex-row gap-[150px] items-center justify-center'>
        <div>
          <p className='text-blue-600'>Why Choose Us</p>
          <h3 className='text-4xl my-6'>Why You Should Choose us</h3>
          <p>Why choose Hephzy-Glory School?</p>
          <div>
            <div>
              <div className='w-[300px]'>
                <h4 className='font-semibold'>Experienced Teachers</h4>
                <p className='leading-relaxed'>
                  Our teachers are experienced, highly qualified professionals
                  who are dedicated to helping our students achieve their full
                  potential.
                </p>
              </div>
            </div>
            <div>
              <div className='w-[300px]'>
                <h4 className='font-semibold'>Comprehensive Curriculum</h4>
                <p className='leading-relaxed'>
                  Our curriculum is designed to provide a comprehensive and
                  engaging education that prepares students for success in the
                  future.
                </p>
              </div>
            </div>
            <div>
              <div className='w-[300px]'>
                <h4 className='font-semibold'>
                  Safe and Nurturing Environment
                </h4>
                <p className='leading-relaxed'>
                  We provide a safe and nurturing environment where children can
                  learn and grow, free from distractions and anxiety.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[450px]'>
          <img
            src={whyUs}
            alt=''
            className='w-full h-full object-contain rounded-xl'
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
