import { PencilSimple, TrashSimple } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import type Produto from '../../../models/Produto';

export default function CardProduto({ produto }: { produto: Produto }) {
  const preco = Number(produto.preco || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[4/3] overflow-hidden bg-emerald-50">
        {produto.foto ? <img src={produto.foto} alt={produto.nome} className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center text-sm text-emerald-700">Sem imagem</div>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">{produto.categoria?.descricao ?? 'Sem categoria'}</span>
        <h3 className="mt-3 text-xl font-bold text-slate-900">{produto.nome}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{produto.descricao}</p>
        <p className="mt-3 text-lg font-black text-emerald-700">{preco}</p>
        <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row">
          <Link to={`/editarproduto/${produto.id}`} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"><PencilSimple size={17} /> Editar</Link>
          <Link to={`/deletarproduto/${produto.id}`} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100"><TrashSimple size={17} /> Excluir</Link>
        </div>
      </div>
    </article>
  );
}
