import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/classes", label: "Classes" },
    { path: "/teacher", label: "Teacher" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div className='fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between py-3 px-2'>
      <NavLink to='/'>
        <h1 className='font-extrabold text-xl'>Hephzy-Glory</h1>
      </NavLink>
      <div className='hidden md:flex gap-12'>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            activeClassName='text-blue-500 font-bold bg-gray-200'
            className='text-gray-700 hover:text-blue-500 transition duration-300'
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <NavLink to='/contact'>
        <button className='hidden md:block bg-blue-500 px-6 py-3 text-white rounded-full'>
          Appointment
        </button>
      </NavLink>
      <div className='md:hidden'>
        <button
          onClick={handleToggle}
          className='text-gray-700 focus:outline-none'
        >
          {toggle ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {toggle && (
        <MobileMenu menuItems={menuItems} onMenuToggle={handleToggle} />
      )}
    </div>
  );
};

const MobileMenu = ({ menuItems, onMenuToggle }) => {
  return (
    <ul className='bg-white w-full absolute top-12 left-0 md:hidden flex flex-col items-center justify-center gap-4 py-4 border-b border-black'>
      {menuItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            onClick={onMenuToggle}
            className='text-gray-700 hover:bg-gray-200 w-full transition duration-300 '
          >
            {item.label}
          </NavLink>
        </li>
      ))}
      <li>
        <NavLink to='/contact' onClick={onMenuToggle}>
          <button className='bg-blue-500 text-white px-3 py-2 rounded-full'>
            Appointment
          </button>
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
