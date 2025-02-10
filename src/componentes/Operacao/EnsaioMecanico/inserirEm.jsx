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
      <div className="flex  items-center justify-center min-h-screen flex-col">
        <h1 className=" font-light text-3xl italic">
          Insira os resultados do Ensaio Mecânico:
        </h1>
        <div className="border-2 border-gray-300 mt-5 flex p-2 flex-wrap max-w-[800px] ">
          <div className="p-2 flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">
              Tempera:
            </label>
            <select
              name="tempera"
              value={value.tempera || ""}
              onChange={handleTemperaChange}
              className="w-[130px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
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
            <div key={index} className="p-2 flex text-center flex-col">
              <label className="text-sm font-medium text-gray-600">
                {label}:
              </label>
              <input
                name={label}
                value={dadosTracion[label] || ""} // Garante que os valores sejam controlados
                onChange={(e) =>
                  setDadosTracion((prev) => ({
                    ...prev,
                    [label]: e.target.value,
                  }))
                }
                className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                type="text"
                disabled={isDisabled}
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-4 mt-5">
          <button className="font-bold hover:scale-105 w-[150px] h-[40px] bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-500">
            Inserir
          </button>
          <button
            onClick={handleLimpar}
            className="font-bold hover:scale-105 w-[150px] h-[40px] bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-500"
          >
            Limpar
          </button>
          <button
            onClick={() => navigate("/resultadosEm")}
            className="font-bold hover:scale-105 w-[150px] h-[40px] bg-orange-400 text-white py-2 rounded-md hover:bg-orange-700 transition duration-500"
          >
            Resultados
          </button>
          <button
            onClick={() => navigate("/menu")}
            className="font-bold hover:scale-105 w-[150px] h-[40px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-500"
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
}

export default InserirEm;
