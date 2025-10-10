import { Module } from '@nestjs/common';
import { ExampleController } from './presentation/controllers/example.controller';
import { GetUserUseCase } from './application/use-cases/get-user.use-case';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { IUserRepository } from './domain/repositories/user.repository.interface';

@Module({
  controllers: [ExampleController],
  providers: [
    GetUserUseCase,
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
})
export class ExampleModule {}
