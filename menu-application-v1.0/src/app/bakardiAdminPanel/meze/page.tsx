"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Meze = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/bakardiAdminPanel">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("meze")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("sampinjoni200")}</b>
            <b className="basis-1/12">200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("sampinjoniKaskaval")}</b>
            <b className="basis-1/12">250</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pileskiKrilca")}</b>
            <b className="basis-1/12">800</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pileskiStek")}</b>
            <b className="basis-1/12">700</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pomfrit300")}</b>
            <b className="basis-1/12">100/160</b>
          </div>
          <small>{t("pomfrit300Desc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("spajsiKompir300")}</b>
            <b className="basis-1/12">120/180</b>
          </div>
          <small>{t("spajsiKompir300Desc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("solenaPalacinka")}</b>
            <b className="basis-1/12">120</b>
          </div>
          <small>{t("solenaPalacinkaDesc")}</small>
        </div>
      </div>
    </div>
  );
};

export default Meze;
