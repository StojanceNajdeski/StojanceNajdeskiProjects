"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const USERNAME = "bakardiAdmin";
const PASSWORD = "bakardiAdmin";

const BakardiAdmin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === USERNAME && password === PASSWORD) {
      localStorage.setItem("bakardiAdminLoggedIn", "true");
      router.push("/bakardiAdminPanel");
    } else {
      setError("Не постои таков корисник! Обиди се повторно");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href="/">
        <p className="text-4xl pl-2 absolute top-4 left-4 cursor-pointer">🡐</p>
      </Link>
      <div className="relative text-base sm:text-lg md:text-xl lg:text-2xl">
        <div>
          <h2 className="text-center text-4xl text-orange-600 font-bold">
            Бакарди <br />
            Админ Панел
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 flex flex-col items-center">
              <label
                htmlFor="username"
                className="font-bold text-xl w-64 text-left mb-1"
              >
                Корисничко име
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="border-2 rounded-md w-64 h-8"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <label
                htmlFor="password"
                className="font-bold text-xl w-64 text-left mb-1"
              >
                Пасворд
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="border-2 rounded-md w-64 h-8"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <div className="mt-5">
              <input type="checkbox" id="remember" className="w-4" />
              <label htmlFor="remember" className="ml-1">
                Зачувај ме најавен
              </label>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="mt-5 bg-orange-600 text-white rounded-md py-2 px-20"
                type="submit"
              >
                Најави се
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BakardiAdmin;
