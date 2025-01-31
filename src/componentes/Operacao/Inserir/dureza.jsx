function Dureza({ value, setValue }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <h2 className="font-bold">Dureza</h2>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium text-gray-600">Esquerda:</label>
          <input
            name="esq"
            value={value.esq}
            tabIndex="15"
            onChange={handleChange}
            maxLength={2}
            type="text"
            className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className=" items-center flex flex-col">
          <label className="text-sm font-medium text-gray-600">Centro:</label>
          <input
            name="centro"
            tabIndex="16"
            value={value.centro}
            onChange={handleChange}
            maxLength={2}
            type="text"
            className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="items-center flex flex-col">
          <label className="text-sm font-medium text-gray-600">Direita:</label>
          <input
            name="dir"
            tabIndex="17"
            value={value.dir}
            onChange={handleChange}
            maxLength={2}
            type="text"
            className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}

export default Dureza;
