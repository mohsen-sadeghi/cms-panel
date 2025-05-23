import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal)

const deleteModal = (title : string , submit : () => void)=>{
    MySwal.fire({
        title: `${title}`,
        icon: "question",
        iconHtml: "؟",
        confirmButtonText: "بله",
        cancelButtonText: "نه",
        showCancelButton: true,
        showCloseButton: true
      }).then((result)=>{
        if(result.isConfirmed){
            submit()
        }
      })
}

const alertBox = (title : string , icon : string)=>{
  MySwal.fire({
    title: `${title}`,
    icon: `${icon}`,
    iconHtml: "؟",
    showCloseButton: true
  })
}



export {deleteModal , alertBox}