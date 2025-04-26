import React from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nameProduct: z
    .string()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(3, "حداقل باید 3 کاراکتر باشد"),
  priceProduct: z
    .number()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(3, "حداقل باید 3 کاراکتر باشد"),
  countProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  imageProduct: z
    .string()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(3, "حداقل باید 3 کاراکتر باشد"),
  popularityProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  saleProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  colorProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  descProduct: z
    .string()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(10, "حداقل باید 10 کاراکتر باشد"),
});

function useAddProductForm() {
    
  const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm<z.input<typeof schema>, any, z.output<typeof schema>>({
    resolver: zodResolver(schema),
  });


  return { register, handleSubmit , errors , reset };
}

export default useAddProductForm;
