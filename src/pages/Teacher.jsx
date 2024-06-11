import Header from "../components/Header";
import bgImage from "../assets/bg-image.jpg";
import Instructors from "../teachersContainers/MeetTeachers";
import Facilities from "../aboutContainer/Facilities";
import ContactUs from "../classesContainer/ContactUs";
import OurClasses from "../teachersContainers/OurClasses";

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
