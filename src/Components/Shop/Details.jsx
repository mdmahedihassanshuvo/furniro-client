import axios from "axios";
import React, { useContext, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { AuthContext } from "../Provider/AuthProvider";

const Details = () => {
  const id = useParams();
  //   console.log(id?.id);
  const { user } = useContext(AuthContext);
  const [products, refetch] = useProducts();
  const [cartItems] = useCart();
  const [disable, setDisable] = useState(false);
  const itemDetails = products.find((product) => product?._id === id?.id);
  // console.log(cartItems);

  const [isSelected1, setIsSelected1] = useState(true);
  const [isSelected2, setIsSelected2] = useState(false);
  const [isSelected3, setIsSelected3] = useState(false);
  const [size, setSize] = useState();
  const [quantity, setquantity] = useState(1);
  // console.log(isSelected1);

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

  const addToCart = (id) => {
    // console.log("clicked", id);
    const addItem = products?.find((item) => item?._id === id);
    const haveItem = cartItems?.find((item) => item?._id === addItem._id);

    if (isSelected1 == true) {
      const selectSize = document.getElementById("btnl").innerText;
      setSize(selectSize);
      console.log(typeof selectSize);
    }
    const addCart = {
      id: addItem?.id,
      _id: addItem?._id,
      category: addItem?.category,
      details: addItem?.details,
      name: addItem?.name,
      ratings: addItem?.ratings,
      user: user?.email,
      price: addItem?.price,
      quantity: quantity,
      image: addItem?.image,
      size: size,
    };
    console.log(addCart);

    if (cartItems?.find((item) => item?._id === haveItem?._id)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This item already exists to your cartlist",
      });
    } else {
      axios
        .post("http://localhost:5000/cart", addCart)
        .then((res) => {
          if (res?.data?.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Add to cart successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setDisable(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

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
              id="btnl"
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
              id="btnxl"
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
              id="btnxs"
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
              <button
                onClick={() => addToCart(itemDetails?._id)}
                className="btn border-2 btn-neutral"
                disabled={disable}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
