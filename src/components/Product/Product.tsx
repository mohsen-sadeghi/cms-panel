import React from "react";
import ActionIcons from "../ActionIcons/ActionIcons";
import { IProduct } from "../../types/servers";

function Product({id , img , title  , price , count} : IProduct) {
  return (
    <tr
      className="flex flex-col sm:flex-row items-center justify-around sm:justify-between flex-wrap sm:flex-nowrap gap-x-1 gap-y-1 sm:gap-y-0 px-4 py-1 border border-neutral-300 rounded-2xl"
      key={id}
    >
      <td>
        <img
          className=" w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]"
          src={img}
          alt=""
        />
      </td>
      <td className=" text-neutral-950 dark:text-neutral-50 font-bold text-sm sm:text-base text-right">
        {title}
      </td>
      <td className=" text-rose-500 text-sm sm:text-base">
        {price} تومان
      </td>
      <td className=" text-neutral-950 dark:text-neutral-50 text-sm sm:text-base">
        تعداد : <span className=" text-rose-500">{count}</span>
      </td>
      <td className="flex gap-x-2 mr-2 md:mr-16 lg:mr-40 xl:mr-60">
        <ActionIcons
        //   onEdit={() => editProductClickHandler(product)}
        //   onDelete={() => deleteProductClickHandler(product)}
        //   onInfo={() => InfoProductClickHandler(product)}
          onEdit={() => {}}
          onDelete={() => {}}
          onInfo={() => {}}
        />
      </td>
    </tr>
  );
}

export default Product;
