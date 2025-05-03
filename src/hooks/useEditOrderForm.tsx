import React from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
   nameOrder: z
  .string()
  .min(1, "پر کردن این فیلد الزامی است")
  .min(3, "حداقل باید 3 کاراکتر باشد"),
  locationOrder: z.string().min(1 , "پر کردن این فیلد الزامی است").min(10 , "حداقل 10 کاراکتر وارد کنید"),
  countOrder: z.number().min(1 , "پر کردن این فیلد الزامی است"),
  statusOrder: z.enum(["pending", "success", "cancel"], {
    errorMap: () => ({ message: "انتخاب وضعیت سفارش الزامی است" }),
  }),

})
function useEditOrderForm() {
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

export default useEditOrderForm