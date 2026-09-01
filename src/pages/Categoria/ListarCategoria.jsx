import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listarCategorias, excluirCategoria } from '../../services/CategoriaService'

function ListarCategoria() {
  const [categorias, setCategorias] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  async function buscarCategorias() {
    try {
      setCarregando(true)
      const dados = await listarCategorias()
      setCategorias(dados)
    } catch (error) {
      setErro('Não foi possível carregar as categorias. Verifique se o backend está no ar.')
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  async function handleExcluir(id) {
    const confirmar = window.confirm('Deseja realmente excluir esta categoria?')
    if (!confirmar) return

    await excluirCategoria(id)
    await buscarCategorias()
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Categorias</h1>
        <Link
          to="/categorias/cadastrar"
          className="rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
        >
          + Nova categoria
        </Link>
      </div>

      {erro && <p className="mb-4 text-sm text-red-600">{erro}</p>}
      {carregando && <p className="text-sm text-gray-500">Carregando...</p>}

      {!carregando && !erro && categorias.length === 0 && (
        <p className="text-sm text-gray-500">Nenhuma categoria cadastrada ainda.</p>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categorias.map((categoria) => (
          <div
            key={categoria.id}
            className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div>
              <p className="text-xs text-gray-400">ID: {categoria.id}</p>
              <h2 className="mt-1 text-lg font-semibold text-gray-800">
                {categoria.descricao}
              </h2>
            </div>

            <div className="mt-4 flex gap-3">
              <Link
                to={`/categorias/editar/${categoria.id}`}
                className="flex-1 rounded-md border border-primary-600 px-3 py-1.5 text-center text-sm font-medium text-primary-700 transition hover:bg-primary-50"
              >
                Editar
              </Link>
              <button
                onClick={() => handleExcluir(categoria.id)}
                className="flex-1 rounded-md border border-red-500 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default ListarCategoria
