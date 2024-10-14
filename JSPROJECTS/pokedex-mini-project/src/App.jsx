import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout.jsx";
import Home from "./routes/Home";
import About from "./routes/About";
import Pokedex from "./routes/Pokedex";
import JoinCyclone from "./routes/JoinCyclone";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="join" element={<JoinCyclone />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
