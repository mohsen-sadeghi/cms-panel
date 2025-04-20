import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { getAllProducts } from "../../services/api";
import { IProduct } from "../../types/servers";


function ProductBox() {
    const [products , setProducts] = useState<IProduct[]>([])


    useEffect(() =>{
        getAllProducts().then(res => {
            setProducts(res)
        })
    } , [])


  return (
    <>
      <div className=" mt-5">
        <table className="w-full">
          <tbody className="flex flex-col gap-y-3">
            {products.map((product) => (
                <Product {...product} key={product.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductBox;
