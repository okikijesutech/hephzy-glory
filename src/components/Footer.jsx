import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col md:flex-row items-start justify-evenly py-[120px]'>
      <div>
        <h1 className='font-bold text-4xl'>Hephzy-Glory</h1>
        <div className='flex items-center justify-between mt-2 w-[100px]'>
          <Link>
            <FaInstagram size={24} />
          </Link>
          <Link>
            <FaYoutube size={24} />
          </Link>
          <Link>
            <FaFacebook size={24} />
          </Link>
        </div>
      </div>
      <div>
        <h3 className='font-bold text-3xl'>Pages</h3>
        <ul className='mt-6 flex flex-col gap-2'>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Classes</Link>
          </li>
          <li>
            <Link>Teachers</Link>
          </li>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className='font-bold text-3xl'>Contact</h3>
        <ul className='mt-6 flex flex-col gap-2'>
          <li className='flex gap-3 items-center'>
            <FaPhone size={18} color='blue' />
            <p>08034256422</p>
          </li>
          <li className='flex gap-3 items-center'>
            <FaEnvelope size={18} color='blue' />
            <p>hephzibahnps@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
