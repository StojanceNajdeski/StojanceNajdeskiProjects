import Link from "next/link";
import React from "react";

const Pasta = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          Паста
        </h2>
        <small className="font-bold">(шпагети/макарони)</small>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Италијана</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>(сирење, маслиново масло, зачини)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Болоњезе</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>(доматен сос, мелено месо, зачини)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Фунги во бел сос</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>(печурки, бел сос, зачини)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Стек и печурки</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>(стек, печурки, бел сос, зачини)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Карбонара</b>
            <b className="basis-1/12">280</b>
          </div>
          <small>(сувомеснато, бел сос, јајце)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Вегетаријана</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>(свеж зеленчук, црвен сос, кромид, печурки)</small>
        </div>
      </div>
    </div>
  );
};

export default Pasta;
