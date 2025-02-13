import DadosConsulta from "../../Operacao/Consultar/dadosConsulta";
import editIMG from "../../../assets/img/editar.png";
import deleteIMG from "../../../assets/img/excluir.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TelaEdit({ setIdDados, dados, setDados }) {
  const navigate = useNavigate();
  function clickEdit(e, info) {
    if (window.confirm(`Deseja mesmo ir para tela de Edição?`)) {
      setIdDados(info.id);
      navigate("/inserir");
    }
  }
  async function clickDelete(e, info) {
    if (window.confirm("Deseja mesmo excluir? ")) {
      try {
        const response = await axios.delete(
          `http://localhost:3322/operacao/delete/${info.id}`
        );
        if (response.status === 200) {
          setDados((prevDados) => prevDados.filter((d) => d.id !== info.id));
        } else {
          throw new Error("Error ao excluir operação!");
        }
      } catch (error) {
        console.error("Erro ao excluir", error);
        alert("Erro ao exlcuir operação!");
      }
    }
  }

  return (
    <>
      <DadosConsulta />
      <div className="p-1 flex justify-center">
        <div className="overflow-x-auto">
          <table className=" border-separate items-center text-center table-auto border-collapse border border-gray-300 w-[1500px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Opções</th>
                <th className="border border-gray-300 px-4 py-2">Horario</th>
                <th className="border border-gray-300 px-2 py-2">
                  Item-Bobina
                </th>
                <th className="border border-gray-300 px-2 py-2">
                  Nominal Sup.
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Revest. SUPERIOR
                </th>
                <th className="border border-gray-300 px-2 py-2">
                  Nominal Inf.
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Revest. INFERIOR
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Oléo. SUPERIOR
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Oléo. INFERIOR
                </th>
                <th className="border border-gray-300 px-4 py-2">Dureza</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((info) => (
                <tr key={info.id} className="hover:bg-gray-50">
                  <div className="border border-gray-300 flex items-center p-4 justify-center space-x-2">
                    <img
                      className="w-6 h-6 hover:scale-125 duration-300 transition cursor-pointer"
                      src={editIMG}
                      alt="Edit"
                      onClick={(e) => {
                        clickEdit(e, info);
                      }}
                    />
                    <img
                      className="w-6 h-6 cursor-pointer hover:scale-125 duration-300 transition"
                      src={deleteIMG}
                      alt="Delete"
                      onClick={(e) => {
                        clickDelete(e, info);
                      }}
                    />
                  </div>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      info.dados.horario !== "EXTRA"
                        ? "bg-slate-400"
                        : "bg-orange-300"
                    }`}
                  >
                    {info.dados.horario}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {info.dados.item}-{info.dados.bobina}
                  </td>
                  <td className="bg-blue-200 font-bold border-2 border-gray-300 px-4 py-2">
                    {Number(info.nominal.superior)
                      ?.toFixed(1)
                      .replace(".", ",")}
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {Number(info.rev.esqSup)?.toFixed(1).replace(".", ",")}
                      </td>
                      <td className="border border-black p-2">
                        {Number(info.rev.centroSup)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </td>
                      <td className="border border-black p-2">
                        {Number(info.rev.dirSup)?.toFixed(1).replace(".", ",")}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {Number(info.rev.mediaSup)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </td>
                      <td className="border-2 border-blue-400 p-2">
                        {Number(info.rev.ligaSup)?.toFixed(1).replace(".", ",")}
                      </td>
                    </td>
                  </td>
                  <td className="bg-blue-200 font-bold border-2 border-gray-300 px-4 py-2">
                    {Number(info.nominal.inferior)
                      ?.toFixed(1)
                      .replace(".", ",")}
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {Number(info.rev.esqInf)?.toFixed(1).replace(".", ",")}
                      </td>
                      <td className="border border-black p-2">
                        {Number(info.rev.centroInf)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </td>
                      <td className="border border-black p-2">
                        {Number(info.rev.dirInf)?.toFixed(1).replace(".", ",")}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {Number(info.rev.mediaInf)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </td>
                      <td className="border-2 border-blue-400 p-2">
                        {Number(info.rev.ligaInf)?.toFixed(1).replace(".", ",")}
                      </td>
                    </td>
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {Number(info.oil.esqSup)?.toFixed(1).replace(".", ",")}
                      </td>
                      <td className="border border-black p-2">
                        {Number(info.oil.centroSup)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </td>
                      <td className="border border-black p-2">
                        {Number(info.oil.dirSup)?.toFixed(1).replace(".", ",")}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {Number(info.oil.mediaSup)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </td>
                    </td>
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {Number(info.oil.esqInf)?.toFixed(1).replace(".", ",")}
                      </td>
                      <td className="border border-black p-2">
                        {Number(info.oil.centroInf)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </td>
                      <td className="border border-black p-2">
                        {Number(info.oil.dirInf)?.toFixed(1).replace(".", ",")}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {Number(info.oil.mediaInf)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </td>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TelaEdit;
