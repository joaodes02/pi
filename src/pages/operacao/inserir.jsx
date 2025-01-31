import { useState } from "react";
import Buttons from "../../componentes/Operacao/Inserir/buttons";
import Dureza from "../../componentes/Operacao/Inserir/dureza";
import Rev from "../../componentes/Operacao/Inserir/rev";
import Dados from "../../componentes/Operacao/Inserir/dados";
import Nominal from "../../componentes/Operacao/Inserir/nominal";
import Oil from "../../componentes/Operacao/Inserir/oil";

function Inserir({ setDadosArray, setIdDados, idDados, dadosArray }) {
  function recuperaDado() {
    var dado = dadosArray.find((d) => d.id === idDados);
    setIdDados(false);
    return dado;
  }

  // Definindo o estado para os componentes
  const [dadoEdit, setDadoEdit] = useState(recuperaDado());
  const [dados, setDados] = useState(idDados ? dadoEdit.dados : "");
  const [nominal, setNominal] = useState(idDados ? dadoEdit.nominal : "");
  const [rev, setRev] = useState(idDados ? dadoEdit.rev : "");
  const [dureza, setDureza] = useState(idDados ? dadoEdit.dureza : "");
  const [oil, setOil] = useState(idDados ? dadoEdit.oil : "");

  // Função para limpar os campos
  const handleLimpar = () => {
    // Limpa todos os estados de uma vez
    setDados({
      equipamento: "",
      horario: "",
      item: "",
      bobina: "",
    });
    setNominal({ superior: "", inferior: "" });
    setRev({
      esqSup: "",
      centroSup: "",
      dirSup: "",
      esqInf: "",
      centroInf: "",
      dirInf: "",
      ligaSup: "",
      ligaInf: "",
      mediaSup: "",
      mediaInf: "",
    });
    setDureza({ esq: "", centro: "", dir: "" });
    setOil({
      esqSup: "",
      centroSup: "",
      dirSup: "",
      mediaSup: "",
      esqInf: "",
      centroInf: "",
      dirInf: "",
      mediaInf: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-200">
      <h1 className="text-3xl pb-4 font-bold">Inclusão de resultado:</h1>
      <div className="p-3 flex flex-col border-4 border-indigo-200 bg-gray-200">
        <div className="p-2 border border-gray-400 mt-2 w-[800px]">
          <Dados idDados={idDados} value={dados} setValue={setDados} />
        </div>
        <div className="border border-gray-400 mt-2 w-[800px]">
          <Nominal value={nominal} setValue={setNominal} />
          <Rev value={rev} setValue={setRev} />
        </div>
        <div className="p-2 mt-2 border border-gray-400 mt-2 w-[800px]">
          <Dureza value={dureza} setValue={setDureza} />
        </div>
        <div className="p-2 mt-2 border border-gray-400 mt-2 w-[800px]">
          <Oil value={oil} setValue={setOil} />
        </div>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-[300px]">
        <Buttons limpar={handleLimpar} />
      </div>
    </div>
  );
}

export default Inserir;
