function Oil({ value, setValue }) {
  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;

    setValue((prev) => {
      const updatedValues = {
        ...prev,
        [name]: inputValue.replace(",", "."), // Converte vírgulas em pontos
      };

      // Calcula a média superior se os campos relacionados forem alterados
      if (["esqSup", "centroSup", "dirSup"].includes(name)) {
        const esqSup = parseFloat(updatedValues.esqSup) || 0;
        const centroSup = parseFloat(updatedValues.centroSup) || 0;
        const dirSup = parseFloat(updatedValues.dirSup) || 0;
        updatedValues.mediaSup = ((esqSup + centroSup + dirSup) / 3)
          .toFixed(1)
          .replace(".", ","); // Converte ponto de volta para vírgula
      }

      // Calcula a média inferior se os campos relacionados forem alterados
      if (["esqInf", "centroInf", "dirInf"].includes(name)) {
        const esqInf = parseFloat(updatedValues.esqInf) || 0;
        const centroInf = parseFloat(updatedValues.centroInf) || 0;
        const dirInf = parseFloat(updatedValues.dirInf) || 0;
        updatedValues.mediaInf = ((esqInf + centroInf + dirInf) / 3)
          .toFixed(1)
          .replace(".", ",");
      }

      return updatedValues;
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold mt-2">Óleo Superior</h2>
        <div id="rev-superior" className="flex space-x-4">
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Esquerda
            </label>
            <input
              tabIndex="18"
              maxLength={4}
              name="esqSup"
              value={value.esqSup}
              onChange={handleChange}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">Centro</label>
            <input
              maxLength={4}
              tabIndex="19"
              name="centroSup"
              value={value.centroSup}
              onChange={handleChange}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">Direita</label>
            <input
              maxLength={4}
              tabIndex="20"
              name="dirSup"
              value={value.dirSup}
              onChange={handleChange}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">Média</label>
            <input
              maxLength={4}
              tabIndex="-1"
              name="mediaSup"
              value={value.mediaSup}
              onChange={handleChange}
              readOnly
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold mt-2">Óleo Inferior</h2>
        <div id="rev-superior" className="flex space-x-4">
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Esquerda
            </label>
            <input
              maxLength={4}
              tabIndex="21"
              name="esqInf"
              value={value.esqInf}
              onChange={handleChange}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">Centro</label>
            <input
              maxLength={4}
              tabIndex="22"
              name="centroInf"
              value={value.centroInf}
              onChange={handleChange}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">Direita</label>
            <input
              maxLength={4}
              tabIndex="23"
              name="dirInf"
              value={value.dirInf}
              onChange={handleChange}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">Média</label>
            <input
              maxLength={4}
              tabIndex="-1"
              name="mediaInf"
              value={value.mediaInf}
              onChange={handleChange}
              readOnly
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Oil;
