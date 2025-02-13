import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DadosConsulta({ setDados }) {
  const navigate = useNavigate();

  // Definindo o estado da data inicial como a data de hoje
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ajusta para 00:00 para garantir que só retornem dados de hoje
    return today;
  });
  const [equipamento, setEquipamento] = useState("");
  const [turno, setTurno] = useState("");

  // Função para lidar com a alteração da data
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    if (selectedDate) {
      setStartDate(new Date(selectedDate));
    } else {
      setStartDate(null); // Permite limpar a data se necessário
    }
  };

  // Função para consultar os dados
  const clickConsulta = () => {
    if (!equipamento) {
      alert("Selecione um equipamento antes de consultar.");
      return;
    }

    // Se a data não foi selecionada, usamos a data de hoje
    const selectedDate = startDate
      ? startDate.toISOString()
      : new Date().toISOString();
    console.log(equipamento, turno, selectedDate);

    const url = `http://localhost:3322/operacao/consultar?equipamento=${equipamento}&turno=${turno}&data=${selectedDate}`;

    axios.get(url).then((result) => {
      console.log(result);
      setDados(result.data);
    });
  };

  const equipamentos = Array.from({ length: 3 }, (_, i) => {
    const equipamento = i + 4;
    return `LEE${equipamento}`;
  });

  const turnos = Array.from({ length: 3 }, (_, i) => {
    const turno = i + 1;
    return `Turno - ${turno}`;
  });

  const handleEquipamento = (event) => {
    setEquipamento(event.target.value);
  };

  const handleTurno = (event) => {
    setTurno(event.target.value);
  };

  return (
    <>
      <div className="flex items-center text-center justify-center">
        <div className="mt-4 flex flex-col">
          <h1 className="text-3xl font-bold">
            Resultados - Laboratório de folhas metálicas
          </h1>
          <div className="p-5 items-center justify-center border border-gray-300 mt-6 flex space-x-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Equipamento:
              </label>
              <select
                value={equipamento}
                onChange={handleEquipamento}
                className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              >
                <option value="" selected disabled>
                  Selecione
                </option>
                {equipamentos.map((equipamento, index) => (
                  <option key={index} value={equipamento}>
                    {equipamento}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Turno:
              </label>
              <select
                value={turno}
                onChange={handleTurno}
                className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                {turnos.map((turno, index) => (
                  <option key={index} value={turno}>
                    {turno}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col text-center">
              <label className="text-sm font-medium text-gray-600">
                Selecione a Data
              </label>
              <input
                type="date"
                value={startDate ? startDate.toISOString().split("T")[0] : ""}
                onChange={handleDateChange}
                className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>
            <div className="space-y-3 flex flex-col text-center">
              <button
                onClick={clickConsulta}
                className="font-bold hover:scale-105 w-[100px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Consultar
              </button>
              <button
                className="font-bold hover:scale-105 w-[100px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={(e) => {
                  navigate("/menu");
                }}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DadosConsulta;
