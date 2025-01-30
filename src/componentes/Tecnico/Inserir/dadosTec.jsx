import React, { useState, useEffect } from "react";
import Cromado from "./cromado";
import Estanhamento from "./estanhamento";

function Dados({ value, setValue }) {
  const { estanhamento } = value;
  const { cromado } = value;
  const handleCromadoChange = (updatedValues) => {
    setValue((prev) => ({
      ...prev,
      cromado: {
        ...prev.cromado,
        ...updatedValues,
      },
    }));
  };
  const handleEstanhamentoChange = (updatedValues) => {
    setValue((prev) => ({
      ...prev,
      estanhamento: {
        ...prev.estanhamento,
        ...updatedValues,
      },
    }));
  };

  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState("");
  useEffect(() => {
    if (equipamentoSelecionado && equipamentoSelecionado) {
      console.log(equipamentoSelecionado);
    }
  }, [equipamentoSelecionado]);

  const equipamentos = Array.from({ length: 3 }, (_, i) => {
    const equipamento = i + 4;
    return `LEE${equipamento}`;
  });

  const [horaAtual, setHoraAtual] = useState("");

  useEffect(() => {
    const atual = new Date();
    const formatoHora = atual.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setHoraAtual(formatoHora);
  }, [equipamentoSelecionado]);

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex space-x-3">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">
            Equipamento
          </label>
          <select
            value={equipamentoSelecionado}
            onChange={(e) => setEquipamentoSelecionado(e.target.value)}
            defaultValue=""
            className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          >
            <option value="" disabled>
              Selecione
            </option>
            {equipamentos.map((equipamento, index) => (
              <option id="equipamento" key={index} value={equipamento}>
                {equipamento}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Horário</label>
          <input
            value={horaAtual}
            readOnly
            className="w-[150px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
            type="time"
          />
        </div>

        <div className="mt-1 flex flex-col">
          <label className="text-sm font-medium text-gray-600">Tipo:</label>
          <div className="flex space-x-2 items-center">
            <label className="text-sm font-medium text-gray-600">
              <input value="Extra" name="tipo" type="radio" />
              <span className="ml-2">Extra</span>
            </label>
            <label className="text-sm font-medium text-gray-600">
              <input value="Turno" name="tipo" type="radio" />
              <span className="ml-2">Turno</span>
            </label>
          </div>
        </div>
      </div>

      {/* Adiciona o componente renderizado abaixo do restante */}
      <div>
        {equipamentoSelecionado === "LEE4" ? (
          <Cromado value={cromado} setValue={handleCromadoChange} />
        ) : equipamentoSelecionado ? (
          <Estanhamento
            value={estanhamento}
            setValue={handleEstanhamentoChange}
            equipamento={equipamentoSelecionado}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Dados;
