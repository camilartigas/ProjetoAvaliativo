import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { CadastroMedicamentos } from "../pages/cadastroMedicamento";
import { CadastroNovaFarmacia } from "../pages/cadastroNovaFarmacia";
import { Ofertas } from "../pages/Ofertas";
import { Mapa } from "../pages/mapa";
import { Login } from "../pages/login/login";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastromedicamento" element={<CadastroMedicamentos />} />
        <Route path="cadastronovafarmacia" element={<CadastroNovaFarmacia />} />
        <Route path="ofertas" element={<Ofertas />} />
        <Route path="mapa" element={<Mapa />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };