function Rev({ value, setValue }) {
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
        const max = Math.max(esqSup, centroSup, dirSup);
        const min = Math.min(esqSup, centroSup, dirSup);
        updatedValues.dispSup = (max - min).toFixed(1).replace(".", ",");
      }

      // Calcula a média inferior se os campos relacionados forem alterados
      if (["esqInf", "centroInf", "dirInf"].includes(name)) {
        const esqInf = parseFloat(updatedValues.esqInf) || 0;
        const centroInf = parseFloat(updatedValues.centroInf) || 0;
        const dirInf = parseFloat(updatedValues.dirInf) || 0;
        updatedValues.mediaInf = ((esqInf + centroInf + dirInf) / 3)
          .toFixed(1)
          .replace(".", ",");

        //calculando dispersão
        const maxInf = Math.max(esqInf, centroInf, dirInf);
        const minInf = Math.min(esqInf, centroInf, dirInf);
        updatedValues.dispInf = (maxInf - minInf).toFixed(1).replace(".", ",");
      }

      return updatedValues;
    });
  };

  return (
    <>
      <div className="p-2 flex flex-col">
        <h2 className="font-bold mt-2">Revestimento Superior</h2>
        <div id="rev-superior" className="flex space-x-4">
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Esquerda
            </label>
            <input
              maxLength={4}
              tabIndex="7"
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
              tabIndex="8"
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
              tabIndex="9"
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
              readOnly
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">Disp.</label>
            <input
              maxLength={4}
              tabIndex="-1"
              name="dispSup"
              value={value.dispSup}
              readOnly
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-center ">
            <label className="text-sm font-medium text-gray-600">C. Liga</label>
            <input
              maxLength={3}
              tabIndex="13"
              name="ligaSup"
              value={value.ligaSup}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="p-2 flex flex-col">
        <h2 className="font-bold mt-2">Revestimento Inferior</h2>
        <div id="rev-superior" className="flex space-x-4">
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Esquerda
            </label>
            <input
              maxLength={4}
              tabIndex="10"
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
              tabIndex="11"
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
              tabIndex="12"
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
              readOnly
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">Disp.</label>
            <input
              maxLength={4}
              tabIndex="-1"
              name="dispInf"
              value={value.dispInf}
              readOnly
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-center ">
            <label className="text-sm font-medium text-gray-600">C. Liga</label>
            <input
              maxLength={3}
              tabIndex="14"
              name="ligaInf"
              value={value.ligaInf}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Rev;
