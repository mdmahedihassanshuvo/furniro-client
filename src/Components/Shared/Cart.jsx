import React from "react";

const Cart = ({product}) => {
  return (
    <div key={product?.id} className="md:mx-auto bg-[#f4f5f7]">
      <img src={product?.image} alt="" />
      <div className="p-2">
        <h2 className="text-2xl font-semibold">{product?.name}</h2>
        <p className="text-xs font-mono">{product?.category}</p>
        <p className="text-base font-semibold">${product?.price}</p>
      </div>
    </div>
  );
};

export default Cart;
