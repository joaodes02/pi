function Estanhamento({ value, setValue }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ [name]: value });
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="pb-2 flex space-x-3 ">
          <div className="text-center border-2 border-gray-400 p-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600 font-bold">
              Alcalina
            </label>
            <input
              name="alcalina"
              value={value.alcalina || ""}
              onChange={handleChange}
              maxLength={4}
              type="text"
              className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                H2SO4
              </label>
              <input
                name="h2so4"
                value={value.h2so4 || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Fe++
              </label>
              <input
                name="ferro"
                value={value.ferro || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Sn++
              </label>
              <input
                name="snPlate"
                value={value.snPlate || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Acidez
              </label>
              <input
                name="acidez"
                value={value.acidez || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                SO4-
              </label>
              <input
                name="so4"
                value={value.so4 || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Aditivo
              </label>
              <input
                name="aditivo"
                value={value.aditivo || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Anti-Oxi
              </label>
              <input
                name="antioxi"
                value={value.antioxi || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className="text-center border-2 border-gray-400 p-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600 font-bold">
              Dragout
            </label>
            <input
              name="dragout"
              value={value.dragout || ""}
              onChange={handleChange}
              maxLength={4}
              type="text"
              className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Fluxo
              </label>
              <input
                name="fluxo"
                value={value.fluxo || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Est. Fluxo
              </label>
              <input
                name="estFluxo"
                value={value.estFluxo || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                PH
              </label>
              <input
                name="ph"
                value={value.ph || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Bicromato
              </label>
              <input
                name="bicromato"
                value={value.bicromato || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Plating
              </label>
              <input
                name="plating"
                value={value.plating || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                T.Químico
              </label>
              <input
                name="tq"
                value={value.tq || ""}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-3 pt-2">
          <div className="text-center border-2 border-gray-400 p-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600 font-bold">
              Marc. Dif.
            </label>
            <input
              name="mdif"
              value={value.mdif || ""}
              onChange={handleChange}
              maxLength={4}
              type="text"
              className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="text-center border-2 border-gray-400 p-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600 font-bold">
              Estiradeira
            </label>
            <input
              name="estiradeira"
              value={value.estiradeira || ""}
              onChange={handleChange}
              maxLength={4}
              type="text"
              className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Estanhamento;
