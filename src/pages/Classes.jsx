import Header from "../components/Header";
import bgImage from "../assets/bg-image.jpg";
import AcademicPrograms from "../containers/classesContainer/AcademicPrograms";
import ExtraPrograms from "../containers/classesContainer/ExtraPrograms";
import ContactUs from "../containers/classesContainer/ContactUs";

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
