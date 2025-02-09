import { useNavigate } from "react-router-dom";
function Buttons({ limpar, inserir }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center space-y-2">
        <button
          onClick={inserir}
          className="font-bold hover:scale-105 w-[200px] h-[50px] bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Enviar
        </button>
        <button
          onClick={(e) => {
            navigate("/consulta");
          }}
          className="font-bold hover:scale-105 w-[200px] h-[50px] bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-700 transition duration-500"
        >
          Consultar
        </button>
        <button
          onClick={limpar}
          className="font-bold hover:scale-105 w-[200px] h-[50px] bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-500"
        >
          Limpar
        </button>
        <button
          className="font-bold hover:scale-105 w-[200px] h-[50px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-500"
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
