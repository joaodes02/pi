function Cromado({ value, setValue }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ [name]: value });
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="pb-2 flex space-x-2 ">
          <div className="text-center border-2 border-gray-400 p-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600 font-bold">
              Alcalina
            </label>
            <input
              name="alcalina"
              value={value.alcalina}
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
                name="h2so4C"
                value={value.h2so4C}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Ferro Dec.
              </label>
              <input
                name="ferroC"
                value={value.ferroC}
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
                Cromo Plat.
              </label>
              <input
                name="cromoPlate"
                value={value.cromoPlate}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                H2S04
              </label>
              <input
                name="h2so4Plate"
                value={value.h2so4Plate}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Fluoreto P.
              </label>
              <input
                name="fluoretoPlate"
                value={value.fluoretoPlate}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Cr+3
              </label>
              <input
                name="cr3"
                value={value.cr3}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Dragout
              </label>
              <input
                name="dragoutC"
                value={value.dragoutC}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Fluoreto D.
              </label>
              <input
                name="fluoretoDragout"
                value={value.fluoretoDragout}
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
                Cromo TQ
              </label>
              <input
                name="tqC"
                value={value.tqC}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                H2SO4
              </label>
              <input
                readOnly
                value="0.06"
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none"
              />
            </div>
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Fluoreto TQ
              </label>
              <input
                name="fluoretoTq"
                value={value.fluoretoTq}
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
                Poço
              </label>
              <input
                name="poco"
                value={value.poco}
                onChange={handleChange}
                maxLength={4}
                type="text"
                className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cromado;
