"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "~/Navbar";

const signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      setError("Password must be atleast 8 characters");
    } else if (confirmPass !== password) {
      setError("Password doesn't match");
    } else if (!firstName || !lastName || !email || !password || !confirmPass) {
      setError("All fields are required");
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();
      console.log("Success:", data);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error:", errorText);
      }

      console.log("User registered sucessfully!");

      navigate.push("/");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");
    } catch (error) {
      console.error("Error inserting user:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-zinc-500 text-center"
        >
          {error && <p className="text-center text-red-600">{error}</p>}
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label htmlFor="email">E - Mail</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label htmlFor="confirmPass">Confirm Password</label>
          <br />
          <input
            type="password"
            id="confirmPass"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <br />
          <br />
          <button
            type="submit"
            className="rounded border border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default signup;
