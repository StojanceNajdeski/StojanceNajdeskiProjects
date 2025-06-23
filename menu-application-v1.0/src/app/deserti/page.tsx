"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Deserti = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("deserti")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("trilece")}</p>
            <b className="basis-1/12">70</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12 text-orange-600">{t("kolacNaDenot")}</p>
            <b className="basis-1/12 text-orange-600">80</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12 whitespace-pre-line">
              {t("palacinkaKremBananaBiskvitaSlag")}
            </p>
            <b className="basis-1/12">120</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("palacinkaMedOrevi")}</p>
            <b className="basis-1/12">120</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("ovosnaVafla")}</p>
            <b className="basis-1/12">200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("nutelaVafla")}</p>
            <b className="basis-1/12">200</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("kombiniranaVafla")}</p>
            <b className="basis-1/12">250</b>
          </div>
        </div>
        <b>{t("napomena1")}</b>
        <p className="whitespace-pre-line">{t("napomena2")}</p>
      </div>
    </div>
  );
};

export default Deserti;
