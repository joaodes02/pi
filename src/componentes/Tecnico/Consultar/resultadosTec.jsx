import { useState } from "react";

function ResultadosTec({ equipamento }) {
  const [pesquisa, setPesquisa] = useState("");

  // Função para filtrar os dados com base na pesquisa
  //   const dadosFiltrados = dados.filter((info) => {
  //     const termoPesquisa = pesquisa.toLowerCase();
  //     return `${info.dados.item}-${info.dados.bobina}`
  //       .toLowerCase()
  //       .includes(termoPesquisa);
  //   });

  return (
    <>
      {/* <div className="intems-center justify-center flex p-4">
        <div className="text-sm font-medium text-gray-600 flex-col flex text-center border-2 p-2 border-gray-200 ">
          <label className="text-sm font-medium text-gray-600">Pesquisa:</label>
          <input
            type="text"
            placeholder="Item-bobina..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
      </div> */}

      <div className="p-1 flex justify-center">
        <div className="overflow-x-auto">
          <table className=" border-separate items-center text-center table-auto border-collapse border border-gray-300 w-[1500px]">
            {equipamento === "LEE4" ? (
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Horario</th>
                  <th className="border border-gray-300 px-2 py-2">Alcalina</th>
                  <th className="border border-gray-300 px-2 py-2">H2SO4</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Ferro Dec.
                  </th>
                  <th className="border border-gray-300 px-2 py-2">
                    H2S04 - Plate
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Fluoreto P.
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Cr+3</th>
                  <th className="border border-gray-300 px-4 py-2">Dragout</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Fluoreto D.
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Cromo TQ</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Fluoreto TQ
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Poço</th>
                </tr>
              </thead>
            ) : ["LEE5", "LEE6"].includes(equipamento) ? (
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Horario</th>
                  <th className="border border-gray-300 px-2 py-2">Alcalina</th>
                  <th className="border border-gray-300 px-2 py-2">H2SO4</th>
                  <th className="border border-gray-300 px-4 py-2">Fe++</th>
                  <th className="border border-gray-300 px-2 py-2">
                    Sn++ - Plate
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Acidez</th>
                  <th className="border border-gray-300 px-4 py-2">SO4-</th>
                  <th className="border border-gray-300 px-4 py-2">Aditivo</th>
                  <th className="border border-gray-300 px-4 py-2">Anti-oxi</th>
                  <th className="border border-gray-300 px-4 py-2">Dragout</th>
                  <th className="border border-gray-300 px-4 py-2">Fluxo</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Est. Fluxo
                  </th>
                  <th className="border border-gray-300 px-4 py-2">PH</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Bicromato
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Plating</th>
                  <th className="border border-gray-300 px-4 py-2">
                    T.Químico
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Marc. Diferencial
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Estiradeira
                  </th>
                </tr>
              </thead>
            ) : equipamento === "gdl" ? (
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Horario</th>
                  <th className="border border-gray-300 px-2 py-2">Cromo</th>
                  <th className="border border-gray-300 px-2 py-2">Cr3+</th>
                  <th className="border border-gray-300 px-2 py-2">Fluoreto</th>
                  <th className="border border-gray-300 px-2 py-2">SO4</th>
                </tr>
              </thead>
            ) : equipamento === "ll2" ? (
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Horario</th>
                  <th className="border border-gray-300 px-2 py-2">Perci</th>
                  <th className="border border-gray-300 px-2 py-2">Tioureia</th>
                </tr>
              </thead>
            ) : null}

            {/* <tbody>
              {dadosFiltrados.map((info) => (
                <tr key={info.id} className="hover:bg-gray-50">
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      info.dados.horario != "EXTRA"
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
                </tr>
              ))} */}
            {/* </tbody> */}
          </table>
        </div>
      </div>
    </>
  );
}

export default ResultadosTec;
