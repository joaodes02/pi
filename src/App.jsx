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

function App() {
  const [idDados, setIdDados] = useState(false);
  const [value, setValue] = useState({});

  const [dados, setDados] = useState([]);

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
        path="/inserirTec"
        element={<ProtectedRoute element={<InserirProcesso />} />}
      />
    </Routes>
  );
}

export default App;
