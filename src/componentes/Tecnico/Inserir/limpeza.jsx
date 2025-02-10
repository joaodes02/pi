function ll2({ value, setValue }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ [name]: value });
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="pb-2 flex space-x-2 ">
          <div className="text-center border-2 border-gray-400 p-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600 font-bold">
              Perci:
            </label>
            <input
              name="perci"
              value={value.perci}
              onChange={handleChange}
              maxLength={4}
              type="text"
              className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Tioureia:
              </label>
              <input
                name="tioureia"
                value={value.tioureia}
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

export default ll2;
