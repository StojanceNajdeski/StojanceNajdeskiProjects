"use client";
import Link from "next/link";
import React from "react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
const Furnarinki = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("furnarinki")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("lukarinka")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("lukarinkaDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">
              {t("zdenkaKaskavalMaslinki")}
            </b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("zdenkaKaskavalMaslinkiDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("suvomesnata")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("suvomesnataDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kombinirana")}</b>
            <b className="basis-1/12">300</b>
          </div>
          <small>{t("kombiniranaDesc")}</small>
        </div>
      </div>
    </div>
  );
};

export default Furnarinki;
