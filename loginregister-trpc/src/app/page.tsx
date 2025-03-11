"use client";

import { useEffect, useState } from "react";
import Navbar from "~/Navbar";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    setUserName(storedUserName);
    setIsLoggedIn(!!storedUserName);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-5 w-2/5 rounded-xl bg-slate-400 pb-4 pt-4 text-center text-4xl text-white">
        {isLoggedIn ? (
          <h1>Welcome, {userName}!</h1>
        ) : (
          <h1>You are not registered yet</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
