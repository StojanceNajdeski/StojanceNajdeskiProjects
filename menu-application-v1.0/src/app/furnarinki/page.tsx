import Link from "next/link";
import React from "react";

const Furnarinki = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          Фурнаринки
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Лукаринка</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>лук, кашкавал, печурки, зденка, сос, сусам, зачини</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">
              Зденка, Кашкавал, <br />
              Маслинки
            </b>
            <b className="basis-1/12">220</b>
          </div>
          <small>зденка, кашкавал, маслинки, печурки, павлака, сусам</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Сувомесната</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>сувомеснато, кашкавал, зденка, печурки, сос, сусам</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Комбинирана</b>
            <b className="basis-1/12">300</b>
          </div>
          <small>
            Фурнаринка со состојки по избор. Доколку сакате пршута, цената на
            фурнаринкатра ќе биде 350 ден.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Furnarinki;
