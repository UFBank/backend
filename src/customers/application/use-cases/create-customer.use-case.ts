import { Inject, Injectable } from "@nestjs/common";
import { ICustomerRepository } from "src/customers/domain/repositories/customer.repository.interface";
import { CreateCustomerDto } from "../dtos/create-customer.dto";
import { CustomerResponseDto } from "../dtos/customer-response.dto";
import { Customer } from "src/customers/domain/entities/customers.entity";

@Injectable()
 export class CreateCustomerUseCase{
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ){}

  async execute(data: CreateCustomerDto): Promise<CustomerResponseDto>{
    const customer = new Customer('', data.name, data.email, data.phone, data.address)
    const create = await this.repository.create(customer);

    return CustomerResponseDto.fromEntity(create);
  }
 }