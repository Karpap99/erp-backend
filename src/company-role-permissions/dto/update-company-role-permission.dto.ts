import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyRolePermissionDto } from './create-company-role-permission.dto';

export class UpdateCompanyRolePermissionDto extends PartialType(CreateCompanyRolePermissionDto) {}
