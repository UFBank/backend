# UFBank - Sistema Bancário

Sistema bancário desenvolvido com NestJS, Docker e Kubernetes.

## 🚀 Primeira Entrega

- [x] Hello World com NestJS
- [x] Docker configurado
- [x] Kubernetes configurado
- [x] Pipeline GitLab CI/CD

## 🔧 Como Executar

```bash
# Desenvolvimento
npm install
npm run start:dev

# Docker
docker build -t ufbank:latest .
docker run -p 3000:3000 ufbank:latest

# Kubernetes
kubectl apply -k infra/k8s/
```

## 📚 Documentação

- [Kubernetes](kubernetes.md)
- [GitLab CI/CD](gitlab-ci.md)
- [Clean Architecture](clean-architecture.md)