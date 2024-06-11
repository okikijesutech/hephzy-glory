import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import test from "../assets/testimony.webp";

function Testimonials() {
  return (
    <div className='my-[120px]'>
      <p className='text-blue-600 text-lg text-center'>Testimonials</p>
      <h3 className='text-3xl font-bold text-center mt-6 '>
        Our Happy Customers
      </h3>
      <div className='flex flex-col md:flex-row items-center justify-center gap-20 mt-10'>
        <div>
          <FaQuoteLeft size={48} />
          <p className='w-[450px] text-2xl font-bold mt-6 mb-8'>
            Hephzy-Glory has been a great school for my children. The teachers
            are excellent and the facilities are top-notch. I highly recommend
            this school.
          </p>
          <div className='flex gap-3'>
            <FaStar size={32} color='grey' />
            <FaStar size={32} color='grey' />
            <FaStar size={32} color='grey' />
            <FaStar size={32} color='grey' />
            <FaStar size={32} color='grey' />
          </div>
          <p className='text-lg text-blue-600 mt-6'>Mrs. Adeniyi</p>
        </div>
        <div className='w-[450px] '>
          <img src={test} alt='' className='w-full h-full rounded-xl' />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
