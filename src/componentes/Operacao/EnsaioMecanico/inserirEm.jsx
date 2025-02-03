import Buttons from "../Inserir/buttons";

function InserirEm({ value, setValue }) {
  const temperas = [
    "TH390",
    "TH415",
    "TH435",
    "TH390",
    "DR550",
    "DR620",
    "DR8",
    "T4",
  ];
  const handleTemperaChange = (e) => {
    setValue((prev) => ({ ...prev, tempera: e.target.value }));
  };

  return (
    <>
      <div className="flex  items-center justify-center min-h-screen flex-col">
        <h1 className=" font-light text-3xl italic">
          Insira os resultados do Ensaio Mecânico:
        </h1>
        <div className="border-2 border-gray-300 mt-5 flex p-2 flex-wrap max-w-[800px] ">
          <div className="p-2 flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">Item:</label>
            <input
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
              maxLength={6}
            />
          </div>
          <div className="p-2 flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">Bobina:</label>
            <input
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
              maxLength={4}
            />
          </div>
          <div className="p-2  flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">
              Espessura:
            </label>
            <input
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
              maxLength={5}
            />
          </div>
          <div className="p-2  flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">
              Escoamento:
            </label>
            <input
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="p-2  flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">
              Resistência:
            </label>
            <input
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="p-2 flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">
              Alongamento:
            </label>
            <input
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="p-2 flex  text-center flex-col">
            <label className="text-sm font-medium text-gray-600">R:</label>
            <input
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="p-2 flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">N:</label>
            <input
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="p-2 flex text-center flex-col">
            <label className="text-sm font-medium text-gray-600">
              Tempera:
            </label>
            <select
              value={value.tempera || ""}
              onChange={handleTemperaChange}
              className="w-[130px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="" disabled>
                Selecione
              </option>
              {temperas.map((index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default InserirEm;
