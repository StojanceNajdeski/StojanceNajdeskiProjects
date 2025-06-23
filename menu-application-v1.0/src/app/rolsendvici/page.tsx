"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Rolsendvici = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("rolSendvici")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("chickenRol")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("chickenRolDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pojachanChickenRol")}</b>
            <b className="basis-1/12">230</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("pojachanChickenRolDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("suvomesnatoRol")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("suvomesnatoRolDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("tunaRol")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("tunaRolDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("vegetarijanskiRol")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("vegetarijanskiRolDesc")}</small>
          </div>
        </div>
        <h2 className="text-center pt-3 pb-3 text-xl text-orange-600 uppercase font-bold">
          {t("novo")}
        </h2>
        <div className="border-4 rounded-2xl border-dotted p-3">
          <div className="pb-5 pt-2">
            <div className="flex">
              <b className="basis-11/12 uppercase whitespace-pre-line">
                {t("burritoSvinsko")}
              </b>
              <b className="basis-1/12">250</b>
            </div>
          </div>
          <div className="pb-2">
            <div className="flex">
              <b className="basis-11/12 uppercase whitespace-pre-line">
                {t("burritoTelesko")}
              </b>
              <b className="basis-1/12">300</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rolsendvici;
