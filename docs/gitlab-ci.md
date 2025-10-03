# GitLab CI/CD - UFBank

Pipeline de integração contínua para o projeto.

## Pipeline

1. **Install** - Dependências
2. **Test** - Testes unitários, e2e, lint
3. **Build** - Compilação TypeScript
4. **Docker** - Build e push da imagem
5. **Deploy** - Deploy automático (dev) e manual (prod)

## Configuração

### Variáveis (Settings > CI/CD > Variables)
```
KUBE_CONTEXT_DEV=contexto-do-cluster-dev
KUBE_CONTEXT_PROD=contexto-do-cluster-prod
```

### Arquivos
- `infra/.gitlab-ci.yml` - Pipeline
- `infra/.gitlab/` - Templates de MR

## Deploy

- **Desenvolvimento**: Push para `develop` → Deploy automático
- **Produção**: Push para `main` → Deploy manual

## Troubleshooting

- Verificar logs no GitLab UI
- Verificar conectividade com Kubernetes
- Verificar permissões do service account
