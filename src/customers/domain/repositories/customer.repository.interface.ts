import { Customer } from "../entities/customers.entity";

export abstract class ICustomerRepository{
  abstract findById(id:string): Promise<Customer | null>;
  abstract findAll():Promise<Customer[]>;
  abstract create(customer:Customer): Promise<Customer>;
  abstract update(id: string, customer: Partial<Customer>): Promise<Customer | null>;
  abstract delete(id:string): Promise<void>;
}