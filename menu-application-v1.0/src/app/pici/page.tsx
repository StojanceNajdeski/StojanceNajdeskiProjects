import Link from "next/link";
import React from "react";

const Pici = () => {
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">Бакарди Мени</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          Пици
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Маргарита</b>
            <b className="basis-1/12">230/450</b>
          </div>
          <small>(сос, кашкавал)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Капричиоза</b>
            <b className="basis-1/12">280/550</b>
          </div>
          <small>(сос, кашкавал, пилешка шунка, печурки)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">
              Пица со сувомеснато <br /> по избор
            </b>
            <b className="basis-1/12">300/600</b>
          </div>
          <small>(сос, кашкавал, сувомеснато, печурки)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Комбинирана пица</b>
            <b className="basis-1/12">350/700</b>
          </div>
          <small>
            (сос, кашкавал, две врсти сувомеснато по избор, печурки)
          </small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Фунги</b>
            <b className="basis-1/12">280/550</b>
          </div>
          <small>(сос, кашкавал, печурки)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Вегетаријана</b>
            <b className="basis-1/12">280/550</b>
          </div>
          <small>(сос, кашкавал, свеж зеленчук, кромид, печурки)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Калцоне</b>
            <b className="basis-1/12">300</b>
          </div>
          <small>(затворена пица со сос, кашкавал, шунка, печурки)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Пица со стек</b>
            <b className="basis-1/12">300/600</b>
          </div>
          <small>(сос, кашкавал, стек, печурки)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Пица со туна</b>
            <b className="basis-1/12">300/600</b>
          </div>
          <small>(сос, кашкавал, туна, печурки)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Кватро формаџи</b>
            <b className="basis-1/12">350/700</b>
          </div>
          <small>(сос, кашкавал, моцарела, пармезан, горгонзола)</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">Пица со пршута</b>
            <b className="basis-1/12">400/800</b>
          </div>
          <small>
            (сос, кашкавал, пршута по избор (свинска или говедска), печурки)
          </small>
        </div>
        <h2 className="text-center pt-1 text-xl text-orange-600 font-bold uppercase">
          Сувомеснато
        </h2>
        <h3 className="text-center pt-1 pb-4 font-bold">
          (листа на сувомеснати производи кои ги имаме на понуда)
        </h3>
        <div className="pb-5">
          <div>
            <b className="basis-11/12 uppercase">- Пилешка шунка</b>
            <br />
            <b className="basis-11/12 uppercase">- Свински врат</b>
            <br />
            <b className="basis-11/12 uppercase">- Сланина</b>
            <br />
            <b className="basis-11/12 uppercase">- Пилешко филе</b>
            <br />
            <b className="basis-11/12 uppercase">- Свински кулен</b>
            <br />
            <b className="basis-11/12 uppercase">- Говедски кулен</b>
            <br />
            <b className="basis-11/12 uppercase">- Говедско филе</b>
            <br />
            <b className="basis-11/12 uppercase">- Свинска печеница</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pici;
