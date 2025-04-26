import React from "react";
import useAddProductForm from "../../hooks/useAddProductForm";
import { IAddProductForm } from "../../types/servers";
import { addProduct } from "../../services/api";
import { alertBox } from "../../utils/swal";

function AddProduct() {
  const { errors, handleSubmit, register , reset } = useAddProductForm();

  const addProductHandler = (data :IAddProductForm )=>{
    const newProduct = {
      title: data.nameProduct,
      price: Number(data.priceProduct),
      count: Number(data.countProduct),
      img: data.imageProduct,
      popularity: Number(data.popularityProduct),
      sale: Boolean(data.saleProduct),
      colors: data.colorProduct,
      description: data.descProduct,
      url: "headset",
      categoryId: 1,
    };

    addProduct(newProduct).then(() => {
      alertBox("دوره با موفقیت اضافه شد", "success");
      reset({})
    }).catch(error => {
      alertBox("خطا در افزودن محصول", "error");
      console.log(error);
    })


  }

  return (
    <div className="mt-5">
      <h2 className=" text-neutral-900 dark:text-neutral-50 font-bold text-2xl">
        افزودن محصول جدید :{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mt-6">
        <div className="">
          <input
            {...register("nameProduct")}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="اسم محصول را بنویسید ..."
          />
          {errors?.nameProduct && <p>{errors.nameProduct.message}</p>}
        </div>
        <div className="">
          <input
            {...register("priceProduct", { valueAsNumber: true })}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="number"
            placeholder="قیمت محصول را بنویسید ..."
          />
          {errors?.priceProduct && <p>{errors.priceProduct.message}</p>}
        </div>
        <div className="">
          <input
            {...register("countProduct", { valueAsNumber: true })}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="number"
            placeholder="موجودی محصول را بنویسید ..."
          />
          {errors?.countProduct && <p>{errors.countProduct.message}</p>}
        </div>
        <div className="">
          <input
            {...register("imageProduct")}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="آدرس عکس محصول را بنویسید ..."
          />
          {errors?.imageProduct && <p>{errors.imageProduct.message}</p>}
        </div>
        <div className="">
          <input
            {...register("popularityProduct", { valueAsNumber: true })}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="number"
            placeholder="میزان محبوبیت محصول را بنویسید ..."
          />
          {errors?.popularityProduct && (
            <p>{errors.popularityProduct.message}</p>
          )}
        </div>
        <div className="">
          <input
            {...register("saleProduct", { valueAsNumber: true })}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="number"
            placeholder="میزان فروش محصول را بنویسید ..."
          />
          {errors?.saleProduct && <p>{errors.saleProduct.message}</p>}
        </div>
        <div className="">
          <input
            {...register("colorProduct", { valueAsNumber: true })}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="number"
            placeholder="تعداد رنگبندی محصول را بنویسید ..."
          />
          {errors?.colorProduct && <p>{errors.colorProduct.message}</p>}
        </div>
        <div className="">
          <input
            {...register("descProduct")}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="توضیحات محصول را بنویسید ..."
          />
          {errors?.descProduct && <p>{errors.descProduct.message}</p>}
        </div>
      </div>
      <div
        className="flex items-center justify-center text-center mt-5"
        onClick={handleSubmit(addProductHandler)}
      >
        <a
          href="#"
          className=" py-3 px-8 bg-rose-500 text-neutral-50 rounded-2xl text-xl sm:text-2xl"
        >
          افزودن محصول
        </a>
      </div>
    </div>
  );
}

export default AddProduct;
