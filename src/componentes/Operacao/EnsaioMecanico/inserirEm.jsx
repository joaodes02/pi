import { useNavigate } from "react-router-dom";
import { useState } from "react";

function InserirEm({ value, setValue }) {
  const valorInitialTracion = {
    tempera: "",
    Item: "",
    Bobina: "",
    Espessura: "",
    LE: "",
    LR: "",
    Alongamento: "",
    R: "",
    N: "",
  };
  const [dadosTracion, setDadosTracion] = useState(valorInitialTracion);
  const handleLimpar = () => {
    setDadosTracion(valorInitialTracion);
    setValue((prev) => ({
      ...prev,
      tempera: "",
      Item: "",
      Bobina: "",
      Espessura: "",
      LE: "",
      LR: "",
      Alongamento: "",
      R: "",
      N: "",
    }));
  };
  const navigate = useNavigate();
  const temperas = [
    "TH390",
    "TH415",
    "TH435",
    "TH390",
    "TH550",
    "DR550",
    "DR620",
    "DR8",
    "T4",
    "TS275",
    "TS245",
    "EXPERIÊNCIA",
  ];

  const handleTemperaChange = (e) => {
    setValue((prev) => ({ ...prev, tempera: e.target.value }));
  };

  const isDisabled = !value.tempera; // Bloqueia os inputs se "tempera" não estiver selecionado

  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen flex-col bg-gradient-to-r from-blue-50 to-blue-100 py-8">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
          Insira os resultados do Ensaio Mecânico:
        </h1>
        <div className="border-2 border-gray-300 mt-5 p-4 flex flex-wrap max-w-[800px] bg-white rounded-lg shadow-lg">
          <div className="p-4 w-full sm:w-1/2 md:w-1/4 flex text-center flex-col mb-4">
            <label className="text-sm font-medium text-gray-600 mb-2">
              Tempera:
            </label>
            <select
              name="tempera"
              value={value.tempera || ""}
              onChange={handleTemperaChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            >
              <option value="" disabled>
                Selecione
              </option>
              {temperas.map((index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </div>

          {[
            "Item",
            "Bobina",
            "Espessura",
            "LE",
            "LR",
            "Alongamento",
            "R",
            "N",
          ].map((label, index) => (
            <div
              key={index}
              className="p-4 w-full sm:w-1/2 md:w-1/4 flex text-center flex-col mb-4"
            >
              <label className="text-sm font-medium text-gray-600 mb-2">
                {label}:
              </label>
              <input
                name={label}
                value={dadosTracion[label] || ""}
                onChange={(e) =>
                  setDadosTracion((prev) => ({
                    ...prev,
                    [label]: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                type="text"
                disabled={isDisabled}
              />
            </div>
          ))}
        </div>

        <div className=" flex flex-col absolute right-80 top-50 space-y-4">
          <button className="font-bold hover:scale-105 w-[200px] h-[50px] bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
            Inserir
          </button>
          <button
            onClick={handleLimpar}
            className="font-bold hover:scale-105 w-[200px] h-[50px] bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Limpar
          </button>
          <button
            onClick={() => navigate("/resultadosEm")}
            className="font-bold hover:scale-105 w-[200px] h-[50px] bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-300"
          >
            Resultados
          </button>
          <button
            onClick={() => navigate("/menu")}
            className="font-bold hover:scale-105 w-[200px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
}

export default InserirEm;
