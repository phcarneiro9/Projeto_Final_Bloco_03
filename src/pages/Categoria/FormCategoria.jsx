import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  atualizarCategoria,
  buscarCategoriaPorId,
  criarCategoria,
} from "../../services/CategoriaService";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [categoria, setCategoria] = useState({
    id: 0,
    tipo: "",
    descricao: "",
  });

  const [erro, setErro] = useState("");

  useEffect(() => {
    if (id) {
      buscarCategoriaPorId(id)
        .then((response) => {
          setCategoria(response.data);
        })
        .catch(() => {
          setErro("Não foi possível carregar a categoria.");
        });
    }
  }, [id]);

  function atualizarEstado(event) {
    setCategoria({
      ...categoria,
      [event.target.name]: event.target.value,
    });
  }

  async function salvarCategoria(event) {
    event.preventDefault();
    setErro("");

    try {
      if (id) {
        await atualizarCategoria(categoria);
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
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">
        {id ? "Editar categoria" : "Nova categoria"}
      </h1>

      <form onSubmit={salvarCategoria} className="space-y-6">

        <div>
          <label
            htmlFor="tipo"
            className="block text-lg text-slate-700 mb-2"
          >
            Tipo
          </label>

          <input
            id="tipo"
            name="tipo"
            type="text"
            value={categoria.tipo}
            onChange={atualizarEstado}
            placeholder="Ex: Medicamentos"
            required
            minLength={3}
            maxLength={100}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label
            htmlFor="descricao"
            className="block text-lg text-slate-700 mb-2"
          >
            Descrição
          </label>

          <input
            id="descricao"
            name="descricao"
            type="text"
            value={categoria.descricao}
            onChange={atualizarEstado}
            placeholder="Ex: Analgésicos e anti-inflamatórios"
            required
            minLength={5}
            maxLength={255}
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />
        </div>

        {erro && <p className="text-red-600">{erro}</p>}

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-700"
          >
            Salvar
          </button>

          <button
            type="button"
            onClick={() => navigate("/categorias")}
            className="border border-slate-300 px-6 py-3 rounded-lg"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCategoria;
