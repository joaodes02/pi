import { fetchData } from "../../hooks/fetchData";
import TelaEdit from "../../componentes/Operacao/Editar/telaEdit";
import { useEffect } from "react";
function Editar({ setIdDados, dados, setDados }) {
  useEffect(() => {
    fetchData(setDados);
  }, []);

  return <TelaEdit setIdDados={setIdDados} dados={dados} setDados={setDados} />;
}

export default Editar;
