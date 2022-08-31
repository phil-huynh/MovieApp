import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./layouts/default";
import Movies from "./pages/movies";
import "./assets/css/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="/movies" />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
