import React from "react";
import Common from "./Common";
import image from "../images/img2.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome To About Page"
        imgSrc={image}
        visit="/contact"
        btnName="Contact Now"
      />
    </>
  );
};

export default About;
