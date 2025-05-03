import React, { ComponentProps } from "react";
import { ArrowDown2 } from "iconsax-reactjs";

type TVariant = "success" | "pending" | "cancel"

type TStatusIcon = ComponentProps<"button"> & {
  variant: TVariant;
};

const getIconColor = (variant : TVariant)=>{
  switch(variant){
    case "success" : {
      return "bg-green-100 text-green-600"
    } 
    case "cancel" : {
      return "bg-rose-100 text-rose-600"
    }
    case "pending" : {
      return "bg-yellow-100 text-yellow-600"
    }
  }
}

function StatusIcon({ variant , style , ...reset }: TStatusIcon) {
  return (
    <>
      <button
        {...reset}
        className={`flex items-center justify-around min-w-[130px] px-2 py-1 tracking-tighter rounded-2xl text-sm md:text-base ${getIconColor(variant)} ${style}`}
      > 
        {variant == "success" ? (
          <>
             تحویل شده  
            <ArrowDown2 className=" w-5 h-5  stroke-green-600" />
          </>
        ) : variant === "cancel" ? (
          <>
          لغو شده
          <ArrowDown2 className=" w-5 h-5 stroke-rose-600" />
        </>

        ) : (
          <>
            در حال پیگیری
            <ArrowDown2 className=" w-5 h-5 stroke-yellow-600" />
          </>
        )}
      </button>
    </>
  );
}

export default StatusIcon;
