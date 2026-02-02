import { PartialType } from '@nestjs/mapped-types';
import { CreateStorePermissionDto } from './create-store-permission.dto';

export class UpdateStorePermissionDto extends PartialType(CreateStorePermissionDto) {}
