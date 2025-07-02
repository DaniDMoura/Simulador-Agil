
<div align="center">
  <img width="192" src="client/public/icons/icon-192.png" alt="Logo SimuladorÁgil">
  <h1>Simulador<b>Ágil</b></h1>
  <p>Simulador inteligente que gera simulados personalizados do ENEM</p>
  <a href="https://github.com/sponsors/DaniDMoura">
    <img src="https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA" alt="Sponsor">
  </a>
  <a href="https://www.instagram.com/danilosmoura_/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-Follow_@danilosmoura_-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
  <a href="https://simulado.site">
    <img src="https://img.shields.io/website?url=https%3A%2F%2Fsimulado.site&style=for-the-badge" alt="Online">
  </a>
</div>

---

## ✨ Sobre o Projeto

O **SimuladorÁgil** é um simulador inteligente que gera simulados personalizados do ENEM em tempo real. O objetivo é proporcionar uma experiência de preparação otimizada, oferecendo questões adaptadas ao desempenho e às preferências do usuário, além de relatórios detalhados para acompanhamento do progresso.

---

## 📋 Índice

- [Demonstração](#demonstração)
- [Arquitetura e Tecnologias](#arquitetura-e-tecnologias)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Como rodar com Docker](#como-rodar-com-docker)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)
- [Contato](#contato)

---

## 🚀 Demonstração

- Acesse a versão online: [https://simulado.site](https://simulado.site)
- Veja exemplos de uso nas imagens abaixo (adicione prints ou gifs aqui, se possível)

---

## ⚙️ Arquitetura e Tecnologias

### Backend (API)

- **Linguagem:** Python
- **Framework:** FastAPI
- **Hospedagem:** [Render](https://api-simulado-generator.onrender.com)
- **Documentação da API:** [Swagger/OpenAPI](https://api-simulado-generator.onrender.com/docs)

### Frontend

- **Linguagem:** JavaScript
- **Framework:** React
- **Build Tool:** Vite
- **Estilização:** CSS3
- **Principais Bibliotecas:**
  - **axios:** requisições HTTP à API
  - **react-query:** gerenciamento de dados assíncronos
  - **@react-pdf/renderer:** geração dinâmica de relatórios PDF

---

## 📝 Funcionalidades

- **Simulados Personalizados:** Geração dinâmica com base no desempenho e preferências do usuário
- **Banco de Questões do ENEM:** Utiliza questões reais e/ou simuladas no formato oficial
- **Relatórios em PDF:** Exportação de desempenho detalhado
- **Feedback em Tempo Real:** Correção imediata com análise de acertos, erros e sugestões de melhoria
- **Interface Responsiva:** Design intuitivo adaptado para dispositivos móveis e desktop

---

## 🖥️ Como Usar

### 1. Versão Online

Acesse diretamente pelo navegador: [https://simulado.site](https://simulado.site)

### 2. Executar Localmente (sem Docker)

#### Pré-requisitos

- [Node.js](https://nodejs.org/) (>= v16)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/DaniDMoura/SimuladorAgil.git

# Acesse a pasta do projeto
cd SimuladorAgil

# Navegue até o diretório do frontend
cd client

# Instale as dependências
npm install
# ou
yarn install
```

#### Executando o projeto

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador para visualizar o projeto.

#### Configuração da API

Por padrão, o frontend está configurado para consumir a API hospedada em: [https://api-simulado-generator.onrender.com](https://api-simulado-generator.onrender.com)

Se quiser rodar o backend localmente, consulte o README da pasta [`backend`](backend/README.md).

---

## 🐳 Como rodar com Docker

### 1. Pré-requisitos

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

### 2. Rodando com Docker Compose

O projeto já possui arquivos `Dockerfile` e um `docker-compose.yml` para facilitar a execução de todo o sistema (frontend e backend).

#### Passos:

```bash
# Clone o repositório
git clone https://github.com/DaniDMoura/SimuladorAgil.git

# Acesse a pasta do projeto
cd SimuladorAgil

# Execute o docker compose
docker-compose up --build
```

#### O que acontece?

- O Docker irá construir imagens para o frontend e backend automaticamente.
- Os containers serão iniciados:
  - O frontend estará disponível em: [http://localhost:3000](http://localhost:3000)
  - O backend estará disponível em: [http://localhost:8000](http://localhost:8000) (ou na porta configurada no docker-compose)
- O frontend já estará configurado para consumir a API do backend local.

#### Parando os containers

Para parar os containers, use:

```bash
docker-compose down
```

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature/correção (`git checkout -b feature/minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

Consulte as [issues](https://github.com/DaniDMoura/SimuladorAgil/issues) para ver sugestões, bugs reportados ou novas funcionalidades.

---

## 📄 Licença

Distribuído sob a Licença GNU General Public License v3.0. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📬 Contato

- **Desenvolvedor:** [@DaniDMoura](https://github.com/DaniDMoura)
- **Suporte:** Dúvidas, sugestões ou feedback? Abra uma [issue](https://github.com/DaniDMoura/SimuladorAgil/issues).

---

> Projeto em constante evolução. Contribuições são bem-vindas!