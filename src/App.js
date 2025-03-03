import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import { CmsProvider } from "./Context/CmsContext";
import {useRoutes} from "react-router-dom";
import routes from "./routes";

function App() {
  const router = useRoutes(routes)

  return (
    <CmsProvider>
      <Sidebar />
      <main className="main w-full h-[760px] mt-10 bg-neutral-50 dark:bg-neutral-800 rounded-3xl px-5 pt-5 overflow-y-auto">
        <Header />
        {router}
      </main>
    </CmsProvider>
  );
}

export default App;
