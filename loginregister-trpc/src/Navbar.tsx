import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    setIsLoggedIn(!!userName);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-slate-600 pb-5 pt-5">
      <div className="mx-auto ml-10 mr-10 flex justify-between text-3xl">
        <div className="text-white">
          <Link href="/">Home</Link>
        </div>
        <div className="flex">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded border border-red-700 bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="mr-3 rounded border border-red-700 bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded border border-green-700 bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
