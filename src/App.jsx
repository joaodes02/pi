import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Menu from "./pages/menu/menu";
import Inserir from "./pages/operacao/inserir";
import Consultar from "./pages/operacao/consultar";
import Editar from "./pages/operacao/editar";
import Tracao from "./pages/operacao/tracao";
import InserirProcesso from "./pages/tecnico/inserirProcesso";
import "./App.css";
import { useState } from "react";

function App() {
  const [idDados, setIdDados] = useState(false);

  const [dados, setDados] = useState([
    {
      id: 1,
      horario: "15:00:00",
      item: "E40090",
      bobina: "0909",
      revEsqSup: "2.0",
      revCentroSup: "2.0",
      nominalSup: "2.0",
      nominalInf: "2.2",
      revDirSup: "2.0",
      revEsqInf: "2.0",
      revCentroInf: "2.0",
      revDirInf: "2.0",
      dEsq: 65,
      dCentro: 65,
      dDir: 65,
      ligaSup: "1.0",
      ligaInf: "0.9",
      mediaSup: "2,0",
      mediaInf: "2,0",
      oilEsqSup: "3.3",
      oilCentroSup: "3.3",
      oilDirSup: "3.3",
      mediaOilSup: "3.3",
      oilEsqInf: "3.3",
      oilCentroInf: "3.3",
      oilDirInf: "3.3",
      mediaOilInf: "3.3",
    },
    {
      id: 2,
      horario: "15:00:00",
      item: "E40090",
      bobina: "0909",
      revEsqSup: "2.0",
      revCentroSup: "2.0",
      nominalSup: "2.0",
      nominalInf: 2.2,
      revDirSup: "2.0",
      revEsqInf: "2.0",
      revCentroInf: "2.0",
      revDirInf: "2.0",
      dEsq: 65,
      dCentro: 65,
      dDir: 65,
      ligaSup: "1.0",
      ligaInf: "0.9",
      mediaSup: "2,0",
      mediaInf: "2,0",
      oilEsqSup: "3.3",
      oilCentroSup: "3.3",
      oilDirSup: "3.3",
      mediaOilSup: "3.3",
      oilEsqInf: "3.3",
      oilCentroInf: "3.3",
      oilDirInf: "3.3",
      mediaOilInf: "3.3",
    },
    {
      id: 3,
      horario: "15:00:00",
      item: "E40090",
      bobina: "0909",
      revEsqSup: "2.0",
      revCentroSup: "2.0",
      nominalSup: "2.0",
      nominalInf: 2.2,
      revDirSup: "2.0",
      revEsqInf: "2.0",
      revCentroInf: "2.0",
      revDirInf: "2.0",
      dEsq: 65,
      dCentro: 65,
      dDir: 65,
      ligaSup: "1.0",
      ligaInf: "0.9",
      mediaSup: "2,0",
      mediaInf: "2,0",
      oilEsqSup: "3.3",
      oilCentroSup: "3.3",
      oilDirSup: "3.3",
      mediaOilSup: "3.3",
      oilEsqInf: "3.3",
      oilCentroInf: "3.3",
      oilDirInf: "3.3",
      mediaOilInf: "3.3",
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/inserir"
        element={
          <Inserir
            dadosArray={dados}
            setIdDados={setIdDados}
            idDados={idDados}
            setDadosArray={setDados}
          />
        }
      />
      <Route path="/consulta" element={<Consultar />} />
      <Route
        path="/editar"
        element={
          <Editar setIdDados={setIdDados} setDados={setDados} dados={dados} />
        }
      />
      <Route path="/tracion" element={<Tracao />} />
      <Route path="/inserirTec" element={<InserirProcesso />} />
    </Routes>
  );
}

export default App;
