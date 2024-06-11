import Stats from "../containers/Stats";
import Header from "../aboutContainer/Header";
import Us from "../aboutContainer/Us";
import Features from "../aboutContainer/Features";
import AboutExpertise from "../aboutContainer/AboutExpertise";
import Facilities from "../aboutContainer/Facilities";
import Testimonials from "../aboutContainer/Testimonials";

const AboutUs = () => {
  return (
    <div className='mt-[70px]'>
      <Header />
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
