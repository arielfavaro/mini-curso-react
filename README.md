# Mini Curso de React

## Estrutura do projeto
- `index.html`: arquivo HTML principal
- `src/main.jsx`: ponto de entrada do React
- `src/App.jsx`: componente raiz do React
- `src/Lista.jsx`: componente funcional que renderiza uma lista de tarefas
- `src/index.css`: arquivo CSS principal

## Rodar o projeto

Pre-requisitos:
- [Node.js](https://nodejs.org/) instalado (versão 22 ou superior)

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra o navegador e acesse `http://localhost:5173` para ver o aplicativo em ação.

## O que é Vite?
Vite é uma ferramenta de construção e desenvolvimento frontend que oferece um ambiente de desenvolvimento rápido e otimizado. Ele utiliza ES modules nativos no navegador para fornecer uma experiência de desenvolvimento mais rápida, com recarregamento instantâneo e suporte a HMR (Hot Module Replacement).

## O que é React?
React é uma biblioteca JavaScript para construir interfaces de usuário. Ela permite criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
