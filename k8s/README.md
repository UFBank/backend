# Kubernetes - UFBank

Esta pasta contém os arquivos de configuração do Kubernetes para a aplicação UFBank.

## Estrutura dos Arquivos

- `namespace.yaml` - Define o namespace para organizar os recursos
- `configmap.yaml` - Configurações da aplicação (variáveis de ambiente)
- `deployment.yaml` - Define como a aplicação será executada (2 réplicas)
- `service.yaml` - Expõe a aplicação dentro do cluster
- `ingress.yaml` - Permite acesso externo à aplicação
- `kustomization.yaml` - Organiza todos os recursos para deploy

## Como Usar

### Pré-requisitos
- Kubernetes cluster configurado
- kubectl instalado
- Docker image da aplicação construída

### Deploy da Aplicação

1. Construir a imagem Docker:
```bash
docker build -t ufbank:latest .
```

2. Aplicar as configurações do Kubernetes:
```bash
kubectl apply -k .
```

3. Verificar o status:
```bash
kubectl get pods -n ufbank
kubectl get services -n ufbank
kubectl get ingress -n ufbank
```

### Acessar a Aplicação

- **Internamente**: `ufbank-service.ufbank.svc.cluster.local:80`
- **Externamente**: `http://ufbank.local` (requer configuração de DNS ou /etc/hosts)

### Comandos Úteis

```bash
# Ver logs da aplicação
kubectl logs -f deployment/ufbank-app -n ufbank

# Escalar a aplicação
kubectl scale deployment ufbank-app --replicas=3 -n ufbank

# Remover a aplicação
kubectl delete -k .
```

## Configurações

### Recursos da Aplicação
- **CPU**: 100m (request) / 200m (limit)
- **Memória**: 128Mi (request) / 256Mi (limit)
- **Réplicas**: 2

### Health Checks
- **Liveness Probe**: Verifica se a aplicação está funcionando
- **Readiness Probe**: Verifica se a aplicação está pronta para receber tráfego
