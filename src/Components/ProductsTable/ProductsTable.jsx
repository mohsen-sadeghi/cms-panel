import React, { useEffect, useState } from "react";
import EditModal from "../EditModal/EditModal";
import InfoModal from "../InfoModal/InfoModal";
import Pagination from "../Pagination/Pagination";
import ActionIcons from "../ActionIcons/ActionIcons";
import { alertBox } from "../../utils/utils";
import { deleteModal } from "../../utils/utils";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nameProduct: z
    .string()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(3, "حداقل باید 3 کاراکتر باشد"),
  priceProduct: z
    .number()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(3, "حداقل باید 3 کاراکتر باشد"),
  countProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  addressImageProduct: z.string().min(1, "پر کردن این فیلد الزامی است"),
  popularityProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  saleProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  coloringProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  captionProduct: z
    .string()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(3, "حداقل باید 3 کاراکتر باشد"),
});

export default function ProductsTable() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [products, setProducts] = useState([]);
  const [mainProductID, setMainProductID] = useState(null);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowInfoModal, setIsShowInfoModal] = useState(false);

  const [mainProduct, setMainProduct] = useState();

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

  const submitEditModal = async (data) => {
    console.log(errors);
    const editProduct = {
      title: data.nameProduct,
      price: data.priceProduct,
      count: data.countProduct,
      img: data.addressImageProduct,
      popularity: data.popularityProduct,
      sale: data.saleProduct,
      colors: data.coloringProduct,
      description: data.captionProduct,
    };

    console.log(editProduct);

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
    reset({
      nameProduct: product.title,
      priceProduct: product.price,
      countProduct: product.count,
      addressImageProduct: product.img,
      popularityProduct: product.popularity,
      saleProduct: product.sale,
      coloringProduct: product.colors,
      captionProduct: product.description,
    });
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
          onSubmit={handleSubmit(submitEditModal)}
        >
          <ul className="flex flex-col gap-2 mt-3 text-neutral-800 dark:text-rose-50">
            <li className="flex flex-col gap-1">
              <label htmlFor="">نام محصول :</label>
              <input
                {...register("nameProduct")}
                type="text"
                placeholder="نام "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.nameProduct && <p>{errors.nameProduct.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">قیمت محصول :</label>
              <input
                {...register("priceProduct" , { valueAsNumber: true })}
                type="number"
                placeholder="قیمت "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.priceProduct && <p>{errors.priceProduct.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">موجودی محصول :</label>
              <input
                {...register("countProduct", { valueAsNumber: true })}
                type="number"
                placeholder="موجودی "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.countProduct && <p>{errors.countProduct.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">آدرس عکس محصول :</label>
              <input
                {...register("addressImageProduct")}
                type="text"
                placeholder="آدرس عکس "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.addressImageProduct && (
                <p>{errors.addressImageProduct.message}</p>
              )}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor=""> محبوبیت محصول :</label>
              <input
                {...register("popularityProduct" , {valueAsNumber : true})}
                type="number"
                placeholder=" محبوبیت "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.popularityProduct && (
                <p>{errors.popularityProduct.message}</p>
              )}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor=""> میزان فروش محصول :</label>
              <input
                {...register("saleProduct" , { valueAsNumber: true })}
                type="number"
                placeholder=" میزان فروش "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.saleProduct && <p>{errors.saleProduct.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">رنگبندی محصول :</label>
              <input
                {...register("coloringProduct", { valueAsNumber: true })}
                type="number"
                placeholder="رنگبندی محصول"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.coloringProduct && (
                <p>{errors.coloringProduct.message}</p>
              )}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">توضیحات محصول :</label>
              <textarea
                {...register("captionProduct")}
                type="text"
                placeholder="توضیحات محصول"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.captionProduct && <p>{errors.captionProduct.message}</p>}
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
