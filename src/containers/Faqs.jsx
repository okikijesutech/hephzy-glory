import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faqs = () => {
  const [isOpen, setIsOpen] = useState({
    admissionProcess: true,
    schoolHours: true,
    extracurricularActivities: false,
    teacherToStudentRatio: false,
    specialEducationalNeeds: false,
    disciplineManagement: false,
  });
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (key) => {
    setIsOpen((prevState) => ({
      ...Object.fromEntries(
        Object.keys(prevState).map((k) => [
          k,
          k === key ? !prevState[k] : false,
        ])
      ),
      [key]: !prevState[key],
    }));
    setActiveItem(activeItem === key ? null : key);
  };
  return (
    <section className='my-[200px]'>
      <p className='text-center mb-6 text-blue-700'>FAQs</p>
      <h3 className='text-center font-extrabold text-2xl'>
        Frequently Asked Questions
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-64 my-10'>
        {[
          {
            key: "admissionProcess",
            question: "What is the admission process for Hephzy-Glory School?",
            answer:
              "To enroll your child at Hephzy-Glory School, please visit our school office to complete an application form and submit the necessary documents. We will schedule a placement test and interview with the student and their parents/guardians to determine the best fit for their academic level and needs.",
          },
          {
            key: "schoolHours",
            question: "What are the school hours?",
            answer:
              " The school operates from 7:30 AM to 3:00 PM, Monday to Friday. We also offer after-school care for students who need supervision beyond regular school hours.",
          },
          {
            key: "extracurricularActivities",
            question:
              "What extracurricular activities does Hephzy-Glory School offer?",
            answer:
              " We offer a range of extracurricular activities, including sports, music, drama, art, and clubs for science, technology, and language learning. Our activities are designed to enhance the students’ learning experience and promote their social and personal development.",
          },
          {
            key: "teacherToStudentRatio",
            question:
              "What is the teacher-to-student ratio at Hephzy-Glory School?",
            answer:
              "We maintain a low teacher-to-student ratio of 1:15 in our classrooms, ensuring personalized attention and support for each student and promoting a more effective and engaging learning environment.",
          },
          {
            key: "specialEducationalNeeds",
            question:
              " What support do you offer for students with special educational needs?",
            answer:
              " We provide customized support for students with special educational needs, including individualized learning plans, specialized instruction, and accommodations to ensure their full participation and success in the classroom.",
          },
          {
            key: "disciplineManagement",
            question:
              "What is the school's approach to discipline and behavior management?",
            answer:
              "We promote a positive and respectful learning environment, with a focus on teaching social and emotional skills alongside academic content. Our discipline and behavior management approach is based on restorative practices, emphasizing accountability, empathy, and problem-solving.",
          },
        ].map(({ key, question, answer }) => (
          <div key={key}>
            <button
              className={`flex items-center justify-between w-full focus:outline-none ${
                activeItem === key ? "text-blue-700" : ""
              }`}
              onClick={() => handleClick(key)}
            >
              <h4 className='font-extrabold text-3xl'>{question}</h4>
              {isOpen[key] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen[key] && (
              <p className='leading-relaxing text-md mt-2'>{answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
