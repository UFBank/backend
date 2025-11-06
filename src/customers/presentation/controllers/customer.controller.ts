import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { CreateCustomerDto } from "src/customers/application/dtos/create-customer.dto";
import { UpdateCustomerDto } from "src/customers/application/dtos/update.customer.dto";
import { CreateCustomerUseCase } from "src/customers/application/use-cases/create-customer.use-case";
import { DeleteCustomerUseCase } from "src/customers/application/use-cases/delete-customer.use-case";
import { GetCustomerUseCase } from "src/customers/application/use-cases/get-customer.use-case";
import { UpdateCustomerUseCase } from "src/customers/application/use-cases/update-customer.use-case";


@Controller("Customer")
export class CustomerController{
  constructor(
    private readonly createCustomer: CreateCustomerUseCase,
    private readonly getCustomer: GetCustomerUseCase,
    private readonly updateCustomer: UpdateCustomerUseCase,
    private readonly deleteCustomer: DeleteCustomerUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateCustomerDto){
    return this.createCustomer.execute(dto);
  }

  @Get(":id") 
  findOne (@Param("id") id: string){
    return this.getCustomer.execute(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: UpdateCustomerDto){
    return this.updateCustomer.execute(id, dto);
  }

  @Delete(":id")
  remove (@Param("id") id: string){
    return this.deleteCustomer.execute(id);
  }
}