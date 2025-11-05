export class Customer{

  constructor(
    public readonly id: string,
    public email: string,
    public phone?: string,
    public address?: string,
  ) {}
}