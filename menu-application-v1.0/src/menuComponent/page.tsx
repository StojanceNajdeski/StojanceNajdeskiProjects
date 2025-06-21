import Link from "next/link";
import React from "react";
import english from "../../public/english.png";
import macedonia from "../../public/flag-north-macedonia_1f1f2-1f1f0.png";
import albania from "../../public/albania.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const MenuComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl justify-center items-center flex flex-col">
      <div className="flex w-10 h-15 gap-2 justify-center items-center">
        <Image
          src={english}
          alt="englishLanguageLogo"
          className="mt-4"
          onClick={() => i18n.changeLanguage("en")}
        />
        <Image
          src={macedonia}
          alt="macedoniaLanguageLogo"
          className="mt-4"
          onClick={() => i18n.changeLanguage("mk")}
        />
        <Image
          src={albania}
          alt="albaniaLanguageLogo"
          className="mt-4"
          onClick={() => i18n.changeLanguage("al")}
        />
      </div>
      <h1 className="text-center py-4 text-3xl">Бакарди Мени</h1>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/specijaliteti">Специјалитети</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/novo">Ново</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/pojadok">Појадок</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/dodatoci">Додатоци</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/panceroti">Панцероти</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="furnarinki">Фурнаринки</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="meze">Мезе</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="sirenje">Сирење</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/salati">Салати</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/pasta">Паста</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/pici">Пици</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/rolsendvici">Рол Сендвичи</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/burgeri">Бургери</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/sendvici">Сендвичи</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/daski">Даски</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/pastrmajlija">Пастрмајлија</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/deserti">Десерти</Link>
      </button>
    </div>
  );
};

export default MenuComponent;
