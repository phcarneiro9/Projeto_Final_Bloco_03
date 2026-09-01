/**
 * Modelo de Categoria, espelhando o schema exposto no Swagger do backend.
 *
 * @typedef {Object} Categoria
 * @property {number} id
 * @property {string} descricao
 * @property {Array} [produto] - lista de produtos vinculados a categoria (relacionamento 1:N)
 */

export class Categoria {
  constructor(id = 0, descricao = '', produto = []) {
    this.id = id
    this.descricao = descricao
    this.produto = produto
  }
}

export default Categoria
