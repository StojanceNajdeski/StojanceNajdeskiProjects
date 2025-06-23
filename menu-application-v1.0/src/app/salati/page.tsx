"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Salati = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("salati")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("mesanaSalata")}</b>
            <b className="basis-1/12">160</b>
          </div>
          <small>{t("mesanaSalataDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("sopskaSalata")}</b>
            <b className="basis-1/12">160</b>
          </div>
          <small>{t("sopskaSalataDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("grckaSalata")}</b>
            <b className="basis-1/12">180</b>
          </div>
          <small>{t("grckaSalataDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("makedonskaSalata")}</b>
            <b className="basis-1/12">200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("tunaSalata")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("tunaSalataDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("cezarSalata")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("cezarSalataDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("domasnaSalata")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("domasnaSalataDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("taraturSalata")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("taraturSalataDesc")}</small>
        </div>
      </div>
    </div>
  );
};

export default Salati;
