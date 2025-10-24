import { Module } from '@nestjs/common';
import { HealthCheckController } from './presentation/controllers/healthcheck.controller';
import { ProcessHealthCheckUseCase } from './application/use-cases/process-healthcheck.use-case';
import { HealthCheckRepository } from './infrastructure/repositories/healthcheck.repository';

@Module({
  controllers: [HealthCheckController],
  providers: [
    ProcessHealthCheckUseCase,
    {
      provide: 'IHealthCheckRepository',
      useClass: HealthCheckRepository,
    },
  ],
})
export class HealthCheckModule {}
