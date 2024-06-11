import Stats from "../containers/Stats";
import Header from "../components/Header";
import Us from "../aboutContainer/Us";
import Features from "../aboutContainer/Features";
import bgImage from "../assets/bg-image.jpg";
import AboutExpertise from "../aboutContainer/AboutExpertise";
import Facilities from "../aboutContainer/Facilities";
import Testimonials from "../aboutContainer/Testimonials";

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
