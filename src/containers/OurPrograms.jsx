import { FaChevronRight } from "react-icons/fa";
import nursery from "../assets/nursery.webp";
import secondary from "../assets/secondary.webp";
import primary from "../assets/primary.webp";

const OurPrograms = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 my-[120px]'>
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
            Nursery, providing a curriculum that challenges students to explore
            new ideas and concepts. We offer Language Arts, Mathematics Mastery,
            Science Explorers, and other engaging subjects.
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
            focusing on academic rigor and personal development. We offer a wide
            range of courses, including Science, Arts, and Commerce, and
            extracurricular activities that help students develop leadership and
            teamwork skills.
          </p>
          <button className='flex items-center gap-2 mt-3 text-blue-700'>
            Read More <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
