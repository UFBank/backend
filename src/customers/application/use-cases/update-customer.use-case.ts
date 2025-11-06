import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ICustomerRepository } from "src/customers/domain/repositories/customer.repository.interface";
import { UpdateCustomerDto } from "../dtos/update.customer.dto";
import { CustomerResponseDto } from "../dtos/customer-response.dto";


@Injectable()
 export class UpdateCustomerUseCase{
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async execute(id: string, data: UpdateCustomerDto): Promise<CustomerResponseDto>{
    const update = await this.repository.update(id, data);

    if (!update) {
      throw new NotFoundException("Customer com ID não encontrado")
    }
    return new CustomerResponseDto(update);
  }
 }