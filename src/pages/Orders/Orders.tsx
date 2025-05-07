import React, { useEffect, useState } from "react";
import { getAllOrder } from "../../services/api";
import OrderBox from "../../components/OrderBox/OrderBox";
import { IOrder } from "../../types/servers";
import Pagination from "../../components/Pagination/Pagination";
import { useCmsContext } from "../../context/CmsContext";
import { useParams } from "react-router";

function Orders() {
  const [allOrder, setAllOrder] = useState<IOrder[]>([]);
  const { refreshData } = useCmsContext();

  const { page } = useParams();

  useEffect(() => {
    getAllOrder(page).then((res) => {
      setAllOrder(res);
      console.log(res);
    });
  }, [refreshData, page]);

  return (
    <section className="order text-neutral-950 dark:text-rose-50">
      <h1 className=" tracking-tighter text-2xl mt-4">سفارشات </h1>
      <div className="mt-4 gap-2 grid xs:grid-cols-2 md:block">
        {allOrder.map((order) => (
          <OrderBox key={order.id} {...order} />
        ))}
      </div>

      <Pagination
        perPage={3}
        fetchText="https://quiver-cute-block.glitch.me/orders"
        url={"/orders/"}
      />
    </section>
  );
}

export default Orders;
