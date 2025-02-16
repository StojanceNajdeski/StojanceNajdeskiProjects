import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    const loginData = { email, password };
    setLoading(true);

    try {
      console.log("Logging in with", loginData);

      const response = await axios.post(
        "http://localhost:8080/login",
        loginData
      );

      console.log("Login successful:", response.data);

      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error: any) {
      setLoading(false);

      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        setError(error.response?.data?.message || "Something went wrong.");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="bg-gray-300 mt-35 rounded-xl w-90 mx-auto p-15 text-center"
      >
        <h1 className="text-4xl text-center mb-5">Login</h1>
        {error && <div className="text-red-500 text-center mb-3">{error}</div>}

        <div>
          <label htmlFor="email">E-Mail</label>
          <br />
          <input
            type="email"
            id="email"
            className="p-1 mb-3"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            className="p-1 mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-50 bg-purple-600 text-white px-5 py-2 rounded-lg"
          disabled={loading}
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        <p>
          Don't have an account?{" "}
          <Link
            to="/signUp"
            className="underline from-purple-500 via-purple-600 to-purple-700"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
