import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAllAdmin } from "../../services/api";
import { alertBox } from "../../utils/swal";
import { useNavigate } from "react-router";


interface IForm {
  username: string;
  password: string;
}

const schema = z.object({
  username: z
    .string()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(3, "حداقل باید 3 کاراکتر باشد"),
  password: z
    .string()
    .min(1, "پر کردن این فیلد الزامی است")
    .min(8, "حداقل باید 8 کاراکتر باشد"),
});

function Login() {

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.input<typeof schema>, any, z.output<typeof schema>>({
    resolver: zodResolver(schema),
  });

  useState(() => {});

  const submitLoginForm = (data: IForm) => {
    getAllAdmin().then((res) => {
        const isAdmin = res.find(item=>{
            if(item.username == data.username && item.password == data.password){
                return item.token
            }
        })
        if(isAdmin){
            const token = {
              token : isAdmin.token
            }
            localStorage.setItem("token" , JSON.stringify(token))
            alertBox("با موفقیت لاگین شدید" , "success")
            navigate('/' , { replace: true })
        }else{
            alertBox("همچین کاربری وجود ندارد" , "error")
        }
    });
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-white flex items-center justify-center overflow-y-auto">
      <section className="login dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 font-Homenaje text-5xl text-rose-300 dark:text-neutral-800 text-center"
          >
            RosePanel
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                لطفا لاگین کنید
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    نام کاربری
                  </label>
                  <input
                    {...register("username")}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                  />
                  {errors?.username && <p>{errors.username.message}</p>}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    پسوورد
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors?.password && <p>{errors.password.message}</p>}
                </div>
                <button
                  onClick={handleSubmit(submitLoginForm)}
                  type="button"
                  className="w-full bg-rose-300 hover:bg-rose-500 transition-all text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  ورود
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>,
    document.body
  );
}

export default Login;
