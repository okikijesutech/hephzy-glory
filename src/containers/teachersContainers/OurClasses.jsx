import { FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const Facilities = () => {
  return (
    <div className='mx-0 md:mx-[225px] my-[250px]'>
      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='text-center md:text-left mb-8 md:mb-0 flex flex-col md:flex-row md:gap-[550px]'>
          <div>
            <p className='text-blue-600 text-lg font-bold'>Our Class</p>
            <h3 className='font-bold text-4xl '> Our classes</h3>
            <p className='w-[425px] mb-4 md:mb-20 text-xl mx-auto mt-6'>
              Our classes are designed to be engaging and interactive,
              supporting students to develop critical thinking and
              problem-solving skills, preparing them for success in the future.
            </p>
          </div>
          <button className='bg-blue-600 text-white mt-5 py-3 px-6 rounded hover:bg-blue-700 transition-colors md:h-[50px] mx-auto md:mx-0 w-[90%] md:w-[180px]'>
            See All Classes
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:flex-wrap items-start justify-center gap-16'>
        {[
          {
            title: "Physical Education",
            description:
              "Our Physical Education program is designed to provide students with the knowledge, skills, and values to lead a healthy, active lifestyle. Through various physical activities, games, and sports, students develop their physical fitness, motor skills, and teamwork. Our program promotes the development of a positive attitude towards physical activity and healthy living habits.",
          },
          {
            title: "Arts & Crafts",
            description:
              "Our Arts & Crafts program is designed to provide students with a creative and expressive outlet that promotes their emotional, social, and cognitive development. Through various mediums such as painting, drawing, sculpture, and mixed media, students learn the fundamentals of art and develop their creativity, imagination, and self-expression.",
          },
          {
            title: "Mathematics Mastery",
            description:
              "Our Mathematics Mastery program is designed to provide students with a comprehensive and engaging approach to mathematical learning. With a focus on problem-solving, critical thinking, and real-life applications, our program develops students’ mathematical fluency and promotes a love for learning this subject.",
          },
        ].map((item) => (
          <div className='mx-[30px] md:mx-0 w-[300px] h-[375px] md:h-[550px] p-4'>
            <FaCircleCheck size={36} color='blue' />
            <h4 className='text-4xl font-extrabold my-2 w-[400px] md:w-[235px] '>
              {item.title}
            </h4>
            <p className='text-lg w-[400px] md:w-[225px] mt-6'>
              {item.description}
            </p>
            <button className='text-blue-500 flex items-center gap-2 mt-3'>
              Learn More <FaArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
