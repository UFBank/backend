import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetUserUseCase } from '../../application/use-cases/get-user.use-case';

@Controller('example')
export class ExampleController {
  constructor(private readonly getUserUseCase: GetUserUseCase) {}

  @Get('user/:id')
  async getUser(@Param('id') id: string) {
    const user = await this.getUserUseCase.execute(id);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}

