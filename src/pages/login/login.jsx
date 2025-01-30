import { useState } from "react";
import loginIMG from "../../assets/img/csn.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "labfm" && password === "labgee") {
      navigate("/menu");
    } else {
      setError("Usuário ou senha invalidos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="font-bold text-3xl text-center mb-6 text-gray-800">
          Laboratório FM
        </h1>
        <div className="flex items-center justify-center mb-6">
          <div className="w-60">
            <img src={loginIMG} alt="" />
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Usuário:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Digite seu usuário"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Senha:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Digite sua senha"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="hover:scale-105 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Entrar
          </button>
        </form>
        <button
          onClick={(e) => {
            navigate("/consulta");
          }}
          className="mt-5 hover:scale-105 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Consultar
        </button>
      </div>
    </div>
  );
}

export default Login;
