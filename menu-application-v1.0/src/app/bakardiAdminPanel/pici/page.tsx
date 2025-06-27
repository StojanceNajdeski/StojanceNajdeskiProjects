"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const Pici = () => {
  const { t } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/bakardiAdminPanel">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("pici")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("margarita")}</b>
            <b className="basis-1/12">230/450</b>
          </div>
          <small>{t("margaritaDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kapricioza")}</b>
            <b className="basis-1/12">280/550</b>
          </div>
          <small>{t("kapriciozaDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase whitespace-pre-line">
              {t("picaSuvomesnata")}
            </b>
            <b className="basis-1/12">300/600</b>
          </div>
          <small>{t("picaSuvomesnataDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kombiniranaPica")}</b>
            <b className="basis-1/12">350/700</b>
          </div>
          <small>{t("kombiniranaPicaDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("fungi")}</b>
            <b className="basis-1/12">280/550</b>
          </div>
          <small>{t("fungiDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("vegetarijanaPica")}</b>
            <b className="basis-1/12">280/550</b>
          </div>
          <small>{t("vegetarijanaDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kalcone")}</b>
            <b className="basis-1/12">300</b>
          </div>
          <small>{t("kalconeDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("picaStek")}</b>
            <b className="basis-1/12">300/600</b>
          </div>
          <small>{t("picaStekDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("picaTuna")}</b>
            <b className="basis-1/12">300/600</b>
          </div>
          <small>{t("picaTunaDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("kvatroFormadzi")}</b>
            <b className="basis-1/12">350/700</b>
          </div>
          <small>{t("kvatroFormadziDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("picaPrsuta")}</b>
            <b className="basis-1/12">400/800</b>
          </div>
          <small>{t("picaPrsutaDesc")}</small>
        </div>
        <h2 className="text-center pt-1 text-xl text-orange-600 font-bold uppercase">
          {t("suvomesnato")}
        </h2>
        <h3 className="text-center pt-1 pb-4 font-bold">
          {t("suvomesnatoLista")}
        </h3>
        <div className="pb-5">
          <div>
            <b className="basis-11/12 uppercase">- {t("pileskaSunka")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("svinskiVrat")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("slanina")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("pileskoFile")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("svinskiKulen")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("govedskiKulen")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("govedskoFile")}</b>
            <br />
            <b className="basis-11/12 uppercase">- {t("svinskaPecenica")}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pici;
