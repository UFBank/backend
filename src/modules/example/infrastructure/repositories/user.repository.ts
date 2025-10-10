import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/repositories/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    // Mock de dados - retorna sempre o mesmo usuário
    return new User('1', 'luan menezes');
  }
}

