import React from "react";

const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  const active = {
    backgroundColor: "#e89f72",
  };

  return (
    <div className="flex justify-center items-center md:gap-3 md:mt-[65px]">
      {pages.map((page, index) => {
        return (
          <button
            className={`btn bg-[#ffe2d0]`}
            style={page === currentPage ? active : {}}
            onClick={() => setCurrentPage(page)}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;