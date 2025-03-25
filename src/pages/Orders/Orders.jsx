import React from "react";
import ActionIcons from "../../Components/ActionIcons/ActionIcons";
import { ArrowDown2 } from "iconsax-react";

export default function Orders() {
  const deleteProductClickHandler = () => {};
  const showInfoModal = () => {};
  const ShowEditModal = () => {};

  return (
    <section className="order text-neutral-950 dark:text-rose-50">
      <h1 className=" tracking-tighter text-2xl mt-4">سفارشات </h1>
      <div className="mt-4 gap-2 grid xs:grid-cols-2 md:block">
        <div className="flex flex-col items-center justify-center flex-wrap md:flex-row md:justify-between w-full  border border-neutral-300 px-5 py-3 rounded-2xl gap-4 md:mb-2 md:gap-0">
          <div className=" flex flex-col items-center justify-center md:justify-normal md:flex-row w-full md:w-auto gap-3 md:gap-x-5 text-md md:text-base font-medium text-center md:text-center">
            <img
              src="/img/iphone.jpeg"
              alt=""
              className="w-14 md:w-[72px] h-14 md:h-[72px] bg-center bg-cover rounded-2xl"
            />
            <div className=" my-3 flex items-center flex-col md:flex-row gap-y-1 md:gap-4 md:mr-3">
              <span>آیفون 13 پرو</span>
              <span className=" text-rose-500">42000000 تومان</span>
              <span>sanaz.asadi</span>
              <a
                href="#"
                className="flex items-center justify-around min-w-[130px] px-2 py-1 tracking-tighter bg-yellow-100 text-yellow-600  rounded-2xl text-sm md:text-base"
              >
                در حال پیگیری
                <ArrowDown2 className=" w-5 h-5 stroke-yellow-600" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center md:flex-row w-full md:w-auto gap-x-2">
            <ActionIcons
              onDelete={() => deleteProductClickHandler()}
              onInfo={() => showInfoModal()}
              onEdit={() => ShowEditModal()}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap border border-neutral-300 px-5 py-3 rounded-2xl gap-4 md:mb-2 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-x-5 text-md md:text-base font-medium text-center md:text-center">
            <img
              src="/img/iphone.jpeg"
              alt=""
              className="w-14 md:w-[72px] h-14 md:h-[72px] bg-center bg-cover rounded-2xl"
            />
            <div className="flex items-center flex-col md:flex-row gap-1 md:gap-4 mr-3">
              <span>آیفون 13 پرو</span>
              <span className=" text-rose-500">42000000 تومان</span>
              <span>sanaz.asadi</span>
              <a
                href="#"
                className="flex items-center justify-around min-w-[130px] px-2 py-1 tracking-tighter bg-green-100 text-green-600  rounded-2xl"
              >
                تحویل شده
                <ArrowDown2 className=" w-5 h-5 stroke-green-600" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <ActionIcons
              onDelete={() => deleteProductClickHandler()}
              onInfo={() => showInfoModal()}
              onEdit={() => ShowEditModal()}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap border border-neutral-300 px-5 py-3 rounded-2xl gap-4 md:mb-2 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-x-5 text-md md:text-base font-medium text-center md:text-center">
            <img
              src="/img/iphone.jpeg"
              alt=""
              className="w-14 md:w-[72px] h-14 md:h-[72px] bg-center bg-cover rounded-2xl"
            />
            <div className="flex items-center flex-col md:flex-row gap-1 md:gap-4 mr-3">
              <span>آیفون 13 پرو</span>
              <span className=" text-rose-500">42000000 تومان</span>
              <span>sanaz.asadi</span>
              <a
                href="#"
                className="flex items-center justify-around min-w-[130px] px-2 py-1 tracking-tighter bg-rose-100 text-rose-600  rounded-2xl"
              >
                لغو شده
                <ArrowDown2 className=" w-5 h-5 stroke-rose-600" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <ActionIcons
              onDelete={() => deleteProductClickHandler()}
              onInfo={() => showInfoModal()}
              onEdit={() => ShowEditModal()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}