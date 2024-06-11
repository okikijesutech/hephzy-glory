import Header from "../components/Header";
import bgImage from "../assets/bg-image.jpg";
import AcademicPrograms from "../classesContainer/AcademicPrograms";
import ExtraPrograms from "../classesContainer/ExtraPrograms";
import ContactUs from "../classesContainer/ContactUs";

const Classes = () => {
  return (
    <div>
      <Header title={"Our Classes"} img={bgImage} />
      <AcademicPrograms />
      <ExtraPrograms />
      <ContactUs />
    </div>
  );
};

export default Classes;
