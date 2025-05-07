import React from "react";
import { NavLink } from "react-router";
import {
  Home2,
  ArrowLeft2,
  Box1,
  Profile2User,
  TruckFast,
  Messages3,
  TicketDiscount,
  Logout,
} from "iconsax-reactjs";
import { useCmsContext } from "../../context/CmsContext";
import { useNavigate } from "react-router";

function Sidebar() {
  const navigate = useNavigate()
  const {toggleMenu} = useCmsContext()


  const logout = ()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }


  return (
    <div
      className={`sidebar ${toggleMenu && "active"} z-0`}
    >
      <div className="container h-full xl:h-auto">
        <div className="relative w-72 h-full xl:h-[760px] overflow-hidden bg-rose-500 xl:rounded-3xl text-rose-50 dark:text-neutral-800">
          {/* header sidebar */}
          <div className=" font-Homenaje text-5xl text-rose-50 dark:text-neutral-800 text-center py-2 border-b border-dashed border-rose-50 dark:border-neutral-800">
            <h1>Rose Panel</h1>
          </div>
          {/* profile sidebar */}
          <div className="flex items-center justify-center flex-col mt-4">
            <div className=" relative">
              <img
                src="/src/assets/img/saeedi.jpeg"
                alt=""
                className="w-[150px] h-[150px] p-[5px] bg-white dark:bg-neutral-800 rounded-full"
              />
              <div className=" absolute right-[28px] bottom-0 w-[25px] h-[25px] bg-green-500 rounded-full border-[3px] border-white dark:border-neutral-800 "></div>
            </div>
            <h2 className=" text-rose-50 dark:text-neutral-800 text-lg mt-4 ">
              مدیر سایت خوش امدید{" "}
            </h2>
            <span className="text-sm">Admin</span>
          </div>
          {/* links */}
          <div className=" mt-[21px]">
            <ul className="flex flex-col gap-y-[19px]">
              <NavLink to={"/"} className="sidebar-links">
                <div className="flex items-center gap-x-[7px]">
                  <Home2 size="24" className="sidebar-links__right-svg" />
                  <span className="sidebar-links__text">پیشخوان</span>
                </div>
                <ArrowLeft2
                  className="sidebar-links__left-svg"
                  variant="Bold"
                />
              </NavLink>
              <NavLink to={"/products/1"} className="sidebar-links">
                <div className="flex items-center gap-x-[7px]">
                  <Box1 size="24" className=" sidebar-links__right-svg" />
                  <span className="sidebar-links__text">محصولات</span>
                </div>
                <ArrowLeft2
                  className="sidebar-links__left-svg"
                  variant="Bold"
                />
              </NavLink>
              <NavLink to={"/addProduct"} className="sidebar-links">
                <div className="flex items-center gap-x-[7px]">
                  <Profile2User
                    size="24"
                    className=" sidebar-links__right-svg"
                  />

                  <span className="sidebar-links__text"></span>
                  <span className="sidebar-links__text">افزودن محصولات</span>
                </div>
                <ArrowLeft2
                  className="sidebar-links__left-svg"
                  variant="Bold"
                />
              </NavLink>
              <NavLink to={"/users/1"} className="sidebar-links">
                <div className="flex items-center gap-x-[7px]">
                  <Profile2User
                    size="24"
                    className=" sidebar-links__right-svg"
                  />

                  <span className="sidebar-links__text"></span>
                  <span className="sidebar-links__text">کاربران</span>
                </div>
                <ArrowLeft2
                  className="sidebar-links__left-svg"
                  variant="Bold"
                />
              </NavLink>
              <NavLink to={"/Orders/1"} className="sidebar-links">
                <div className="flex items-center gap-x-[7px]">
                  <TruckFast size="24" className=" sidebar-links__right-svg" />
                  <span className="sidebar-links__text">سفارشات</span>
                </div>
                <ArrowLeft2
                  className="sidebar-links__left-svg"
                  variant="Bold"
                />
              </NavLink>
              <NavLink to={"/comments"} className="sidebar-links">
                <div className="flex items-center gap-x-[7px]">
                  <Messages3 size="24" className=" sidebar-links__right-svg" />
                  <span className="sidebar-links__text">کامنت ها</span>
                </div>
                <ArrowLeft2
                  className="sidebar-links__left-svg"
                  variant="Bold"
                />
              </NavLink>
              <NavLink to={"/offs"} className="sidebar-links">
                <div className="flex items-center gap-x-[7px]">
                  <TicketDiscount
                    size="24"
                    className="sidebar-links__right-svg"
                  />
                  <span className="sidebar-links__text">تخفیف ها</span>
                </div>
                <ArrowLeft2
                  className="sidebar-links__left-svg"
                  variant="Bold"
                />
              </NavLink>
            </ul>
          </div>
          {/* logout */}
          <div className="absolute bottom-[25px] left-0 right-0 ml-auto mr-auto  gap-x-1">
            <div className="flex items-center justify-center gap-x-1" onClick={logout}>
              <Logout className="w-[25px] h-[25px] stroke-rose-50 dark:stroke-neutral-800" />
              <a href="#" className="">
                خروج از حساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
