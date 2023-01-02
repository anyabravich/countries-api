import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Details } from "./pages/Details";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<Home countries={countries} setCountries={setCountries} />}
          />
          <Route path="/country/:name" element={<Details />} />
          <Route element={NotFound} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
