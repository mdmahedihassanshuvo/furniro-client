import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";
import Cart from "../Shared/Cart";

const Products = () => {
  const [products, refetch] = useProducts();
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState(false);
  console.log(products);

  const handleShowMore = () => {
    setShowAll(true);
  };
  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="md:mt-[100px] mt-5">
      <h2 className="text-center md:text-4xl text-3xl font-bold md:mb-[30px] mb-3">
        Our Products
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3 md:mx-0 mx-4">
        {showAll
          ? products?.map((product) => (
              <Cart product={product} key={product?.id} />
            ))
          : products
              ?.slice(0, 8)
              ?.map((product) => <Cart product={product} key={product?.id} />)}
      </div>
      {!showAll ? (
        <div className="text-center md:mt-[30px] mt-[10px] md:mb-0 mb-[15px]">
          <button
            onClick={handleShowMore}
            className="text-center btn bg-white text-[#e89f72] border-[#e89f72] rounded-none"
          >
            Show More
          </button>
        </div>
      ) : (
        <div className="text-center md:mt-[30px] mt-[10px] md:mb-0 mb-[15px]">
          <button
            onClick={handleShowLess}
            className="text-center btn bg-white text-[#e89f72] border-[#e89f72] rounded-none"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
