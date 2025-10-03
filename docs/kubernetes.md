# Kubernetes - UFBank

Configurações do Kubernetes para deploy da aplicação.

## Deploy

```bash
# Build da imagem
docker build -t ufbank:latest .

# Deploy no cluster
kubectl apply -k infra/k8s/

# Verificar status
kubectl get pods -n ufbank
```

## Acesso

- **Local**: `kubectl port-forward service/ufbank-service 3000:80 -n ufbank`
- **Externo**: `http://ufbank.local`

## Comandos Úteis

```bash
# Logs
kubectl logs -f deployment/ufbank-app -n ufbank

# Escalar
kubectl scale deployment ufbank-app --replicas=3 -n ufbank

# Remover
kubectl delete -k infra/k8s/
```

## Configuração

- **Réplicas**: 2
- **CPU**: 100m-200m
- **Memória**: 128Mi-256Mi
