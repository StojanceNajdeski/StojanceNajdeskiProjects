import React from "react";
import Navbar from "~/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto mt-5 w-2/5 rounded-xl bg-slate-400 pb-4 pt-4 text-center text-4xl text-white">
        <h1>You are not registered yet</h1>
      </div>
    </div>
  );
};

export default Home;
