/**
 * Modelo de Produto, espelhando o schema exposto no Swagger do backend.
 * Um Produto pertence a uma Categoria (relacionamento N:1).
 *
 * @typedef {Object} Produto
 * @property {number} id
 * @property {string} nome
 * @property {string} descricao
 * @property {number} preco
 * @property {string} foto
 * @property {import('./Categoria').Categoria} categoria
 */

export class Produto {
  constructor(id = 0, nome = '', descricao = '', preco = 0, foto = '', categoria = null) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.foto = foto
    this.categoria = categoria
  }
}

export default Produto
