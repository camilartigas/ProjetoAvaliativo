import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import { CadastroMedicamentos } from "../pages/cadastroMedicamento";
import { CadastroNovaFarmacia } from "../pages/cadastroNovaFarmacia";
import { Ofertas } from "../pages/Ofertas";
import { Mapa } from "../pages/mapa";
import { Login } from "../pages/login";
import { DetalharMedicamento } from "../pages/detalharMedicamento";
import { ListaMedicamentos } from "../pages/listaMedicamentos";


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrodemedicamentos" element={<CadastroMedicamentos />} />
        <Route path="/cadastrodenovasfarmácias" element={<CadastroNovaFarmacia />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listademedicamentos" element={<ListaMedicamentos />} />
        <Route path="/detalharmedicamento/:id" element={<DetalharMedicamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RoutesApp };