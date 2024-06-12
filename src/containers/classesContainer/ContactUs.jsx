import bgImage from "../../assets/bg-image.jpg";

const ContactUs = () => {
  return (
    <div
      className='relative flex items-center justify-center h-[410px] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='absolute bg-black inset-0 opacity-50'></div>
      <div className='relative flex flex-col md:flex-row items-center gap-5 md:gap-60 '>
        <div className='text-white w-[420px] md:w-[625px] text-center md:text-left'>
          <h1 className=' font-bold w-[400px] md:w-full text-3xl md:text-4xl'>
            Contact Us For Excellent Service
          </h1>
          <p className='mt-4'>
            Reach out to us for any inquiries or support you need. Our dedicated
            team assists you with information, guidance, or feedback. Contact us
            via email or phone or visit our office — we’re always ready to help!
          </p>
        </div>
        <button className='bg-blue-600 w-[100%] md:w-[15%] px-6 py-2 text-white'>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
