import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyPermissionDto } from './create-company-permission.dto';

export class UpdateCompanyPermissionDto extends PartialType(CreateCompanyPermissionDto) {}
