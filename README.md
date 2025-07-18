#  Cadastro de Usuários - Fullstack React + Express + Prisma

Este projeto é uma aplicação fullstack para cadastro e listagem de usuários, desenvolvida com:

- **Frontend:** React + Vite + Axios  
- **Backend:** Express.js + Prisma ORM  
- **Banco de Dados:** MongoDB

---

## ✨ Funcionalidades

- Cadastro de usuários (nome, idade, e-mail)
- Exclusão de usuários
- Listagem dos usuários cadastrados
- Atualização automática da lista após cada cadastro
- Integração entre frontend e backend via API

---

## 🛠 Estrutura do Projeto

O projeto está dividido em duas pastas principais:

### `frontend/`
Contém a aplicação React responsável pela interface visual.  
Principais arquivos:

- `Home.jsx`: componente com o formulário e listagem de usuários
- `api.js`: configuração do Axios para se comunicar com o backend
- `assets/trash.svg`: ícone utilizado no botão de exclusão
- `style.css`: estilos da aplicação

### `backend/`
Contém o servidor Node.js com Express e a configuração do Prisma.  
Principais arquivos:

- `index.js`: define as rotas da API (`GET` , `POST` e `DELETE` para `/usuarios`)
- `schema.prisma`: define o modelo de dados do banco (tabela `User`)
- `.env`: define o banco de dados usado pelo Prisma (MongoDB por padrão)

---

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn
- (Opcional) Prisma CLI

### 1. Instalar e rodar o backend

- cd backend
- npm install
- npx prisma generate
- npx prisma migrate dev --name init
- npm start 

---

### 2. Instalar e rodar o frontend

- cd ../frontend
- npm install
- npm run dev


- O frontend ficará disponível em: http://localhost:5173O

---

👨‍💻 Autor
- Desenvolvido por Luís Guilherme Barros Rosa
