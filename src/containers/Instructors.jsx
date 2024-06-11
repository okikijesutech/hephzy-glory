import t1 from "../assets/t1.webp";
import t2 from "../assets/t2.webp";
import t3 from "../assets/t3.webp";
import t4 from "../assets/t4.webp";

const Instructors = () => {
  return (
    <section>
      <p className='text-center text-blue-800'>OUR TEACHERS</p>
      <h3 className='text-center font-extrabold text-4xl mt-4 mb-12'>
        Meet Our Instructors
      </h3>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
        {[
          { name: "Alfredo Torres", title: "LANGUAGE ARTS TEACHER", img: t1 },
          {
            name: "Rufus Stewart",
            title: "MATHEMATICS MASTERY TEACHER",
            img: t2,
          },
          {
            name: "Hannah Morales",
            title: "SCIENCE EXPLORERS TEACHER",
            img: t3,
          },
          { name: "Juliana Silva", title: "ARTS TEACHER", img: t4 },
        ].map((teacher, index) => (
          <div
            key={index}
            className='group relative w-[400px] md:w-[300px] hover:shadow-xl hover:shadow-slate-500/50 transition-shadow duration-300'
          >
            <div className='w-full overflow-hidden rounded-t-[25px]'>
              <img
                src={teacher.img}
                alt={teacher.name}
                className='w-full h-full rounded-t-[25px] transform hover:translate-y-[-10px] transition-transform duration-300'
              />
            </div>
            <div className='text-center my-6'>
              <h4>{teacher.name}</h4>
              <p>{teacher.title}</p>
            </div>
            <div className='absolute bottom-0 left-0 right-0 h-[8px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </div>
        ))}
      </div>
      <div className='text-center mt-8'>
        <button className='bg-blue-500 w-[90%] md:w-[12%] text-white py-3 px-5 rounded hover:bg-blue-600 transition-colors'>
          See All Instructors
        </button>
      </div>
    </section>
  );
};

export default Instructors;
