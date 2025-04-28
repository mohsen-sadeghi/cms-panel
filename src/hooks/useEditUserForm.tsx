import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  userFirstName: z
  .string()
  .min(1, "پر کردن این فیلد الزامی است")
  .min(3, "حداقل باید 3 کاراکتر باشد"),
  userLastName: z
  .string()
  .min(1, "پر کردن این فیلد الزامی است")
  .min(3, "حداقل باید 3 کاراکتر باشد") ,
  username: z
  .string()
  .min(1, "پر کردن این فیلد الزامی است")
  .min(3, "حداقل باید 3 کاراکتر باشد") ,
  userPassword: z.string().min(1 , "پر کردن این فیلد الزامی است").min(8 , "حداقل باید 8 کاراکتر باشد"),
  userPhone: z.number().min(1 , "پر کردن این فیلد الزامی است").min(11 , "حداقل باید 11 کاراکتر باشد"),
  userCity:   z.string()
  .min(1, "پر کردن این فیلد الزامی است")
  .min(2, "حداقل باید 2 کاراکتر باشد"),
  userEmail: z.string()
  .min(1, "پر کردن این فیلد الزامی است").email("لطفا ایمیل رو به درستی وارد کنید"),
  userAddress: z.string().min(1 , "پر کردن این فیلد الزامی است").min(10 , "حداقل 10 کاراکتر وارد کنید"),
  userScore: z.number().min(1 , "پر کردن این فیلد الزامی است"),
})


function useEditUserForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.input<typeof schema>, any, z.output<typeof schema>>({
      resolver: zodResolver(schema),
    });

  return { register, handleSubmit, reset, errors };
}

export default useEditUserForm