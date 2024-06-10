import { FaPhone, FaEnvelope } from "react-icons/fa";
import contact from "../assets/contact.webp";

const ContactUs = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-16 my-16'>
      <div>
        <p className='text-lg text-blue-700 font-bold'>Contact Us</p>
        <h3 className='text-3xl font-extrabold my-10'>Contact Us Today</h3>
        <p className='text-md w-[400px]'>
          At Hephzy-Glory School, we are committed to helping children discover
          their full potential, providing a nurturing and stimulating
          environment that fosters intellectual and personal development.
        </p>
        <div className='flex justify-between my-8'>
          <div>
            <FaPhone size={32} />
            <p className='my-2 font-bold text-xl'>Phone:</p>
            <p>+234 80 34256422</p>
          </div>
          <div>
            <FaEnvelope size={32} />
            <p className='my-2 font-bold text-xl'>Email:</p>
            <p>hepzibahnps@gmail.com</p>
          </div>
        </div>
        <button className='bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors'>
          Send a Message
        </button>
      </div>
      <div className='w-[500px]'>
        <img src={contact} alt='' className='w-full h-full rounded-[25px]' />
      </div>
    </div>
  );
};

export default ContactUs;
