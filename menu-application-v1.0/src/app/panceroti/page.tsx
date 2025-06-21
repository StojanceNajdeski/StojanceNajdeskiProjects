import Link from "next/link";
import React from "react";

const Panceroti = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          Панцероти
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Панцерота Класик</b>
            <b className="basis-1/12">170</b>
          </div>
          <small>сувомеснато, кашкавал, свежи печурки (прилог: павлака)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Комбинирана Панцерота</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>
            две врсти сувомеснато, кашкавал, свежи печурки <br /> (прилог:
            павлака)
          </small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Панцерота Со Стек</b>
            <b className="basis-1/12">170</b>
          </div>
          <small>стек, кашкавал, свежи печурки (прилог: павлака)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Панцерота Болоњезе</b>
            <b className="basis-1/12">220</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panceroti;
