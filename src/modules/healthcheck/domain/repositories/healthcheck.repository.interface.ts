export interface IHealthCheckRepository {
  processArray(data: any[]): Promise<void>;
}
