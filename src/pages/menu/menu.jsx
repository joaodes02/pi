import inserirIMG from "../../assets/img/inserir.png";
import editarPNG from "../../assets/img/editar.png";
import consultarIMG from "../../assets/img/consultar.png";
import { useNavigate } from "react-router-dom";
import analisePNG from "../../assets/img/analise.png";

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <div className="items-center flex justify-center min-h-screen">
        <div className="flex flex-wrap max-w-[1200px] items-center justify-center gap-1">
          <div className="border-2 p-4 border-gray-400 mt-5 flex flex-col items-center h-[200px] w-[500px] mt-5 flex flex-col items-center justify-center">
            <h2 className="font-light text-3xl font-bold italic">Operação:</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 justify-center">
              <div className="flex">
                <img className="h-12" src={inserirIMG} alt="inserir" />
                <button
                  onClick={(e) => {
                    navigate("/inserir");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Inserir
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={editarPNG} alt="editar" />
                <button
                  onClick={(e) => {
                    navigate("/editar");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Editar
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={analisePNG} alt="excluir" />
                <button
                  onClick={(e) => {
                    navigate("/tracion");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Trações
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={consultarIMG} alt="consultar" />
                <button
                  onClick={(e) => {
                    navigate("/consulta");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Consultar
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 p-4 border-gray-400 mt-5 flex flex-col items-center h-[200px] w-[500px] mt-5 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold italic font-light ">Técnico:</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 justify-items-center">
              <div className="flex">
                <img className="h-12" src={inserirIMG} alt="inserir" />
                <button
                  onClick={(e) => {
                    navigate("/inserirTec");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Inserir
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={editarPNG} alt="editar" />
                <button
                  onClick={(e) => {
                    navigate("/editar");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Editar
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={analisePNG} alt="excluir" />
                <button
                  onClick={(e) => {
                    navigate("/excluir");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Excluir
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={consultarIMG} alt="consultar" />
                <button
                  onClick={(e) => {
                    navigate("/consulta");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Consultar
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 p-4 border-gray-400 mt-5 flex flex-col items-center h-[200px] w-[500px] justify-center">
            <h2 className="text-3xl font-bold italic font-light">
              Estatísticas:
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-4 justify-items-center">
              <div className="flex">
                <img className="h-12" src={inserirIMG} alt="inserir" />
                <button
                  onClick={(e) => {
                    navigate("/inserirTec");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Nº de Analises
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={editarPNG} alt="editar" />
                <button
                  onClick={(e) => {
                    navigate("/editar");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Dashboard
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={analisePNG} alt="excluir" />
                <button
                  onClick={(e) => {
                    navigate("/excluir");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Overcoating
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={consultarIMG} alt="consultar" />
                <button
                  onClick={(e) => {
                    navigate("/consulta");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Consultar
                </button>
              </div>
            </div>
          </div>
          <div className="border-2 p-4 border-gray-400 mt-5 flex flex-col items-center h-[200px] w-[500px] justify-center">
            <h2 className="text-3xl font-bold italic font-light">
              Relatórios:
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-4 justify-items-center">
              <div className="flex">
                <img className="h-12" src={inserirIMG} alt="inserir" />
                <button
                  onClick={(e) => {
                    navigate("/inserirTec");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Nº de Analises
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={editarPNG} alt="editar" />
                <button
                  onClick={(e) => {
                    navigate("/editar");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Dashboard
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={analisePNG} alt="excluir" />
                <button
                  onClick={(e) => {
                    navigate("/excluir");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Overcoating
                </button>
              </div>
              <div className="flex">
                <img className="h-12" src={consultarIMG} alt="consultar" />
                <button
                  onClick={(e) => {
                    navigate("/consulta");
                  }}
                  className="font-bold ml-3 hover:scale-105 w-[200px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu;
