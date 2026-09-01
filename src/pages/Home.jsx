import { Link } from 'react-router-dom'
import { FaPills, FaTags, FaTruckMedical } from 'react-icons/fa6'

function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-10 rounded-lg bg-primary-600 px-8 py-12 text-white">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">
          Gestão de produtos da sua farmácia, em um só lugar
        </h1>
        <p className="max-w-2xl text-primary-50">
          Cadastre categorias, organize seu estoque e mantenha os dados dos
          produtos sempre atualizados.
        </p>
        <Link
          to="/categorias"
          className="mt-6 inline-block rounded-md bg-white px-5 py-2 font-medium text-primary-700 transition hover:bg-primary-50"
        >
          Ver categorias
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <FaTags className="mb-3 text-primary-600" size={28} />
          <h2 className="mb-2 text-lg font-semibold">Categorias</h2>
          <p className="text-sm text-gray-600">
            Organize seus produtos por categoria para facilitar a busca e o
            controle de estoque.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <FaPills className="mb-3 text-primary-600" size={28} />
          <h2 className="mb-2 text-lg font-semibold">Produtos</h2>
          <p className="text-sm text-gray-600">
            Cadastre, edite e remova produtos vinculados a cada categoria.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <FaTruckMedical className="mb-3 text-primary-600" size={28} />
          <h2 className="mb-2 text-lg font-semibold">Backend em deploy</h2>
          <p className="text-sm text-gray-600">
            Todas as operações consomem a API documentada no Swagger do
            backend.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home
