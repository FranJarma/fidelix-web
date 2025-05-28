import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/layout/layout";
import { RequireAuth } from "./features/auth/components/require-auth";
import { LoginPage } from "./features/auth/pages/login";
import { BusinessPage } from "./features/business/pages/business";
import ClientsPage from "./features/clients/pages/clients";
import { HomePage } from "./features/home";
import { PointsPage } from "./features/points/pages/points";
import { PromotionsPage } from "./features/promotions/pages/promotions";
import { ChakraUIProvider } from "./providers/chakra";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <ChakraUIProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} path="/" />

          <Route element={<LoginPage />} path="/login" />

          <Route
            path="/"
            element={
              <RequireAuth isLoggedIn={isLoggedIn}>
                <Layout />
              </RequireAuth>
            }
          >
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
