# Clean Architecture - UFBank

Arquitetura limpa para código testável e maintainável.

## Camadas

```
src/
├── domain/           # 🏛️ Regras de negócio
├── application/      # 🔧 Casos de uso
├── infrastructure/   # 🏗️ Banco, APIs externas
└── presentation/     # 🎨 Controllers, DTOs
```

## Fluxo

```
Request → Controller → Use Case → Repository → Database
                ↓
Response ← Controller ← Use Case ← Repository ← Database
```

## Exemplo

### Entidade
```typescript
export class User {
  constructor(private balance: number) {}
  
  canWithdraw(amount: number): boolean {
    return this.balance >= amount;
  }
}
```

### Caso de Uso
```typescript
export class WithdrawMoneyUseCase {
  async execute(userId: string, amount: number) {
    const user = await this.userRepository.findById(userId);
    user.withdraw(amount);
    await this.userRepository.save(user);
  }
}
```

### Controller
```typescript
@Controller('users')
export class UserController {
  @Post(':id/withdraw')
  async withdraw(@Param('id') userId: string, @Body() dto: WithdrawDto) {
    await this.withdrawMoneyUseCase.execute(userId, dto.amount);
    return { success: true };
  }
}
```

## Benefícios

- ✅ Testabilidade
- ✅ Manutenibilidade
- ✅ Flexibilidade
- ✅ Independência de frameworks
