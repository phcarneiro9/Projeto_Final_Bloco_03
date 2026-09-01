import { FirstAidKit, Package, Tag } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardProduto from '../../components/produto/cardproduto/CardProduto';
import type Produto from '../../models/Produto';
import { buscar } from '../../services/Service';

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    buscar('/produtos', setProdutos).catch(() => setProdutos([]));
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 pb-14 pt-28 sm:px-6 md:pb-20 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              <FirstAidKit size={18} weight="fill" /> Farmácia Bem Estar
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Gestão de produtos da sua farmácia, <span className="text-emerald-600">em um só lugar.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg md:mx-0">
              Cadastre categorias, organize medicamentos e cosméticos e mantenha o catálogo sempre atualizado.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link to="/produtos" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700">Ver Produtos</Link>
              <Link to="/cadastrarproduto" className="rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50">Cadastrar Produto</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:col-span-2">
              <FirstAidKit size={42} className="text-emerald-600" weight="duotone" />
              <h2 className="mt-4 text-xl font-bold text-slate-800">Farmácia organizada</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Interface moderna, responsiva e integrada à API REST do projeto.</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <Tag size={30} className="text-emerald-600" />
              <p className="mt-3 font-bold text-slate-800">Categorias</p>
              <p className="mt-1 text-sm text-slate-500">CRUD completo.</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <Package size={30} className="text-emerald-600" />
              <p className="mt-3 font-bold text-slate-800">Produtos</p>
              <p className="mt-1 text-sm text-slate-500">CRUD completo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Catálogo</p>
              <h2 className="mt-1 text-3xl font-bold text-slate-900">Produtos cadastrados</h2>
            </div>
            <Link to="/produtos" className="font-semibold text-emerald-700 hover:text-emerald-800">Ver todos →</Link>
          </div>

          {produtos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/50 px-6 py-12 text-center text-slate-500">Nenhum produto cadastrado ainda.</div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {produtos.slice(0, 4).map((produto) => <CardProduto key={produto.id} produto={produto} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
