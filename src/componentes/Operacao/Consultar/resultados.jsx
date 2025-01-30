function Resultados() {
  const dados = [
    {
      id: 1,
      horario: "15:00:00",
      item: "E40090",
      bobina: "0909",
      revEsqSup: "2.0",
      revCentroSup: "2.0",
      nominalSup: "2.0",
      nominalInf: 2.2,
      revDirSup: "2.0",
      revEsqInf: "2.0",
      revCentroInf: "2.0",
      revDirInf: "2.0",
      dEsq: 65,
      dCentro: 65,
      dDir: 65,
      ligaSup: "1.0",
      ligaInf: "0.9",
      mediaSup: "2,0",
      mediaInf: "2,0",
      oilEsqSup: "3.3",
      oilCentroSup: "3.3",
      oilDirSup: "3.3",
      mediaOilSup: "3.3",
      oilEsqInf: "3.3",
      oilCentroInf: "3.3",
      oilDirInf: "3.3",
      mediaOilInf: "3.3",
    },
    {
      id: 1,
      horario: "15:00:00",
      item: "E40090",
      bobina: "0909",
      revEsqSup: "2.0",
      revCentroSup: "2.0",
      nominalSup: "2.0",
      nominalInf: 2.2,
      revDirSup: "2.0",
      revEsqInf: "2.0",
      revCentroInf: "2.0",
      revDirInf: "2.0",
      dEsq: 65,
      dCentro: 65,
      dDir: 65,
      ligaSup: "1.0",
      ligaInf: "0.9",
      mediaSup: "2,0",
      mediaInf: "2,0",
      oilEsqSup: "3.3",
      oilCentroSup: "3.3",
      oilDirSup: "3.3",
      mediaOilSup: "3.3",
      oilEsqInf: "3.3",
      oilCentroInf: "3.3",
      oilDirInf: "3.3",
      mediaOilInf: "3.3",
    },
    {
      id: 1,
      horario: "15:00:00",
      item: "E40090",
      bobina: "0909",
      revEsqSup: "2.0",
      revCentroSup: "2.0",
      nominalSup: "2.0",
      nominalInf: 2.2,
      revDirSup: "2.0",
      revEsqInf: "2.0",
      revCentroInf: "2.0",
      revDirInf: "2.0",
      dEsq: 65,
      dCentro: 65,
      dDir: 65,
      ligaSup: "1.0",
      ligaInf: "0.9",
      mediaSup: "2,0",
      mediaInf: "2,0",
      oilEsqSup: "3.3",
      oilCentroSup: "3.3",
      oilDirSup: "3.3",
      mediaOilSup: "3.3",
      oilEsqInf: "3.3",
      oilCentroInf: "3.3",
      oilDirInf: "3.3",
      mediaOilInf: "3.3",
    },
  ];

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
                    {info.horario}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {info.item}-{info.bobina}
                  </td>
                  <td className="font-bold border-2 border-gray-300 px-4 py-2">
                    {info.nominalSup}
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {info.revEsqSup}
                      </td>
                      <td className="border border-black p-2">
                        {info.revCentroSup}
                      </td>
                      <td className="border border-black p-2">
                        {info.revDirSup}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {info.mediaSup}
                      </td>
                      <td className="border-2 border-blue-400 p-2">
                        {info.ligaSup}
                      </td>
                    </td>
                  </td>
                  <td className="font-bold border-2 border-gray-300 px-4 py-2">
                    {info.nominalInf}
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {info.revEsqInf}
                      </td>
                      <td className="border border-black p-2">
                        {info.revCentroInf}
                      </td>
                      <td className="border border-black p-2">
                        {info.revDirInf}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {info.mediaInf}
                      </td>
                      <td className="border-2 border-blue-400 p-2">
                        {info.ligaInf}
                      </td>
                    </td>
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {info.oilEsqSup}
                      </td>
                      <td className="border border-black p-2">
                        {info.oilCentroSup}
                      </td>
                      <td className="border border-black p-2">
                        {info.oilDirSup}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {info.mediaOilSup}
                      </td>
                    </td>
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="text-[15px]">
                      <td className="border border-black p-2">
                        {info.oilEsqInf}
                      </td>
                      <td className="border border-black p-2">
                        {info.oilCentroInf}
                      </td>
                      <td className="border border-black p-2">
                        {info.oilDirInf}
                      </td>
                      <td className="font-bold border-2 border-orange-400 p-2">
                        {info.mediaOilInf}
                      </td>
                    </td>
                  </td>
                  <td className="justify-center items-center border border-gray-300">
                    <td className="font-bold border-2 border-black p-2">
                      {info.dEsq}
                    </td>
                    <td className="font-bold border-2 border-black p-2">
                      {info.dEsq}
                    </td>
                    <td className="font-bold border-2 border-black p-2">
                      {info.dEsq}
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
