import slogo from "../assets/slogo.jpg";

const Support = () => {
  return (
    <section className='py-10 md:px-[250px]'>
      <h3 className='text-center text-xl '>Supported by:</h3>
      <div className='flex flex-col md:flex-row items-center justify-evenly mt-10'>
        {[
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
          {
            img: slogo,
            name: "AFED",
          },
        ].map((support, index) => (
          <div key={index} className='flex items-center gap-4'>
            <img src={support.img} alt='' className='w-[50px]' />
            <p>{support.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
