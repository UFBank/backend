import { Customer } from "src/customers/domain/entities/customers.entity";
export class CustomerResponseDto{
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: Date;
  updatedAt: Date;

  static fromEntity(customer: Customer): CustomerResponseDto{
    return {
       id: customer.id,
      name: customer.name,       
      email: customer.email,
      phone: customer.phone,
      address: customer.address,
      createdAt: customer.createdAt,
      updatedAt: customer.updatedAt,
    };
  }

  static fromEntities(customers: Customer[]): CustomerResponseDto[] {
    return customers.map(customer => this.fromEntity(customer));
  }
}