import { WarningCircle } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import type Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../services/Service';

export default function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { if (id) buscar(`/categorias/${id}`, setCategoria).catch(() => navigate('/categorias')); }, [id, navigate]);

  async function excluir() {
    setIsLoading(true);
    try { await deletar(`/categorias/${id}`); alert('Categoria excluída com sucesso!'); navigate('/categorias'); }
    catch { alert('Não foi possível excluir a categoria.'); }
    finally { setIsLoading(false); }
  }

  return (
    <main className="mx-auto flex w-full max-w-xl grow items-center px-4 pb-14 pt-28 sm:px-6 md:pt-32">
      <section className="w-full rounded-2xl border border-red-100 bg-white p-6 text-center shadow-sm sm:p-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600"><WarningCircle size={32} /></span>
        <h1 className="mt-4 text-2xl font-black text-slate-900">Excluir Categoria</h1>
        <p className="mt-3 text-slate-600">Tem certeza que deseja excluir <strong>{categoria.descricao}</strong>?</p>
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
          <button onClick={() => navigate('/categorias')} className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700">Cancelar</button>
          <button onClick={excluir} disabled={isLoading} className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">{isLoading ? <ClipLoader color="#fff" size={20} /> : 'Excluir'}</button>
        </div>
      </section>
    </main>
  );
}
