import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import { FaUserGroup, FaInfinity } from "react-icons/fa6";

const Us = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-20 my-[120px]'>
      <div>
        <p className='text-blue-600 text-center md:text-left'>ABOUT US</p>
        <h2 className='text-2xl md:text-4xl font-bold mx-auto md:mx-0  w-[350px] md:w-[450px] leading-relaxed text-center md:text-left'>
          The Best Education for Your child
        </h2>
        <p className='w-[450px] leading-relaxed text-md mb-4 text-center md:text-left'>
          Welcome to Hephzy-Glory School, a leading institution in providing
          quality education that fosters excellence and character development in
          your child.
        </p>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-3 mb-4 text-center'>
          <FaUserGroup size={32} />
          <div>
            <h3 className='font-bold text-xl'>Expert Teachers</h3>
            <p className='w-[375px] leading-relaxed text-md'>
              Our instructors are experienced and passionate professionals who
              provide excellent guidance, teaching and mentoring to students in
              a conducive learning environment.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-3 text-center'>
          <FaInfinity size={32} />
          <div>
            <h3 className='font-bold text-xl'>Unmatched Support</h3>
            <p className='w-[375px] leading-relaxed text-md'>
              We offer exceptional support to our students, ensuring they
              receive the necessary guidance and resources to achieve their
              academic goals.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='w-[450px] mb-6'>
          <img
            src={about1}
            alt=''
            className='w-full h-full rounded-2xl bg-contain'
          />
        </div>
        <div className='w-[450px]'>
          <img
            src={about2}
            alt=''
            className='w-full h-full rounded-2xl bg-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default Us;
