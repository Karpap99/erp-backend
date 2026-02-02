import { Injectable } from '@nestjs/common';
import { CreateStoreRoleDto } from './dto/create-store-role.dto';
import { UpdateStoreRoleDto } from './dto/update-store-role.dto';

@Injectable()
export class StoreRolesService {
  create(createStoreRoleDto: CreateStoreRoleDto) {
    return 'This action adds a new storeRole';
  }

  findAll() {
    return `This action returns all storeRoles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeRole`;
  }

  update(id: number, updateStoreRoleDto: UpdateStoreRoleDto) {
    return `This action updates a #${id} storeRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeRole`;
  }
}
