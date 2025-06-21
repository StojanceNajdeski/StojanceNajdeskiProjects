import Link from "next/link";
import React from "react";

const Deserti = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          Десерти
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">Трилече</p>
            <b className="basis-1/12">70</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12 text-orange-600">Колач на денот</p>
            <b className="basis-1/12 text-orange-600">80</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">
              Палачинка со крем, банана, <br /> бисквита, шлаг
            </p>
            <b className="basis-1/12">120</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">Палачинка со мед и ореви</p>
            <b className="basis-1/12">120</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">Овошна вафла</p>
            <b className="basis-1/12">200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">Нутела вафла</p>
            <b className="basis-1/12">200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">Комбинирана вафла</p>
            <b className="basis-1/12">250</b>
          </div>
        </div>
        <b>Напомена:</b>
        <p>
          - Производите соддржат <b className="uppercase">Алергени.</b>
          <br />
          Доколку имате било каква алергија. <br />
          Ве молиме нагласете при нарачување
        </p>
      </div>
    </div>
  );
};

export default Deserti;
