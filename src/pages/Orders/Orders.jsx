import React, { useEffect, useState } from "react";
import ActionIcons from "../../Components/ActionIcons/ActionIcons";
import { ArrowDown2 } from "iconsax-react";
import { useParams } from "react-router-dom";
import Pagination from "../../Components/Pagination/Pagination";
import { deleteModal, alertBox } from "../../utils/utils";
import InfoModal from "../../Components/InfoModal/InfoModal";
import EditModal from "../../Components/EditModal/EditModal";

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  const [isShowInfoModal, setIsShowInfoModal] = useState(false);
  const [isShowEditModal , setIsShowEditModal] = useState()

  
  const [mainOrders, setMainOrders] = useState([]);
  const { page } = useParams();

  useEffect(() => {
    getAllOrders();
  }, [page]);

  const getAllOrders = () => {
    fetch(`http://localhost:3000/orders/?_page=${page}&_per_page=3`)
      .then((res) => res.json())
      .then((orders) => {
        setAllOrders(orders.data);
        console.log(orders.data);
      });
  };

  const deleteProduct = (id) => {
    console.log(id);
    deleteModal("آیا از حذف سفارش موافق هستید", () => {
      fetch(`http://localhost:3000/orders/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          getAllOrders();
          alertBox("دوره با موفقیت حذف شد", "success");
        }
      });
    });
  };
  const showInfoModal = (order) => {
    setMainOrders(order)
    setIsShowInfoModal(true);
  };

  const closeInfoModal = () => setIsShowInfoModal(false);
  const ShowEditModal = () => {};
  const showStatusOrder = (status) => {
    if (status === "success") {
      return (
        <a
          href="#"
          className="flex items-center justify-around min-w-[130px] px-2 py-1 tracking-tighter bg-yellow-100 text-yellow-600  rounded-2xl text-sm md:text-base"
        >
          در حال پیگیری
          <ArrowDown2 className=" w-5 h-5 stroke-yellow-600" />
        </a>
      );
    } else if (status === "pending") {
      return (
        <a
          href="#"
          className="flex items-center justify-around min-w-[130px] px-2 py-1 tracking-tighter bg-green-100 text-green-600  rounded-2xl"
        >
          تحویل شده
          <ArrowDown2 className=" w-5 h-5 stroke-green-600" />
        </a>
      );
    } else {
      return (
        <a
          href="#"
          className="flex items-center justify-around min-w-[130px] px-2 py-1 tracking-tighter bg-rose-100 text-rose-600  rounded-2xl"
        >
          لغو شده
          <ArrowDown2 className=" w-5 h-5 stroke-rose-600" />
        </a>
      );
    }
  };

  return (
    <>
      <section className="order text-neutral-950 dark:text-rose-50">
        <h1 className=" tracking-tighter text-2xl mt-4">سفارشات </h1>
        <div className="mt-4 gap-2 grid xs:grid-cols-2 md:block">
          {allOrders.map((order) => (
            <div className="flex flex-col items-center justify-center flex-wrap md:flex-row md:justify-between w-full  border border-neutral-300 px-5 py-3 rounded-2xl gap-4 md:mb-2 md:gap-0">
              <div className=" flex flex-col items-center justify-center md:justify-normal md:flex-row w-full md:w-auto gap-3 md:gap-x-5 text-md md:text-base font-medium text-center md:text-center">
                <img
                  src={order.src}
                  alt=""
                  className="w-14 md:w-[72px] h-14 md:h-[72px] bg-center bg-cover rounded-2xl"
                />
                <div className=" my-3 flex items-center flex-col md:flex-row gap-y-1 md:gap-4 md:mr-3">
                  <span>{order.title}</span>
                  <span className=" text-rose-500">{order.price} تومان</span>
                  <span>{order.userName}</span>
                  {showStatusOrder(order.status)}
                </div>
              </div>
              <div className="flex items-center justify-center md:flex-row w-full md:w-auto gap-x-2">
                <ActionIcons
                  onDelete={() => deleteProduct(order.id)}
                  onInfo={() => showInfoModal(order)}
                  onEdit={() => ShowEditModal()}
                />
              </div>
            </div>
          ))}
        </div>

        <Pagination
          perPage={3}
          fetchText="http://localhost:3000/orders"
          url={"/orders/"}
          activePage={page}
        />
      </section>

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
                <td>{mainOrders.name}</td>
                <td>{mainOrders.location}</td>
                <td>{mainOrders.count}عدد</td>
              </tr>
            </tbody>
          </table>
        </InfoModal>
      )}
    </>
  );
}
