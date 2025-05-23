# SimuladorAgil

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)
[![Deploy](https://img.shields.io/badge/online-demo-brightgreen)](https://simulado-agil.vercel.app/)

SimuladorAgil é um simulador inteligente que gera simulados personalizados do ENEM em tempo real. O objetivo é proporcionar uma experiência otimizada de preparação para o ENEM, oferecendo questões adaptadas ao perfil do estudante e fornecendo feedback personalizado, incluindo exportação de relatórios em PDF.

---

## Índice

- [Demonstração](#demonstração)
- [Arquitetura e Tecnologias](#arquitetura-e-tecnologias)
- [Principais Funcionalidades](#principais-funcionalidades)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)
- [Contato](#contato)

---

## Demonstração

Acesse a versão online: [https://simulado-agil.vercel.app/](https://simulado-agil.vercel.app/)

---

## Arquitetura e Tecnologias

### Backend (API)

- **Linguagem:** Python
- **Framework:** FastAPI
- **Hospedagem:** [Fly.io](https://api-simulado-generator.fly.dev/)
- **Documentação da API:** [https://api-simulado-generator.fly.dev/docs](https://api-simulado-generator.fly.dev/docs)

### Frontend

- **Linguagens:** JavaScript
- **Framework:** React
- **Empacotador:** Vite
- **Estilização:** CSS3
- **Principais Bibliotecas:**
  - **axios:** requisições HTTP à API
  - **react-query:** gerenciamento e cache de dados assíncronos
  - **@react-pdf/renderer:** geração dinâmica de relatórios PDF

### Deploy

- **Frontend:** [Vercel](https://simulado-agil.vercel.app/)
- **API Backend:** [Fly.io](https://api-simulado-generator.fly.dev/)

---

## Principais Funcionalidades

- **Simulados Personalizados:** Geração dinâmica de simulados com base no desempenho e preferências do usuário.
- **Banco de Questões do ENEM:** Utiliza questões reais e/ou baseadas no formato oficial do exame.
- **PDFs Personalizados:** Geração e exportação de relatórios de desempenho em PDF.
- **Feedback em Tempo Real:** Corrige, mostra acertos e erros, e sugere pontos de melhoria assim que o simulado é concluído.
- **Interface Intuitiva:** Navegação simples e responsiva, compatível com dispositivos móveis.

---

## Como Usar

### 1. Versão Online

Acesse diretamente pelo navegador: [https://simulado-agil.vercel.app/](https://simulado-agil.vercel.app/)

### 2. Versão Local

#### Pré-requisitos

- [Node.js](https://nodejs.org/) (>= v14)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/DaniDMoura/SimuladorAgil.git

# Acesse a pasta do projeto
cd SimuladorAgil

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

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

#### Configurar conexão com a API

Por padrão, o frontend está configurado para consumir a API pública em [https://api-simulado-generator.fly.dev/](https://api-simulado-generator.fly.dev/).

---

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: [sua feature]'`)
4. Faça push para sua branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request neste repositório.

Consulte as [issues](https://github.com/DaniDMoura/SimuladorAgil/issues) para ver ideias de melhorias, bugs ou novas features.

---

## Licença

Distribuído sob a Licença GNU General Public License v3.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

- Desenvolvedor: [@DaniDMoura](https://github.com/DaniDMoura)
- Dúvidas, sugestões ou feedbacks: Utilize as [issues](https://github.com/DaniDMoura/SimuladorAgil/issues)

---

> Este projeto está em constante evolução. Sinta-se à vontade para contribuir!