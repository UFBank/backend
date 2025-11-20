# 🏦 UFBank - Sistema Bancário Integrado

Este repositório contém o desenvolvimento do projeto **UFBank**, desenvolvido durante a disciplina **MATA57 - Laboratório de Programação I** (2025.2) da Universidade Federal da Bahia (UFBA).

O objetivo é construir um backend robusto para uma fintech, utilizando **NestJS** com **Clean Architecture**, microsserviços e práticas de **DevOps**.

## 🚀 Tecnologias & Ferramentas

* **Backend:** [NestJS](https://nestjs.com/) (Node.js)
* **Banco de Dados:** PostgreSQL
* **ORM & GUI:** [Prisma](https://www.prisma.io/) & Prisma Studio
* **Infraestrutura:** Docker & Kubernetes (K8s)
* **Arquitetura:** Clean Architecture + Modularização

## 📂 Estrutura do Projeto

O projeto segue estritamente os princípios de **Clean Architecture**, respeitando a divisão de módulos sem camadas extras, conforme especificado na disciplina:

```bash
src/
├── domain/      # Entidades e Regras de Negócio
├── use-case/    # Casos de uso da aplicação
├── infra/       # Implementações de banco de dados, APIs externas, etc.
├── interface/   # Controllers, Resolvers, Presenters
└── libs/        # Bibliotecas compartilhadas (@libs)
