import Header from "../components/Header";
import bgImage from "../assets/bg-image.jpg";
import ContactUsForm from "../contactContainer/ContactUsFrom";
import OurJourney from "../containers/OurJourney";
import OurPrograms from "../containers/OurPrograms";
import Location from "../contactContainer/Location";

const ContactUs = () => {
  return (
    <div>
      <Header title={"Contact Us"} img={bgImage} />
      <ContactUsForm />
      <Location />
      <OurJourney />
      <OurPrograms />
    </div>
  );
};

export default ContactUs;
