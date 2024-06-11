import bgImage from "../assets/bg-image.jpg";

const Header = () => {
  return (
    <div
      className='relative flex items-center justify-center h-[325px] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='absolute bg-black inset-0 opacity-50'></div>
      <h1 className='relative text-white font-bold text-5xl'>About Us</h1>
    </div>
  );
};

export default Header;
