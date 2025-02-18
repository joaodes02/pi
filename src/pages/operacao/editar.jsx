import { fetchData } from "../../hooks/fetchData";
import TelaEdit from "../../componentes/Operacao/Editar/telaEdit";
import { useEffect } from "react";
function Editar({ setIdDados, dados, setDados, idDados }) {
  useEffect(() => {
    fetchData(setDados);
  }, []);

  return (
    <TelaEdit
      dados={dados}
      setDados={setDados}
      setIdDados={setIdDados}
      idDados={idDados}
    />
  );
}

export default Editar;
