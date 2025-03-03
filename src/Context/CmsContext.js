import React , { createContext  , useState} from "react";

const CmsContext = createContext(null)

const CmsProvider = ({children})=>{
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <CmsContext.Provider value={{toggleMenu , setToggleMenu}}>
            {children}
        </CmsContext.Provider>
    )

}


export  {CmsProvider , CmsContext}