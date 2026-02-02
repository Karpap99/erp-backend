import { Injectable } from '@nestjs/common';
import { CreateStoreRolePermissionDto } from './dto/create-store-role-permission.dto';
import { UpdateStoreRolePermissionDto } from './dto/update-store-role-permission.dto';

@Injectable()
export class StoreRolePermissionsService {
  create(createStoreRolePermissionDto: CreateStoreRolePermissionDto) {
    return 'This action adds a new storeRolePermission';
  }

  findAll() {
    return `This action returns all storeRolePermissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeRolePermission`;
  }

  update(id: number, updateStoreRolePermissionDto: UpdateStoreRolePermissionDto) {
    return `This action updates a #${id} storeRolePermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeRolePermission`;
  }
}
