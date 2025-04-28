import React, { useContext, useState } from "react";
import { createContext } from "react";
import { deleteModal, alertBox } from "../utils/swal";
import { IProduct, IUser } from "../types/servers";

type TSelectedItem = IProduct | IUser;

interface CmsContextProvider {
  children: React.ReactNode;
}

interface CmsContext {
  toggleMenu: boolean;
  isShowInfoModal: boolean;
  selectedItem: TSelectedItem | undefined;
  showInfoModal: (item : (IProduct | IUser)) => void;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteItem: (
    id: number,
    callDeleteApi: (id: number) => Promise<any>
  ) => void;
  closeInfoModal: () => void;
  isShowEditModal : boolean ;
  closeEditModal : ()=>void ;
  showEditModal : (item : IProduct & IUser)=> void ;
  refreshData : boolean ; 
  setRefreshData : React.Dispatch<React.SetStateAction<boolean>>
}

export const cmsContext = createContext({} as CmsContext);

export const useCmsContext = () => {
  return useContext(cmsContext);
};

export function CmsContextProvider({ children }: CmsContextProvider) {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [isShowInfoModal, setIsShowInfoModal] = useState<boolean>(false);
  const [isShowEditModal , setIsShowEditModal] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<TSelectedItem>();
  const [refreshData , setRefreshData] = useState<boolean>(false)

  const handleDeleteItem = (
    id: number,
    callDeleteApi: (id: number) => Promise<any>
  ) => {
    deleteModal("آیا از حذف مطمعن هستید ؟؟", () => {
      callDeleteApi(id)
        .then((data) => {
          alertBox("محصول با موفقیت حذف شد", "success");
          setRefreshData(prevData => !prevData)
        })
        .catch((error) => {
          alertBox(`محصول حذف نشد`, "error");
        });
    });
  };


  const showInfoModal = (item : TSelectedItem)=>{
    setIsShowInfoModal(true);
    setSelectedItem(item);
  }

  const closeInfoModal = () => setIsShowInfoModal(false);


  const closeEditModal = () => setIsShowEditModal(false);

  const showEditModal = (item : IProduct & IUser) => {
    setIsShowEditModal(true)
    setSelectedItem(item)
  }

  return (
    <cmsContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        handleDeleteItem,
        isShowInfoModal,
        closeInfoModal,
        selectedItem,
        showInfoModal,
        isShowEditModal , 
        closeEditModal , 
        showEditModal , 
        refreshData , 
        setRefreshData
      }}
    >
      {children}
    </cmsContext.Provider>
  );
}
