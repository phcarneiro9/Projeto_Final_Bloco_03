import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ListarCategoria from '../pages/Categoria/ListarCategoria'
import FormCategoria from '../pages/Categoria/FormCategoria'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<ListarCategoria />} />
      <Route path="/categorias/cadastrar" element={<FormCategoria />} />
      <Route path="/categorias/editar/:id" element={<FormCategoria />} />
    </Routes>
  )
}

export default AppRoutes
