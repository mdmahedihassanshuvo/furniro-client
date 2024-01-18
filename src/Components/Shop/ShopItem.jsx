import React from "react";
import useProducts from "../../Hooks/useProducts";
import Cart from "../Shared/Cart";

const ShopItem = () => {
  const [products] = useProducts();
  return (
    <div className="grid grid-cols-4 md:gap-5 md:mt-[65px]">
      {products?.map((product) => (
        <Cart product={product} key={product?.id} />
      ))}
    </div>
  );
};

export default ShopItem;
