import { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setError("Passwords do not match");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    setError("");

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const emailExists = existingUsers.some((user: any) => user.email === email);

    if (emailExists) {
      setError("Email already registered");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/register", userData);
      console.log("Server Response:", res.data);

      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPass("");

      navigate("/login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Error Response:", err.response?.data);
        setError(err.response?.data.message || "An error occurred");
      } else {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="text-center">
        <div className="bg-gray-300 mt-35 rounded-xl w-90 mx-auto p-15">
          <h1 className="text-4xl text-center mb-5">Sign Up</h1>
          {error && <p className="text-red-600 text-center">{error}</p>}
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="p-1 mb-3"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="p-1 mb-3"
              value={lastName}
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="E-Mail"
              className="p-1 mb-3"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="p-1 mb-3"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              type="password"
              id="confirmPass"
              placeholder="Confirm Password"
              className="p-1"
              value={confirmPass}
              required
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
          <br />
          <button
            type="submit"
            className="w-50 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
          <br />
          <p>
            Already have an account?
            <Link
              to="/login"
              className="underline from-purple-500 via-purple-600 to-purple-700"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
