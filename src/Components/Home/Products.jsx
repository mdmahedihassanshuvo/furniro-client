import React, { useState } from "react";
import useProducts from "../../Hooks/useProducts";

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
    <div className="md:mt-[100px]">
      <h2 className="text-center text-4xl font-bold md:mb-[30px]">
        Our Products
      </h2>
      <div className="grid grid-cols-4 md:gap-5">
        {showAll
          ? products?.map((product) => (
              <div key={product?.id} className="md:mx-auto bg-[#f4f5f7]">
                <img src={product?.image} alt="" />
                <div className="p-2">
                  <h2 className="text-2xl font-semibold">{product?.name}</h2>
                  <p className="text-xs font-mono">{product?.category}</p>
                  <p className="text-base font-semibold">${product?.price}</p>
                </div>
              </div>
            ))
          : products?.slice(0, 8)?.map((product) => (
              <div className="md:mx-auto bg-[#f4f5f7]">
                <img src={product?.image} alt="" />
                <div className="p-2">
                  <h2 className="text-2xl font-semibold">{product?.name}</h2>
                  <p className="text-xs font-mono">{product?.category}</p>
                  <p className="text-base font-semibold">${product?.price}</p>
                </div>
              </div>
            ))}
      </div>
      {!showAll ? (
        <div className="text-center md:mt-[30px]">
          <button
            onClick={handleShowMore}
            className="text-center btn bg-white text-[#e89f72] border-[#e89f72] rounded-none"
          >
            Show More
          </button>
        </div>
      ) : (
        <div className="text-center md:mt-[30px]">
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
