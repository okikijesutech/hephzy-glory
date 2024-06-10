import Countup from "react-countup";

const OurJourney = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center gap-[350px] my-16'>
      <div>
        <p className='text-blue-400'>Our Journey</p>
        <h3 className='text-4xl font-extrabold my-5'>Get in Touch With Us</h3>
        <p className='w-[425px]'>
          We welcome your inquiries and feedback. Please feel free to contact us
          to learn more about our programs and services.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <p className='text-blue-400 text-5xl'>
            <Countup start={0} end={75} duration={3} />
            k+
          </p>
          <p>Satisfied Students</p>
        </div>
        <div>
          <p className='text-blue-400 text-5xl'>
            <Countup start={0} end={100} duration={3} />+
          </p>
          <p>Expert Instructor</p>
        </div>
        <div>
          <p className='text-blue-400 text-5xl'>
            <Countup start={0} end={50} duration={3} />+
          </p>
          <p>Locations</p>
        </div>
        <div>
          <p className='text-blue-400 text-5xl'>
            <Countup start={0} end={15} duration={3} />+
          </p>
          <p>Selectable Class</p>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
