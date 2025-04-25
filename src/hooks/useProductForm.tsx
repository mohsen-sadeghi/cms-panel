import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
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
  addressImageProduct: z.string().min(1, "پر کردن این فیلد الزامی است"),
  popularityProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  saleProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  coloringProduct: z.number().min(1, "پر کردن این فیلد الزامی است"),
  captionProduct: z
    .string()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(3, "حداقل باید 3 کاراکتر باشد"),
});

function useProductForm() {

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

export default useProductForm;
