import { fetchData } from "../../hooks/fetchData";
import DadosConsultarTec from "../../componentes/Tecnico/Consultar/dadosConsultaTec";
import ResultadosTec from "../../componentes/Tecnico/Consultar/resultadosTec";
import { useEffect } from "react";

function ConsultarTec({ dados, setDados }) {
  useEffect(() => {
    fetchData(setDados);
  }, []);

  return (
    <>
      <DadosConsultarTec />
    </>
  );
}

export default ConsultarTec;
