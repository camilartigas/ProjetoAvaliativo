import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { CadastroMedicamentos } from "../pages/cadastroMedicamento";
import { CadastroNovaFarmacia } from "../pages/cadastroNovaFarmacia";
import { PaginaExtra } from "../pages/paginaExtra";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastromedicamento" element={<CadastroMedicamentos />} />
        <Route path="cadastronovafarmacia" element={<CadastroNovaFarmacia />} />
        <Route path="paginaextra" element={<PaginaExtra />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };