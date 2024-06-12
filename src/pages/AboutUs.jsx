import Stats from "../containers/Stats";
import Header from "../components/Header";
import Us from "../containers/aboutContainer/Us";
import Features from "../containers/aboutContainer/Features";
import bgImage from "../assets/bg-image.jpg";
import Facilities from "../containers/aboutContainer/Facilities";
import Testimonials from "../containers/aboutContainer/Testimonials";

const AboutUs = () => {
  return (
    <div>
      <Header title='About Us' img={bgImage} />
      <Us />
      <Features />
      {/* <AboutExpertise /> */}
      <Stats />
      <Facilities />
      <Testimonials />
    </div>
  );
};

export default AboutUs;
