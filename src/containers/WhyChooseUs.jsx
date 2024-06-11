import { FaCircleCheck } from "react-icons/fa6";
import whyUs from "../assets/why-us.webp";

const WhyChooseUs = () => {
  return (
    <section className='flex flex-col md:flex-row gap-[180px] items-center justify-center my-[120px]'>
      <div>
        <p className='text-blue-700 text-center text-lg font-bold md:text-left'>
          Why Choose Us
        </p>
        <h3 className='text-4xl md:text-5xl md:w-[500px] my-6 font-extrabold text-center md:text-left'>
          Why You Should Choose us
        </h3>
        <p className='text-center md:text-left text-lg'>
          Why choose Hephzy-Glory School?
        </p>
        <div className='mt-16'>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-x-5 gap-y-4 mb-6'>
            <FaCircleCheck size={48} color='blue' />
            <div className='w-[425px] md:w-[300px] text-center md:text-left'>
              <h4 className='font-extrabold text-2xl'>Experienced Teachers</h4>
              <p className='leading-relaxed'>
                Our teachers are experienced, highly qualified professionals who
                are dedicated to helping our students achieve their full
                potential.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-x-5 gap-y-4 mb-6'>
            <FaCircleCheck size={48} color='blue' />
            <div className='w-[425px] md:w-[300px] text-center md:text-left'>
              <h4 className='font-extrabold text-2xl'>
                Comprehensive Curriculum
              </h4>
              <p className='leading-relaxed'>
                Our curriculum is designed to provide a comprehensive and
                engaging education that prepares students for success in the
                future.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-x-5 gap-y-4 '>
            <FaCircleCheck size={48} color='blue' />
            <div className='w-[425px] md:w-[300px] text-center md:text-left'>
              <h4 className='font-extrabold text-2xl'>
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
  );
};

export default WhyChooseUs;
