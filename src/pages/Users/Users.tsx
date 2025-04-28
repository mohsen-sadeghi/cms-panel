import React, { useEffect, useState } from "react";
import { IUser } from "../../types/servers";
import { getAllUsers } from "../../services/api";
import User from "../../components/User/User";
import { useCmsContext } from "../../context/CmsContext";
import { useParams } from "react-router";
import Pagination from "../../components/Pagination/Pagination";

function Users() {

  const [allUser , setAllUser] = useState<IUser[]>()
  const {refreshData} = useCmsContext()
  const {page} = useParams()

  useEffect(() => {
    getAllUsers(page).then(res => {
      setAllUser(res.data)
    })
  } , [refreshData , page])

  return (
    <>
      <section className="users text-neutral-950 dark:text-rose-50">
        <h1 className=" tracking-tighter text-2xl mt-4">لیست کاربران</h1>
        <div className="mt-4 gap-2 grid xs:grid-cols-2 sm:block">
          {allUser ? (
            allUser.map((user) => (
              <User key={user.id} {...user}/>
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
        />
      </section>
    </>
  );
}

export default Users;
