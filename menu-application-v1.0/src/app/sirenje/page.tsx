"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Sirenje = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("sirenje")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kravjoSirenje")}</b>
            <b className="basis-1/12">180</b>
          </div>
          <small>{t("kravjoSirenjeDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("ovcoSirenje")}</b>
            <b className="basis-1/12">200</b>
          </div>
          <small>{t("ovcoSirenjeDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("bienoNaSkara")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("bienoNaSkaraDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("rolovanoSirenje")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("rolovanoSirenjeDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("topenoSirenje1")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("topenoSirenje1Desc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("topenoSirenje2")}</b>
            <b className="basis-1/12">280</b>
          </div>
          <small>{t("topenoSirenje2Desc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("plavoSirenje")}</b>
            <b className="basis-1/12">350</b>
          </div>
          <small>{t("plavoSirenjeDesc")}</small>
        </div>
      </div>
    </div>
  );
};

export default Sirenje;
