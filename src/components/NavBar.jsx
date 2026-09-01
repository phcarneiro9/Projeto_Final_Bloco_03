import { Link } from 'react-router-dom'
import { FaPrescriptionBottleMedical } from 'react-icons/fa6'

function NavBar() {
  return (
    <nav className="w-full bg-primary-700 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-white">
          <FaPrescriptionBottleMedical size={24} />
          Farmácia Bem Estar
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium text-primary-50">
          <li>
            <Link to="/" className="transition hover:text-white">
              Início
            </Link>
          </li>
          <li>
            <Link to="/categorias" className="transition hover:text-white">
              Categorias
            </Link>
          </li>
          <li>
            <Link to="/categorias/cadastrar" className="transition hover:text-white">
              Nova categoria
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
