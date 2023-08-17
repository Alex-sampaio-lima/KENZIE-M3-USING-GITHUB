import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ErrorPage } from "../pages/ErrorPage";

// Routes - Componente pai de todas as rotas
// Route - Componente para criar uma nota

// Rota: endereço no navegador
// O path é o caminho do navegador
export const RoutesMain = () => {
  return (
    <main>
      <Routes>
        {/* Lógica do Route = {caminhoDoNavegador === "/" ? <ComponentPage /> : null} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  );
};
