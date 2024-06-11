import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import { FaCircleCheck } from "react-icons/fa6";

const Us = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-32 my-[120px]'>
      <div>
        <p className='text-blue-600'>Our Classes</p>
        <h3 className='text-4xl font-extrabold w-[450px] leading-relaxed'>
          Various Academic Programs Available
        </h3>
        <p className='w-[450px] leading-relaxed text-md mb-4'>
          In addition to our regular academic programs, we offer a range of
          specialized classes and extracurricular activities designed to enrich
          students’ learning experiences. These programs include music, drama,
          debate, coding, and more, catering to every interest and passion. Our
          various academic programs enable students to explore their talents and
          develop their skills in a supportive and nurturing environment.
        </p>
        {[
          {
            title: "Extracurricular Activities",
            description:
              " We offer a wide range of extracurricular activities that enable students to explore their interests and develop their skills outside the classroom. These activities include sports, music, art, drama, debate, coding, and more, providing students with a well-rounded education that promotes their personal and social development.",
          },
          {
            title: "Summer Programs",
            description:
              "Our summer programs offer students a unique opportunity to explore their interests and passions in a fun and engaging environment. These programs include a range of academic and extracurricular activities, such as sports, music, art, science, and more, providing students with an enriching and enjoyable summer experience.",
          },
          {
            title: "Intership Programs",
            description:
              "Our intership programs offer students a unique opportunity to explore different job oppurtunites and career path while pursuing their academic goals. These programs include job placement,  providing students with a future forward perspective and career minded competence.",
          },
        ].map((item) => (
          <div className='flex items-start gap-3 my-4'>
            <FaCircleCheck size={48} color='blue' />
            <div>
              <h4 className='text-3xl font-bold'>{item.title}</h4>
              <p className='w-[375px] leading-relaxed text-md'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className='w-[450px] h-[415px] mb-6'>
          <img
            src={about1}
            alt=''
            className='w-full h-full rounded-2xl bg-contain'
          />
        </div>
        <div className='w-[450px] h-[415px]'>
          <img
            src={about2}
            alt=''
            className='w-full h-full rounded-2xl bg-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default Us;
