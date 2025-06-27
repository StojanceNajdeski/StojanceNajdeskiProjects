"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotAuthorized = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-3xl font-bold text-red-600">🚫 Немаш пристап 🚫</h1>
    <b className="mt-4 text-gray-700">
      Оваа страница е само за менаџери на Бакарди.
    </b>
    <button
      onClick={() => (window.location.href = "/")}
      className="mt-6 px-4 py-2 bg-red-600 text-white rounded"
    >
      Назад кон почетна
    </button>
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthorized, setIsAuthorized] = useState<null | boolean>(null);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("bakardiAdminLoggedIn");
    setIsAuthorized(!!isLoggedIn);
  }, []);

  if (isAuthorized === null) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <circle
            fill="#FF0000"
            stroke="#FF0000"
            stroke-width="2"
            r="15"
            cx="40"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="1.2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </circle>
          <circle
            fill="#FF0000"
            stroke="#FF0000"
            stroke-width="2"
            r="15"
            cx="100"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="1.2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </circle>
          <circle
            fill="#FF0000"
            stroke="#FF0000"
            stroke-width="2"
            r="15"
            cx="160"
            cy="65"
          >
            <animate
              attributeName="cy"
              calcMode="spline"
              dur="1.2"
              values="65;135;65;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </circle>
        </svg>
      </div>
    );
  }

  return isAuthorized ? <>{children}</> : <NotAuthorized />;
};

export default ProtectedRoute;
