import { FaArrowRight } from "react-icons/fa";

const Facilities = () => {
  return (
    <div className='mx-[160px] my-[120px]'>
      <p className='text-blue-600 text-lg text-center font-bold'>Our Class</p>
      <h3 className='font-bold text-4xl text-center'>Our Academic Programs</h3>
      <p className='w-[425px] mb-20 text-center mx-auto mt-6'>
        Hephzy-Glory School is a leading academic institution that caters to
        learners of all ages with a diverse range of programs in the nursery,
        primary, and secondary levels. Our programs are designed to provide a
        well-rounded education, equipping students with the knowledge, skills,
        and values to succeed in their academic and personal lives.
      </p>
      <div className='flex flex-col md:flex-row md:flex-wrap items-start justify-center gap-16'>
        {[
          {
            title: "Science Explorers",
            description:
              "Our Science Explorers program is designed to spark students’ curiosity and passion for the natural world. Through hands-on experiments, field trips, and inquiry-based learning, students learn about the key concepts of life, physical, and earth sciences. Our program emphasizes the development of scientific thinking, creativity, and innovation.",
          },
          {
            title: "Social Studies",
            description:
              "Our Social Studies program is designed to provide a comprehensive and interdisciplinary approach that explores the world’s diverse cultures, histories, and social structures. Through critical thinking, research, and inquiry-based learning, students develop an understanding of the interconnectedness of the world. Our program promotes the development of global citizenship and cultural awareness.",
          },
          {
            title: "Language Arts",
            description:
              "Our Language Arts program is designed to develop learners’ communication and literacy skills across the curriculum. This program provides a foundation in English language learning, including reading, writing, speaking, and listening skills. Our approach is student-centered, focusing on the development of critical thinking, creativity, and self-expression.",
          },
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
          <div>
            <div className='w-[300px] h-[550px] p-4'>
              <h4 className='text-4xl font-extrabold my-2 w-[235px] '>
                {item.title}
              </h4>
              <p className='text-lg w-[225px] mt-6'>{item.description}</p>
              <button className='text-blue-500 flex items-center gap-2 mt-3'>
                Learn More <FaArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
