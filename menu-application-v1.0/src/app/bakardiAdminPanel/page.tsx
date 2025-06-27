"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../../../i18n";
import { useTranslation } from "react-i18next";
import ProtectedRoute from "../ProtectedRoute";

export default function BakardiAdminPanel() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("bakardiAdminLoggedIn");
    router.push("/bakardiAdminLogin");
  };
  const { t } = useTranslation();

  return (
    <ProtectedRoute>
      <div className="p-5">
        <div className="flex justify-center items-center">
          <button
            className="bg-red-600 text-white py-2 px-5 rounded-md"
            onClick={handleLogout}
          >
            Одјави се
          </button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Добредојдовте во <br /> Админ Панелот
          </h1>
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl justify-center items-center flex flex-col">
          <h1 className="text-center py-4 text-3xl">{t("bakardiMeni")}</h1>
          <div className="flex justify-center items-center">
            <button className="bg-orange-600 text-white p-3 w-50 mb-5 rounded-2xl">
              Додади Категорија
            </button>
          </div>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/specijaliteti">
              {t("specijaliteti")}
            </Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/novo">{t("novo")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/pojadok">{t("pojadok")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/dodatoci">{t("dodatoci")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/panceroti">{t("panceroti")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/furnarinki">{t("furnarinki")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/meze">{t("meze")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/sirenje">{t("sirenje")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/salati">{t("salati")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/pasta">{t("pasta")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/pici">{t("pici")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/rolsendvici">
              {t("rolSendvici")}
            </Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/burgeri">{t("burgeri")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/sendvici">{t("sendvici")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/daski">{t("daski")}</Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/pastrmajlija">
              {t("pastrmajlija")}
            </Link>
          </button>
          <button className="bg-red-400 text-white p-3 w-50 mb-5 rounded-2xl">
            <Link href="/bakardiAdminPanel/deserti">{t("deserti")}</Link>
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
