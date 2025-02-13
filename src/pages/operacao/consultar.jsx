import { fetchData } from "../../hooks/fetchData";
import DadosConsultar from "../../componentes/Operacao/Consultar/dadosConsulta";
import Resultados from "../../componentes/Operacao/Consultar/resultados";
import { useEffect } from "react";

function Consultar({ dados, setDados }) {
  useEffect(() => {
    fetchData(setDados);
  }, []);

  return (
    <>
      <DadosConsultar setDados={setDados} />
      <Resultados dados={dados} />
    </>
  );
}

export default Consultar;
