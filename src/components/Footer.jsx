import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black text-white flex'>
      <div>
        <h1>Hephzy-Glory</h1>
      </div>
      <div>
        <h3>Pages</h3>
        <ul>
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
        <h3>Contact</h3>
        <ul>
          <li>
            <FaPhone />
            <p>08034256422</p>
          </li>
          <li>
            <FaEnvelope />
            <p>hephzibahnps@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
