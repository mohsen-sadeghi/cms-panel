import React from "react";

import { Edit, Trash, InfoCircle } from "iconsax-react";


export default function ActionIcons({ onEdit, onDelete, onInfo }) {
  return (
    <>
      <Edit
        className="stroke-rose-500 w-[18px] h-[18px] sm:w-6 sm:h-6 cursor-pointer"
        onClick={onEdit}
      />
      <Trash
        className="stroke-rose-500 w-[18px] h-[18px] sm:w-6 sm:h-6 cursor-pointer"
        onClick={onDelete}
      />
      <InfoCircle
        className="stroke-rose-500 w-[18px] h-[18px] sm:w-6 sm:h-6 cursor-pointer"
        onClick={onInfo}
      />
    </>
  );
}