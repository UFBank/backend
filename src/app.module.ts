import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleModule } from './modules/example/example.module';
import { HealthCheckModule } from './modules/healthcheck/healthcheck.module';
import { CustomersModule } from './customers/presentation/Customers.module';

@Module({
  imports: [ExampleModule, HealthCheckModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
