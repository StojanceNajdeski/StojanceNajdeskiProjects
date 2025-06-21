import Link from "next/link";
import React from "react";

const Dodatoci = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl ">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          Додатоци
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Бакарди Сос</b>
            <b className="basis-1/12">50</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Ладен Кари Сос (100гр)</b>
            <b className="basis-1/12">50</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Кечап/Мајонез(100гр)</b>
            <b className="basis-1/12">50</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Кечап/Мајонез во кесичка</b>
            <b className="basis-1/12">30</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Мексикана сос(100гр)</b>
            <b className="basis-1/12">50</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Јајце</b>
            <b className="basis-1/12">40</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Вариво/Брокула</b>
            <b className="basis-1/12">70</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Павлака (100гр)</b>
            <b className="basis-1/12">40</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Маслинки</b>
            <b className="basis-1/12">70</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Кајмак (кугла)</b>
            <b className="basis-1/12">60</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Помфрит (100гр)</b>
            <b className="basis-1/12">60</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Сирење (50гр)</b>
            <b className="basis-1/12">60</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Пиперка (лута/блага)</b>
            <b className="basis-1/12">40</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">Јогурт (0,25)</b>
            <b className="basis-1/12">60</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dodatoci;
