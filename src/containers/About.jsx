import us from "../assets/us.webp";
import { FaCircleCheck } from "react-icons/fa6";
import Countup from "react-countup";

const About = () => {
  return (
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
            <FaCircleCheck />
            <p className='text-lg'>
              {" "}
              <b>Safe and Nurturing Environment</b>
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <FaCircleCheck />
            <p className='text-lg'>
              <b>Comprehensive Curriculum</b>
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <FaCircleCheck />
            <p className='text-lg'>
              <b>Experienced Teachers</b>
            </p>
          </div>
        </div>
        <button className='bg-blue-500 px-4 py-3 my-10'>More about us</button>
        <div className='flex flex-col md:flex-row gap-5 items-center justify-center'>
          <div>
            <p className='text-blue-400 text-5xl'>
              <Countup start={0} end={250} duration={3} />+
            </p>
            <p>Graduated</p>
          </div>
          <div>
            <p className='text-blue-400 text-5xl'>
              <Countup start={0} end={640} duration={3} />+
            </p>
            <p>School projects</p>
          </div>
          <div>
            <p className='text-blue-400 text-5xl'>
              <Countup start={0} end={800} duration={3} />+
            </p>
            <p>Applicants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
