import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { PermissionType } from 'src/enums';

export class CreatePermissionDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  type?: PermissionType;
}
