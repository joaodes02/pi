import { useNavigate } from "react-router-dom";
function Buttons({ limpar, enviar }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center space-y-2">
        <button
          onClick={enviar}
          className="font-bold hover:scale-105 w-[200px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Enviar
        </button>
        <button
          onClick={limpar}
          className="font-bold hover:scale-105 w-[200px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Limpar
        </button>
        <button
          className="font-bold hover:scale-105 w-[200px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          onClick={(e) => {
            navigate("/menu");
          }}
        >
          Home
        </button>
      </div>
    </>
  );
}

export default Buttons;
