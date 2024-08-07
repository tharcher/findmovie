# FindMovie

Este é um projeto que combina a funcionalidade de front-end utilizando React.js e Tailwind CSS, com a inteligência de busca semântica alimentada pela OpenAI. O objetivo deste projeto é proporcionar uma experiência de recomendação de filmes aprimorada e personalizada para os usuários.

## Tecnologias Utilizadas

### Frontend
- **React.js**: Uma biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Um framework CSS utilitário para estilização rápida e eficiente.

### Backend
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: Biblioteca ODM (Object Data Modeling) para MongoDB.
- **OpenAI**: Integração para busca semântica.

## Funcionalidades

### Frontend
- **UI Responsiva**: Utilizando React.js e Tailwind CSS para criar interfaces de usuário responsivas e atraentes.
- **Componentes Reutilizáveis**: Estrutura modular que permite fácil manutenção e expansão do código.

### Backend
- **Busca Semântica**: Utilizando a API da OpenAI para fornecer recomendações precisas baseadas em busca semântica.
- **Banco de Dados**: Armazenamento eficiente de dados de filmes com MongoDB e Mongoose.
- **API RESTful**: Estrutura de API clara e bem definida para comunicação entre frontend e backend.

## Como Rodar o Projeto

### Pré-requisitos
- Node.js
- MongoDB

### Instalação
1. Clone o repositório:
    ```bash
    git clone https://github.com/tarcher/findmovie.git
    ```
2. Navegue até o diretório do projeto.
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure as variáveis de ambiente no arquivo `.env`.

### Executando o Projeto
1. Inicie o servidor MongoDB.
2. Rode o backend:
    ```bash
    npm run server
    ```
3. Rode o frontend:
    ```bash
    npm start
    ```

### Estrutura do Projeto
- **Frontend**: Contém os componentes React e a estilização com Tailwind CSS.
- **Backend**: Contém o servidor Node.js, configuração do banco de dados e integração com OpenAI para busca semântica.
- **Database**: Modelo de dados do MongoDB utilizando Mongoose.


 
