import { FaChevronRight } from "react-icons/fa";
import lib from "../assets/lib.webp";
import ict from "../assets/ict.webp";
import lab from "../assets/lab.webp";

const Facilities = () => {
  return (
    <div className='mx-[160px] my-[120px]'>
      <p className='text-blue-600 text-lg font-bold'>Our Facilities</p>
      <h3 className='font-bold text-4xl'>Top-Class Facilities</h3>
      <p className='w-[425px] mb-20'>
        Our modern and well-equipped facilities provide a safe and conducive
        environment for learning, with state-of-the-art resources to enhance the
        learning experience.
      </p>
      <div className='flex flex-col md:flex-row items-start justify-center gap-16'>
        <div>
          <div className='w-[350px]'>
            <img src={lib} alt='' className='w-full h-full rounded-2xl' />
          </div>
          <div>
            <h4 className='text-2xl font-bold my-2 '>
              Library and Resource Center
            </h4>
            <p className='text-lg w-[300px]'>
              Our library and resource center is stocked with a vast collection
              of books and materials, providing students with the necessary
              resources to excel academically.
            </p>
            <button className='text-blue-500 flex items-center mt-3'>
              Read More <FaChevronRight size={18} />
            </button>
          </div>
        </div>
        <div>
          <div className='w-[350px]'>
            <img src={lab} alt='' className='w-full h-full rounded-2xl' />
          </div>
          <div>
            <h4 className='text-2xl font-bold my-2 '>Science Laboratory</h4>
            <p className='text-lg w-[300px]'>
              Our science laboratory is equipped with the latest equipment and
              resources, providing students with a hands-on approach to
              learning.
            </p>
            <button className='text-blue-500 flex items-center mt-3'>
              Read More <FaChevronRight size={18} />
            </button>
          </div>
        </div>
        <div>
          <div className='w-[350px]'>
            <img src={ict} alt='' className='w-full h-full rounded-2xl' />
          </div>
          <div>
            <h4 className='text-2xl font-bold my-2 '>ICT Lab</h4>
            <p className='text-lg w-[300px]'>
              Our ICT lab is equipped with state-of-the-art equipment to provide
              students with the necessary skills to thrive in the digital age.
            </p>
            <button className='text-blue-500 flex items-center mt-3'>
              Read More <FaChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
