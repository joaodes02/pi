import DadosConsultar from "../../componentes/Operacao/Consultar/dadosConsulta";
import Resultados from "../../componentes/Operacao/Consultar/resultados";

function Consultar({ dados }) {
  return (
    <>
      <DadosConsultar />
      <Resultados dados={dados} />
    </>
  );
}

export default Consultar;
