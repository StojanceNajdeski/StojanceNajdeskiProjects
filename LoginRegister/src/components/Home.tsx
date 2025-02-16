import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      const foundUser = users.find((user) => user.email === decodedToken.email);

      if (foundUser) {
        setCurrentUser(foundUser);
      }
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <div className="bg-gray-300 mt-8 rounded-xl w-9/10 mx-auto p-6">
        {currentUser ? (
          <div>
            <h1 className="text-4xl font-bold text-center mb-5">
              Welcome, {currentUser.firstName} {currentUser.lastName}!
            </h1>
          </div>
        ) : (
          <h1 className="text-4xl font-bold text-center mb-5">
            You are not registered yet
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
