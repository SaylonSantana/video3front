cat > README.md << EOF
# 🍴 Cardápio Digital - Frontend

Frontend do projeto **Cardápio Digital**, desenvolvido com **React**, **Bootstrap** e **Axios**, para visualizar, adicionar e remover pratos de um cardápio online integrado a uma API REST em Java Spring Boot.

---

## 💻 Tecnologias Utilizadas

- React  
- Bootstrap  
- Axios  

---

## ⚙️ Como Rodar o Projeto Localmente

### Requisitos

- Node.js e npm instalados  
- IDE (VSCode, WebStorm, etc)  
- Backend Java Spring Boot rodando em \`http://localhost:8080\`

### Passos

1. Clone o repositório frontend:  
   \`\`\`bash
   git clone https://github.com/SeuUsuario/seu-repositorio-frontend.git
   \`\`\`
2. Acesse a pasta do projeto:  
   \`\`\`bash
   cd nome-da-pasta
   \`\`\`
3. Instale as dependências:  
   \`\`\`bash
   npm install
   \`\`\`
4. Inicie o projeto:  
   \`\`\`bash
   npm start
   \`\`\`
5. Verifique se o backend está rodando em \`http://localhost:8080\` para que a aplicação funcione corretamente.

---

## 📂 Estrutura do Projeto

```
FRONT-CARDAPIO/
├── node_modules/           # Dependências do projeto
├── public/                 # Arquivos estáticos (HTML, favicon, etc)
│   └── index.html          # Arquivo HTML principal
├── src/                    # Código fonte do frontend
│   ├── App.css             # Estilos globais
│   ├── App.js              # Componente principal com lógica da API
│   ├── index.js            # Entrada da aplicação React
├── .gitignore              # Arquivos ignorados pelo Git
├── package-lock.json       # Controle de versões das dependências
├── package.json            # Scripts e dependências
└── README.md               # Documentação do projeto
```

---

## 📝 Funcionalidades

- 📋 **Listar pratos:** Exibe todos os pratos cadastrados no backend  
- ➕ **Adicionar prato:** Permite cadastrar novo prato com nome, imagem e preço  
- 🗑️ **Excluir prato:** Remove pratos do cardápio

---

## 🍽️ Exemplo de prato cadastrado

| Nome          | Imagem                                                       | Preço    |
|---------------|--------------------------------------------------------------|----------|
| Strogonoff    | ![Strogonoff](https://upload.wikimedia.org/wikipedia/commons/1/13/Stroganoff_de_carne.JPG) | R$ 32,90 |
| Salada Caesar | ![Salada Caesar](https://upload.wikimedia.org/wikipedia/commons/6/6f/Caesar_salad_%281%29.jpg) | R$ 18,50 |



## 📖 Referências

- Curso: Fernanda Kipper | Dev  
- Tutorial base: Criando um cardápio digital com Java Spring Boot e React  

EOF
