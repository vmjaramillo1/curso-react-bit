import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./containers/home/home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} >
        <Route path='modulos'>
          <Route index element={<Home />} />
          <Route path='vacaciones' element={<div>Vacaciones</div>} />
          <Route path='viajes' element={<div>Viajes</div>} />
          <Route path='permisos' element={<div>Permisos Cambio</div>} />
        </Route>
      </Route>
    </Routes>
  )
}
