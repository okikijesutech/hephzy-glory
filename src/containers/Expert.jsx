import expert from "../assets/expert.webp";

const Expert = () => {
  return (
    <div
      className='relative mx-[175px] my-[120px] bg-cover bg-no-repeat bg-center text-white rounded-2xl h-[275px] flex items-center justify-center'
      style={{ backgroundImage: `url(${expert})` }}
    >
      <div className='absolute inset-0 bg-black opacity-70 rounded-2xl'></div>
      <div className='relative flex  flex-col items-center gap-5'>
        <p className='text-blue-500'>Join Us</p>
        <h3 className='text-4xl font-bold'>Be an Expert With Us</h3>
        <p className='w-[400px] text-center'>
          Our programs are designed to challenge and engage students, providing
          a comprehensive education that prepares them for success in the
          future.
        </p>
      </div>
    </div>
  );
};

export default Expert;
