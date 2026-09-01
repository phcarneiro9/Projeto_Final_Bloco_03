import { Heart, Leaf, ShieldCheck } from '@phosphor-icons/react';

export default function About() {
  return (
    <main className="bg-slate-50 px-4 pb-16 pt-28 sm:px-6 md:pt-32">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">Sobre nós</p>
          <h1 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">Farmácia Bem Estar</h1>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            Projeto front-end desenvolvido em React para consumir uma API REST de farmácia. A aplicação permite gerenciar categorias e produtos de forma simples, organizada e responsiva.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-emerald-50 p-5">
              <Heart size={30} className="text-emerald-600" weight="duotone" />
              <h2 className="mt-3 font-bold text-slate-800">Cuidado</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Uma experiência simples e acolhedora para gerenciamento do catálogo.</p>
            </article>
            <article className="rounded-2xl bg-emerald-50 p-5">
              <Leaf size={30} className="text-emerald-600" weight="duotone" />
              <h2 className="mt-3 font-bold text-slate-800">Bem-estar</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">Identidade visual verde inspirada em saúde e qualidade de vida.</p>
            </article>
            <article className="rounded-2xl bg-emerald-50 p-5">
              <ShieldCheck size={30} className="text-emerald-600" weight="duotone" />
              <h2 className="mt-3 font-bold text-slate-800">Organização</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">CRUD completo integrado ao backend e navegação por rotas.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
