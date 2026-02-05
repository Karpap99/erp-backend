import { IsBoolean, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
