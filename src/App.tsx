// src/App.tsx
import { ChakraUIProvider } from "./providers/chakra";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import ClientsPage from "./features/clients/pages/clients";

function App() {
  return (
    <ChakraUIProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="clientes" element={<ClientsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraUIProvider>
  );
}

export default App;
