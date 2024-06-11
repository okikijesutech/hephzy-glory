import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col md:flex-row items-center md:items-start justify-evenly py-10 md:py-20'>
      <div className='text-center md:text-left mb-8 md:mb-0'>
        <h1 className='font-bold text-2xl md:text-4xl mb-6 md:mb-0'>
          Hephzy-Glory
        </h1>
        <div className='flex items-center justify-center md:justify-start mt-2 space-x-4'>
          <Link to='#'>
            <FaInstagram size={20} md={24} />
          </Link>
          <Link to='#'>
            <FaYoutube size={20} md={24} />
          </Link>
          <Link to='#'>
            <FaFacebook size={20} md={24} />
          </Link>
        </div>
      </div>
      <div className='mb-8 md:mb-0'>
        <h3 className='font-bold text-xl md:text-3xl mb-8'>Pages</h3>
        <ul className='mt-4 md:mt-6 flex flex-col gap-4 md:gap-2'>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/classes'>Classes</Link>
          </li>
          <li>
            <Link to='/teachers'>Teachers</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li>
            <Link to='#'>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className='text-center md:text-left'>
        <h3 className='font-bold text-xl md:text-3xl mb-8'>Contact</h3>
        <ul className='mt-4 md:mt-6 flex flex-col gap-4 md:gap-2 '>
          <li className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3'>
            <FaPhone size={16} md={18} color='blue' />
            <p>08034256422</p>
          </li>
          <li className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3'>
            <FaEnvelope size={16} md={18} color='blue' />
            <p>hephzibahnps@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
