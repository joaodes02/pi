import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Menu from "./pages/menu/menu";
import Inserir from "./pages/operacao/inserir";
import Consultar from "./pages/operacao/consultar";
import Editar from "./pages/operacao/editar";
import InserirProcesso from "./pages/tecnico/inserirProcesso";
import Tracion from "./pages/operacao/Tracion";
import "./App.css";
import { useState } from "react";

function App() {
  const [idDados, setIdDados] = useState(false);

  const [dados, setDados] = useState([
    {
      id: 1,
      dados: {
        equipamento: "LEE5",
        horario: "15:00",
        item: "E40090",
        bobina: "0909",
      },
      nominal: {
        superior: "2.0",
        inferior: "2.2",
      },
      rev: {
        esqSup: "2.0",
        centroSup: "2.0",
        dirSup: "2.0",
        esqInf: "2.0",
        centroInf: "2.0",
        dirInf: "2.0",
        ligaSup: "1.0",
        ligaInf: "0.9",
        mediaSup: "2,0",
        mediaInf: "2,0",
        dispSup: "0.0",
        dispInf: "0.0",
      },
      dureza: { esq: 65, centro: 65, dir: 65 },
      oil: {
        esqSup: "3.3",
        centroSup: "3.3",
        dirSup: "3.3",
        mediaSup: "3.3",
        esqInf: "3.3",
        centroInf: "3.3",
        dirInf: "3.3",
        mediaInf: "3.3",
      },
    },
    {
      id: 2,
      dados: {
        equipamento: "LEE5",
        horario: "15:00",
        item: "E60090",
        bobina: "0909",
      },
      nominal: {
        superior: "2.0",
        inferior: "2.2",
      },
      rev: {
        esqSup: "2.0",
        centroSup: "2.0",
        dirSup: "2.0",
        esqInf: "2.0",
        centroInf: "2.0",
        dirInf: "2.0",
        ligaSup: "1.0",
        ligaInf: "0.9",
        mediaSup: "2,0",
        mediaInf: "2,0",
        dispSup: "0.0",
        dispInf: "0.0",
      },
      dureza: { esq: 65, centro: 65, dir: 65 },
      oil: {
        esqSup: "3.3",
        centroSup: "3.3",
        dirSup: "3.3",
        mediaSup: "3.3",
        esqInf: "3.3",
        centroInf: "3.3",
        dirInf: "3.3",
        mediaInf: "3.3",
      },
    },
    {
      id: 3,
      dados: {
        equipamento: "LEE5",
        horario: "15:00",
        item: "e70090",
        bobina: "0909",
      },
      nominal: {
        superior: "2.0",
        inferior: "2.2",
      },
      rev: {
        esqSup: "2.0",
        centroSup: "2.0",
        dirSup: "2.0",
        esqInf: "2.0",
        centroInf: "2.0",
        dirInf: "2.0",
        ligaSup: "1.0",
        ligaInf: "0.9",
        mediaSup: "2,0",
        mediaInf: "2,0",
        dispSup: "0.0",
        dispInf: "0.0",
      },
      dureza: { esq: 65, centro: 65, dir: 65 },
      oil: {
        esqSup: "3.3",
        centroSup: "3.3",
        dirSup: "3.3",
        mediaSup: "3.3",
        esqInf: "3.3",
        centroInf: "3.3",
        dirInf: "3.3",
        mediaInf: "3.3",
      },
    },
  ]);

  const [value, setValue] = useState({ tempera: "" });

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
      <Route path="/consulta" element={<Consultar dados={dados} />} />
      <Route
        path="/editar"
        element={
          <Editar setIdDados={setIdDados} setDados={setDados} dados={dados} />
        }
      />
      <Route
        path="/ensaioMecanico"
        element={<Tracion value={value} setValue={setValue} />}
      />

      <Route path="/inserirTec" element={<InserirProcesso />} />
    </Routes>
  );
}

export default App;
