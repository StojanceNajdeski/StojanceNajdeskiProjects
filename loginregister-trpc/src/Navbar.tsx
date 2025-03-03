import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-600 pb-5 pt-5">
      <div className="mx-auto ml-10 mr-10 flex justify-between text-3xl">
        <div className="text-white">
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link
            href="/login"
            className="mr-4 rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
