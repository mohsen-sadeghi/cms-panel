import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

interface IPagination {
    perPage : number , 
    fetchText : string , 
    url : string
}


function Pagination({perPage , fetchText , url} : IPagination) {
  const [paginateNumber , setPaginateNumber] = useState<number>(0)
  const {page} = useParams()

  useEffect(()=>{
    calculateTheNumberOfPagination();
  } , [])

  const calculateTheNumberOfPagination = async ()=>{
    try{
      const res = await fetch(`${fetchText}`)
      const data = await res.json()
      if (!res.ok) throw new Error("There was a problem sending the request");
      setPaginateNumber(Math.ceil(data.length / perPage))
    }catch(error){
      console.log("Error" , error);
    }
  }


  return (
    <ul className=" flex items-center justify-center gap-x-2 mt-4 mb-1 text-lg font-bold">
      {paginateNumber > 1 && Array.from({ length: paginateNumber }, (_, i) => (
        <li key={i}>
          <Link
            to={`${url}${i + 1}`}
            className={i + 1 == page ? "paginate active" : "paginate"}
          >
            {i + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Pagination