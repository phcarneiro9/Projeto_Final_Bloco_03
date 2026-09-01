import { Routes, Route } from "react-router-dom";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import Categorias from "./components/categoria/listacategoria/ListaCategorias";
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto";
import FormProduto from "./components/produto/formproduto/FormProduto";
import ListaProdutos from "./components/produto/listaproduto/ListaProdutos";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/categorias" element={<Categorias />} />

          <Route
            path="/cadastrarcategoria"
            element={<FormCategoria />}
          />

          <Route
            path="/editarcategoria/:id"
            element={<FormCategoria />}
          />

          <Route
            path="/deletarcategoria/:id"
            element={<DeletarCategoria />}
          />

          <Route path="/produtos" element={<ListaProdutos />} />

          <Route
            path="/cadastrarproduto"
            element={<FormProduto />}
          />

          <Route
            path="/editarproduto/:id"
            element={<FormProduto />}
          />

          <Route
            path="/deletarproduto/:id"
            element={<DeletarProduto />}
          />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;