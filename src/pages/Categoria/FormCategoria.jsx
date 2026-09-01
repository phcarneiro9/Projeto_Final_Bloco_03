import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  buscarCategoriaPorId,
  criarCategoria,
  atualizarCategoria,
} from "../../services/CategoriaService";

function FormCategoria() {
  const { id } = useParams();
  const navigate = useNavigate();
  const emEdicao = Boolean(id);

  const [categoria, setCategoria] = useState({
    id: 0,
    tipo: "",
    descricao: "",
  });

  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarCategoria() {
      if (!emEdicao) return;

      try {
        const dados = await buscarCategoriaPorId(id);

        if (dados) {
          setCategoria({
            id: dados.id ?? 0,
            tipo: dados.tipo ?? "",
            descricao: dados.descricao ?? "",
          });
        }
      } catch (error) {
        console.error(error);
        setErro("Não foi possível carregar a categoria.");
      }
    }

    carregarCategoria();
  }, [id, emEdicao]);

  function handleChange(evento) {
    const { name, value } = evento.target;

    setCategoria((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(evento) {
    evento.preventDefault();
    setSalvando(true);
    setErro("");

    try {
      if (emEdicao) {
        await atualizarCategoria({
          ...categoria,
          id: Number(id),
        });
      } else {
        await criarCategoria({
          tipo: categoria.tipo,
          descricao: categoria.descricao,
        });
      }

      navigate("/categorias");
    } catch (error) {
      console.error(error);
      setErro("Não foi possível salvar a categoria. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        {emEdicao ? "Editar categoria" : "Nova categoria"}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700">
            Tipo
          </span>

          <input
            type="text"
            name="tipo"
            value={categoria.tipo}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={100}
            className="rounded-md border border-gray-300 px-3 py-2"
            placeholder="Ex: Medicamentos"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-700">
            Descrição
          </span>

          <input
            type="text"
            name="descricao"
            value={categoria.descricao}
            onChange={handleChange}
            required
            minLength={5}
            maxLength={255}
            className="rounded-md border border-gray-300 px-3 py-2"
            placeholder="Ex: Analgésicos"
          />
        </label>

        {erro && (
          <p className="text-sm text-red-600">
            {erro}
          </p>
        )}

        <div className="mt-2 flex gap-3">
          <button
            type="submit"
            disabled={salvando}
            className="rounded-md bg-primary-600 px-5 py-2 text-sm font-medium text-white disabled:opacity-60"
          >
            {salvando ? "Salvando..." : "Salvar"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/categorias")}
            className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700"
          >
            Cancelar
          </button>
        </div>
      </form>
    </main>
  );
}

export default FormCategoria;
