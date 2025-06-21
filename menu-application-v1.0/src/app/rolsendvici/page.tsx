import Link from "next/link";
import React from "react";

const Rolsendvici = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          Рол Сендвичи
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Чикен рол</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">(пилешки стек, сос, зеленчук)</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Појачан Чикен Рол</b>
            <b className="basis-1/12">230</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (пилешки стек, сос, зеленчук, кашкавал, печурки)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Рол со сувомеснато</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">(сувомеснато, сос, зеленчук)</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Рол со туна</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (туна, зеленчук, ,маслинки, кромид, печурки)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Вегетаријански рол</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">(кашкавал, сос, зеленчук)</small>
          </div>
        </div>
        <h2 className="text-center pt-3 pb-3 text-xl text-orange-600 uppercase font-bold">
          Ново
        </h2>
        <div className="border-4 rounded-2xl border-dotted p-3">
          <div className="pb-5 pt-2">
            <div className="flex">
              <b className="basis-11/12 uppercase">
                Бурито сендвич <br /> со свинско во фурна
              </b>
              <b className="basis-1/12">250</b>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex">
              <b className="basis-11/12 uppercase">
                Бурито сендвич <br /> со телешко во фурна
              </b>
              <b className="basis-1/12">300</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rolsendvici;
