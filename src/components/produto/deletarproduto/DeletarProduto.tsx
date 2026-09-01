import { WarningCircle } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import type Produto from '../../../models/Produto';
import { buscar, deletar } from '../../../services/Service';

export default function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    quantidade: 0,
    foto: '',
    categoria: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      buscar(`/produtos/${id}`, setProduto).catch(() =>
        navigate('/produtos')
      );
    }
  }, [id, navigate]);

  async function excluir() {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`);

      alert('Produto excluído com sucesso!');

      navigate('/produtos');
    } catch {
      alert('Não foi possível excluir o produto.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-xl grow items-center px-4 pb-14 pt-28 sm:px-6 md:pt-32">
      <section className="w-full rounded-2xl border border-red-100 bg-white p-6 text-center shadow-sm sm:p-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600">
          <WarningCircle size={32} />
        </span>

        <h1 className="mt-4 text-2xl font-black text-slate-900">
          Excluir Produto
        </h1>

        <p className="mt-3 text-slate-600">
          Tem certeza que deseja excluir{' '}
          <strong>{produto.nome}</strong>?
        </p>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => navigate('/produtos')}
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={excluir}
            disabled={isLoading}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? (
              <ClipLoader color="#fff" size={20} />
            ) : (
              'Excluir'
            )}
          </button>
        </div>
      </section>
    </main>
  );
}
