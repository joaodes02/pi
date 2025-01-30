function Rev({ value, setValue }) {
  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;

    setValue((prev) => {
      const updatedValues = {
        ...prev,
        [name]: inputValue.replace(",", "."), // Converte vírgulas em pontos
      };

      // Calcula a média superior se os campos relacionados forem alterados
      if (["esquerda", "centro", "direita"].includes(name)) {
        const esq = parseFloat(updatedValues.esquerda) || 0;
        const centro = parseFloat(updatedValues.centro) || 0;
        const dir = parseFloat(updatedValues.direita) || 0;
        updatedValues.media = ((esq + centro + dir) / 3)
          .toFixed(1)
          .replace(".", ","); // Converte ponto de volta para vírgula
        const max = Math.max(esq, centro, dir);
        const min = Math.min(esq, centro, dir);
        updatedValues.disp = (max - min).toFixed(1).replace(".", ",");
      }

      // Calcula a média inferior se os campos relacionados forem alterados
      if (
        ["esquerdaInferior", "centroInferior", "direitaInferior"].includes(name)
      ) {
        const esqInf = parseFloat(updatedValues.esquerdaInferior) || 0;
        const centroInf = parseFloat(updatedValues.centroInferior) || 0;
        const dirInf = parseFloat(updatedValues.direitaInferior) || 0;
        updatedValues.mediaInferior = ((esqInf + centroInf + dirInf) / 3)
          .toFixed(1)
          .replace(".", ",");

        //calculando dispersão
        const maxInf = Math.max(esqInf, centroInf, dirInf);
        const minInf = Math.min(esqInf, centroInf, dirInf);
        updatedValues.dispInferior = (maxInf - minInf)
          .toFixed(1)
          .replace(".", ",");
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
              name="esquerda"
              value={value.esquerda}
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
              name="centro"
              value={value.centro}
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
              name="direita"
              value={value.direita}
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
              name="media"
              value={value.media}
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
              name="disp"
              value={value.disp}
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
              name="liga"
              value={value.liga}
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
              name="esquerdaInferior"
              value={value.esquerdaInferior}
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
              name="centroInferior"
              value={value.centroInferior}
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
              name="direitaInferior"
              value={value.direitaInferior}
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
              name="mediaInferior"
              value={value.mediaInferior}
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
              name="dispInferior"
              value={value.dispInferior}
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
              name="ligaInferior"
              value={value.ligaInferior}
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
