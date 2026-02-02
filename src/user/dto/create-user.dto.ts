import { IsBoolean, IsEmail, IsOptional, IsString, MinLength, IsPhoneNumber } from 'class-validator';


export class CreateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  surname?: string;

  @IsOptional()
  @IsString() 
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters" })
  password?: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}