import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const Details = () => {
  const id = useParams();
  //   console.log(id?.id);
  const [products, refetch] = useProducts();
  const itemDetails = products.find((product) => product?._id === id?.id);
  //   console.log(itemDetails);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [quantity, setquantity] = useState(1);
  const handleButtonClick1 = () => {
    setIsSelected1(!isSelected1);
    setIsSelected2(false);
    setIsSelected3(false);
    // console.log(event.target.innerText);
  };
  const handleButtonClick2 = () => {
    setIsSelected2(!isSelected2);
    setIsSelected1(false);
    setIsSelected3(false);
  };
  const handleButtonClick3 = () => {
    setIsSelected3(!isSelected3);
    setIsSelected1(false);
    setIsSelected2(false);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setquantity(quantity + 1);
  };

  const headLine = "Home > Shop >";

  return (
    <div className="">
      <div className="flex items-center md:gap-4 bg-[#ffe2d0] w-full md:h-[70px] md:px-[100px]">
        <p className="text-slate-400 ">{headLine}</p>
        <p className="font-medium">{itemDetails?.name}</p>
      </div>
      <div className="flex justify-center items-center md:gap-10 md:my-[40px]">
        <div>
          <img src={itemDetails?.image} alt="" />
        </div>
        <div className="space-y-3">
          <h2 className="text-4xl font-normal">{itemDetails?.name}</h2>
          <p className="text-base text-slate-400">${itemDetails?.price}</p>
          <div className="flex items-center md:gap-3">
            <Rating
              className="text-yellow-500"
              placeholderRating={itemDetails?.ratings}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            />
            |<p className="text-base text-slate-400">Customer Reviews</p>
          </div>
          <p>{itemDetails?.details}</p>
          <p>size</p>
          <div className="flex md:gap-2">
            <button
              onClick={handleButtonClick1}
              className="btn"
              style={{
                backgroundColor: isSelected1 ? "#e89f72" : "#f9f1e7",
                color: isSelected1 ? "white" : "black",
              }}
            >
              {isSelected1 ? "L" : "L"}
            </button>
            <button
              onClick={handleButtonClick2}
              className="btn"
              style={{
                backgroundColor: isSelected2 ? "#e89f72" : "#f9f1e7",
                color: isSelected2 ? "white" : "black",
              }}
            >
              {isSelected2 ? "XL" : "XL"}
            </button>
            <button
              onClick={handleButtonClick3}
              className="btn"
              style={{
                backgroundColor: isSelected3 ? "#e89f72" : "#f9f1e7",
                color: isSelected3 ? "white" : "black",
              }}
            >
              {isSelected3 ? "XS" : "XS"}
            </button>
          </div>
          <div className="flex items-center md:gap-5">
            <div className="flex items-center md:gap-2 border">
              <button onClick={decreaseQuantity} className="p-2">
                -
              </button>
              <p>{quantity}</p>
              <button onClick={increaseQuantity} className="p-2">
                +
              </button>
            </div>
            <div>
              <button className="btn border-2 btn-neutral">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
