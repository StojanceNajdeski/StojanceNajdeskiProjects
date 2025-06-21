import Link from "next/link";
import React from "react";

const Novo = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          Ново
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Чорба</b>
            <b className="basis-1/12">160</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Рижото со телешко печење</b>
            <b className="basis-1/12">450</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">
              Свинско печење <br /> во сос од печурки (порција)
            </b>
            <b className="basis-1/12">400</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Домашни колбаси (1кг)</b>
            <b className="basis-1/12">1200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Суџук (1кг)</b>
            <b className="basis-1/12">1300</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novo;
