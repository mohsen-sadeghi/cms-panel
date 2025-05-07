import React, { useEffect } from "react";

import ActionIcons from "../ActionIcons/ActionIcons";
import { IProduct } from "../../types/servers";
import { useCmsContext } from "../../context/CmsContext";
import { deleteProduct } from "../../services/api";
import InfoModal from "../InfoModal/InfoModal";
import EditModal from "../EditModal/EditModal";
import useProductForm from "../../hooks/useProductForm";
import { IProductForm } from "../../types/servers";
import { editProductHandle } from "../../services/api";

function Product(props: IProduct) {
  const {
    handleDeleteItem,
    isShowInfoModal,
    closeInfoModal,
    selectedItem,
    showInfoModal,
    isShowEditModal,
    closeEditModal,
    showEditModal,
    setRefreshData
  } = useCmsContext();

  const { reset, errors, handleSubmit, register } = useProductForm();

  useEffect(() => {
    if (isShowEditModal && selectedItem && 'popularity' in selectedItem) {
      reset({
        nameProduct: selectedItem.title,
        priceProduct: selectedItem.price,
        countProduct: selectedItem.count,
        addressImageProduct: selectedItem.img,
        popularityProduct: selectedItem.popularity,
        saleProduct: selectedItem.sale,
        coloringProduct: selectedItem.colors,
        captionProduct: selectedItem.description,
      });
    }
  }, [isShowEditModal, selectedItem]);

  const submitEditModal = (data: IProductForm) => {
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


    editProductHandle(selectedItem?.id , editProduct).then( data => {
      closeEditModal()
      setRefreshData(prevData => !prevData)
    }).catch(error => console.log(error))
  };

  return (
    <>
      <tr
        className="flex flex-col sm:flex-row items-center justify-around sm:justify-between flex-wrap sm:flex-nowrap gap-x-1 gap-y-1 sm:gap-y-0 px-4 py-1 border border-neutral-300 rounded-2xl"
        key={props.id}
      >
        <td>
          <img
            className=" w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]"
            src={props.img}
            alt=""
          />
        </td>
        <td className=" text-neutral-950 dark:text-neutral-50 font-bold text-sm sm:text-base text-right">
          {props.title}
        </td>
        <td className=" text-rose-500 text-sm sm:text-base">
          {props.price} تومان
        </td>
        <td className=" text-neutral-950 dark:text-neutral-50 text-sm sm:text-base">
          تعداد : <span className=" text-rose-500">{props.count}</span>
        </td>
        <td className="flex gap-x-2 mr-2 md:mr-16 lg:mr-40 xl:mr-60">
          <ActionIcons
            onEdit={() =>  showEditModal(props)}
            onDelete={() => handleDeleteItem(props.id , deleteProduct)}
            onInfo={() => showInfoModal(props)}
          />
        </td>
      </tr>

      {isShowInfoModal && (
        <InfoModal onClose={closeInfoModal} title="جزییات محصول">
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
                <td>{selectedItem?.popularity}</td>
                <td>{selectedItem?.sale}</td>
                <td>{selectedItem?.colors}</td>
              </tr>
            </tbody>
          </table>
        </InfoModal>
      )}

      {isShowEditModal && (
        <EditModal
          title="ویرایش محصول"
          onClose={closeEditModal}
          onSubmit={handleSubmit(submitEditModal)}
        >
          <ul className="grid grid-cols-2 gap-2 mt-3 text-neutral-800 dark:text-rose-50">
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
                {...register("priceProduct", { valueAsNumber: true })}
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
                {...register("popularityProduct", { valueAsNumber: true })}
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
                {...register("saleProduct", { valueAsNumber: true })}
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
                placeholder="توضیحات محصول"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.captionProduct && <p>{errors.captionProduct.message}</p>}
            </li>
          </ul>
        </EditModal>
      )}
    </>
  );
}

export default Product;
