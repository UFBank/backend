import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ICustomerRepository } from "src/customers/domain/repositories/customer.repository.interface";
import { CustomerResponseDto } from "../dtos/customer-response.dto";
import { Customer } from "src/customers/domain/entities/customers.entity";


@Injectable()
export class GetCustomerUseCase{
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ){}

  async execute(id: string): Promise<CustomerResponseDto>{
  const customer = await this.repository.findById(id);
 
  if (!customer) throw new NotFoundException("Customer not found");
  
  return new CustomerResponseDto(customer)
}
}