import { Customer } from "src/customers/domain/entities/customers.entity";

export class CustomerResponseDto{
  constructor(customer:Customer){
    this.id = customer.id;
    this.name = customer.name;
    this.email = customer.email;
    this.phone = customer.phone;
    this.address = customer.address
  }

  id: string;
  name: string;
  email: string;
  phone?:string;
  address?: string;

}