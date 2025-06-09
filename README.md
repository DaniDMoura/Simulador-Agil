<div align="center">
  <img width="192" src="client/public/icons/icon-192.png">
  <p></p>
  <p>Simulador<b>Ágil</b></p>
  <p>Simulador inteligente que gera simulados personalizados do ENEM</p>
</div>

# SimuladorÁgil

[![Github-sponsors](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA)](https://github.com/sponsors/DaniDMoura)  [![Instagram](https://img.shields.io/badge/Instagram-30363D?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/danilosmoura_) [![LinkedIn](https://img.shields.io/badge/LinkedIn-30363D?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/danilosantos-moura)

SimuladorÁgil é um simulador inteligente que gera simulados personalizados do ENEM em tempo real. O objetivo é proporcionar uma experiência otimizada de preparação para o ENEM, oferecendo questões adaptadas ao perfil do estudante e fornecendo feedback personalizado, incluindo exportação de relatórios em PDF.

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

Acesse a versão online: [https://simulado.site](https://simulado.site)

---

## Arquitetura e Tecnologias

### Backend (API)

- **Linguagem:** Python
- **Framework:** FastAPI
- **Hospedagem:** [Render](https://api-simulado-generator.onrender.com)
- **Documentação da API:** [https://api-simulado-generator.onrender.com/docs](https://api-simulado-generator.onrender.com/docs)

### Frontend

- **Linguagem:** JavaScript
- **Framework:** React
- **Build Tool:** Vite
- **Estilização:** CSS3
- **Principais Bibliotecas:**
  - **axios:** requisições HTTP à API
  - **react-query:** gerenciamento de dados assíncronos
  - **@react-pdf/renderer:** geração dinâmica de relatórios PDF

### Deploy

- **Frontend:** [Vercel](https://simulado.site)
- **API Backend:** [Render](https://api-simulado-generator.onrender.com)

---

## Principais Funcionalidades

- **Simulados Personalizados:** Geração dinâmica de simulados com base no desempenho e preferências do usuário
- **Banco de Questões do ENEM:** Utiliza questões reais e/ou baseadas no formato oficial do exame
- **Relatórios em PDF:** Geração e exportação de relatórios de desempenho em PDF
- **Feedback em Tempo Real:** Correção imediata com análise de acertos e erros, incluindo sugestões de melhoria
- **Interface Responsiva:** Design intuitivo e adaptável para dispositivos móveis e desktop

---

## Como Usar

### 1. Versão Online

Acesse diretamente pelo navegador: [https://simulado.site](https://simulado.site)

### 2. Executar Localmente

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

Por padrão, o frontend está configurado para consumir a API hospedada no Render: [https://api-simulado-generator.onrender.com](https://api-simulado-generator.onrender.com)

---

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

Consulte as [issues](https://github.com/DaniDMoura/SimuladorAgil/issues) para ver sugestões de melhorias, bugs reportados ou novas funcionalidades.

---

## Licença

Distribuído sob a Licença GNU General Public License v3.0. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

- **Desenvolvedor:** [@DaniDMoura](https://github.com/DaniDMoura)
- **Suporte:** Para dúvidas, sugestões ou feedback, utilize as [issues](https://github.com/DaniDMoura/SimuladorAgil/issues) do projeto

---

> Este projeto está em constante evolução. Contribuições são bem-vindas!