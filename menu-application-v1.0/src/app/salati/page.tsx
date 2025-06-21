import Link from "next/link";
import React from "react";

const Salati = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          Салати
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Мешана салата</b>
            <b className="basis-1/12">160</b>
          </div>
          <small>(морков, цвекло, зелка, марула, домати, краставици)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Шопска салата</b>
            <b className="basis-1/12">160</b>
          </div>
          <small>(домати, краставици, сирење)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Грчка салата</b>
            <b className="basis-1/12">180</b>
          </div>
          <small>(домат, краставица, сирење, кромид, маслинки, оригано)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Македонска салата</b>
            <b className="basis-1/12">200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Туна салата</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>(Марула, компир, туна, маслинка, кромид)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Цезар салата</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>(Марула, домат, кубети, стек, сос)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Домашна салата</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>(Домат, свежа пиперка, кромид, овчо сирење)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Таратур салата</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>(павлака, краставица, лук, орев)</small>
        </div>
      </div>
    </div>
  );
};

export default Salati;
