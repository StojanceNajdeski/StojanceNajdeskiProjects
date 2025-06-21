import Link from "next/link";
import React from "react";

const Sendvici = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          Сендвичи
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Домашен сендвич</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (домашно лепче, сувомеснато по избор, кашкавал, сос со корнишони)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Комбиниран сендвич</b>
            <b className="basis-1/12">230</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (домашно лепче, две врсти сувомеснато по избор, кашкавал, сос од
              корнишони)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Клуб сендвич</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (сувомеснато по избор, кашкавал, зеленчук, помфрит, сос, кечап и
              мајонез)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Сендвич со стек</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (домашно лепче, сос, стек, зеленчук, помфрит, кечап и мајонез)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Појачан сендвич со стек</b>
            <b className="basis-1/12">230</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (домашно лепче, сос, стек, зеленчук, кашкавал, свежи печурки,
              помфрит, кечап и мајонез)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Сендвич со похован стек</b>
            <b className="basis-1/12">220</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (домашно лепче, кари сос, зеленчук, кромид, помфрит, кечап и
              мајонез)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">
              Појачан сендвич со <br /> похован стек
            </b>
            <b className="basis-1/12">270</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (домашно лепче, кари сос, зеленчук, кромид, помфрит, кашкавал,
              печурки, кечап и мајонез)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Вегетаријански сендвич</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (домашно лепче, кашкавал, свеж зеленчук, печурки, маслинки,
              помфрит, кечап и мајонез)
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Сендвич со туна</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              (туна, зеленчук, кромид, помфрит, маринирани печурки, маслинки,
              кечап)
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sendvici;
