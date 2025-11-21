# UFBank Backend

Backend em NestJS com Prisma e PostgreSQL.

## Requisitos

- Node.js 18+
- npm
- Docker e Docker Compose

## Variáveis de ambiente

Copie o arquivo de exemplo e ajuste se necessário:

```bash
cp env.example .env
```

Por padrão:

```env
DATABASE_URL=postgres://ufbank:ufbank@localhost:5432/ufbank
```

## Banco de dados (PostgreSQL via Docker)

Suba o banco e o backend com Docker Compose:

```bash
docker compose up -d
```

O `docker-compose.yml` cria:

- `db`: Postgres 16, exposto em `localhost:5432`
- `backend`: API NestJS em `http://localhost:3000`, usando o banco `db`

## Prisma

O schema Prisma fica em `@libs/prisma/schema.prisma`.

### Rodar migrations (no host)

Com o Postgres rodando em `localhost:5432`:

```bash
npm install
npx prisma migrate dev --schema @libs/prisma/schema.prisma
```

### Gerar client

```bash
npx prisma generate
```

O client gerado fica em `@libs/generated/prisma` (já ignorado no `.gitignore`).

## Rodando o projeto (sem Docker)

1. Certifique-se que o Postgres está rodando (pode ser via Docker Compose):
   ```bash
   docker compose up -d db
   ```
2. Instale as dependências e rode o servidor:
   ```bash
   npm install
   npm run start:dev
   ```

A API ficará disponível em `http://localhost:3000`.

## Rodando o projeto com Docker

```bash
docker compose up -d
```

Isso vai:

- buildar a imagem usando o `dockerfile` na raiz
- expor a API em `http://localhost:3000`

Para ver logs do backend:

```bash
docker compose logs -f backend
```

## Estrutura do projeto (resumo)

- `src/` — código NestJS (módulos, controllers, use-cases, repositórios)
- `@libs/prisma/schema.prisma` — schema do Prisma
- `@libs/prisma/migrations/` — migrations do Prisma
- `@libs/generated/prisma/` — client Prisma gerado
- `infra/k8s/` — manifests Kubernetes
- `dockerfile` — build da API
- `docker-compose.yml` — orquestração da API + Postgres

## Comandos úteis

- `npm run start:dev` — desenvolvimento
- `npm run build` — build de produção
- `npm run start:prod` — roda build de produção

## Healthcheck

Existe um módulo de healthcheck em `src/modules/healthcheck` que pode ser usado para monitoramento da API (veja o controller para rota e detalhes).
