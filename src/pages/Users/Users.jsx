import React, { useEffect, useState } from "react";
import ActionIcons from "../../Components/ActionIcons/ActionIcons";
import Pagination from "../../Components/Pagination/Pagination";
import { useParams } from "react-router-dom";
import { deleteModal } from "../../utils/utils";
import { alertBox } from "../../utils/utils";
import InfoModal from "../../Components/InfoModal/InfoModal";
import EditModal from "../../Components/EditModal/EditModal";

export default function Users() {
  const [allComment, setAllComment] = useState([]);
  const [isShowInfoModal, setIsShowInfoModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainComment, setMainComment] = useState();
  const { page } = useParams();

  // info box state
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userScore, setUserScore] = useState("");

  useEffect(() => {
    getAllUsers();
  }, [page]);

  const getAllUsers = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/users?_page=${page}&_per_page=5`
      );
      const responsData = await res.json();
      setAllComment(responsData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductClickHandler = (ID) => {
    deleteModal("ایا از حذف کابر اطمینان دارید ", async () => {
      try {
        const res = await fetch(`http://localhost:3000/users/${ID}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("There was a problem sending the request");
        alertBox("کاربر با موفقیت حذف شد", "success");
        getAllUsers();
      } catch (error) {
        alertBox("کاربر حذف نشد", "errpr");
        console.log(error);
      }
    });
  };

  const showInfoModal = (comment) => {
    setIsShowInfoModal(true);
    setMainComment(comment);
  };

  const closeInfoModal = () => setIsShowInfoModal(false);

  const ShowEditModal = (comment) => {
    setIsShowEditModal(true);
    setMainComment(comment);
    setUserFirstName(comment.firstname);
    setUserLastName(comment.lastname);
    setUserName(comment.username);
    setUserPassword(comment.password);
    setUserPhone(comment.phone);
    setUserCity(comment.city);
    setUserEmail(comment.email);
    setUserAddress(comment.address);
    setUserScore(comment.score);
  };

  const closeEditModal = () => setIsShowEditModal(false);

  const submitEditModal = async () => {
    const newUserInfo = {
      firstname: userFirstName,
      lastname: userLastName,
      username: userName,
      password: userPassword,
      phone: userPhone,
      city: userCity,
      email: userEmail,
      address: userAddress,
      score: userScore,
    };

    try {
      const res = await fetch(`http://localhost:3000/users/${mainComment.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserInfo),
      });

      if (!res.ok) throw new Error("There was a problem sending the request");
      closeEditModal()
      alertBox("اطلاعات کاربر ثبت شد", "success");
      getAllUsers();
    } catch (error) {
      alertBox("تغییرات صورت نگرفت", "error");
      console.log(error);
    }
  };

  return (
    <>
      <section className="users text-neutral-950 dark:text-rose-50">
        <h1 className=" tracking-tighter text-2xl mt-4">لیست کاربران</h1>
        <div className="mt-4 gap-2 grid xs:grid-cols-2 sm:block">
          {allComment.data ? (
            allComment.data.map((comment) => (
              <div
                key={comment.id}
                className="flex flex-col sm:flex-row items-center justify-center sm:justify-between flex-wrap border border-neutral-300 px-5 py-3 rounded-2xl gap-4 sm:mb-2 sm:gap-0"
              >
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-x-5 text-sm md:text-base font-medium text-center sm:text-center">
                  <img
                    src="/img/woman.png"
                    alt=""
                    className="w-14 md:w-[72px] h-14 md:h-[72px] bg-center bg-cover rounded-2xl"
                  />
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
                    <span>{comment.firstname}</span>
                    <span>{comment.email}</span>
                    <span>{comment.phone}</span>
                    <span>{comment.city}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-2">
                  <ActionIcons
                    onDelete={() => deleteProductClickHandler(comment.id)}
                    onInfo={() => showInfoModal(comment)}
                    onEdit={() => ShowEditModal(comment)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className=" text-rose-50 bg-rose-500 rounded-2xl w-full text-center py-4 font-bold">
              یافت نشد
            </p>
          )}
        </div>
        <Pagination
          perPage={5}
          fetchText={"http://localhost:3000/users"}
          url={"/users/"}
          activePage={page}
        />
      </section>
      {isShowInfoModal && (
        <InfoModal title={"جزییات کاربر"} onClose={closeInfoModal}>
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
                <td>{mainComment.phone}</td>
                <td>{mainComment.password}</td>
                <td>{mainComment.buy}تومان</td>
              </tr>
            </tbody>
          </table>
        </InfoModal>
      )}
      
      {isShowEditModal && (
        <EditModal
          title={"ویرایش کاربر"}
          onClose={closeEditModal}
          onSubmit={submitEditModal}
        >
          <ul className="flex flex-col gap-2 mt-3 text-neutral-800 dark:text-rose-50">
            <li className="flex flex-col gap-1">
              <label htmlFor="">اسم : </label>
              <input
                value={userFirstName}
                onChange={(e) => setUserFirstName(e.target.value)}
                type="text"
                placeholder="نام "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">فامیل : </label>
              <input
                value={userLastName}
                onChange={(e) => setUserLastName(e.target.value)}
                type="text"
                placeholder="فامیل"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">username : </label>
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="username "
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">رمز عبور : </label>
              <input
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                type="text"
                placeholder="Passsword"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">تلفن : </label>
              <input
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                type="text"
                placeholder="تلفن"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">شهر : </label>
              <input
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
                type="text"
                placeholder="شهر کاربر"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">محل سکونت : </label>
              <input
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                type="text"
                placeholder="محل سکونت کاربر"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">آدرس ایمیل : </label>
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                placeholder="ایمیل کاربر"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
            <li className="flex flex-col gap-1">
              <label htmlFor="">نمره کاربر : </label>
              <textarea
                value={userScore}
                onChange={(e) => setUserScore(e.target.value)}
                type="text"
                placeholder="نمره"
                className=" outline-none border border-neutral-200 rounded-lg py-1 px-3 text-rose-300 dark:bg-neutral-800"
              />
            </li>
          </ul>
        </EditModal>
      )}
    </>
  );
}
