import React from "react";
import ReactDOM from "react-dom";
import { CloseCircle } from "iconsax-react";

export default function EditProduct({children , title , onClose , onSubmit }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center ">
      <div className=" bg-white dark:bg-neutral-800 py-5 px-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <h1 className=" text-rose-500 font-bold text-xl">{title}</h1>
          <CloseCircle className=" stroke-rose-500 w-5 h-5 cursor-pointer" onClick={()=>{
            onClose()
          }}/>
        </div>
        {children}

        <button className=" block mx-auto w-20 bg-rose-500 text-white py-1 rounded-lg text-center mt-5" onClick={()=>{
          onSubmit()
        }}>
          ثبت
        </button>
      </div>
    </div>,
    document.body
  );
}