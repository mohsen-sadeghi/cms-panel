import React, { useEffect } from "react";
import { IUser } from "../../types/servers";
import ActionIcons from "../ActionIcons/ActionIcons";
import { useCmsContext } from "../../context/CmsContext";
import { deleteUser } from "../../services/api";
import InfoModal from "../InfoModal/InfoModal";
import EditModal from "../EditModal/EditModal";
import useEditUserForm from "../../hooks/useEditUserForm";
import { editUserHandle } from "../../services/api";

function User(props: IUser) {
  const {
    handleDeleteItem,
    selectedItem,
    isShowInfoModal,
    showInfoModal,
    closeInfoModal,
    isShowEditModal,
    closeEditModal,
    showEditModal,
    setRefreshData
  } = useCmsContext();

  const { errors, handleSubmit, register, reset } = useEditUserForm();

  useEffect(() => {
    if (isShowEditModal && selectedItem && "firstname" in selectedItem) {
      reset({
        userFirstName: selectedItem.firstname,
        userLastName: selectedItem.lastname,
        username: selectedItem.username,
        userPassword: selectedItem.password,
        userPhone: selectedItem.phone,
        userCity: selectedItem.city,
        userEmail: selectedItem.email,
        userAddress: selectedItem.address,
        userScore: selectedItem.score,
      });
    }
  }, [isShowEditModal, selectedItem]);

  const submitEditModal = (data) => {
    const newUserInfo = {
      firstname: data.userFirstName,
      lastname: data.userLastName,
      username: data.username,
      password: data.userPassword,
      phone: data.userPhone,
      city: data.userCity,
      email: data.userEmail,
      address: data.userAddress,
      score: data.userScore,
    };

    editUserHandle(selectedItem?.id , newUserInfo).then( data => {
        closeEditModal()
        setRefreshData(prevData => !prevData)
      }).catch(error => console.log(error))
  };

  return (
    <>
      <div
        key={props.id}
        className="flex flex-col sm:flex-row items-center justify-center sm:justify-between flex-wrap border border-neutral-300 px-5 py-3 rounded-2xl gap-4 sm:mb-2 sm:gap-0"
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-x-5 text-sm md:text-base font-medium text-center sm:text-center">
          <img
            src="/src/assets/img/woman.png"
            alt=""
            className="w-14 md:w-[72px] h-14 md:h-[72px] bg-center bg-cover rounded-2xl"
          />
          <div className="flex flex-col sm:flex-row gap-y-1 sm:gap-4">
            <span>{props.firstname}</span>
            <span>{props.email}</span>
            <span>{props.phone}</span>
            <span>{props.city}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <ActionIcons
            onDelete={() => handleDeleteItem(Number(props.id), deleteUser)}
            onInfo={() => showInfoModal(props)}
            onEdit={() => showEditModal(props)}
          />
        </div>
      </div>

      {isShowInfoModal && (
        <InfoModal onClose={closeInfoModal} title="جزییات کاربر">
          <table className="mt-3 text-neutral-800 dark:text-rose-50 text-center">
            <thead>
              <tr>
                <th className="px-5">تلفن</th>
                <th className="px-5">پسوورد</th>
                <th className="px-5">میزان خرید</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedItem?.phone}</td>
                <td>{selectedItem?.password}</td>
                <td>{selectedItem?.buy || 0}تومان</td>
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
          <ul className=" grid grid-cols-2  gap-2 mt-3 text-neutral-800 dark:text-rose-50">
            <li className="flex flex-col gap-1">
              <label htmlFor="">اسم : </label>
              <input
                {...register("userFirstName")}
                type="text"
                placeholder="نام "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.userFirstName && <p>{errors.userFirstName.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">فامیل : </label>
              <input
                {...register("userLastName")}
                type="text"
                placeholder="فامیل"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.userLastName && <p>{errors.userLastName.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">username : </label>
              <input
                {...register("username")}
                type="text"
                placeholder="username "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.username && <p>{errors.username.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">رمز عبور : </label>
              <input
                {...register("userPassword")}
                type="text"
                placeholder="Passsword"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.userPassword && <p>{errors.userPassword.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">تلفن : </label>
              <input
                {...register("userPhone", { valueAsNumber: true })}
                type="number"
                placeholder="تلفن"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.userPhone && <p>{errors.userPhone.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">شهر : </label>
              <input
                {...register("userCity")}
                type="text"
                placeholder="شهر کاربر"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.userCity && <p>{errors.userCity.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">محل سکونت : </label>
              <input
                {...register("userAddress")}
                type="text"
                placeholder="محل سکونت کاربر"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.userAddress && <p>{errors.userAddress.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">آدرس ایمیل : </label>
              <input
                {...register("userEmail")}
                type="text"
                placeholder="ایمیل کاربر"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.userEmail && <p>{errors.userEmail.message}</p>}
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">نمره کاربر : </label>
              <input
                {...register("userScore", { valueAsNumber: true })}
                type="number"
                placeholder="نمره"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
              {errors?.userScore && <p>{errors.userScore.message}</p>}
            </li>
          </ul>
        </EditModal>
      )}
    </>
  );
}

export default User;
