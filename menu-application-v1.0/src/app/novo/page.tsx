"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Novo = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("novo")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("corba")}</b>
            <b className="basis-1/12">160</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("rizotoTelesko")}</b>
            <b className="basis-1/12">450</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("svinskoPecenje")}</b>
            <b className="basis-1/12">400</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("domasniKolbasi")}</b>
            <b className="basis-1/12">1200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("sudzuk")}</b>
            <b className="basis-1/12">1300</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Novo;
