import { Navigate, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { SelectionContext } from "./context/SelectionContext";
import Layout from "./layouts/default";
import Movies from "./pages/movies";
import Details from "./pages/details";
import About from "./pages/about";
import "./assets/css/index.css";

function App() {

  const [id, setId] = useState<number>(0)

  return (
    <SelectionContext.Provider value={{ id, setId }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/movies" />} />
          <Route path="movies" element={<Movies />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </SelectionContext.Provider>
  );
}

export default App;
