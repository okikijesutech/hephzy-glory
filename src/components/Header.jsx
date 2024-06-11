const Header = ({ title, img }) => {
  return (
    <div
      className='relative flex items-center justify-center h-[375px] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className='absolute bg-black inset-0 opacity-50'></div>
      <h1 className='relative text-white font-bold text-5xl'>{title}</h1>
    </div>
  );
};

export default Header;
