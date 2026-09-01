# 💊 Farmácia Bem Estar

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

<br />

## 📌 Sobre o Projeto

O **Farmácia Bem Estar** é uma aplicação web desenvolvida em **React + TypeScript**, criada como interface Front-end para o Projeto Final do Bloco.

A aplicação permite o gerenciamento de **produtos e categorias** de uma farmácia através de operações CRUD, consumindo uma API REST desenvolvida com **Java e Spring Boot**.

O projeto possui uma interface moderna, responsiva e intuitiva, utilizando **Tailwind CSS** para estilização.

---

## 🚀 Funcionalidades

### 💊 Produtos

- Listar produtos
- Cadastrar novos produtos
- Buscar informações dos produtos
- Editar produtos
- Excluir produtos
- Definir preço
- Controlar quantidade em estoque
- Adicionar imagem através de URL
- Associar produtos a categorias

### 📂 Categorias

- Listar categorias
- Cadastrar novas categorias
- Editar categorias
- Excluir categorias
- Organizar produtos por categoria

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Phosphor Icons
- React Spinners
- React Number Format

### Back-end

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven

---

## 🔗 Integração com a API

O Front-end consome a API REST da Farmácia hospedada no Render.

### API em produção

```text
https://projeto-final-bloco-02-bjdi.onrender.com
```

A URL da API é configurada através de uma variável de ambiente:

```env
VITE_API_URL=https://projeto-final-bloco-02-bjdi.onrender.com
```

---

## 📁 Estrutura do Projeto

```text
src/
├── assets/
│
├── components/
│   ├── categoria/
│   │   ├── cardcategoria/
│   │   ├── deletarcategoria/
│   │   ├── formcategoria/
│   │   └── listacategoria/
│   │
│   ├── footer/
│   ├── navbar/
│   │
│   └── produto/
│       ├── cardproduto/
│       ├── deletarproduto/
│       ├── formproduto/
│       └── listaproduto/
│
├── models/
│   ├── Categoria.ts
│   └── Produto.ts
│
├── pages/
│   ├── about/
│   └── home/
│
├── services/
│   └── Service.ts
│
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/phcarneiro9/Farmacia_React.git
```

### 2. Entre na pasta

```bash
cd Farmacia_React
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Crie o arquivo `.env`

Na raiz do projeto:

```env
VITE_API_URL=https://projeto-final-bloco-02-bjdi.onrender.com
```

### 5. Execute o projeto

```bash
npm run dev
```

A aplicação será disponibilizada pelo Vite, normalmente em:

```text
http://localhost:5173
```

---

## 🏗️ Build de Produção

Para gerar o build:

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta:

```text
dist/
```

---

## 🌐 Deploy

O projeto utiliza o **Render** para hospedagem.

### Back-end

API REST desenvolvida com Java e Spring Boot:

```text
https://projeto-final-bloco-02-bjdi.onrender.com
```

### Front-end

O Front-end React será disponibilizado através do Render após a finalização do deploy.

---

## 🔐 Variáveis de Ambiente

O arquivo `.env` não deve ser enviado ao GitHub.

Exemplo:

```env
VITE_API_URL=https://projeto-final-bloco-02-bjdi.onrender.com
```

Adicione ao `.gitignore`:

```gitignore
.env
```

---

## 💻 Principais Rotas

| Rota | Descrição |
| --- | --- |
| `/home` | Página inicial |
| `/produtos` | Lista de produtos |
| `/produtos/cadastrar` | Cadastro de produto |
| `/produtos/editar/:id` | Edição de produto |
| `/produtos/deletar/:id` | Exclusão de produto |
| `/categorias` | Lista de categorias |
| `/categorias/cadastrar` | Cadastro de categoria |
| `/categorias/editar/:id` | Edição de categoria |
| `/categorias/deletar/:id` | Exclusão de categoria |
| `/sobre` | Informações sobre o projeto |

---

## 👨‍💻 Autor

**Patrick Carneiro**  
Full Stack Java Developer | Sistemas de Informação

[GitHub](https://github.com/phcarneiro9) • [LinkedIn](https://www.linkedin.com/in/phcarneiro9/)

---
