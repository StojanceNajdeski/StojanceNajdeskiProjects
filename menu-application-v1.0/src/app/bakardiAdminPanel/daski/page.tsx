"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Daski = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/bakardiAdminPanel">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("daski")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">
              {t("prsutaOvciKaskavalDaska")}
            </b>
            <b className="basis-1/12">700</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              {t("prsutaOvciKaskavalDaskaDesc")}
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("suvomesnataDaska")}</b>
            <b className="basis-1/12">700</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("suvomesnataDaskaDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("premiumDaska")}</b>
            <b className="basis-1/12">1400</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("premiumDaskaDesc")}</small>
          </div>
          <div className="flex">
            <small className="basis-11/12 font-bold pt-2">
              {t("napomena")}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daski;
