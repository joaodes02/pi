function Resultados({ dados }) {
  return (
    <>
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
              </tr>
            </thead>
            <tbody>
              {dados.map((info) => (
                <tr key={info.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {info.dados.horario}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {info.dados.item}-{info.dados.bobina}
                  </td>
                  <td className="font-bold border-2 border-gray-300 px-4 py-2">
                    {info.nominal.superior}
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {info.rev.esqSup}
                      </td>
                      <td className="border border-black p-2">
                        {info.rev.centroSup}
                      </td>
                      <td className="border border-black p-2">
                        {info.rev.dirSup}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {info.rev.mediaSup}
                      </td>
                      <td className="border-2 border-blue-400 p-2">
                        {info.rev.ligaSup}
                      </td>
                    </td>
                  </td>
                  <td className="font-bold border-2 border-gray-300 px-4 py-2">
                    {info.nominal.inferior}
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {info.rev.esqInf}
                      </td>
                      <td className="border border-black p-2">
                        {info.rev.centroInf}
                      </td>
                      <td className="border border-black p-2">
                        {info.rev.dirInf}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {info.rev.mediaInf}
                      </td>
                      <td className="border-2 border-blue-400 p-2">
                        {info.rev.ligaInf}
                      </td>
                    </td>
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {info.oil.esqSup}
                      </td>
                      <td className="border border-black p-2">
                        {info.oil.centroSup}
                      </td>
                      <td className="border border-black p-2">
                        {info.oil.dirSup}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {info.oil.mediaSup}
                      </td>
                    </td>
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {info.oil.esqInf}
                      </td>
                      <td className="border border-black p-2">
                        {info.oil.centroInf}
                      </td>
                      <td className="border border-black p-2">
                        {info.oil.dirInf}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {info.oil.mediaInf}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Resultados;
