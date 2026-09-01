import { Plus } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import type Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardproduto/CardProduto';

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    buscar('/produtos', setProdutos).catch(() => setProdutos([])).finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-7xl grow flex-col gap-7 px-4 pb-14 pt-28 sm:px-6 md:px-8 md:pt-32">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Catálogo</p><h1 className="text-3xl font-black text-slate-900 sm:text-4xl">Produtos</h1></div>
        <Link to="/cadastrarproduto" className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 sm:w-auto"><Plus size={18} weight="bold" /> Novo Produto</Link>
      </div>
      {isLoading ? <div className="flex justify-center py-16"><SyncLoader color="#059669" size={14} /></div> : produtos.length === 0 ? <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/50 p-10 text-center text-slate-500">Nenhum produto cadastrado.</div> : <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{produtos.map((produto) => <CardProduto key={produto.id} produto={produto} />)}</div>}
    </main>
  );
}
