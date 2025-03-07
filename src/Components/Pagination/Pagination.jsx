import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pagination({perPage , fetchText , url , activePage}) {
  const [paginateNumber , setPaginateNumber] = useState(0)

  useEffect(()=>{
    calculateTheNumberOfPagination();
  } , [])

  const calculateTheNumberOfPagination = async ()=>{
    try{
      const res = await fetch(`${fetchText}`)
      const data = await res.json()
      if (!res.ok) throw new Error("There was a problem sending the request");
      console.log(Math.ceil(data.length / perPage));
      setPaginateNumber(Math.ceil(data.length / perPage))
    }catch(error){
      console.log("Error" , error);
    }
  }


  return (
    <ul className=" flex items-center justify-center gap-x-2 mt-4 text-lg font-bold">
      {paginateNumber > 1 && Array.from({ length: paginateNumber }, (_, i) => (
        <li key={i}>
          <Link
            to={`${url}${i + 1}`}
            className={i + 1 == activePage ? "paginate active" : "paginate"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
}