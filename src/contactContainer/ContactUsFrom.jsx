import { FaPhone, FaEnvelope } from "react-icons/fa";
import contact from "../assets/contact.webp";
import Button from "../components/Botton";

const ContactUs = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-16 my-16'>
      <div className='text-center md:text-left'>
        <p className='text-lg text-blue-700 font-bold'>Contact Us</p>
        <h3 className='text-3xl font-extrabold my-4 md:my-10'>
          Contact Us Today
        </h3>
        <p className='text-md mx-auto md:mx-0 w-[400px]'>
          At Hephzy-Glory School, we are committed to helping children discover
          their full potential, providing a nurturing and stimulating
          environment that fosters intellectual and personal development.
        </p>
        <div className='flex flex-col md:flex-row items-center justify-between my-8'>
          <div className='flex flex-col items-center'>
            <FaPhone size={32} />
            <p className='my-2 font-bold text-xl'>Phone:</p>
            <p>+234 80 34256422</p>
          </div>
          <div className='flex flex-col items-center'>
            <FaEnvelope size={32} />
            <p className='my-2 font-bold text-xl'>Email:</p>
            <p>hepzibahnps@gmail.com</p>
          </div>
        </div>
        <div className='w-[450px] md:w-[500px]'>
          <form className='space-y-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-2 border-2 border-black rounded'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='w-full p-2 border-2 border-black rounded'
            />
            <textarea
              name='message'
              id='message'
              rows='4'
              placeholder='Your Message'
              className='w-full p-2 border-2 border-black rounded'
            ></textarea>
            <button className='bg-blue-500 text-white py-2 px-6 rounded w-full hover:bg-blue-600 transition-colors'>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <div className='w-[450px] md:w-[500px]'>
        <img
          src={contact}
          alt='Contact Us'
          className='w-full h-full rounded-[25px]'
        />
      </div>
    </div>
  );
};

export default ContactUs;
