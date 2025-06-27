"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Panceroti = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/bakardiAdminPanel">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("panceroti")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pancerotaKlasik")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <small>{t("pancerotaKlasikDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kombiniranaPancerota")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("kombiniranaPancerotaDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pancerotaStek")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <small>{t("pancerotaStekDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pancerotaBolonjeze")}</b>
            <b className="basis-1/12">220</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panceroti;
