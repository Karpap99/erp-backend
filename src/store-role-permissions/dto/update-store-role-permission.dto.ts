import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreRolePermissionDto } from './create-store-role-permission.dto';

export class UpdateStoreRolePermissionDto extends PartialType(CreateStoreRolePermissionDto) {}
