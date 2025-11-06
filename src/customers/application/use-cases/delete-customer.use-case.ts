import { Inject, Injectable } from "@nestjs/common";
import { ICustomerRepository } from "src/customers/domain/repositories/customer.repository.interface";

@Injectable()
 export class DeleteCustomerUseCase{
  constructor(
    @Inject(ICustomerRepository)
    private readonly repository: ICustomerRepository,
  ) {}

  async execute(id: string): Promise<void>{
    await this.repository.delete(id);
  }
 }