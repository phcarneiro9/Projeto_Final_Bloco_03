import { getAll, getById, post, put, deleteById } from './Service'

const RECURSO = '/categorias'

export const listarCategorias = () => getAll(RECURSO)
export const buscarCategoriaPorId = (id) => getById(RECURSO, id)
export const criarCategoria = (categoria) => post(RECURSO, categoria)
export const atualizarCategoria = (categoria) => put(RECURSO, categoria)
export const excluirCategoria = (id) => deleteById(RECURSO, id)
