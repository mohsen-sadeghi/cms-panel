import React, { useEffect } from "react";
import { IOrder } from "../../types/servers";
import StatusIcon from "../StatusIcon/StatusIcon";
import ActionIcons from "../ActionIcons/ActionIcons";
import { useCmsContext } from "../../context/CmsContext";
import { deleteOrder } from "../../services/api";
import InfoModal from "../InfoModal/InfoModal";
import EditModal from "../EditModal/EditModal";
import useEditOrderForm from "../../hooks/useEditOrderForm";
import { IOrderForm } from "../../types/servers";
import { editOrderHandle } from "../../services/api";

function OrderBox(props: IOrder) {
  const {
    handleDeleteItem,
    isShowInfoModal,
    closeInfoModal,
    showInfoModal,
    selectedItem,
    isShowEditModal,
    showEditModal,
    closeEditModal,
    setRefreshData
  } = useCmsContext();

  const { errors, handleSubmit, register, reset } = useEditOrderForm();

  useEffect(() => {
    if (isShowEditModal && selectedItem && "location" in selectedItem) {
      reset({
        nameOrder: selectedItem.name,
        locationOrder: selectedItem.location,
        countOrder: selectedItem.count,
        statusOrder: selectedItem.status,
      });
    }
  }, [isShowEditModal, selectedItem]);

  const submitEditModal = (data: IOrderForm) => {
    console.log(data);

    const newOrder = {
      id: selectedItem?.id,
      title: selectedItem?.title,
      src: selectedItem?.src,
      price: selectedItem?.price,
      userName: selectedItem?.userName,
      name: data.nameOrder, 
      location: data.locationOrder,
      count: data.countOrder,
      status: data.statusOrder,
    };

    console.log(newOrder);

    editOrderHandle(selectedItem?.id , newOrder).then(() => {
        closeEditModal()
        setRefreshData(prevData => !prevData)
    }).catch(error => console.log(error))
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center flex-wrap md:flex-row md:justify-between w-full  border border-neutral-300 px-5 py-3 rounded-2xl gap-4 md:mb-2 md:gap-0">
        <div className=" flex flex-col items-center justify-center md:justify-normal md:flex-row w-full md:w-auto gap-3 md:gap-x-5 text-md md:text-base font-medium text-center md:text-center">
          <img
            src={props.src}
            alt=""
            className="w-14 md:w-[72px] h-14 md:h-[72px] bg-center bg-cover rounded-2xl"
          />
          <div className=" my-3 flex items-center flex-col md:flex-row gap-y-1 md:gap-4 md:mr-3 ">
            <span className="">{props.title}</span>
            <span className=" text-rose-500">{props.price} تومان</span>
            <span>{props.userName}</span>
            <StatusIcon variant={props.status} />
          </div>
        </div>
        <div className="flex items-center justify-center md:flex-row w-full md:w-auto gap-x-2">
          <ActionIcons
            onDelete={() => handleDeleteItem(Number(props.id), deleteOrder)}
            onInfo={() => showInfoModal(props)}
            onEdit={() => showEditModal(props)}
          />
        </div>
      </div>

      {isShowInfoModal && (
        <InfoModal title={""} onClose={closeInfoModal}>
          <table className="mt-3 text-neutral-800 dark:text-rose-50 text-center">
            <thead>
              <tr>
                <th className="px-5">اسم</th>
                <th className="px-5">آدرس</th>
                <th className="px-5">میزان خرید</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedItem?.name}</td>
                <td>{selectedItem?.location}</td>
                <td>{selectedItem?.count}عدد</td>
              </tr>
            </tbody>
          </table>
        </InfoModal>
      )}

      {isShowEditModal && (
        <EditModal
          onClose={closeEditModal}
          onSubmit={handleSubmit(submitEditModal)}
          title="ویرایش سفارش"
        >
          <ul className="grid grid-cols-2 gap-2 mt-3 text-neutral-800 dark:text-rose-50">
            <li className="flex flex-col gap-1">
              <label htmlFor="">نام سفارش دهنده :</label>
              <input
                {...register("nameOrder")}
                type="text"
                placeholder="نام "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.nameOrder && <p>{errors.nameOrder.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor=""> لوکیشن :</label>
              <input
                {...register("locationOrder")}
                type="text"
                placeholder="لوکیشن "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.locationOrder && <p>{errors.locationOrder.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor=""> تعداد سفارش :</label>
              <input
                {...register("countOrder", { valueAsNumber: true })}
                type="number"
                placeholder="موجودی "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.countOrder && <p>{errors.countOrder.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor=""> وضعیت :</label>
              <select
                {...register("statusOrder")}
                className="outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              >
                <option value="success">تحویل شده</option>
                <option value="pending">در حال پیگیری</option>
                <option value="cancel">سفارش لغو شده</option>
              </select>
              {errors?.statusOrder && <p>{errors.statusOrder.message}</p>}
            </li>
          </ul>
        </EditModal>
      )}
    </>
  );
}

export default OrderBox;
