import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ProcessHealthCheckUseCase } from '../../application/use-cases/process-healthcheck.use-case';
import { HealthCheckRequestDto } from '../../application/dtos/healthcheck-request.dto';

@Controller('health')
export class HealthCheckController {
  constructor(private readonly processHealthCheckUseCase: ProcessHealthCheckUseCase) {}

  @Post('check')
  async checkHealth(@Body() body: { data: any[] }) {
    try {
      const healthCheckRequestDto = new HealthCheckRequestDto(body.data);
      await this.processHealthCheckUseCase.execute(healthCheckRequestDto);

      return {message : 'ok'};
    } catch (error) {
      throw new BadRequestException(
        error instanceof Error ? error.message : 'Erro desconhecido',
      );
    }
  }
}
