# GitLab CI/CD - UFBank

Este documento descreve a configuração da pipeline CI/CD do GitLab para o projeto UFBank.

## 📋 Visão Geral

A pipeline está configurada para:
- ✅ Instalar dependências
- 🧪 Executar testes unitários e e2e
- 🔍 Executar linting
- 🏗️ Build da aplicação
- 🐳 Build e push da imagem Docker
- 🚀 Deploy automático para desenvolvimento
- 🚀 Deploy manual para produção

## 🏗️ Stages da Pipeline

### 1. Install
- Instala dependências do Node.js
- Cache de `node_modules` e `.npm`

### 2. Test
- **test_unit**: Executa testes unitários com cobertura
- **test_e2e**: Executa testes end-to-end
- **lint**: Verifica qualidade do código
- **security_scan**: Verifica vulnerabilidades nas dependências

### 3. Build
- **build_app**: Compila a aplicação TypeScript

### 4. Docker
- **build_docker**: Constrói e faz push da imagem Docker

### 5. Deploy
- **deploy_dev**: Deploy automático para desenvolvimento
- **deploy_prod**: Deploy manual para produção

## 🔧 Configuração Necessária

### Variáveis de Ambiente no GitLab

Configure as seguintes variáveis em `Settings > CI/CD > Variables`:

#### Kubernetes
```
KUBE_CONTEXT_DEV=contexto-do-cluster-dev
KUBE_CONTEXT_PROD=contexto-do-cluster-prod
```

#### Docker Registry (opcional - já configurado)
```
CI_REGISTRY_USER=gitlab-ci-token
CI_REGISTRY_PASSWORD=$CI_JOB_TOKEN
```

### Permissões no Kubernetes

O GitLab Runner precisa de permissões para:
- Listar deployments
- Atualizar deployments
- Verificar status de rollout

Exemplo de ClusterRole:
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: gitlab-deployer
rules:
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["get", "list", "patch", "update"]
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
```

## 🚀 Como Usar

### Deploy Automático (Desenvolvimento)
- Push para branch `develop` → Deploy automático

### Deploy Manual (Produção)
- Push para branch `main` → Deploy manual disponível
- Clique em "Deploy" no job `deploy_prod`

### Build de Imagem Docker
- Push para `main` ou `develop` → Build automático
- Imagem disponível em: `$CI_REGISTRY_IMAGE:$CI_COMMIT_SHORT_SHA`

## 📊 Monitoramento

### Cobertura de Testes
- Relatório de cobertura gerado automaticamente
- Disponível em `coverage/cobertura-coverage.xml`

### Artifacts
- `node_modules/` - Dependências (1 hora)
- `dist/` - Build da aplicação (1 hora)
- `coverage/` - Relatório de cobertura (1 semana)
- `test-results/` - Resultados de testes e2e (1 semana)

## 🔍 Troubleshooting

### Pipeline Falha no Deploy
1. Verificar conectividade com cluster Kubernetes
2. Verificar permissões do service account
3. Verificar se a imagem Docker foi construída corretamente

### Testes Falham
1. Verificar se todas as dependências estão instaladas
2. Verificar configuração do banco de dados para testes
3. Verificar variáveis de ambiente necessárias

### Build Docker Falha
1. Verificar se o Dockerfile está correto
2. Verificar permissões do GitLab Registry
3. Verificar se o contexto de build está correto

## 📝 Logs e Debug

### Ver Logs da Pipeline
```bash
# No GitLab UI
CI/CD > Pipelines > [Pipeline] > [Job] > Logs
```

### Debug Local
```bash
# Executar testes localmente
npm run test
npm run test:e2e

# Build local
npm run build

# Build Docker local
docker build -t ufbank:local .
```

## 🔄 Atualizações

Para atualizar a pipeline:
1. Modifique `.gitlab-ci.yml`
2. Commit e push
3. A nova pipeline será executada automaticamente

## 📚 Recursos Adicionais

- [GitLab CI/CD Documentation](https://docs.gitlab.com/ee/ci/)
- [Kubernetes Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
