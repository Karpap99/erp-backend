import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateCompanyUserDto {
  @IsNotEmpty()
  @IsUUID()
  companyId?: string;

  @IsNotEmpty()
  @IsUUID()
  userId?: string;

  @IsNotEmpty()
  @IsUUID()
  roleId?: string;
}
