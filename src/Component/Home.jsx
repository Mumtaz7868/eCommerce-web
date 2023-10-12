import React from "react";
import Common from "./Common";
import image from "../images/img3.jpg";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgSrc={image}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
