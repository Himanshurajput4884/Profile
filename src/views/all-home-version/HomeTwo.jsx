import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderTwo";
import About from "../../components/about/AboutTwo";
import Calculator from "../../components/Calculator/Calculator";
import CallToAction from "../../components/calltoactions/CallToActionTwo";
import Footer from "../../components/footer/Footer";
import Temperature from "../../components/Temperature";

const HomeTwo = () => {
  return (
    <div className="home-two">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      {/* <Portfolio /> */}
      {/* End Portfolio Section */}

      {/* <Skills /> */}
      {/* End Skills Section */}

      {/* <News /> */}
      <Calculator />
      {/* End Blog Section */}

      <Temperature />

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeTwo;
