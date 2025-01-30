function Oil({ value, setValue }) {
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
              tabIndex="19"
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
              tabIndex="20"
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
              tabIndex="22"
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
              tabIndex="23"
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
