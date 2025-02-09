import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token"); // remove token
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="font-bold hover:scale-105 w-[200px] h-[50px] bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-500"
    >
      Sair
    </button>
  );
};

export default LogoutButton;
