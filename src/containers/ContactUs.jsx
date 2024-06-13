import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import contact from "../assets/contact.webp";

const ContactUs = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-16 my-16'>
      <div>
        <p className='text-lg text-blue-700 font-bold text-center'>
          Contact Us
        </p>
        <h3 className='text-3xl font-extrabold my-5 md:my-10 text-center'>
          Contact Us Today
        </h3>
        <p className='text-md w-[400px] text-center'>
          At Hephzy-Glory School, we are committed to helping children discover
          their full potential, providing a nurturing and stimulating
          environment that fosters intellectual and personal development.
        </p>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-5 my-8'>
          <div className='flex flex-col items-center md:items-start'>
            <FaPhone size={32} />
            <p className='my-2 font-bold text-xl'>Phone:</p>
            <p>+234 80 34256422</p>
          </div>
          <div className='flex flex-col items-center md:items-start'>
            <FaEnvelope size={32} />
            <p className='my-2 font-bold text-xl'>Email:</p>
            <p>hepzibahnps@gmail.com</p>
          </div>
        </div>
        <Link to='/contact'>
          <button className='w-full md:w-[45%] bg-blue-600 text-white mt-5 py-3 px-4 rounded hover:bg-blue-700 transition-colors'>
            Send a Message
          </button>
        </Link>
      </div>
      <div className='w-[430px] md:w-[500px]'>
        <img src={contact} alt='' className='w-full h-full rounded-[25px]' />
      </div>
    </div>
  );
};

export default ContactUs;
