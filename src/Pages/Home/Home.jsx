import React from "react";
import Banner from "../../Components/Home/Banner";
import Products from "../../Components/Home/Products";
import Slider from "../../Components/Home/Slider";

const Home = () => {
  return (
    <div className="mx-auto">
      <Banner />
      <Products />
      <Slider/>
    </div>
  );
};

export default Home;
