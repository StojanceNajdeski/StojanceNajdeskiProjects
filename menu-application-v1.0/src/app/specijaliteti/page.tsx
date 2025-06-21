import Link from "next/link";
import React from "react";

const Specijaliteti = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          Специјалитети
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="border-4 border-dotted p-3 rounded-2xl border-orange-600 ">
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">Свинско во фурна (1кг)</b>
              <b className="basis-1/12">1300</b>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">Телешко во фурна (1кг)</b>
              <b className="basis-1/12">1800</b>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">Шарска плескавица (300гр)</b>
              <b className="basis-1/12">300</b>
            </div>
          </div>
          <div>
            <div className="flex">
              <b className="basis-11/12 uppercase">Шарска плескавица (400гр)</b>
              <b className="basis-1/12">400</b>
            </div>
          </div>
        </div>
        <div className="pb-5 mt-4">
          <div className="flex">
            <b className="basis-11/12 uppercase">Порција стек</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>
            (250гр стек, компири, домат, краставица, подлога, лепче)
          </small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Пилешка шницла</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>
            (250гр похован стек, компири, домат, краставица, подлога, лепче)
          </small>
        </div>
        <h2 className="pt-3 text-xl text-orange-600 font-bold uppercase">
          Сосови
        </h2>
        <div className="pb-2 pt-2">
          <div className="flex">
            <p className="basis-11/12">Бел сос со печурки</p>
            <b className="basis-1/12">80</b>
          </div>
        </div>
        <div className="pb-2">
          <div className="flex">
            <p className="basis-11/12">Кафеав сос</p>
            <b className="basis-1/12">80</b>
          </div>
        </div>
        <div className="pb-2">
          <div className="flex">
            <p className="basis-11/12">Топол кари сос</p>
            <b className="basis-1/12">80</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">Барбикју сос</p>
            <b className="basis-1/12">100</b>
          </div>
        </div>
        <div className="pb-5 pt-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Полнето пилешко</b>
            <b className="basis-1/12">380</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (Пилешки стек, кашкавал, сувомеснато, свежи печурки, компир,
              кајмак, вариво, подлога лепче)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Говедски мускул</b>
            <b className="basis-1/12">650</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              300гр. говедски мускул, сос од печурки <br /> (прилог вариво,
              компир, ориз, лепче)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Рижото со стек</b>
            <b className="basis-1/12">330</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (100гр ориз, 250гр стек, зеленчук, сос од печурки)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Вегетаријанско рижото</b>
            <b className="basis-1/12">330</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (100гр ориз, модар домат, тиквица, зеленчук, сос од печурки)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Телешко бело месо на скара</b>
            <b className="basis-1/12">800</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specijaliteti;
