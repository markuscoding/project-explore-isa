import React from "react";
import Founders from "../AboutPage/Founders";
import Motivation from "../AboutPage/Motivation";
import Navbar from "../Navbar";
import OurFuture from "../AboutPage/OurFuture";
import WhoWeAre from "../AboutPage/WhoWeAre";

const About = () => {
  return (
    <div>
      <Navbar />
      <Motivation />
      <WhoWeAre />
      <OurFuture />
      <Founders />
    </div>
  );
};

export default About;
