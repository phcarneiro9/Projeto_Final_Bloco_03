import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://projeto-final-bloco-03-9i7e.onrender.com',
});

export const buscar = async <T>(url: string, setDados: (dados: T) => void) => {
  const resposta = await api.get<T>(url);
  setDados(resposta.data);
};

export const cadastrar = async <T>(url: string, dados: object, setDados: (dados: T) => void) => {
  const resposta = await api.post<T>(url, dados);
  setDados(resposta.data);
};

export const atualizar = async <T>(url: string, dados: object, setDados: (dados: T) => void) => {
  const resposta = await api.put<T>(url, dados);
  setDados(resposta.data);
};

export const deletar = async (url: string) => {
  await api.delete(url);
};
