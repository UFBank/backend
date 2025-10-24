import { Inject, Injectable } from '@nestjs/common';
import type { IHealthCheckRepository } from '../../domain/repositories/healthcheck.repository.interface';
import { HealthCheckRequestDto } from '../dtos/healthcheck-request.dto';

@Injectable()
export class ProcessHealthCheckUseCase {
  constructor(
    @Inject('IHealthCheckRepository')
    private readonly healthCheckRepository: IHealthCheckRepository,
  ) {}

  async execute(healthCheckRequestDto: HealthCheckRequestDto): Promise<void> {
    await this.healthCheckRepository.processArray(healthCheckRequestDto.data);
    
  }
}
