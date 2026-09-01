import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import type Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

export default function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '' });

  useEffect(() => {
    if (id) buscar(`/categorias/${id}`, setCategoria).catch(() => alert('Não foi possível carregar a categoria.'));
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (id) await atualizar('/categorias', { ...categoria, id: Number(id) }, setCategoria);
      else await cadastrar('/categorias', { descricao: categoria.descricao }, setCategoria);
      alert(`Categoria ${id ? 'atualizada' : 'cadastrada'} com sucesso!`);
      navigate('/categorias');
    } catch {
      alert('Não foi possível salvar a categoria. Verifique a API.');
    } finally { setIsLoading(false); }
  }

  return (
    <main className="mx-auto w-full max-w-2xl grow px-4 pb-14 pt-28 sm:px-6 md:pt-32">
      <form onSubmit={salvar} className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Categorias</p>
        <h1 className="mt-1 text-3xl font-black text-slate-900">{id ? 'Editar Categoria' : 'Nova Categoria'}</h1>
        <div className="mt-7">
          <label htmlFor="descricao" className="mb-2 block text-sm font-semibold text-slate-700">Descrição</label>
          <input id="descricao" name="descricao" value={categoria.descricao} onChange={atualizarEstado} required minLength={3} maxLength={100} placeholder="Ex: Medicamentos" className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" />
        </div>
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={() => navigate('/categorias')} className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">Cancelar</button>
          <button type="submit" disabled={isLoading} className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60">{isLoading ? <ClipLoader color="#fff" size={20} /> : id ? 'Atualizar' : 'Cadastrar'}</button>
        </div>
      </form>
    </main>
  );
}
