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

  const inserir = () => {
    const novoDado = {
      id: dadosArray.length + 1,
      dados: {
        equipamento: dados.equipamento,
        horario: dados.horario,
        item: dados.item,
        bobina: dados.bobina,
      },
      nominal: { superior: nominal.superior, inferior: nominal.inferior },
      rev: {
        esqSup: rev.esqSup,
        centroSup: rev.centroSup,
        dirSup: rev.dirSup,
        esqInf: rev.esqInf,
        centroInf: rev.centroInf,
        dirInf: rev.dirInf,
        ligaSup: rev.ligaSup,
        ligaInf: rev.ligaInf,
        mediaSup: rev.mediaSup,
        mediaInf: rev.mediaInf,
        dispSup: rev.dispSup,
        dispInf: rev.dispInf,
      },
      dureza: {
        esq: dureza.esq,
        centro: dureza.centro,
        dir: dureza.dir,
      },
      oil: {
        esqSup: oil.esqSup,
        centroSup: oil.centroSup,
        dirSup: oil.dirSup,
        mediaSup: oil.mediaSup,
        esqInf: oil.esqInf,
        centroInf: oil.centroInf,
        dirInf: oil.dirInf,
        mediaInf: oil.mediaInf,
      },
    };
    setDadosArray((prevDados) => [...prevDados, novoDado]);
    handleLimpar();
  };

  const [dadoEdit, setDadoEdit] = useState(recuperaDado());
  const [dados, setDados] = useState(idDados ? dadoEdit.dados : "");
  const [nominal, setNominal] = useState(idDados ? dadoEdit.nominal : "");
  const [rev, setRev] = useState(idDados ? dadoEdit?.rev : "");
  const [dureza, setDureza] = useState(idDados ? dadoEdit.dureza : "");
  const [oil, setOil] = useState(idDados ? dadoEdit.oil : "");

  const handleLimpar = () => {
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
      dispSup: "",
      dispInf: "",
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
          <Dados
            setIdDados={setIdDados}
            idDados={idDados}
            value={dados}
            setValue={setDados}
          />
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
        <Buttons inserir={inserir} limpar={handleLimpar} />
      </div>
    </div>
  );
}

export default Inserir;
