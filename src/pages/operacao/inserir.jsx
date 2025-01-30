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
  const [dadoEdit, setDadoEdit] = useState(idDados ? recuperaDado() : "");
  const [dados, setDados] = useState(
    idDados
      ? {
          equipamento: dadoEdit.equipamento,
          horario: dadoEdit.horario,
          item: dadoEdit.item,
          bobina: dadoEdit.bobina,
          extra: dadoEdit.extra,
        }
      : ""
  );
  const [nominal, setNominal] = useState(
    idDados
      ? {
          superior: dadoEdit.nominalSup,
          inferior: dadoEdit.nominalInf,
        }
      : ""
  );
  const [rev, setRev] = useState(
    idDados
      ? {
          esquerda: dadoEdit.revEsqSup,
          centro: dadoEdit.revCentroSup,
          direita: dadoEdit.revDirSup,
          esquerdaInferior: dadoEdit.revEsqInf,
          centroInferior: dadoEdit.revCentroInf,
          direitaInferior: dadoEdit.revDirInf,
          media: dadoEdit.mediaSup,
          mediaInferior: dadoEdit.mediaInf,
          liga: dadoEdit.ligaSup,
          ligaInferior: dadoEdit.ligaInf,
          disp: "s",
          dispInferior: "d",
        }
      : ""
  );
  const [dureza, setDureza] = useState(
    idDados
      ? {
          esquerda: dadoEdit.dEsq,
          centro: dadoEdit.dCentro,
          direita: dadoEdit.dDir,
        }
      : ""
  );
  const [oil, setOil] = useState(
    idDados
      ? {
          esquerda: dadoEdit.oilEsqSup,
          centro: dadoEdit.oilCentroSup,
          direita: dadoEdit.oilDirSup,
          esquerdaInferior: dadoEdit.oilEsqInf,
          centroInferior: dadoEdit.oilCentroInf,
          direitaInferior: dadoEdit.oilDirInf,
          media: dadoEdit.mediaOilSup,
          mediaInferior: dadoEdit.mediaOilInf,
        }
      : ""
  );

  // Função para limpar os campos
  const handleLimpar = () => {
    // Limpa todos os estados de uma vez
    setDados({
      equipamento: "",
      horario: "",
      item: "",
      bobina: "",
      extra: "",
    });
    setNominal({
      superior: "",
      inferior: "",
    });
    setRev({
      esquerda: "",
      centro: "",
      direita: "",
      esquerdaInferior: "",
      centroInferior: "",
      direitaInferior: "",
      media: "",
      mediaInferior: "",
      liga: "",
      ligaInferior: "",
      disp: "",
      dispInferior: "",
    });
    setDureza({
      esquerda: "",
      centro: "",
      direita: "",
    });
    setOil({
      esquerda: "",
      centro: "",
      direita: "",
      esquerdaInferior: "",
      centroInferior: "",
      direitaInferior: "",
      media: "",
      mediaInferior: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-200">
      <h1 className="text-3xl pb-4 font-bold">Inclusão de resultado:</h1>
      <div className="p-3 flex flex-col border-4 border-indigo-200 bg-gray-200">
        <div className="p-2 border border-gray-400 mt-2 w-[800px]">
          <Dados value={dados} setValue={setDados} />
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
