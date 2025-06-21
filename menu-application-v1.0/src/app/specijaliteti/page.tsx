"use client";
import Link from "next/link";
import React from "react";
import "../../../i18n";
import { useTranslation } from "react-i18next";
const Specijaliteti = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("specijaliteti")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="border-4 border-dotted p-3 rounded-2xl border-orange-600 ">
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">{t("svinskoFurna")}</b>
              <b className="basis-1/12">1300</b>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">{t("teleskoFurna")}</b>
              <b className="basis-1/12">1800</b>
            </div>
          </div>
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">
                {t("sharskaPleskavica300")}
              </b>
              <b className="basis-1/12">300</b>
            </div>
          </div>
          <div>
            <div className="flex">
              <b className="basis-11/12 uppercase">
                {t("sharskaPleskavica400")}
              </b>
              <b className="basis-1/12">400</b>
            </div>
          </div>
        </div>
        <div className="pb-5 mt-4">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("porcijaStek")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("porcijaStekDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pileskaSnicla")}</b>
            <b className="basis-1/12">250</b>
          </div>
          <small>{t("pileskaSniclaDesc")}</small>
        </div>
        <h2 className="pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("sosovi")}
        </h2>
        <div className="pb-2 pt-2">
          <div className="flex">
            <p className="basis-11/12">{t("belSos")}</p>
            <b className="basis-1/12">80</b>
          </div>
        </div>
        <div className="pb-2">
          <div className="flex">
            <p className="basis-11/12">{t("kafeavSos")}</p>
            <b className="basis-1/12">80</b>
          </div>
        </div>
        <div className="pb-2">
          <div className="flex">
            <p className="basis-11/12">{t("topolKariSos")}</p>
            <b className="basis-1/12">80</b>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("barbikjuSos")}</p>
            <b className="basis-1/12">100</b>
          </div>
        </div>
        <div className="pb-5 pt-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("polnetoPilesko")}</b>
            <b className="basis-1/12">380</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("polnetoPileskoDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("govedskiMuskul")}</b>
            <b className="basis-1/12">650</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("govedskiMuskulDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("rizotoStek")}</b>
            <b className="basis-1/12">330</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("rizotoStekDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("vegetarijanskoRizoto")}</b>
            <b className="basis-1/12">330</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              {t("vegetarijanskoRizotoDesc")}
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("teleskoBelo")}</b>
            <b className="basis-1/12">800</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specijaliteti;
