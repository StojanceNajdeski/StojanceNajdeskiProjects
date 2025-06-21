"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const Dodatoci = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl ">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("dodatoci")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("bakardiSos")}</b>
            <b className="basis-1/12">50</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("ladenKariSos")}</b>
            <b className="basis-1/12">50</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("kecapMajonez100")}</b>
            <b className="basis-1/12">50</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("kecapMajonez")}</b>
            <b className="basis-1/12">30</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("meksikanaSos")}</b>
            <b className="basis-1/12">50</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("jajce")}</b>
            <b className="basis-1/12">40</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("varivoBrokula")}</b>
            <b className="basis-1/12">70</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("pavlaka")}</b>
            <b className="basis-1/12">40</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("maslinki")}</b>
            <b className="basis-1/12">70</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("kajmak")}</b>
            <b className="basis-1/12">60</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("pomfrit")}</b>
            <b className="basis-1/12">60</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("sirenjeDodatok")}</b>
            <b className="basis-1/12">60</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("piperka")}</b>
            <b className="basis-1/12">40</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12">{t("jogurt")}</b>
            <b className="basis-1/12">60</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dodatoci;
