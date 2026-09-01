# 💊 Farmácia Bem Estar — React

Aplicação front-end desenvolvida em **React + TypeScript + Vite + Tailwind CSS**, integrada à API REST do Projeto Final Bloco 03.

## ✨ Funcionalidades

- Home responsiva
- Navbar com menu mobile
- Footer responsivo
- Página Sobre Nós
- CRUD completo de Categorias
- CRUD completo de Produtos
- Relacionamento Produto → Categoria
- Listagem de produtos na Home
- Loaders e tratamento básico de erros
- Layout adaptado para celular, tablet e desktop

## 💻 Tecnologias

React, TypeScript, Vite, Tailwind CSS, Axios, React Router DOM, Phosphor Icons, React Spinners e React Number Format.

## 🔗 Rotas

| Rota | Função |
|---|---|
| `/` ou `/home` | Home |
| `/categorias` | Listar categorias |
| `/cadastrarcategoria` | Cadastrar categoria |
| `/editarcategoria/:id` | Editar categoria |
| `/deletarcategoria/:id` | Excluir categoria |
| `/produtos` | Listar produtos |
| `/cadastrarproduto` | Cadastrar produto |
| `/editarproduto/:id` | Editar produto |
| `/deletarproduto/:id` | Excluir produto |
| `/sobre` | Sobre Nós |

## 🌐 Backend

Por padrão, o projeto utiliza:

`https://projeto-final-bloco-03-9i7e.onrender.com`

Também é possível configurar um `.env` baseado no `.env.example`:

```env
VITE_API_URL=https://projeto-final-bloco-03-9i7e.onrender.com
```

## 🚀 Executando

```bash
npm install
npm run dev
```

Para validar a build:

```bash
npm run build
```

## 👨‍💻 Autor

**Patrick Carneiro**  
Full Stack Java Developer | Sistemas de Informação
