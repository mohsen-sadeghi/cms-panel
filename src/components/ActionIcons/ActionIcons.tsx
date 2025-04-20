import React from 'react'
import { Edit, Trash, InfoCircle } from "iconsax-reactjs";

interface IActionIcons {
    onEdit : () => void ; 
    onDelete : () => void ; 
    onInfo : () => void ; 
}


function ActionIcons({onEdit , onDelete , onInfo} : IActionIcons) {
  return (
        <>
          <Edit
            className="stroke-rose-500 text-rose-500 w-[18px] h-[18px] sm:w-6 sm:h-6 cursor-pointer"
            onClick={onEdit}
          />
          <Trash
            className="stroke-rose-500 text-rose-500 w-[18px] h-[18px] sm:w-6 sm:h-6 cursor-pointer"
            onClick={onDelete}
          />
          <InfoCircle
            className="stroke-rose-500 text-rose-500 w-[18px] h-[18px] sm:w-6 sm:h-6 cursor-pointer"
            onClick={onInfo}
          />
        </>
  )
}

export default ActionIcons