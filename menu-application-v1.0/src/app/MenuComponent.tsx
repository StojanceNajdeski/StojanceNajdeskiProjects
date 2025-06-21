"use client";
import Link from "next/link";
import "../../i18n";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const MenuComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl justify-center items-center flex flex-col">
      <div className="flex w-10 h-15 gap-2 justify-center items-center">
        <Image
          src="/english.png"
          alt="englishLanguageLogo"
          className="mt-4"
          width={40}
          height={50}
          onClick={() => i18n.changeLanguage("en")}
        />
        <Image
          src="/flag-north-macedonia_1f1f2-1f1f0.png"
          alt="macedoniaLanguageLogo"
          className="mt-4"
          width={40}
          height={50}
          onClick={() => i18n.changeLanguage("mk")}
        />
        <Image
          src="/albania.png"
          alt="albaniaLanguageLogo"
          className="mt-4"
          width={40}
          height={50}
          onClick={() => i18n.changeLanguage("al")}
        />
      </div>
      <h1 className="text-center py-4 text-3xl">{t("bakardiMeni")}</h1>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/specijaliteti">{t("specijaliteti")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/novo">{t("novo")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/pojadok">{t("pojadok")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/dodatoci">{t("dodatoci")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/panceroti">{t("panceroti")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="furnarinki">{t("furnarinki")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="meze">{t("meze")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="sirenje">{t("sirenje")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/salati">{t("salati")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/pasta">{t("pasta")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/pici">{t("pici")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/rolsendvici">{t("rolSendvici")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/burgeri">{t("burgeri")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/sendvici">{t("sendvici")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/daski">{t("daski")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/pastrmajlija">{t("pastrmajlija")}</Link>
      </button>
      <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
        <Link href="/deserti">{t("deserti")}</Link>
      </button>
    </div>
  );
};

export default MenuComponent;
