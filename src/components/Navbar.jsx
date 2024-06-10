import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

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
        <h1>Hephzy-Glory</h1>
      </NavLink>
      <div className='hidden md:flex gap-12'>
        {menuItems.map((item) => (
          <NavLink key={item.path} to={item.path} activeClassName='font-bold'>
            {item.label}
          </NavLink>
        ))}
      </div>

      <NavLink to='/contact'>
        <button className='hidden md:block bg-blue-500 px-3 py-2   rounded-full'>
          Appointment
        </button>
      </NavLink>
      <div className='md:hidden'>
        <button
          onClick={handleToggle}
          className='text-gray-700 focus:outline-none'
        >
          {toggle ? <FaXmark size={24} /> : <FaBars size={24} />}
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
    <ul className='md:hidden flex flex-col items-center gap-4 py-4'>
      {menuItems.map((item) => (
        <li key={item.path}>
          <NavLink to={item.path} onClick={onMenuToggle}>
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
