import React from "react";

const HowItWorks = () => {
  return (
    <div className='my-[120px]'>
      <p className='text-blue-600 text-center text-lg font-bold '>
        How Its Work
      </p>
      <h3 className='font-bold text-center text-3xl md:text-5xl mt-6 mb-12'>
        Our Learning Process
      </h3>
      <div className='flex flex-col md:flex-row items-start justify-center gap-10 mx-[15px] md:mx-0'>
        {[
          {
            num: "01",
            title: "Assessing Student Needs",
            description:
              "We identify the needs of each student, so they can develop at their own pace, building on their strengths and improving their weaknesses.",
          },
          {
            num: "02",
            title: "Personalized Learning",
            description:
              "We personalize the learning experience, providing every student with a tailored approach, ensuring they understand the content and achieve their full potential.",
          },
          {
            num: "03",
            title: "Expert Instruction",
            description:
              "Our team of highly qualified and experienced teachers provide expert instruction, delivering the curriculum in a way that is accessible and enjoyable to students.",
          },
          {
            num: "04",
            title: "Active Learning",
            description:
              "We promote active learning, encouraging students to participate and collaborate, fostering an environment where they can support, learn from, and challenge each other.",
          },
        ].map((item) => (
          <div>
            <div className='p-4 bg-blue-700 w-[150px] md:w-[65px] h-[65px] text-left md:text-center rounded-3xl md:rounded-lg text-white text-2xl font-bold mb-10'>
              {item.num}
            </div>
            <h4 className='text-blue-600 text-2xl md:text-3xl font-bold w-[350px] md:w-[250px] mb-3 md:mb-1'>
              {item.title}
            </h4>
            <p className='w-[450px] md:w-[225px] font-extralight texmd md:text-lg'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
