import DadosConsulta from "../../Operacao/Consultar/dadosConsulta";
import editIMG from "../../../assets/img/editar.png";
import deleteIMG from "../../../assets/img/excluir.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function TelaEdit({ setIdDados, dados, setDados, idDados }) {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState("");

  function clickEdit(e, info) {
    if (window.confirm(`Deseja mesmo ir para tela de Edição?`)) {
      console.log("id:", info.id);
      setIdDados(info.id);
      navigate("/inserir");
    }
  }

  console.log("Fora da Function telaEdit", idDados); //falso;

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

  const dadosFiltrados = dados.filter((info) => {
    const termoPesquisa = pesquisa.toLowerCase();
    return `${info.dados.item}-${info.dados.bobina}`
      .toLowerCase()
      .includes(termoPesquisa);
  });
  function formatarData(data) {
    if (!data) {
      return;
    }
    let newData = new Date(data);
    newData.setHours(newData.getHours());
    return newData
      .toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(",", " |");
  }

  return (
    <>
      <DadosConsulta setDados={setDados} />
      <div className="p-1 flex justify-center bg-gray-100 flex-col items-center">
        <div className="flex flex-col items-center  bg-white shadow-md rounded-lg p-6 w-full max-w-4xl border border-gray-200">
          <label className="text-lg font-semibold text-gray-700 mb-2">
            Pesquisa:
          </label>
          <input
            type="text"
            placeholder="Item-bobina..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="overflow-x-auto p-3">
          <table className="table-auto text-center w-full border-separate border-collapse">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <tr>
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
                <th className="border border-gray-300 px-4 py-2">Digitado:</th>
              </tr>
            </thead>
            <tbody>
              {dadosFiltrados.map((info) => (
                <tr
                  key={info.id}
                  className="hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex items-center justify-center space-x-2 p-4">
                      <img
                        className="w-6 h-6 hover:scale-125 duration-300 transition cursor-pointer"
                        src={editIMG}
                        alt="Edit"
                        onClick={(e) => clickEdit(e, info)}
                      />
                      <img
                        className="w-6 h-6 cursor-pointer hover:scale-125 duration-300 transition"
                        src={deleteIMG}
                        alt="Delete"
                        onClick={(e) => clickDelete(e, info)}
                      />
                    </div>
                  </td>
                  <td
                    className={`font-bold border border-gray-300 px-4 py-2 ${
                      info.dados.horario !== "EXTRA"
                        ? "bg-sky-200"
                        : "bg-sky-400"
                    }`}
                  >
                    {info.dados.horario}
                  </td>
                  <td className="font-bold border border-gray-300 px-4 py-2">
                    {info.dados.item}-{info.dados.bobina}
                  </td>
                  <td className="bg-sky-200 border-2 border-gray-300">
                    <div
                      className={
                        info.nominal.superior === null
                          ? `hidden`
                          : `font-bold  px-4 py-2`
                      }
                    >
                      {Number(info.nominal.superior)
                        ?.toFixed(1)
                        .replace(".", ",")}
                    </div>
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <div className="flex space-x-1">
                      <div
                        className={
                          info.rev.esqSup === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.rev.esqSup)?.toFixed(1).replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.rev.centroSup === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.rev.centroSup)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.rev.dirSup === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.rev.dirSup)?.toFixed(1).replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.rev.mediaSup === null
                            ? `hidden`
                            : `font-bold border-2 border-orange-400 p-2`
                        }
                      >
                        {Number(info.rev.mediaSup)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.rev.ligaSup === null
                            ? `hidden`
                            : `border-2 border-blue-700 p-2`
                        }
                      >
                        {Number(info.rev.ligaSup)?.toFixed(1).replace(".", ",")}
                      </div>
                    </div>
                  </td>
                  <td className="bg-sky-200 border-2 border-gray-300">
                    <div
                      className={
                        info.nominal.inferior === null
                          ? `hidden`
                          : `font-bold  px-4 py-2`
                      }
                    >
                      {Number(info.nominal.inferior)
                        ?.toFixed(1)
                        .replace(".", ",")}
                    </div>
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <div className="flex space-x-1">
                      <div
                        className={
                          info.rev.esqInf === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.rev.esqInf)?.toFixed(1).replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.rev.centroInf === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.rev.centroInf)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.rev.dirInf === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.rev.dirInf)?.toFixed(1).replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.rev.mediaInf === null
                            ? `hidden`
                            : `font-bold border-2 border-orange-400 p-2`
                        }
                      >
                        {Number(info.rev.mediaInf)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.rev.ligaInf === null
                            ? `hidden`
                            : `border-2 border-blue-700 p-2`
                        }
                      >
                        {Number(info.rev.ligaInf)?.toFixed(1).replace(".", ",")}
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <div className="flex space-x-1">
                      <div
                        className={
                          info.oil.esqSup === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.oil.esqSup)?.toFixed(1).replace(".", ",")}
                        {console.log("aqui está o OLEO:" + info.oil.esqSup)}
                      </div>
                      <div
                        className={
                          info.oil.centroSup === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.oil.centroSup)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.oil.dirSup === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.oil.dirSup)?.toFixed(1).replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.oil.mediaSup === null
                            ? `hidden`
                            : `font-bold border-2 border-orange-400 p-2`
                        }
                      >
                        {Number(info.oil.mediaSup)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <div className="flex space-x-1">
                      <div
                        className={
                          info.oil.esqInf === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.oil.esqInf)?.toFixed(1).replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.oil.centroInf === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.oil.centroInf)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.oil.dirInf === null
                            ? `hidden`
                            : `border border-black p-2`
                        }
                      >
                        {Number(info.oil.dirInf)?.toFixed(1).replace(".", ",")}
                      </div>
                      <div
                        className={
                          info.oil.mediaInf === null
                            ? `hidden`
                            : `font-bold border-2 border-orange-400 p-2`
                        }
                      >
                        {Number(info.oil.mediaInf)
                          ?.toFixed(1)
                          .replace(".", ",")}
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="font-bold border-2 border-black p-2">
                        {info.dureza.esq}
                      </div>
                      <div className="font-bold border-2 border-black p-2">
                        {info.dureza.centro}
                      </div>
                      <div className="font-bold border-2 border-black p-2">
                        {info.dureza.dir}
                      </div>
                    </div>
                  </td>
                  <td className="bg-sky-200 border border-gray-300 px-4 py-2">
                    <span className="p-2 font-bold">
                      {formatarData(info.toc)}
                    </span>
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
