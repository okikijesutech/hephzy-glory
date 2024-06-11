import Header from "../components/Header";
import bgImage from "../assets/bg-image.jpg";
import Faqs from "../containers/Faqs";
import OurJourney from "../containers/OurJourney";
import Expert from "../containers/Expert";
import HowItWorks from "../faqContainer/HowItWorks";

const Faq = () => {
  return (
    <div>
      <Header title={"Frequently Asked Question"} img={bgImage} />
      <Faqs />
      <HowItWorks />
      <OurJourney />
      <Expert />
    </div>
  );
};

export default Faq;
