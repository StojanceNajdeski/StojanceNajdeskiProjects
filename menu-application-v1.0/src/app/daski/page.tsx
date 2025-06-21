import Link from "next/link";
import React from "react";

const Daski = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          Даски
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Пршута и овчи кашкавал</b>
            <b className="basis-1/12">700</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (100гр пршута, 150гр овчи кашкавал)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Сувомесната</b>
            <b className="basis-1/12">700</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (свинска или пилешка по избор)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Премиум</b>
            <b className="basis-1/12">1400</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (плаво сирење 150гр, овчо сирење, пршута 100гр, овчи кашкавал
              150гр, чадено месо, сос)
            </small>
          </div>
          <div className="flex">
            <small className="basis-11/12 font-bold pt-2">
              НАПОМЕНА: Избирате дали сакате свинска или пилешка при нарачување!
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daski;
