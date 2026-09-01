import { List, Pill, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-emerald-100 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <Link to="/home" className="flex min-w-0 items-center gap-2" onClick={fecharMenu}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <Pill size={24} weight="fill" />
          </span>
          <span className="truncate text-lg font-black tracking-tight text-slate-800 sm:text-xl">
            Farmácia <span className="text-emerald-600">Bem Estar</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-xl bg-emerald-50 p-1 text-sm font-semibold text-slate-700 md:flex">
          <Link to="/home" className="rounded-lg px-4 py-2 transition hover:bg-white hover:text-emerald-700">Home</Link>
          <Link to="/categorias" className="rounded-lg px-4 py-2 transition hover:bg-white hover:text-emerald-700">Categorias</Link>
          <Link to="/produtos" className="rounded-lg px-4 py-2 transition hover:bg-white hover:text-emerald-700">Produtos</Link>
          <Link to="/sobre" className="rounded-lg px-4 py-2 transition hover:bg-white hover:text-emerald-700">Sobre Nós</Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-emerald-100 bg-emerald-50 p-2 text-emerald-700 transition hover:bg-emerald-100 md:hidden"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
        </button>
      </nav>

      {menuAberto && (
        <div className="border-t border-emerald-100 bg-white px-4 py-3 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 text-sm font-semibold text-slate-700">
            <Link to="/home" className="rounded-lg px-4 py-3 hover:bg-emerald-50 hover:text-emerald-700" onClick={fecharMenu}>Home</Link>
            <Link to="/categorias" className="rounded-lg px-4 py-3 hover:bg-emerald-50 hover:text-emerald-700" onClick={fecharMenu}>Categorias</Link>
            <Link to="/produtos" className="rounded-lg px-4 py-3 hover:bg-emerald-50 hover:text-emerald-700" onClick={fecharMenu}>Produtos</Link>
            <Link to="/sobre" className="rounded-lg px-4 py-3 hover:bg-emerald-50 hover:text-emerald-700" onClick={fecharMenu}>Sobre Nós</Link>
          </div>
        </div>
      )}
    </header>
  );
}
