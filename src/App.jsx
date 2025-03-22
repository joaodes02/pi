import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Menu from "./pages/menu/menu";
import Inserir from "./pages/operacao/inserir";
import Consultar from "./pages/operacao/consultar";
import Editar from "./pages/operacao/editar";
import InserirProcesso from "./pages/tecnico/inserirProcesso";
import Tracion from "./pages/operacao/Tracion";
import "./App.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./componentes/ProtectedRoutes/ProtectedRoutes";
import { fetchData } from "./hooks/fetchData";
import ResultadosEm from "./componentes/Operacao/EnsaioMecanico/resultadosEm";
import ConsultarTec from "./pages/tecnico/consultarTec";

function App() {
  const [idDados, setIdDados] = useState(false);
  const [value, setValue] = useState({});
  const [dados, setDados] = useState([]);
  const [dadosTracion, setDadosTracion] = useState([
    {
      id: 1,
      tempera: "TH435",
      item: "e40089",
      bobina: 300,
      espessura: 0.5,
      le: 445.65,
      lr: 405.65,
      alongamento: 16.7,
      r: 0.987,
      n: 0.877,
    },
  ]);

  useEffect(() => {
    fetchData(setDados);
  }, []);
  return (
    <Routes>
      {/* Rota pública */}
      <Route path="/" element={<ProtectedRoute element={<Login />} />} />

      {/* Rotas protegidas */}
      <Route path="/menu" element={<ProtectedRoute element={<Menu />} />} />
      <Route
        path="/inserir"
        element={
          <ProtectedRoute
            element={
              <Inserir
                dadosArray={dados}
                setIdDados={setIdDados}
                idDados={idDados}
                setDadosArray={setDados}
              />
            }
          />
        }
      />
      <Route
        path="/consulta"
        element={
          <ProtectedRoute
            element={<Consultar dados={dados} setDados={setDados} />}
          />
        }
      />
      <Route
        path="/editar"
        element={
          <ProtectedRoute
            element={
              <Editar
                idDados={idDados}
                setIdDados={setIdDados}
                setDados={setDados}
                dados={dados}
              />
            }
          />
        }
      />
      <Route
        path="/ensaioMecanico"
        element={
          <ProtectedRoute
            element={<Tracion value={value} setValue={setValue} />}
          />
        }
      />
      <Route
        path="/resultadosEm"
        element={
          <ProtectedRoute
            element={
              <ResultadosEm
                dadosTracion={dadosTracion}
                setDadosTracion={setDadosTracion}
              />
            }
          />
        }
      />
      <Route
        path="/inserirTec"
        element={<ProtectedRoute element={<InserirProcesso />} />}
      />
      <Route
        path="/consultaTec"
        element={<ProtectedRoute element={<ConsultarTec />} />}
      />
    </Routes>
  );
}

export default App;
