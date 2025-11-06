import {IsString, IsEmail, IsOptional} from ...
export class UpdateCustomerDto{

  @IsString()
  @IsOptional()
  name?: string
  
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  address?: string;


}