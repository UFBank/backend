import { Injectable } from '@nestjs/common';
import { IHealthCheckRepository } from '../../domain/repositories/healthcheck.repository.interface';

@Injectable()
export class HealthCheckRepository implements IHealthCheckRepository {
  processArray(data: any[]): Promise<void> {
    if (data.length <= 4) {
      throw new Error('Array deve ter mais de 4 elementos');
    }

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }

    return Promise.resolve();
  }
}
