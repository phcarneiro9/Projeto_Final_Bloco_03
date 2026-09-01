import { getAll, getById, post, put, deleteById } from './Service'

const RECURSO = '/produtos'

export const listarProdutos = () => getAll(RECURSO)
export const buscarProdutoPorId = (id) => getById(RECURSO, id)
export const criarProduto = (produto) => post(RECURSO, produto)
export const atualizarProduto = (produto) => put(RECURSO, produto)
export const excluirProduto = (id) => deleteById(RECURSO, id)
