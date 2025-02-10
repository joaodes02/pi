import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResultadosTec from "./resultadosTec";
function DadosConsultaTec({ value, setValue }) {
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    if (equipamentoSelecionado) {
      console.log(equipamentoSelecionado);
    }
  }, [equipamentoSelecionado]);

  const equipamentos = Array.from({ length: 3 }, (_, i) => `LEE${i + 4}`);
  const turnos = Array.from({ length: 3 }, (_, i) => `Turno - ${i + 1}`);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setStartDate(selectedDate ? new Date(selectedDate) : null);
  };

  return (
    <>
      <div className="flex items-center text-center justify-center">
        <div className="mt-4 flex flex-col">
          <h1 className="text-3xl font-bold">Resultados - Análises Químicas</h1>
          <div className="p-5 items-center justify-center border border-gray-300 mt-6 flex space-x-6">
            {/* Seletor de Equipamento */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Equipamento:
              </label>
              <select
                value={equipamentoSelecionado}
                onChange={(e) => setEquipamentoSelecionado(e.target.value)}
                className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              >
                <option value="" disabled>
                  Selecione
                </option>
                {equipamentos.map((equipamento, index) => (
                  <option key={index} value={equipamento}>
                    {equipamento}
                  </option>
                ))}
                <option value="gdl">GDL</option>
                <option value="ll2">LLE#2</option>
              </select>
            </div>

            {/* Seletor de Turno */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-600">
                Turno:
              </label>
              <select className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none">
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

            {/* Seletor de Data */}
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

            {/* Botões */}
            <div className="space-y-3 flex flex-col text-center">
              <button className="font-bold hover:scale-105 w-[100px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Consultar
              </button>
              <button
                className="font-bold hover:scale-105 w-[100px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={() => navigate("/menu")}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <ResultadosTec equipamento={equipamentoSelecionado} />
    </>
  );
}

export default DadosConsultaTec;
