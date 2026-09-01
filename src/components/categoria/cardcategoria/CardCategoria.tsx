import { PencilSimple, Pill, TrashSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import type Categoria from '../../../models/Categoria';

export default function CardCategoria({ categoria }: { categoria: Categoria }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><Pill size={23} weight="fill" /></span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Categoria</p>
          <h3 className="truncate text-lg font-bold text-slate-800">{categoria.descricao}</h3>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Link to={`/editarcategoria/${categoria.id}`} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"><PencilSimple size={17} /> Editar</Link>
        <Link to={`/deletarcategoria/${categoria.id}`} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100"><TrashSimple size={17} /> Excluir</Link>
      </div>
    </article>
  );
}
