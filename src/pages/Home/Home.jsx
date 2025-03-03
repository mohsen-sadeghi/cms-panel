import React, { useEffect, useState } from "react";
import { Box, Profile2User, Messages, Ticket } from "iconsax-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { ArrowLeft2 } from "iconsax-react";

export default function Home() {
  const [data , setData] = useState()
  const fetchDataChart = async ()=>{
    try{
      const res = await fetch("http://localhost:3000/chart-data")
      const responseData = await res.json() 
      setData(responseData)
    }catch (error){
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchDataChart()
  })


  return (
    <section className="home">
      <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 flex-wrap gap-2 my-6 text-center text-neutral-950 dark:text-rose-50">
        <div className="border border-neutral-300 rounded-2xl pt-4 pb-[13px] pr-[9px]">
          <div className="flex items-center gap-x-[6px]">
            <Box className="w-6 h-6 stroke-neutral-950 dark:stroke-rose-50" />
            <h3 className="font-bold">تعداد محصولات</h3>
          </div>
          <span className="text-sm lg:text-base mr-[120px] xs:mr-[70px] min-w-[100px]">
            25000 محصول
          </span>
        </div>
        <div className=" border border-neutral-300 rounded-2xl pt-4 pb-[13px] pr-[9px]">
          <div className="flex items-center gap-x-[6px]">
            <Profile2User className="w-6 h-6 stroke-neutral-950 dark:stroke-rose-50" />
            <h3 className="text-sm lg:text-base font-bold">تعداد کاربران</h3>
          </div>
          <span className="mr-[120px] xs:mr-[70px] min-w-[100px]">
            25000 کاربر
          </span>
        </div>
        <div className=" border border-neutral-300 rounded-2xl pt-4 pb-[13px] pr-[9px]">
          <div className="flex items-center gap-x-[6px]">
            <Messages className="w-6 h-6 stroke-neutral-950 dark:stroke-rose-50" />
            <h3 className="font-bold">تعداد نظرات</h3>
          </div>
          <span className="mr-[120px] xs:mr-[70px] min-w-[100px]">
            70000 نظر
          </span>
        </div>
        <div className="border border-neutral-300 rounded-2xl pt-4 pb-[13px] pr-[9px]">
          <div className="flex items-center gap-x-[6px]">
            <Ticket className="w-6 h-6 stroke-neutral-950 dark:stroke-rose-50" />
            <h3 className="font-bold">تعداد تیکت ها</h3>
          </div>
          <span className="mr-[120px] xs:mr-[70px] min-w-[100px]">
            35000 تیکت
          </span>
        </div>
      </div>

      <div className=" border border-neutral-300 rounded-2xl p-3 text-neutral-950 dark:text-rose-50">
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-xl tracking-tighter">فروش این سال (1403)</h2>
          <div className="flex items-center text-rose-500">
            <span>نمودار کامل</span>
            <ArrowLeft2 className="w-6 h-6 stroke-rose-500" />
          </div>
        </div>
        <div style={{ direction: "rtl" }}>
          <ResponsiveContainer width="100%" height={380} className="p-3">
            <LineChart data={data}>
              <XAxis dataKey="month" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14, dx: -40 }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#8884d8"
                name="فروش (تومان)"
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#82ca9d"
                name="سود (تومان)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 lg:gap-x-[42px] my-6">
        <div className="pt-[11px] pb-[18px] px-[13px] border border-neutral-300 rounded-2xl text-neutral-950 dark:text-rose-50">
          <span className=" tracking-tighter text-xl">
            فعال ترین کاربر سایت
          </span>
          <div className="flex items-center gap-x-2 mt-4">
            <img
              className="w-[91px] h-[91px] rounded-2xl"
              src="./img/yolme.jpg"
              alt=""
            />
            <div className=" flex flex-col gap-y-[2px] tracking-tighter text-[18px]">
              <span>قدیر یلمه</span>
              <span>20 ساعت در هفته</span>
            </div>
          </div>
        </div>
        <div className="pt-[11px] pb-[18px] px-[13px] border border-neutral-300 rounded-2xl text-neutral-950 dark:text-rose-50">
          <span className=" tracking-tighter text-xl">
          محبوب ترین محصول
          </span>
          <div className="flex items-center gap-x-2 mt-4">
            <img
              className="w-[91px] h-[91px] rounded-2xl"
              src="./img/headphone.jpeg"
              alt=""
            />
            <div className=" flex flex-col gap-y-[2px] tracking-tighter text-[18px] ">
              <span>هدفون</span>
              <span>45000000 تومان</span>
            </div>
          </div>
        </div>
        <div className="pt-[11px] pb-[18px] px-[13px] border border-neutral-300 rounded-2xl text-neutral-950 dark:text-rose-50">
          <span className=" tracking-tighter text-xl">
          پر بازدیدترین مقاله
          </span>
          <div className="flex items-center gap-x-2 mt-4">
            <img
              className="w-[91px] h-[91px] rounded-2xl"
              src="./img/oil.jpeg"
              alt=""
            />
            <div className=" flex flex-col gap-y-[2px] tracking-tighter text-[18px]">
              <span>مضرات روغن</span>
              <span>120 بازدید در هفته</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
