import { useState } from "react";
import useInView from "../hooks/useInView";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faqs = () => {
  const initialOpenStateSection1 = {
    admissionProcess: true,
    schoolHours: false,
    extracurricularActivities: false,
  };

  const initialOpenStateSection2 = {
    teacherToStudentRatio: true,
    specialEducationalNeeds: false,
    disciplineManagement: false,
  };

  const [isOpenSection1, setIsOpenSection1] = useState(
    initialOpenStateSection1
  );
  const [isOpenSection2, setIsOpenSection2] = useState(
    initialOpenStateSection2
  );
  const [activeItemSection1, setActiveItemSection1] =
    useState("admissionProcess");
  const [activeItemSection2, setActiveItemSection2] = useState(
    "teacherToStudentRatio"
  );

  const [faqRef, inView] = useInView();

  const handleClickSection1 = (key) => {
    setIsOpenSection1((prevState) => ({
      ...Object.fromEntries(
        Object.keys(prevState).map((k) => [
          k,
          k === key ? !prevState[k] : false,
        ])
      ),
      [key]: !prevState[key],
    }));
    setActiveItemSection1(activeItemSection1 === key ? null : key);
  };

  const handleClickSection2 = (key) => {
    setIsOpenSection2((prevState) => ({
      ...Object.fromEntries(
        Object.keys(prevState).map((k) => [
          k,
          k === key ? !prevState[k] : false,
        ])
      ),
      [key]: !prevState[key],
    }));
    setActiveItemSection2(activeItemSection2 === key ? null : key);
  };

  const questionsSection1 = [
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
        "The school operates from 7:30 AM to 3:00 PM, Monday to Friday. We also offer after-school care for students who need supervision beyond regular school hours.",
    },
    {
      key: "extracurricularActivities",
      question:
        "What extracurricular activities does Hephzy-Glory School offer?",
      answer:
        "We offer a range of extracurricular activities, including sports, music, drama, art, and clubs for science, technology, and language learning. Our activities are designed to enhance the students’ learning experience and promote their social and personal development.",
    },
  ];

  const questionsSection2 = [
    {
      key: "teacherToStudentRatio",
      question: "What is the teacher-to-student ratio at Hephzy-Glory School?",
      answer:
        "We maintain a low teacher-to-student ratio of 1:15 in our classrooms, ensuring personalized attention and support for each student and promoting a more effective and engaging learning environment.",
    },
    {
      key: "specialEducationalNeeds",
      question:
        "What support do you offer for students with special educational needs?",
      answer:
        "We provide customized support for students with special educational needs, including individualized learning plans, specialized instruction, and accommodations to ensure their full participation and success in the classroom.",
    },
    {
      key: "disciplineManagement",
      question:
        "What is the school's approach to discipline and behavior management?",
      answer:
        "We promote a positive and respectful learning environment, with a focus on teaching social and emotional skills alongside academic content. Our discipline and behavior management approach is based on restorative practices, emphasizing accountability, empathy, and problem-solving.",
    },
  ];

  return (
    <section ref={faqRef} className='my-[50px] md:my-[200px] px-4'>
      <p className='text-center mb-4 md:mb-6 text-blue-700'>FAQs</p>
      <h3 className='text-center font-extrabold text-xl md:text-2xl'>
        Frequently Asked Questions
      </h3>
      <div className='flex flex-col md:flex-row justify-center mx-2 md:mx-0 items-start md:gap-10'>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.8 }}
          className='flex flex-col w-full md:w-[350px] lg:w-[600px] gap-4 md:gap-6 my-6 md:my-10'
        >
          {questionsSection1.map(({ key, question, answer }) => (
            <div key={key} className='pb-4'>
              <button
                className={`flex items-center justify-between w-full focus:outline-none ${
                  isOpenSection1[key] ? "text-blue-700" : "text-black"
                }`}
                onClick={() => handleClickSection1(key)}
              >
                <h4 className='font-extrabold text-lg md:text-xl'>
                  {question}
                </h4>
                {isOpenSection1[key] ? (
                  <FaChevronUp size={20} md={24} />
                ) : (
                  <FaChevronDown size={20} md={24} />
                )}
              </button>
              {isOpenSection1[key] && (
                <p className='leading-relaxed text-sm md:text-md mt-2'>
                  {answer}
                </p>
              )}
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.8 }}
          className='flex flex-col w-full md:w-[350px] lg:w-[600px] gap-4 md:gap-6 my-6 md:my-10'
        >
          {questionsSection2.map(({ key, question, answer }) => (
            <div key={key} className='pb-4'>
              <button
                className={`flex items-center justify-between w-full focus:outline-none ${
                  isOpenSection2[key] ? "text-blue-700" : "text-black"
                }`}
                onClick={() => handleClickSection2(key)}
              >
                <h4 className='font-extrabold text-lg md:text-xl'>
                  {question}
                </h4>
                {isOpenSection2[key] ? (
                  <FaChevronUp size={20} md={24} />
                ) : (
                  <FaChevronDown size={20} md={24} />
                )}
              </button>
              {isOpenSection2[key] && (
                <p className='leading-relaxed text-sm md:text-md mt-2'>
                  {answer}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;
