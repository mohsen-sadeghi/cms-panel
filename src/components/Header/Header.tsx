import React from "react";
import { SearchNormal, Notification, Moon, Sun1 } from "iconsax-reactjs";
import { useCmsContext } from "../../context/CmsContext";

function Header() {

  const {toggleMenu , setToggleMenu} = useCmsContext()

  const changeThem = () => {
    document.documentElement.classList.toggle("dark")
  };

  const toggleMenuClickHandler = () => {
    setToggleMenu((prevToggle) => !prevToggle);
  };



  return (
    <section>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2.5">
          <div
            className="p-2 bg-rose-100 rounded-full cursor-pointer"
            onClick={changeThem}
          >
            <Moon className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] stroke-neutral-800 block dark:hidden" />
            <Sun1 className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] stroke-neutral-800 hidden dark:block" />
          </div>
          <div className=" p-2 bg-rose-100 rounded-full">
            <Notification className=" w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] stroke-neutral-800" />
          </div>
          <div className=" p-2 bg-rose-100 rounded-full">
            <SearchNormal className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] stroke-neutral-800" />
          </div>
        </div>
        <div
          className="cursor-pointer  xl:hidden"
          onClick={toggleMenuClickHandler}
        >
          <div
            className={`toggle-menu ${toggleMenu && "active"}`}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
