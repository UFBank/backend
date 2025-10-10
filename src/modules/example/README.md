# 📚 Módulo Example - Guia Completo

Este é um exemplo básico de como criar um módulo usando **Arquitetura Limpa** no NestJS.

> 💡 **O que faz?** Retorna informações de um usuário mockado (fake) com o nome "luan menezes"

---

## 🎯 O que é Arquitetura Limpa?

É uma forma de organizar o código em camadas, onde cada camada tem uma responsabilidade específica:

1. **Domain** (Domínio) - O coração do negócio
2. **Application** (Aplicação) - As regras e casos de uso
3. **Infrastructure** (Infraestrutura) - Conexões com banco, APIs, etc
4. **Presentation** (Apresentação) - Como o usuário interage (APIs REST)

---

## 📁 Estrutura do Módulo

```text
src/modules/example/
├── domain/                              ⭐ DOMÍNIO
│   ├── entities/
│   │   └── user.entity.ts              → Modelo de dados do Usuário
│   └── repositories/
│       └── user.repository.interface.ts → Contrato de como buscar dados
│
├── application/                         ⭐ APLICAÇÃO
│   ├── dtos/
│   │   └── user-response.dto.ts        → Formato da resposta
│   └── use-cases/
│       └── get-user.use-case.ts        → Regra: buscar um usuário
│
├── infrastructure/                      ⭐ INFRAESTRUTURA  
│   └── repositories/
│       └── user.repository.ts          → Implementação (dados mockados)
│
├── presentation/                        ⭐ APRESENTAÇÃO
│   └── controllers/
│       ├── example.controller.ts       → Endpoint HTTP
│       └── example.controller.spec.ts  → Testes do endpoint
│
└── example.module.ts                    → Configuração do módulo
```

---

## 🚀 Como Usar

### 1️⃣ Iniciar o servidor

```bash
npm run start:dev
```

### 2️⃣ Fazer uma requisição

**Endpoint disponível:**
```http
GET http://localhost:3000/example/user/1
```

**Resposta esperada:**
```json
{
  "id": "1",
  "name": "luan menezes"
}
```

### 3️⃣ Testar com cURL

```bash
curl http://localhost:3000/example/user/1
```

### 4️⃣ Testar no navegador

Abra: `http://localhost:3000/example/user/1`

---

## 🧪 Rodando os Testes

```bash
# Rodar todos os testes
npm test

# Rodar apenas os testes deste módulo
npm test -- example.controller.spec.ts

# Rodar com cobertura
npm run test:cov
```

**Testes inclusos:**
- ✅ Quando usuário existe, retorna os dados
- ✅ Quando usuário não existe, retorna erro 404

---

## 🔄 Fluxo de Execução

```text
1. 📥 Requisição HTTP chega
        ↓
2. 🎮 Controller recebe (example.controller.ts)
        ↓
3. 📋 Chama o Use Case (get-user.use-case.ts)
        ↓
4. 💾 Use Case busca no Repository (user.repository.ts)
        ↓
5. 📤 Retorna o DTO formatado (user-response.dto.ts)
        ↓
6. ✅ Controller devolve a resposta HTTP
```

---

## 🛠️ Arquivos Explicados

### `user.entity.ts` - Entidade
```typescript
// Representa um Usuário no sistema
export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
  ) {}
}
```

### `get-user.use-case.ts` - Caso de Uso
```typescript
// Regra de negócio: buscar um usuário pelo ID
async execute(id: string): Promise<UserResponseDto | null>
```

### `example.controller.ts` - Controller
```typescript
// Endpoint HTTP que expõe a funcionalidade
@Get('user/:id')
async getUser(@Param('id') id: string)
```

---

## 📝 Conceitos Aplicados

✅ **Separação de Responsabilidades** - Cada camada faz uma coisa  
✅ **Inversão de Dependência** - Use Cases dependem de interfaces, não implementações  
✅ **Testabilidade** - Fácil de mockar e testar  
✅ **Independência de Framework** - O domínio não conhece o NestJS  
✅ **Padrão AAA nos Testes** - Arrange, Act, Assert

---

## 🎓 Próximos Passos

1. Conectar com banco de dados real (trocar o mock)
2. Adicionar validação de entrada
3. Implementar outros endpoints (POST, PUT, DELETE)
4. Adicionar autenticação
5. Documentar com Swagger

---

## ❓ Dúvidas Comuns

**P: Por que tantas pastas?**  
R: Para separar responsabilidades e facilitar manutenção.

**P: Onde mudo os dados retornados?**  
R: Em `infrastructure/repositories/user.repository.ts`

**P: Como adicionar mais campos no usuário?**  
R: Altere `user.entity.ts` e `user-response.dto.ts`

**P: Por que usar interfaces?**  
R: Para desacoplar e facilitar testes (mocks)

