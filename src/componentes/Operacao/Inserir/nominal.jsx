function Nominal({ value, setValue }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="p-2">
        <h2 className="font-bold">Nominal:</h2>
        <div className="flex space-x-4">
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Superior
            </label>
            <input
              tabIndex="5"
              name="superior"
              value={value.superior}
              onChange={handleChange}
              maxLength={4}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
          <div className="items-center flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Inferior
            </label>
            <input
              name="inferior"
              tabIndex="6"
              value={value.inferior}
              onChange={handleChange}
              maxLength={4}
              className="w-[100px] px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nominal;
