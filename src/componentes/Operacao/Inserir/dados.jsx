function Dados({ value, setValue }) {
  // Função para gerar horários
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = String(i).padStart(2, "0");
    return `${hour}:00`;
  });

  // Função para gerar equipamentos
  const equipamentos = Array.from({ length: 3 }, (_, i) => {
    const equipamento = i + 4;
    return `LEE${equipamento}`;
  });

  // Manipuladores de evento
  const handleEquipamentoChange = (e) => {
    setValue((prev) => ({ ...prev, equipamento: e.target.value }));
  };

  const handleHorarioChange = (e) => {
    setValue((prev) => ({ ...prev, horario: e.target.value }));
  };

  const handleItemChange = (e) => {
    setValue((prev) => ({ ...prev, item: e.target.value }));
  };

  const handleBobinaChange = (e) => {
    setValue((prev) => ({ ...prev, bobina: e.target.value }));
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        {/* Equipamento */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">
            Equipamento:
          </label>
          <select
            value={value.equipamento || ""}
            tabIndex="1"
            onChange={handleEquipamentoChange}
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
          </select>
        </div>

        {/* Horário */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Horário:</label>
          <select
            value={value.horario || ""}
            tabIndex="2"
            onChange={handleHorarioChange}
            className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          >
            <option value="" disabled>
              Selecione
            </option>
            {hours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}
              </option>
            ))}
            <option name="extra" onChange={handleHorarioChange}>
              EXTRA
            </option>
          </select>
        </div>
      </div>

      {/* Item e Bobina */}
      <div className="flex space-x-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Item:</label>
          <input
            tabIndex="3"
            maxLength={6}
            type="text"
            value={value.item || ""}
            onChange={handleItemChange}
            className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600">Bobina:</label>
          <input
            maxLength={4}
            tabIndex="4"
            type="text"
            value={value.bobina || ""}
            onChange={handleBobinaChange}
            className="w-[150px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Dados;
