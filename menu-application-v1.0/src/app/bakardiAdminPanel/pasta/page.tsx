"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Pasta = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/bakardiAdminPanel">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("pasta")}
        </h2>
        <small className="font-bold">{t("spagetiMakaroni")}</small>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("italijana")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("italijanaDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("bolonjeze")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("bolonjezeDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("fungiVoBelSos")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("fungiVoBelSosDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("stekPecurki")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("stekPecurkiDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("karbonara")}</b>
            <b className="basis-1/12">280</b>
          </div>
          <small>{t("karbonaraDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("vegetarijana")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <small>{t("vegetarijanaDesc")}</small>
        </div>
      </div>
    </div>
  );
};

export default Pasta;
