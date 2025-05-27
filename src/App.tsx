// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layout";
import { BusinessPage } from "./features/business/pages/business";
import ClientsPage from "./features/clients/pages/clients";
import { HomePage } from "./features/home";
import { PointsPage } from "./features/points/pages/points";
import { PromotionsPage } from "./features/promotions/pages/promotions";
import { ChakraUIProvider } from "./providers/chakra";

function App() {
  return (
    <ChakraUIProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<HomePage />} path="home" />
            <Route element={<PointsPage />} path="canjear-puntos" />
            <Route element={<ClientsPage />} path="clientes" />
            <Route element={<PromotionsPage />} path="promociones" />
            <Route element={<BusinessPage />} path="mi-negocio" />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraUIProvider>
  );
}

export default App;
