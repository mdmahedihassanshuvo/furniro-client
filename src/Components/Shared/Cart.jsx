import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = ({ product }) => {
  const [products] = useProducts();
  const [cartItems, refetch] = useCart();
  const addToCart = (id) => {
    // console.log("clicked", id, products);
    const addItem = products?.filter((item) => item?._id === id);
    const haveItem = cartItems?.filter((item) => item?._id === addItem[0]?._id);
    // console.log(haveItem);
    if (cartItems?.find((item) => item?._id !== haveItem[0]?._id)) {
      axios
        .post("http://localhost:5000/cart", addItem[0])
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add to cart successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => console.log(err));
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This item already exists",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    // console.log(addItem[0]._id);
  };
  return (
    <div key={product?.id} className="md:mx-auto bg-[#f4f5f7] relative">
      <img src={product?.image} alt="" />
      <div className="p-2">
        <h2 className="text-2xl font-semibold">{product?.name}</h2>
        <p className="text-xs font-mono">{product?.category}</p>
        <p className="text-base font-semibold">${product?.price}</p>
      </div>
      <div
        id="hover"
        className="absolute top-0 flex flex-col md:gap-3 justify-center items-center w-[285px] h-[389px] text-white bg-black opacity-0 hover:opacity-80 transition-transform hover:scale-105 "
      >
        <button
          onClick={() => addToCart(product?._id)}
          className="text-[#e89f72] bg-white p-2 hover:text-black font-medium"
        >
          Add to Cart
        </button>
        <Link
        to={`/details/${product?._id}`}
          className="text-[#e89f72] bg-white p-2 hover:text-black font-medium"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Cart;
