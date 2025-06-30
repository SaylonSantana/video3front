 🍽️ Cardápio Digital - Frontend

Este é o frontend do projeto **Cardápio Digital**, desenvolvido com **React**, **Bootstrap** e **Axios**. Ele permite visualizar, adicionar e remover pratos de um cardápio online, conectado com uma API REST feita em Java Spring Boot.

🔗 Repositório: [Front-Cardapio](https://github.com/GabrielSedcu1/Front-Cardapio)

---

## 🚀 Tecnologias Utilizadas

✅ React 18  
✅ Bootstrap 5  
✅ Axios  
✅ Node.js (para ambiente de desenvolvimento)  
✅ NPM (gerenciador de pacotes)

---

## ⚙️ Como rodar o projeto localmente

### ✅ Pré-requisitos

- Node.js e npm instalados na máquina
- Editor de código (VSCode, WebStorm etc)
- Backend do projeto rodando em `http://localhost:8080` (Spring Boot)

### ▶️ Passos para rodar:

1. Clone o repositório:

```bash
git clone https://github.com/GabrielSedcu1/Front-Cardapio.git
cd Front-Cardapio
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie a aplicação React em modo de desenvolvimento:

bash
Copiar
Editar
npm start
A aplicação abrirá automaticamente no navegador:
👉 http://localhost:3000

⚠️ Certifique-se de que o backend (Java Spring Boot) esteja rodando corretamente para que as funcionalidades funcionem (GET/POST/DELETE de alimentos).

📁 Estrutura de Pastas
perl
Copiar
Editar
FRONT-CARDAPIO/
├── node_modules/           # Dependências do projeto
├── public/                 # Arquivos públicos (HTML, favicon, etc)
│   └── index.html          # HTML principal
├── src/                    # Código-fonte do frontend
│   ├── App.css             # Estilos globais da aplicação
│   ├── App.js              # Componente principal com lógica da API
│   ├── index.js            # Ponto de entrada do React
├── .gitignore              # Arquivos ignorados pelo Git (inclui node_modules)
├── package-lock.json       # Travamento de dependências
├── package.json            # Scripts e dependências
└── README.md               # Este arquivo
🖥️ Funcionalidades
🍲 Listagem dos pratos: todos os itens cadastrados no backend
➕ Adicionar novo prato: com nome, imagem e preço
❌ Excluir prato do cardápio

Exemplo:

makefile
Copiar
Editar
Prato: Lasanha  
Imagem: https://imagem.com/lasanha.jpg  
Preço: R$ 25,00
📚 Referência
👩‍💻 Curso: Fernanda Kipper | Dev
🎥 Tutorial base: Criando um cardápio digital com Java Spring Boot e React
