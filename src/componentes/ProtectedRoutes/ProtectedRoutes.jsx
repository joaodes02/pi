import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Importação correta

function ProtectedRoute({ element }) {
  const token = Cookies.get("token");

  // Se a rota for o Login
  if (element.type.name === "Login") {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp > currentTime) {
          console.log("🔄 Usuário já autenticado - Redirecionando para menu.");
          return <Navigate to="/menu" />;
        }
      } catch (error) {
        console.log("⚠️ Token inválido, permitindo acesso ao login.");
        Cookies.remove("token");
      }
    }
    return element; // Permite acesso à página de login
  }

  // Para outras rotas, verifica a autenticação normalmente
  if (!token) {
    console.log("🔴 Usuário não autenticado - Redirecionando para login.");
    return <Navigate to="/" />;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      console.log("⏳ Token expirado - Redirecionando para login.");
      Cookies.remove("token");
      return <Navigate to="/" />;
    }

    console.log("🟢 Acesso autorizado!");
    return element;
  } catch (error) {
    console.log("⚠️ Erro ao decodificar o token - Redirecionando para login.");
    Cookies.remove("token");
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
