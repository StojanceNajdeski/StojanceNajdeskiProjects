"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Sendvici = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/bakardiAdminPanel">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 uppercase font-bold">
          {t("sendvici")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("domasenSendvic")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("domasenSendvicDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kombiniranSendvic")}</b>
            <b className="basis-1/12">230</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("kombiniranSendvicDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("klubSendvic")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("klubSendvicDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("stekSendvic")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("stekSendvicDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("sendvicSoStekPojacan")}</b>
            <b className="basis-1/12">230</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              {t("sendvicSoStekPojacanDesc")}
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("sendvicSoPohovanStek")}</b>
            <b className="basis-1/12">220</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              {t("sendvicSoPohovanStekDesc")}
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pojacanSoPohovanStek")}</b>
            <b className="basis-1/12">270</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              {t("pojacanSoPohovanStekDesc")}
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">
              {t("vegetarijanskiSendvic")}
            </b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">
              {t("vegetarijanskiSendvicDesc")}
            </small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("tunaSendvic")}</b>
            <b className="basis-1/12">170</b>
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("tunaSendvicDesc")}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sendvici;
