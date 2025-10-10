import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { GetUserUseCase } from '../../application/use-cases/get-user.use-case';
import { UserResponseDto } from '../../application/dtos/user-response.dto';

describe('ExampleController', () => {
  let controller: ExampleController;
  let getUserUseCase: GetUserUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [
        {
          provide: GetUserUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
    getUserUseCase = module.get<GetUserUseCase>(GetUserUseCase);
  });

  describe('getUser', () => {
    it('When user exists, then should return user data', async () => {
      // Arrange
      const userId = '1';
      const expectedUser = new UserResponseDto('1', 'luan menezes');
      const executeSpy = jest
        .spyOn(getUserUseCase, 'execute')
        .mockResolvedValue(expectedUser);

      // Act
      const result = await controller.getUser(userId);

      // Assert
      expect(result).toEqual(expectedUser);
      expect(executeSpy).toHaveBeenCalledWith(userId);
    });

    it('When user does not exist, then should throw NotFoundException', async () => {
      // Arrange
      const userId = '999';
      const executeSpy = jest
        .spyOn(getUserUseCase, 'execute')
        .mockResolvedValue(null);

      // Act & Assert
      await expect(controller.getUser(userId)).rejects.toThrow(
        NotFoundException,
      );
      expect(executeSpy).toHaveBeenCalledWith(userId);
    });
  });
});
