# Farmácia React — Front-end de Produtos por Categoria

Projeto front-end em React + Vite + Tailwind CSS para gerenciar Produtos
classificados por Categoria, consumindo um backend em deploy documentado via
Swagger.

## Stack

- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Axios

## 1. Abrir no VS Code e configurar o projeto

```bash
# dentro da pasta do projeto
npm install
npm run dev
```

O Vite sobe o servidor em `http://localhost:5173`.

> Como este ambiente não tem acesso à internet, o `node_modules` não foi
> instalado aqui. Rode `npm install` na sua máquina/VS Code assim que abrir o
> projeto.

## 2. Apontar para o backend (Swagger em deploy)

Abra `src/services/Service.js` e troque a `baseURL` pela URL do backend que
você está testando no Swagger, por exemplo:

```js
const api = axios.create({
  baseURL: 'https://sua-api-farmacia.onrender.com',
})
```

Confira no Swagger os nomes exatos dos endpoints (`/categorias`,
`/produtos`, etc.) e ajuste `CategoriaService.js` / `ProdutoService.js` se o
backend usar nomes diferentes.

## 3. Estrutura do projeto

```
src/
  components/   -> NavBar, Footer
  pages/        -> Home, Categoria (listar/form), Produto (a implementar)
  models/       -> Categoria.js, Produto.js
  services/     -> Service.js (Axios genérico), CategoriaService.js, ProdutoService.js
  router/       -> AppRoutes.jsx
```

## 4. Criar o repositório no GitHub

```bash
git init
git add .
git commit -m "chore: setup inicial do projeto React + Tailwind"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/farmacia-react.git
git push -u origin main
```

## 5. Etapa 1 — Home, NavBar e Footer

Já implementados em `components/NavBar.jsx`, `components/Footer.jsx` e
`pages/Home.jsx`, usando Flexbox (`flex`, `justify-between`, `items-center`)
e Grid (`grid grid-cols-1 md:grid-cols-3`) do Tailwind. Teste o alinhamento
redimensionando a janela do navegador (mobile/tablet/desktop).

Envie esta etapa em uma branch dedicada:

```bash
git checkout -b Home-navbar-footer
git add .
git commit -m "feat: componentes Home, NavBar e Footer com Tailwind"
git push -u origin Home-navbar-footer
```

## 6. Etapa 2 — CRUD de Categoria

Já implementado em `pages/Categoria/ListarCategoria.jsx` (GetAll e Delete) e
`pages/Categoria/FormCategoria.jsx` (Post e Put), usando os hooks
`useState`/`useEffect` e o Axios configurado em `services/`.

Teste cada operação com o backend em deploy rodando (crie, edite, liste e
exclua uma categoria pela interface).

```bash
git checkout -b CRUD-categoria
git add .
git commit -m "feat: CRUD completo de Categoria (GetAll, Post, Put, Delete)"
git push -u origin CRUD-categoria
```

## 7. Etapa 3 — Rotas e conclusão

As rotas já estão configuradas em `router/AppRoutes.jsx`:

| Rota                        | Página            |
|------------------------------|-------------------|
| `/`                          | Home              |
| `/categorias`                | Listar categorias |
| `/categorias/cadastrar`      | Nova categoria    |
| `/categorias/editar/:id`     | Editar categoria  |

Se o exercício também pedir o CRUD de Produto, siga o mesmo padrão de
`Categoria` dentro de `pages/Produto/`, reaproveitando `ProdutoService.js` e
o modelo `Produto.js` (que já referencia `categoria`).

```bash
git checkout -b rotas-conclusao-do-projeto
git add .
git commit -m "feat: rotas do React Router e conclusão do projeto"
git push -u origin rotas-conclusao-do-projeto
```

## 8. Entrega na Plataforma da Generation

Após cada push, copie o link do repositório (ou da branch específica, se
solicitado) e envie na atividade correspondente dentro do prazo indicado.
