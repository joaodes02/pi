import { useState } from "react";

function Resultados({ dados }) {
  const [pesquisa, setPesquisa] = useState("");

  // Função para filtrar os dados com base na pesquisa
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

  console.log(dadosFiltrados);
  return (
    <>
      <div className="intems-center justify-center flex p-4">
        <div className="text-sm font-medium text-gray-600 flex-col flex text-center border-2 rounded-full p-5 border-gray-200 ">
          <label className="text-sm font-medium text-gray-600">Pesquisa:</label>
          <input
            type="text"
            placeholder="Item-bobina..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      </div>

      <div className="p-1 flex justify-center">
        <div className="overflow-x-auto">
          <table className=" border-separate items-center text-center table-auto border-collapse border border-gray-300 w-[1500px]">
            <thead>
              <tr className="bg-gray-100">
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
                <tr key={info.id} className="hover:bg-gray-50">
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      info.dados.horario !== "EXTRA"
                        ? "bg-slate-400"
                        : "bg-orange-400"
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
                  <td className="justify-center items-center border border-gray-300">
                    <td className="font-bold border-2 border-black p-2">
                      {info.dureza.esq}
                    </td>
                    <td className="font-bold border-2 border-black p-2">
                      {info.dureza.centro}
                    </td>
                    <td className="font-bold border-2 border-black p-2">
                      {info.dureza.dir}
                    </td>
                  </td>
                  <td className="justify-center items-center border border-gray-300">
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

export default Resultados;
