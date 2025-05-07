import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { getAllProducts } from "../../services/api";
import { IProduct } from "../../types/servers";
import { useCmsContext } from "../../context/CmsContext";
import Pagination from "../Pagination/Pagination";
import { useParams } from "react-router";

function ProductBox() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { refreshData } = useCmsContext();
  const { page } = useParams();

  useEffect(() => {
    getAllProducts(page).then((res) => {
      setProducts(res);
    });
  }, [refreshData, page]);

  return (
    <>
      <div className=" mt-5">
        <table className="w-full">
          <tbody className="flex flex-col gap-y-3">
            {products.map((product) => (
              <Product {...product} key={product.id} />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        fetchText="https://quiver-cute-block.glitch.me/products"
        perPage={7}
        url={"/products/"}
      />
    </>
  );
}

export default ProductBox;
