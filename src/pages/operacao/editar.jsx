import { fetchData } from "../../hooks/fetchData";
import TelaEdit from "../../componentes/Operacao/Editar/telaEdit";
import { useEffect } from "react";
function Editar({ setIdDados, dados, setDados, idDados }) {
  useEffect(() => {
    fetchData(setDados);
  },[]);

  return (
    <div className=" bg-gray-100 h-screen">
      <TelaEdit
        dados={dados}
        setDados={setDados}
        setIdDados={setIdDados}
        idDados={idDados}
      />
    </div>
  );
}

export default Editar;
