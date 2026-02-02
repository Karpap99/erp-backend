import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreRoleDto } from './create-store-role.dto';

export class UpdateStoreRoleDto extends PartialType(CreateStoreRoleDto) {}
