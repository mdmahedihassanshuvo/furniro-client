import React from "react";
import bgImage from "../../assets/images/shop/bg.png";

const ShopBanner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bgImage})`, // Use template literals to include the image variable
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "316px",
  };
  const route = `>`;

  return (
    <div>
      <div
        className="md:w-full flex flex-col justify-center items-center"
        style={bannerStyle}
      >
        <h2 className="text-5xl font-semibold md:mb-2">Shop</h2>
        <p>
          <span className="font-medium">Home</span> {route} Shop
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;
