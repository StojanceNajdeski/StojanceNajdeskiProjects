"use client";
import Link from "next/link";
import React, { useTransition } from "react";
import "../../../i18n";
import { useTranslation } from "react-i18next";

const Pojadok = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/bakardiAdminPanel">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("pojadok")}
        </h2>
        <small className="font-bold">{t("seSluziDo")}</small>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("omlet1")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <small>{t("omlet1Desc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("omlet2")}</b>
            <b className="basis-1/12">200</b>
          </div>
          <small>{t("omlet2Desc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("omletVegetarijanski")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <small>{t("omletVegetarijanskiDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("omletKombiniran")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("omletKombiniranDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("bekendegs")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("bekendegsDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("mekica")}</b>
            <b className="basis-1/12">20</b>
          </div>
          <small>{t("mekicaDesc")}</small>
        </div>
      </div>
    </div>
  );
};

export default Pojadok;
