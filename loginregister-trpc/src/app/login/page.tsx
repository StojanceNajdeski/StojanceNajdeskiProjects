"use client";

import Navbar from "~/Navbar";
import { trpc, trpcClient } from "../../utils/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const queryClient = new QueryClient();

const LoginPage = () => {
  const navigate = useRouter();
  const [error, setError] = useState("");
  const loginMutation = trpc.auth.login.useMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    try {
      const response = await loginMutation.mutateAsync({ email, password });
      localStorage.setItem("token", response.token);

      if (response.user.name) {
        localStorage.setItem("userName", response.user.name);
      } else {
        localStorage.setItem("userName", "Guest");
      }

      console.log("Login Successful:", response.user);
      navigate.push("/");
    } catch (error: any) {
      if (!email || !password) {
        setError(error.message);
      }
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <Navbar />
        <form onSubmit={handleLogin} className="mx-auto text-center">
          {error && (
            <div className="mb-3 text-center text-red-500">{error}</div>
          )}
          <br />
          <label htmlFor="email">E - Mail</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <br />
          <br />
          <button
            type="submit"
            className="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </trpc.Provider>
    </QueryClientProvider>
  );
};

export default LoginPage;
