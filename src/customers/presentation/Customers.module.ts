import { Module } from "@nestjs/common";
import { CustomerController } from "./controllers/customer.controller";
import { CreateCustomerUseCase } from "../application/use-cases/create-customer.use-case";
import { GetCustomerUseCase } from "../application/use-cases/get-customer.use-case";
import { UpdateCustomerUseCase } from "../application/use-cases/update-customer.use-case";
import { DeleteCustomerUseCase } from "../application/use-cases/delete-customer.use-case";
import { ICustomerRepository } from "../domain/repositories/customer.repository.interface";
import { CustomerRepository } from "../infrastructure/repositories/customer.repository";


@Module({
 controllers: [CustomerController],
 providers: [
  CreateCustomerUseCase,
  GetCustomerUseCase,
  UpdateCustomerUseCase,
  DeleteCustomerUseCase,
  {
    provide: ICustomerRepository,
    useClass: CustomerRepository,
  },
 ],
})
export class CustomersModule {}