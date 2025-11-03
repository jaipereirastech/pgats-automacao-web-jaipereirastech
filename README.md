# 🧪 Projeto de Automação Web - Automation Exercise  
**Curso:** PGATS - Automação de Testes  
**Aluno:** Jailson Pereira
**Professor:** Samuel Lucas  
**Data de Entrega:** 31/10  

---

## 📖 Descrição do Projeto

Este projeto tem como objetivo implementar testes automatizados para a aplicação fictícia [Automation Exercise](https://www.automationexercise.com), conforme os casos de teste descritos na página ["Test Cases"](https://www.automationexercise.com/test_cases).

O projeto foi desenvolvido como **trabalho individual de conclusão do módulo**, utilizando **Cypress** para automação web e **GitHub Actions** para integração contínua.

---

## ✅ Casos de Teste Implementados

Foram automatizados os seguintes casos:

| Nº | Nome do Caso | Status |
|----|-------------------------------|:---:|
| 1  | Register User | ✅ |
| 2  | Login User with correct email and password | ✅ |
| 3  | Login User with incorrect email and password | ✅ |
| 4  | Logout User | ✅ |
| 5  | Register User with existing email | ✅ |
| 6  | Contact Us Form | ✅ |
| 8  | Verify All Products and Product Detail Page | ✅ |
| 9  | Search Product | ✅ |
| 10 | Verify Subscription in Home Page | ✅ |
| 15 | Place Order: Register while Checkout | ✅ |

---

## ⚙️ Tecnologias Utilizadas

- **Node.js** (v18+)
- **Cypress** (framework de testes E2E)
- **Mochawesome Reporter** (relatórios HTML)
- **GitHub Actions** (execução automatizada de testes no CI)

---

## 🧱 Estrutura do Projeto

pgats-automacao-web-jaipereirastech/
├── .github/
│ └── workflows/
│ └── ci.yml # Workflow para execução automática no GitHub Actions
├── cypress/
│ ├── e2e/ # Casos de teste automatizados
│ ├── fixtures/ # Massa de dados e arquivos de apoio
│ └── support/ # Comandos e configurações adicionais
├── reports/ # Relatórios de execução
├── cypress.config.js # Configuração principal do Cypress
├── package.json # Dependências e scripts do projeto
├── README.md # Documentação do projeto
└── .gitignore

---

## 🚀 Como Executar Localmente

### 🔧 Pré-requisitos
- Node.js instalado (versão 18 ou superior)
- Navegador Google Chrome ou Edge
- Git instalado

### 📥 Passos de instalação
```bash
# Clonar o repositório
git clone https://github.com/jaipereirastech/pgats-automacao-web-jaipereirastech.git
cd pgats-automacao-web-jaipereirastech

# Instalar dependências
npm ci
▶️ Executar os testes localmente
Modo interativo (Cypress GUI):

bash

npm run cy:open
Modo headless (terminal):

bash

npm test
Os resultados dos testes serão gerados na pasta reports/.

🧾 Relatórios
Os relatórios são gerados automaticamente após a execução dos testes (tanto local quanto no GitHub Actions) utilizando cypress-mochawesome-reporter.

📁 Local dos relatórios:

bash

/reports/
Exemplo de comando para abrir o relatório HTML:

bash

npx mochawesome-merge reports/*.json > reports/output.json
npx marge reports/output.json
⚙️ Execução Automática (CI/CD - GitHub Actions)
O projeto executa todos os testes automaticamente a cada push ou pull request para o branch principal.

📍 Arquivo de configuração: .github/workflows/ci.yml

Exemplo de Workflow:
yaml

name: CI - Cypress tests

on:
  push:
    branches: [ main, master ]
  pull_request:

jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests
        run: npm run test

      - name: Upload test reports
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-reports
          path: reports/**/*
🔗 Os relatórios ficam disponíveis como artefatos após a execução no GitHub Actions.

🧠 Boas Práticas Aplicadas
Uso de seletores estáveis (data-test, id, class fixas)

Testes independentes e reutilizáveis

Padrão AAA (Arrange, Act, Assert)

Padronização de código (eslint, convenção de nomes)

Separação entre massa de dados (fixtures) e lógica de teste

Geração automática de relatórios

Execução contínua via CI/CD (GitHub Actions)

🗑️ Observações Finais
O diretório node_modules foi removido do repositório para otimizar o zip de entrega.

Antes de enviar o projeto, execute:

bash

zip -r projeto-final.zip . -x "node_modules/*" ".git/*"
A entrega foi feita conforme o cronograma:

Até 31/10 às 23:59:59

Upload individual via plataforma

👨‍💻 Autor
Jailson Pereira
Analista de Suporte de Sistemas • Engenheiro de Qualidade de Software

