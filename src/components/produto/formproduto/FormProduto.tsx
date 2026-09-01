import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { ClipLoader } from 'react-spinners';

import type Categoria from '../../../models/Categoria';
import type Produto from '../../../models/Produto';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

export default function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    quantidade: 0,
    foto: '',
    categoria: null,
  });

  useEffect(() => {
    buscar('/categorias', setCategorias).catch(() => setCategorias([]));
  }, []);

  useEffect(() => {
    if (id) {
      buscar(`/produtos/${id}`, setProduto).catch(() =>
        alert('Não foi possível carregar o produto.')
      );
    }
  }, [id]);

  function atualizarTexto(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function atualizarCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const categoriaSelecionada =
      categorias.find(
        (categoria) => categoria.id === Number(e.target.value)
      ) ?? null;

    setProduto({
      ...produto,
      categoria: categoriaSelecionada,
    });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!produto.categoria?.id) {
      alert('Selecione uma categoria.');
      return;
    }

    if (produto.preco < 0.01) {
      alert('O preço deve ser maior que zero.');
      return;
    }

    if (produto.quantidade < 0) {
      alert('A quantidade não pode ser negativa.');
      return;
    }

    setIsLoading(true);

    try {
      const dadosProduto = {
        nome: produto.nome,
        descricao: produto.descricao,
        preco: produto.preco,
        quantidade: produto.quantidade,
        foto: produto.foto,
        categoria: {
          id: produto.categoria.id,
        },
      };

      if (id) {
        await atualizar(
          '/produtos',
          {
            id: Number(id),
            ...dadosProduto,
          },
          setProduto
        );
      } else {
        await cadastrar('/produtos', dadosProduto, setProduto);
      }

      alert(
        `Produto ${id ? 'atualizado' : 'cadastrado'} com sucesso!`
      );

      navigate('/produtos');
    } catch (error) {
      console.error('Erro ao salvar produto:', error);

      alert(
        'Não foi possível salvar o produto. Verifique os dados e a API.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  const input =
    'w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100';

  return (
    <main className="mx-auto w-full max-w-2xl grow px-4 pb-14 pt-28 sm:px-6 md:pt-32">
      <form
        onSubmit={salvar}
        className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-8"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Produtos
        </p>

        <h1 className="mt-1 text-3xl font-black text-slate-900">
          {id ? 'Editar Produto' : 'Novo Produto'}
        </h1>

        <div className="mt-7 grid gap-5">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Nome

            <input
              type="text"
              name="nome"
              value={produto.nome}
              onChange={atualizarTexto}
              required
              minLength={3}
              maxLength={100}
              className={input}
              placeholder="Ex: Dipirona 500mg"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Descrição

            <textarea
              name="descricao"
              value={produto.descricao}
              onChange={atualizarTexto}
              required
              minLength={5}
              maxLength={255}
              rows={3}
              className={input}
              placeholder="Descrição do produto"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Preço

            <NumericFormat
              value={produto.preco}
              onValueChange={(valor) =>
                setProduto({
                  ...produto,
                  preco: valor.floatValue ?? 0,
                })
              }
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              prefix="R$ "
              allowNegative={false}
              className={input}
              placeholder="R$ 0,00"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Quantidade

            <input
              type="number"
              name="quantidade"
              value={produto.quantidade}
              onChange={(e) =>
                setProduto({
                  ...produto,
                  quantidade: Number(e.target.value),
                })
              }
              required
              min={0}
              step={1}
              className={input}
              placeholder="Ex: 50"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            URL da imagem

            <input
              type="url"
              name="foto"
              value={produto.foto}
              onChange={atualizarTexto}
              maxLength={500}
              className={input}
              placeholder="https://..."
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Categoria

            <select
              value={produto.categoria?.id ?? 0}
              onChange={atualizarCategoria}
              required
              className={input}
            >
              <option value={0} disabled>
                Selecione uma categoria
              </option>

              {categorias.map((categoria) => (
                <option
                  key={categoria.id}
                  value={categoria.id}
                >
                  {categoria.tipo}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => navigate('/produtos')}
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <ClipLoader color="#fff" size={20} />
            ) : id ? (
              'Atualizar'
            ) : (
              'Cadastrar'
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
