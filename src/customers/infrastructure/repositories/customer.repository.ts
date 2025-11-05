import { Injectable, NotFoundException } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Customer } from "src/customers/domain/entities/customers.entity";
import { ICustomerRepository } from "src/customers/domain/repositories/customer.repository.interface";

@Injectable()
export class CustomerRepository implements ICustomerRepository{
  private Customers: Customer[]= [];

  async findById(id: string): Promise<Customer | null> {
      return this.Customers.find(c => c.id === id) || null;
  }

  async findAll(): Promise<Customer[]> {
      return this.Customers;
  }

async create(customer: Customer): Promise<Customer> {
    const newCustomer = new Customer(randomUUID(), customer.name, customer.email, customer.phone, customer.address);
    this.Customers.push(newCustomer);
    return newCustomer;
}

async update(id: string, data: Partial<Customer>): Promise<Customer | null> {
    const customer = await this.findById(id);
    if (!customer) throw new NotFoundException("Customer no found");

    Object.assign(customer, data);
    return customer;
}

async delete(id: string): Promise<void> {
    const index = this.Customers.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException("Customer Not Found");
    this.Customers.splice(index, 1);
}
}