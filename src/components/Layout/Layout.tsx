import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { CmsContextProvider } from "../../context/CmsContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const navigate = useNavigate()

  useEffect(() =>{
    const token = JSON.parse(localStorage.getItem("token"))
    if(!token){
      navigate('/login')
    }
  } , [])


  return (
    <CmsContextProvider>
        <Sidebar />
        <main className=" main w-full h-[760px] mt-10 bg-neutral-50 dark:bg-neutral-800 rounded-3xl px-5 pt-5 overflow-y-auto">
          <Header />
          {children}
        </main>
    </CmsContextProvider>
  );
}

export default Layout;
