import Catalog from "./Components/Catalog";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Components/menu";
import About from "./pages/about";
import Bag from "./Components/Bag";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter class="container">
      <Menu />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/shopping" element={<Bag />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
