import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Inicial from "../pages/Inicio";
import Home from "../pages/Home";
import Cadastro1 from "../pages/Cadastro1";
import Cadastro2 from "../pages/Cadastro2";
import Parabens from "../pages/Parabens";
import Error from "../pages/Error";
import ErrorProduto from "../pages/ErrorProduto"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/inicio" element={<Inicial />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro1" element={<Cadastro1 />} />
                <Route path="/cadastro2" element={<Cadastro2 />} />
                <Route path="/parabens" element={<Parabens />} />
                <Route path="/erro" element={<Error />} />
                <Route path="/erroProduto" element={<ErrorProduto />} />
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="*" element={<Navigate to="/inicio" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;