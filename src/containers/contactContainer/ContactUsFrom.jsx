import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import useInView from "../../hooks/useInView";
import contact from "../../assets/contact.webp";

const ContactUs = () => {
  const [contactRef, inView] = useInView();
  return (
    <div
      ref={contactRef}
      className='flex flex-col md:flex-row items-center justify-center gap-16 my-16'
    >
      <div className='text-center md:text-left'>
        <p className='text-lg text-blue-700 font-bold'>Contact Us</p>
        <motion.h3
          initial={{ y: 25, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className='text-3xl md:text-4xl md:w-[450px] font-extrabold my-4 md:my-10'
        >
          Connect with Hephzy-Glory School
        </motion.h3>
        <p className='text-md mx-auto md:mx-0 w-[450px]'>
          If you have any questions or need more information about our school,
          please don’t hesitate to contact us. Our friendly staff is always
          available to help and answer any queries you may have.
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
