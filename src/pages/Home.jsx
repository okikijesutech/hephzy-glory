import Faq from "../containers/Faq";
import Instructors from "../containers/Instructors";
import OurJourney from "../containers/OurJourney";
import WhyChooseUs from "../containers/WhyChooseUs";
import OurPrograms from "../containers/OurPrograms";
import Stats from "../containers/Stats";
import About from "../containers/About";
import Support from "../containers/Support";
import Header from "../containers/Header";
import ContactUs from "../containers/ContactUs";
import Expert from "../containers/Expert";

const Home = () => {
  return (
    <div className='mt-[70px]'>
      <Header />
      <Support />
      <About />
      <Stats />
      <OurPrograms />
      <WhyChooseUs />
      <OurJourney />
      <Instructors />
      <Faq />
      <ContactUs />
      <Expert />
    </div>
  );
};

export default Home;
