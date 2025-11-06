export class Customer{

  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public phone?: string,
    public address?: string,
    public readonly createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
  ) {}

   update(data: Partial<Pick<Customer, 'name' | 'email' | 'phone' | 'address'>>): void {
    if (data.name !== undefined) this.name = data.name;
    if (data.email !== undefined) this.email = data.email;
    if (data.phone !== undefined) this.phone = data.phone;
    if (data.address !== undefined) this.address = data.address;
    this.updatedAt = new Date();
  }
}