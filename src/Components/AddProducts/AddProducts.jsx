import React, { useState } from "react";
import { alertBox } from "../../utils/utils";

export default function AddProducts() {
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [countProduct, setCountProduct] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [popularityProduct, setPopularityProduct] = useState("");
  const [saleProduct, setSaleProduct] = useState("");
  const [colorProduct, setColorProduct] = useState("");

  const addProductClickHandler = async () => {
    if (
      [nameProduct, priceProduct, countProduct, imageProduct, popularityProduct, saleProduct, colorProduct]
        .every(field => field && String(field).trim() !== "")
    ) {
      const newProduct = {
        title: nameProduct.trim(),
        price: Number(priceProduct),
        count: Number(countProduct),
        img: imageProduct.trim(),
        popularity: Number(popularityProduct),
        sale: Boolean(saleProduct),
        colors: colorProduct,
        description:
          "هندزفری بلوتوثی لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n",
        url: "headset",
        categoryId: 1,
      };
  
      try {
        const response = await fetch("http://localhost:3000/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct),
        });
  
        if (!response.ok) throw new Error("مشکلی در ارسال درخواست پیش آمد");
  
        const result = await response.json();
        alertBox("دوره با موفقیت اضافه شد", "success");
      } catch (error) {
        console.error("Error:", error);
        alertBox("خطا در افزودن محصول", "error");
      }
    } else {
      alertBox("لطفا اطلاعات را به درستی وارد نمایید", "error");
    }
  };
  

  return (
    <div className="mt-5">
      <h2 className=" text-neutral-900 dark:text-neutral-50 font-bold text-2xl">
        افزودن محصول جدید :{" "}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mt-6">
        <div className="">
          <input
            value={nameProduct}
            onChange={(e) => setNameProduct(e.target.value)}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="اسم محصول را بنویسید ..."
          />
        </div>
        <div className="">
          <input
            value={priceProduct}
            onChange={(e) => setPriceProduct(e.target.value)}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="قیمت محصول را بنویسید ..."
          />
        </div>
        <div className="">
          <input
            value={countProduct}
            onChange={(e) => setCountProduct(e.target.value)}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="موجودی محصول را بنویسید ..."
          />
        </div>
        <div className="">
          <input
            value={imageProduct}
            onChange={(e) => setImageProduct(e.target.value)}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="آدرس عکس محصول را بنویسید ..."
          />
        </div>
        <div className="">
          <input
            value={popularityProduct}
            onChange={(e) => setPopularityProduct(e.target.value)}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="میزان محبوبیت محصول را بنویسید ..."
          />
        </div>
        <div className="">
          <input
            value={saleProduct}
            onChange={(e) => setSaleProduct(e.target.value)}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="میزان فروش محصول را بنویسید ..."
          />
        </div>
        <div className="">
          <input
            value={colorProduct}
            onChange={(e) => setColorProduct(e.target.value)}
            className=" w-full py-4 px-6 outline-none border border-neutral-300 dark:border-neutral-300 rounded-2xl text-neutral-400 bg-neutral-100 dark:bg-neutral-800"
            type="text"
            placeholder="تعداد رنگبندی محصول را بنویسید ..."
          />
        </div>
      </div>
      <div
        className="flex items-center justify-center text-center mt-5"
        onClick={addProductClickHandler}
      >
        <a
          href="#"
          className=" py-3 px-8 bg-rose-500 text-neutral-50 rounded-2xl text-xl sm:text-2xl"
        >
          افزودن محصول
        </a>
      </div>
    </div>
  );
}
