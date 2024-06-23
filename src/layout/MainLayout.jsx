import { Outlet } from "react-router-dom";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
