import slogo from "../assets/slogo.jpg";

const Support = () => {
  return (
    <section className='py-10 md:px-[250px] my-[120px]'>
      <h3 className='text-center text-lg font-extralight'>Supported by:</h3>
      <div className='flex flex-col md:flex-row items-center justify-evenly mt-24'>
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
          <div key={index} className='flex items-center gap-1 md:gap-4'>
            <img src={support.img} alt='' className='w-[60px]' />
            <p>{support.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
