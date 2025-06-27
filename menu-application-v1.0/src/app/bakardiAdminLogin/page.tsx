"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const USERNAME = "bakardiAdmin";
const PASSWORD = "bakardiAdmin";

export default function BakardiAdminLogin() {
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
      setError("Грешно корисничко име или пасворд");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-8 rounded-md w-80"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-orange-600">
          БАКАРДИ АДМИН ПАНЕЛ
        </h2>
        <input
          type="text"
          placeholder="Корисничко име"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Пасворд"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
        >
          Најави се
        </button>
      </form>
    </div>
  );
}
