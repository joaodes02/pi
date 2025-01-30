import Buttons from "../../componentes/Operacao/Inserir/buttons";
import Dados from "../../componentes/Tecnico/Inserir/dadosTec";
import { useState } from "react";

function InserirProcesso() {
  const stateInitial = {
    estanhamento: {
      alcalina: "",
      h2so4: "",
      ferro: "",
      snPlate: "",
      acidez: "",
      so4: "",
      aditivo: "",
      antioxi: "",
      dragout: "",
      fluxo: "",
      estFluxo: "",
      ph: "",
      bicromato: "",
      plating: "",
      tq: "",
      mdif: "",
      estiradeira: "",
    },
    cromado: {
      alcalina: "",
      h2so4C: "",
      ferroC: "",
      cromoPlate: "",
      h2so4Plate: "",
      fluoretoPlate: "",
      cr3: "",
      dragoutC: "",
      fluoretoDragout: "",
      tqC: "",
      fluoretoTq: "",
      poco: "",
    },
  };

  const [dados, setDados] = useState(stateInitial);

  const handleLimpar = () => {
    setDados(stateInitial);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-200">
        <div className="p-3 flex flex-col border-4 border-indigo-200 bg-gray-200">
          <h1 className="text-center text-3xl font-bold">
            Inclusão de Processo:
          </h1>
          <div className="p-2 border border-gray-400 mt-2 w-[770px]">
            <Dados value={dados} setValue={setDados} />
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-[300px]">
          <Buttons limpar={handleLimpar} />
        </div>
      </div>
    </>
  );
}

export default InserirProcesso;
