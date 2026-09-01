import { Envelope, Pill } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-emerald-950 text-emerald-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:px-6 md:flex-row md:px-8 md:text-left">
        <div>
          <Link to="/home" className="inline-flex items-center gap-2 text-lg font-bold">
            <Pill size={24} weight="fill" className="text-emerald-400" />
            Farmácia Bem Estar
          </Link>
          <p className="mt-2 text-sm text-emerald-200">Cuidado, organização e bem-estar em um só lugar.</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-emerald-200 md:items-end">
          <a href="mailto:contato@farmaciabemestar.com" className="flex items-center gap-2 hover:text-white">
            <Envelope size={17} /> contato@farmaciabemestar.com
          </a>
          <p>© 2026 Farmácia Bem Estar. Projeto acadêmico.</p>
        </div>
      </div>
    </footer>
  );
}
