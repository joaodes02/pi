function gdl({ value, setValue }) {
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
              Cromo:
            </label>
            <input
              name="cromo"
              value={value.cromo}
              onChange={handleChange}
              maxLength={4}
              type="text"
              className="w-[75px] px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none"
            />
          </div>
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Cr+3:
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
          <div className="flex space-x-2 border-2 border-gray-400 p-2">
            <div className="text-center flex flex-col">
              <label className="text-sm font-medium text-gray-600 font-bold">
                Fluoreto:
              </label>
              <input
                name="fluoreto"
                value={value.fluoreto}
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
                So4:
              </label>
              <input
                name="so4"
                value={value.so4}
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

export default gdl;
