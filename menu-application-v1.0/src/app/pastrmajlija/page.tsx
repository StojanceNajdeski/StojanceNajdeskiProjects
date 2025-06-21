import Link from "next/link";
import React from "react";

const Pastrmajlija = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          Пастрмајлија
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Свинска пастрмајлија</b>
            <b className="basis-1/12">300</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">(месо, лути пиперки)</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Пилешка пастрмајлија</b>
            <b className="basis-1/12">300</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">(месо, лути пиперки)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pastrmajlija;
