import React from "react";
import { MdDelete } from "react-icons/md";

const TableRow = ({item, index}) => {
    // console.log(item);
    
  return (
    <tr>
      <th>
        {index+1}
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={item?.image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{item?.name}</div>
            {/* <div className="text-sm opacity-50">United States</div> */}
          </div>
        </div>
      </td>
      <td>
        {item?.quantity}
      </td>
      <td>${item?.price}</td>
      <th>
        <button className="btn btn-ghost text-red-600 text-lg"><MdDelete /></button>
      </th>
    </tr>
  );
};

export default TableRow;
