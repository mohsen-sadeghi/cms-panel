import React, { useContext, useState } from "react";
import { createContext } from "react";

interface CmsContextProvider {
  children: React.ReactNode;
}

interface CmsContext {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const cmsContext = createContext({} as CmsContext);

export const useCmsContext = () => {
  return useContext(cmsContext);
};

export function CmsContextProvider({ children }: CmsContextProvider) {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);


  const deleteItems = (id : number , url : string) =>{

  }



  return (
    <cmsContext.Provider value={{toggleMenu, setToggleMenu}}>
      {children}
    </cmsContext.Provider>
  );
}
