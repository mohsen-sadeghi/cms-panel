import React, { useEffect, useState } from "react";
import { alertBox } from "../../utils/utils";
import EditModal from "../EditModal/EditModal";
import InfoModal from "../InfoModal/InfoModal";
import { Edit, Trash, InfoCircle } from "iconsax-react";
import { deleteModal } from "../../utils/utils";
import Pagination from "../Pagination/Pagination";
import { useParams } from "react-router-dom";
import ActionIcons from "../ActionIcons/ActionIcons";

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [mainProductID, setMainProductID] = useState(null);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowInfoModal, setIsShowInfoModal] = useState(false);

  const [mainProduct, setMainProduct] = useState();

  const [nameProduct, setNameProduct] = useState();
  const [priceProduct, setPriceProduct] = useState();
  const [countProduct, setCountProduct] = useState();
  const [addressImageProduct, setAddressImageProduct] = useState();
  const [popularityProduct, setPopularityProduct] = useState();
  const [saleProduct, setSaleProduct] = useState();
  const [coloringProduct, setColoringProduct] = useState();
  const [captionProduct, setCaptionProduct] = useState();

  const { page } = useParams();

  useEffect(() => {
    getAllCourses();
  }, [page]);

  const getAllCourses = () => {
    fetch(`http://localhost:3000/products?_page=${page}&_per_page=7`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.data);
      });
  };

  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      console.log(res.ok);
      if (!res.ok) throw new Error("There was a problem sending the request");
      alertBox("دوره با موفقیت حذف شد", "success");
      getAllCourses();
    } catch (error) {
      console.error("Error:", error);
      alertBox("دوره حذف نشد", "error");
    }
  };

  const submitEditModal = async () => {
    const editProduct = {
      title: nameProduct,
      price: priceProduct,
      count: countProduct,
      img: addressImageProduct,
      popularity: popularityProduct,
      sale: saleProduct,
      colors: coloringProduct,
      description: captionProduct,
    };

    try {
      const res = await fetch(
        `http://localhost:3000/products/${mainProductID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editProduct),
        }
      );
      
      if (!res.ok) throw new Error("There was a problem sending the request");
      alertBox("محصول با موفقیت تغییر کرد", "success");
      getAllCourses();
    } catch (error) {
      console.log("Error : ", error);
      alertBox("تغییرات صورت نگرفت", "error");
    }

    setIsShowEditModal(false);
  };

  const closeEditModal = () => setIsShowEditModal(false);
  const closeInfoModal = () => setIsShowInfoModal(false);
  const editProductClickHandler = (product) => {
    setNameProduct(product.title);
    setPriceProduct(product.price);
    setCountProduct(product.count);
    setAddressImageProduct(product.img);
    setPopularityProduct(product.popularity);
    setSaleProduct(product.sale);
    setColoringProduct(product.colors);
    setCaptionProduct(product.description);
    setIsShowEditModal(true);
    setMainProductID(product.id);
  };
  const deleteProductClickHandler = (product) => {
    deleteModal("آیا از حذف محصول اطمینان دارید ؟", () => {
      deleteProduct(product.id);
    });
  };
  const InfoProductClickHandler = (product) => {
    setMainProduct(product);
    setIsShowInfoModal(true);
  };

  return (
    <>
      <div className=" mt-5">
        <table className="w-full">
          <tbody className="flex flex-col gap-y-3">
            {products.map((product) => (
              <tr
                className="flex flex-col sm:flex-row items-center justify-around sm:justify-between flex-wrap sm:flex-nowrap gap-x-1 gap-y-1 sm:gap-y-0 px-4 py-1 border border-neutral-300 rounded-2xl"
                key={product.id}
              >
                <td>
                  <img
                    className=" w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]"
                    src={product.img}
                    alt=""
                  />
                </td>
                <td className=" text-neutral-950 dark:text-neutral-50 font-bold text-sm sm:text-base text-right">
                  {product.title}
                </td>
                <td className=" text-rose-500 text-sm sm:text-base">
                  {product.price} تومان
                </td>
                <td className=" text-neutral-950 dark:text-neutral-50 text-sm sm:text-base">
                  تعداد :{" "}
                  <span className=" text-rose-500">{product.count}</span>
                </td>
                <td className="flex gap-x-2 mr-2 md:mr-16 lg:mr-40 xl:mr-60">
                  <ActionIcons
                    onEdit={() => editProductClickHandler(product)}
                    onDelete={() => deleteProductClickHandler(product)}
                    onInfo={() => InfoProductClickHandler(product)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isShowEditModal && (
        <EditModal
          title={"ویرایش محصول"}
          onClose={closeEditModal}
          onSubmit={submitEditModal}
        >
          <ul className="flex flex-col gap-2 mt-3 text-neutral-800 dark:text-rose-50">
            <li className="flex flex-col gap-1">
              <label htmlFor="">نام محصول :</label>
              <input
                value={nameProduct}
                onChange={(e) => setNameProduct(e.target.value)}
                type="text"
                placeholder="نام "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">قیمت محصول :</label>
              <input
                value={priceProduct}
                onChange={(e) => setPriceProduct(e.target.value)}
                type="text"
                placeholder="قیمت "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">موجودی محصول :</label>
              <input
                value={countProduct}
                onChange={(e) => setCountProduct(e.target.value)}
                type="text"
                placeholder="موجودی "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">آدرس عکس محصول :</label>
              <input
                value={addressImageProduct}
                onChange={(e) => setAddressImageProduct(e.target.value)}
                type="text"
                placeholder="آدرس عکس "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor=""> محبوبیت محصول :</label>
              <input
                value={popularityProduct}
                onChange={(e) => setPopularityProduct(e.target.value)}
                type="text"
                placeholder=" محبوبیت "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor=""> میزان فروش محصول :</label>
              <input
                value={saleProduct}
                onChange={(e) => setSaleProduct(e.target.value)}
                type="text"
                placeholder=" میزان فروش "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">رنگبندی محصول :</label>
              <input
                value={coloringProduct}
                onChange={(e) => setColoringProduct(e.target.value)}
                type="text"
                placeholder="رنگبندی محصول"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">توضیحات محصول :</label>
              <textarea
                value={captionProduct}
                onChange={(e) => setCaptionProduct(e.target.value)}
                type="text"
                placeholder="توضیحات محصول"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
          </ul>
        </EditModal>
      )}

      {isShowInfoModal && (
        <InfoModal title={"جزییات محصول"} onClose={closeInfoModal}>
          <table className="mt-3 text-neutral-800 dark:text-rose-50 text-center">
            <thead>
              <tr>
                <th className="px-5">محبوبیت</th>
                <th className="px-5">میزان فروش</th>
                <th className="px-5">رنگبندی</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProduct.popularity}</td>
                <td>{mainProduct.sale}</td>
                <td>{mainProduct.colors}</td>
              </tr>
            </tbody>
          </table>
        </InfoModal>
      )}

      <Pagination
        perPage={7}
        fetchText={"http://localhost:3000/products"}
        url={"/products/"}
        activePage={page}
      />
    </>
  );
}