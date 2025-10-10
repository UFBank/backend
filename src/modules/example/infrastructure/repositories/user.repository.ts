import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/repositories/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findById(_id: string): Promise<User | null> {
    // Mock de dados - retorna sempre o mesmo usuário
    return Promise.resolve(new User('1', 'luan menezes'));
  }
}
