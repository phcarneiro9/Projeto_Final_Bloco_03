import axios from 'axios'

export const api = axios.create({
  baseURL: "https://projeto-final-bloco-02-bjdi.onrender.com"
});

/**
 * Busca todos os registros de um recurso.
 * @param {string} url - endpoint, ex: '/categorias'
 */
export const getAll = async (url) => {
  const resposta = await api.get(url)
  return resposta.data
}

/**
 * Busca um registro por id.
 * @param {string} url - endpoint, ex: '/categorias'
 * @param {number|string} id
 */
export const getById = async (url, id) => {
  const resposta = await api.get(`${url}/${id}`)
  return resposta.data
}

/**
 * Cria um novo registro.
 * @param {string} url - endpoint, ex: '/categorias'
 * @param {Object} dados
 */
export const post = async (url, dados) => {
  const resposta = await api.post(url, dados)
  return resposta.data
}

/**
 * Atualiza um registro existente.
 * @param {string} url - endpoint, ex: '/categorias'
 * @param {Object} dados - precisa conter o id
 */
export const put = async (url, dados) => {
  const resposta = await api.put(url, dados)
  return resposta.data
}

/**
 * Remove um registro pelo id.
 * @param {string} url - endpoint, ex: '/categorias'
 * @param {number|string} id
 */
export const deleteById = async (url, id) => {
  await api.delete(`${url}/${id}`)
}

export default api
