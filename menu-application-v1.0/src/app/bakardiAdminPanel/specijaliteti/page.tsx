"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const Specijaliteti = () => {
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState(false);

  const [prices, setPrices] = useState({
    svinskoFurna: 1300,
    teleskoFurna: 1800,
    sarskaPleskavica300: 300,
    sarskaPleskavica400: 400,

    porcijaStek: 250,
    pileskaSnicla: 250,

    belSos: 80,
    kafeavSos: 80,
    topolKariSos: 80,
    barbikjuSos: 100,

    polnetoPilesko: 380,
    govedskiMuskul: 650,
    rizotoStek: 330,
    vegetarijanskoRizoto: 330,
    teleskoMesoSkara: 330,
  });
  return (
    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">
      <Link href="/bakardiAdminPanel">
        <p className="text-4xl pl-2">🡐</p>
      </Link>
      <div className="justify-center items-center flex flex-col">
        <h1 className="text-center text-3xl">{t("bakardiMeni")}</h1>
        <h2 className="text-center pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("specijaliteti")}
        </h2>
      </div>
      <div className=" w-[90%] mx-auto pt-6">
        <div className="flex justify-center items-center mb-4">
          <button
            className="bg-orange-600 text-white p-1 h-14 w-30 rounded-md"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? (
              "Откажи"
            ) : (
              <>
                Измени <br /> Цена
              </>
            )}
          </button>
          <button className="bg-orange-600 text-white ml-2 p-1 w-30 rounded-md">
            Измени Јадење
          </button>
          <button className="bg-orange-600 text-white ml-2 p-1 w-30 rounded-md">
            Додади Јадење
          </button>
        </div>
        {editMode && (
          <div className="mb-4 flex justify-center items-center">
            <button
              className="bg-green-600 p-2 w-96 text-white px-4 py-2 rounded"
              onClick={() => {
                setEditMode(false);
              }}
            >
              Сними
            </button>
          </div>
        )}
        <div className="border-4 border-dotted p-3 rounded-2xl border-orange-600 ">
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">{t("svinskoFurna")}</b>
              {editMode ? (
                <input
                  type="number"
                  value={prices.svinskoFurna}
                  onChange={(e) =>
                    setPrices({
                      ...prices,
                      svinskoFurna: Number(e.target.value),
                    })
                  }
                  className="w-20 text-center border rounded"
                />
              ) : (
                <b className="basis-1/12">{prices.svinskoFurna}</b>
              )}
            </div>
          </div>
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">{t("teleskoFurna")}</b>
              {editMode ? (
                <input
                  type="number"
                  value={prices.teleskoFurna}
                  onChange={(e) =>
                    setPrices({
                      ...prices,
                      teleskoFurna: Number(e.target.value),
                    })
                  }
                  className="w-20 text-center border rounded"
                />
              ) : (
                <b className="basis-1/12">{prices.teleskoFurna}</b>
              )}
            </div>
          </div>
          <div className="pb-5">
            <div className="flex">
              <b className="basis-11/12 uppercase">
                {t("sharskaPleskavica300")}
              </b>
              {editMode ? (
                <input
                  type="number"
                  value={prices.sarskaPleskavica300}
                  onChange={(e) =>
                    setPrices({
                      ...prices,
                      sarskaPleskavica300: Number(e.target.value),
                    })
                  }
                  className="w-20 text-center border rounded"
                />
              ) : (
                <b className="basis-1/12">{prices.sarskaPleskavica300}</b>
              )}
            </div>
          </div>
          <div>
            <div className="flex">
              <b className="basis-11/12 uppercase">
                {t("sharskaPleskavica400")}
              </b>
              {editMode ? (
                <input
                  type="number"
                  value={prices.sarskaPleskavica400}
                  onChange={(e) =>
                    setPrices({
                      ...prices,
                      sarskaPleskavica400: Number(e.target.value),
                    })
                  }
                  className="w-20 text-center border rounded"
                />
              ) : (
                <b className="basis-1/12">{prices.sarskaPleskavica400}</b>
              )}
            </div>
          </div>
        </div>
        <div className="pb-5 mt-4">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("porcijaStek")}</b>
            {editMode ? (
              <input
                type="number"
                value={prices.porcijaStek}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    porcijaStek: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.porcijaStek}</b>
            )}
          </div>
          <small>{t("porcijaStekDesc")}</small>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("pileskaSnicla")}</b>
            {editMode ? (
              <input
                type="number"
                value={prices.pileskaSnicla}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    pileskaSnicla: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.pileskaSnicla}</b>
            )}
          </div>
          <small>{t("pileskaSniclaDesc")}</small>
        </div>
        <h2 className="pt-3 text-xl text-orange-600 font-bold uppercase">
          {t("sosovi")}
        </h2>
        <div className="pb-2 pt-2">
          <div className="flex">
            <p className="basis-11/12">{t("belSos")}</p>
            {editMode ? (
              <input
                type="number"
                value={prices.belSos}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    belSos: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.belSos}</b>
            )}
          </div>
        </div>
        <div className="pb-2">
          <div className="flex">
            <p className="basis-11/12">{t("kafeavSos")}</p>
            {editMode ? (
              <input
                type="number"
                value={prices.kafeavSos}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    kafeavSos: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.kafeavSos}</b>
            )}
          </div>
        </div>
        <div className="pb-2">
          <div className="flex">
            <p className="basis-11/12">{t("topolKariSos")}</p>
            {editMode ? (
              <input
                type="number"
                value={prices.topolKariSos}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    topolKariSos: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.topolKariSos}</b>
            )}
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <p className="basis-11/12">{t("barbikjuSos")}</p>
            {editMode ? (
              <input
                type="number"
                value={prices.barbikjuSos}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    barbikjuSos: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.barbikjuSos}</b>
            )}
          </div>
        </div>
        <div className="pb-5 pt-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("polnetoPilesko")}</b>
            {editMode ? (
              <input
                type="number"
                value={prices.polnetoPilesko}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    polnetoPilesko: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.polnetoPilesko}</b>
            )}
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("polnetoPileskoDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("govedskiMuskul")}</b>
            {editMode ? (
              <input
                type="number"
                value={prices.govedskiMuskul}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    govedskiMuskul: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.govedskiMuskul}</b>
            )}
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("govedskiMuskulDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("rizotoStek")}</b>
            {editMode ? (
              <input
                type="number"
                value={prices.rizotoStek}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    rizotoStek: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.rizotoStek}</b>
            )}
          </div>
          <div className="flex">
            <small className="basis-11/12">{t("rizotoStekDesc")}</small>
          </div>
        </div>
        <div className="pb-5">
          <div className="flex">
            <b className="basis-11/12 uppercase">{t("vegetarijanskoRizoto")}</b>
            {editMode ? (
              <input
                type="number"
                value={prices.vegetarijanskoRizoto}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    vegetarijanskoRizoto: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.vegetarijanskoRizoto}</b>
            )}
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
            {editMode ? (
              <input
                type="number"
                value={prices.teleskoMesoSkara}
                onChange={(e) =>
                  setPrices({
                    ...prices,
                    teleskoMesoSkara: Number(e.target.value),
                  })
                }
                className="w-20 text-center border rounded"
              />
            ) : (
              <b className="basis-1/12">{prices.teleskoMesoSkara}</b>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specijaliteti;
