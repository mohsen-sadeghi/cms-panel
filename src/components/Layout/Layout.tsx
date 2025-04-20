import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { CmsContextProvider } from "../../context/CmsContext";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
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
