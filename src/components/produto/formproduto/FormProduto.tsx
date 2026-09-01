import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { ClipLoader } from 'react-spinners';
import type Categoria from '../../../models/Categoria';
import type Produto from '../../../models/Produto';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

export default function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [produto, setProduto] = useState<Produto>({ id: 0, nome: '', descricao: '', preco: 0, foto: '', categoria: null });

  useEffect(() => { buscar('/categorias', setCategorias).catch(() => setCategorias([])); }, []);
  useEffect(() => { if (id) buscar(`/produtos/${id}`, setProduto).catch(() => alert('Não foi possível carregar o produto.')); }, [id]);

  function atualizarTexto(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) { setProduto({ ...produto, [e.target.name]: e.target.value }); }
  function atualizarCategoria(e: ChangeEvent<HTMLSelectElement>) { const selecionada = categorias.find((c) => c.id === Number(e.target.value)) ?? null; setProduto({ ...produto, categoria: selecionada }); }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!produto.categoria?.id) return alert('Selecione uma categoria.');
    setIsLoading(true);
    try {
      const dados = { ...produto, id: id ? Number(id) : 0 };
      if (id) await atualizar('/produtos', dados, setProduto);
      else await cadastrar('/produtos', dados, setProduto);
      alert(`Produto ${id ? 'atualizado' : 'cadastrado'} com sucesso!`);
      navigate('/produtos');
    } catch { alert('Não foi possível salvar o produto. Verifique os dados e a API.'); }
    finally { setIsLoading(false); }
  }

  const input = 'w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100';

  return (
    <main className="mx-auto w-full max-w-2xl grow px-4 pb-14 pt-28 sm:px-6 md:pt-32">
      <form onSubmit={salvar} className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Produtos</p>
        <h1 className="mt-1 text-3xl font-black text-slate-900">{id ? 'Editar Produto' : 'Novo Produto'}</h1>
        <div className="mt-7 grid gap-5">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Nome<input name="nome" value={produto.nome} onChange={atualizarTexto} required minLength={3} className={input} placeholder="Ex: Dipirona 500mg" /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Descrição<textarea name="descricao" value={produto.descricao} onChange={atualizarTexto} required minLength={5} rows={3} className={input} placeholder="Descrição do produto" /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Preço<NumericFormat value={produto.preco} onValueChange={(v) => setProduto({ ...produto, preco: v.floatValue ?? 0 })} thousandSeparator="." decimalSeparator="," decimalScale={2} fixedDecimalScale prefix="R$ " allowNegative={false} className={input} /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">URL da imagem<input type="url" name="foto" value={produto.foto} onChange={atualizarTexto} className={input} placeholder="https://..." /></label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">Categoria<select value={produto.categoria?.id ?? 0} onChange={atualizarCategoria} required className={input}><option value={0} disabled>Selecione uma categoria</option>{categorias.map((categoria) => <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>)}</select></label>
        </div>
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={() => navigate('/produtos')} className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">Cancelar</button>
          <button type="submit" disabled={isLoading} className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60">{isLoading ? <ClipLoader color="#fff" size={20} /> : id ? 'Atualizar' : 'Cadastrar'}</button>
        </div>
      </form>
    </main>
  );
}
