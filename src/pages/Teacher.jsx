import Header from "../components/Header";
import bgImage from "../assets/bg-image.jpg";
import Instructors from "../containers/teachersContainers/MeetTeachers";
import Facilities from "../containers/aboutContainer/Facilities";
import ContactUs from "../containers/classesContainer/ContactUs";
import OurClasses from "../containers/teachersContainers/OurClasses";

const Teacher = () => {
  return (
    <div>
      <Header title='Our Instructors' img={bgImage} />
      <Instructors />
      <Facilities />
      <ContactUs />
      <OurClasses />
    </div>
  );
};

export default Teacher;
