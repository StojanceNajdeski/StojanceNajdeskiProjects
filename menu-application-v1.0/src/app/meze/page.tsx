import Link from "next/link";
import React from "react";

const Meze = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          Мезе
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Шампињони (200гр)</b>
            <b className="basis-1/12">200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Шампињони со кашкавал</b>
            <b className="basis-1/12">250</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Пилешки крилца (1кг)</b>
            <b className="basis-1/12">800</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Пилешки стек (1кг)</b>
            <b className="basis-1/12">700</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Помфрит (300гр)</b>
            <b className="basis-1/12">100/160</b>
          </div>
          <small>(без/со сирење)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Спајси компир (300гр)</b>
            <b className="basis-1/12">120/180</b>
          </div>
          <small>(без/со сирење)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Солена палачинка</b>
            <b className="basis-1/12">120</b>
          </div>
          <small>(сувомеснато, кашкавал, печурки)</small>
        </div>
      </div>
    </div>
  );
};

export default Meze;
