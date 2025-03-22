import axios from "axios";
import React, { useState, useEffect } from "react";
import { data, useNavigate } from "react-router-dom";

function DadosConsultaEm({ dadosTracion, setDadosTracion }) {
  const navigate = useNavigate();

  // Definindo o estado da data inicial como a data de hoje
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ajusta para 00:00 para garantir que só retornem dados de hoje
    return today; // Converte para o formato ISO (2025-02-13T00:00:00.000Z)
  });

  useEffect(() => {
    if (!startDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      setStartDate(today);
    }
  }, []);

  const formattedStartDate = startDate ? startDate.toISOString() : "";
  const [turno, setTurno] = useState("");

  // Função para lidar com a alteração da data
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    console.log("Data selecionada:", selectedDate);

    if (selectedDate) {
      setStartDate(new Date(selectedDate));
    } else {
      setStartDate(new Date()); // Garante que sempre tenha uma data
    }
  };

  console.log(startDate);

  const turnos = Array.from({ length: 3 }, (_, i) => {
    const turno = i + 1;
    return `Turno - ${turno}`;
  });

  const handleTurno = (event) => {
    setTurno(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 h-screen p-4">
        <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-xl border border-gray-300 w-[600px]">
          <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
            Ensaio Mecânico - Folhas Metálicas
          </h1>

          <div className="p-6 border rounded-lg bg-gray-50 shadow-md flex flex-col space-y-6 w-full">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Turno:
                </label>
                <select
                  value={turno}
                  onChange={handleTurno}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {turnos.map((turno, index) => (
                    <option key={index} value={turno}>
                      {turno}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Data:
                </label>
                <input
                  type="date"
                  value={startDate ? startDate.toISOString().split("T")[0] : ""}
                  onChange={handleDateChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex space-x-6 justify-center">
              <button
                onClick={(e) => navigate("/menu")}
                className="w-[120px] h-[50px] font-bold bg-gray-600 text-white rounded-lg hover:bg-gray-700 hover:scale-105 transition duration-300 shadow-md"
              >
                Home
              </button>
              <button
                onClick={(e) => navigate("/ensaioMecanico")}
                className="w-[120px] h-[50px] font-bold bg-gray-600 text-white rounded-lg hover:bg-gray-700 hover:scale-105 transition duration-300 shadow-md"
              >
                Inserir
              </button>
              <button
                // onClick={clickConsulta}
                className="w-[120px] h-[50px] font-bold bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 hover:scale-105 transition duration-300 shadow-md"
              >
                Consultar
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-5 ">
          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
            <table className="table-auto text-center w-full border-separate border-collapse">
              <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <tr className="">
                  <th className="border border-gray-300 px-4 py-2">Tempera</th>
                  <th className="border border-gray-300 px-4 py-2">Item</th>
                  <th className="border border-gray-300 px-4 py-2">Bobina</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Espessura
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Le</th>
                  <th className="border border-gray-300 px-4 py-2">Lr</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Alongamento
                  </th>
                  <th className="border border-gray-300 px-4 py-2">R</th>
                  <th className="border border-gray-300 px-4 py-2">N</th>
                </tr>
              </thead>
              <tbody>
                {dadosTracion.map((dado) => (
                  <tr key={dado.id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.tempera}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.item}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.bobina}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.espessura}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.le}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.lr}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.alongamento}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.r}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {dado.n}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DadosConsultaEm;
