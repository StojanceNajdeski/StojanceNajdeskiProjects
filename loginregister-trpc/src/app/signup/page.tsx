"use client";

import { useState } from "react";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";

const signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

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
      const usersData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPass: confirmPass,
      };

      const response = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usersData }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
      }

      console.log("User registered sucessfully!");
    } catch (error) {
      console.error("Error inserting user:", error);
    }
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        {error && <p className="text-center text-red-600">{error}</p>}
        <label htmlFor="firstName">First Name</label>
        <input
          type="firstName"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="lastName"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">E - Mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPass">Confirm Password</label>
        <input
          type="password"
          id="confirmPass"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default signup;
