import { useState } from "react";
import Buttons from "../../componentes/Operacao/Inserir/buttons";
import Dureza from "../../componentes/Operacao/Inserir/dureza";
import Rev from "../../componentes/Operacao/Inserir/rev";
import Dados from "../../componentes/Operacao/Inserir/dados";
import Nominal from "../../componentes/Operacao/Inserir/nominal";
import Oil from "../../componentes/Operacao/Inserir/oil";
import axios from "axios";
import { useNavigate } from "react-router";

function Inserir({ setDadosArray, setIdDados, idDados, dadosArray }) {
  function recuperaDado() {
    var dado = dadosArray.find((d) => d.id === idDados);
    return dado;
  }
  const navigate = useNavigate();
  const inserir = async () => {
    const novoDado = {
      toc: new Date(),
      tom: new Date(),
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

    // Enviar a requisição POST utilizando o axios
    const response = await axios.post("http://localhost:3322/operacao/insert", {
      novoDado: novoDado,
    });

    // Verifica se a resposta tem status 200
    if (response.status === 200) {
      navigate("/menu");
    }

    setDadosArray((prevDados) => [...prevDados, novoDado]);
    handleLimpar();
  };
  const editar = async (id) => {
    if (!id || typeof id !== "number") {
      console.error("ID inválido para edição:", id);
      return;
    }
    const novosDados = {
      toc: new Date(),
      tom: new Date(),
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

    try {
      console.log(novosDados);
      // Enviar a requisição PATCH utilizando o axios
      const response = await axios.patch(
        `http://localhost:3322/operacao/edit/${id}`,
        novosDados
      );

      console.log("Operação editada com sucesso!", response.data);
    } catch (error) {
      console.error("Erro ao editar a operação:", error);
    }
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
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-b from-gray-100 to-gray-300 p-2 overflow-hidden">
      <h1 className="text-4xl pb-4 font-extrabold text-indigo-700 shadow-md">
        Inserir Resultados
      </h1>
      <div className="p-4 flex flex-col border-4 border-indigo-300 bg-white shadow-lg rounded-xl max-h-[90vh] overflow-hidden">
        <div className="p-2 border border-gray-400 mt-2 w-[800px] bg-gray-100 rounded-lg shadow-md">
          <Dados
            setIdDados={setIdDados}
            idDados={idDados}
            value={dados}
            setValue={setDados}
          />
        </div>
        <div className="border border-gray-400 mt-2 w-[800px] bg-gray-100 rounded-lg shadow-md">
          <Nominal value={nominal} setValue={setNominal} />
          <Rev value={rev} setValue={setRev} />
        </div>
        <div className="p-2 mt-2 border border-gray-400 w-[800px] bg-gray-100 rounded-lg shadow-md">
          <Dureza value={dureza} setValue={setDureza} />
        </div>
        <div className="p-2 mt-2 border border-gray-400 w-[800px] bg-gray-100 rounded-lg shadow-md">
          <Oil value={oil} setValue={setOil} />
        </div>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-[200px] flex flex-col gap-2">
        <Buttons
          editar={editar}
          inserir={inserir}
          limpar={handleLimpar}
          idDados={idDados}
        />
      </div>
    </div>
  );
}

export default Inserir;
