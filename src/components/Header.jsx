import { motion } from "framer-motion";
const Header = ({ title, img }) => {
  return (
    <div
      className='relative flex items-center justify-center h-[375px] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className='absolute bg-black inset-0 opacity-50'></div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='relative text-white font-bold text-5xl'
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default Header;
