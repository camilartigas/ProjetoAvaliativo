import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { CadastroMedicamentos } from "../pages/cadastroMedicamento";
import { CadastroNovaFarmacia } from "../pages/cadastroNovaFarmacia";
import { Ofertas } from "../pages/Ofertas";
import { Mapa } from "../pages/mapa";
import { Login } from "../pages/login/login";
import { DetalharMedicamento } from "../pages/detalharMedicamento";
import { ListaMedicamentos } from "../pages/listaMedicamentos";


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastromedicamento" element={<CadastroMedicamentos />} />
        <Route path="/cadastronovafarmacia" element={<CadastroNovaFarmacia />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detalharmedicamento" element={<DetalharMedicamento />} />
        <Route path="/listamedicamentos" element={<ListaMedicamentos />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };