import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesPermission } from 'src/entities/RolesPermissions';
import { CreateRolePermissionDto } from './dto/create-role-permission.dto';
import { UpdateRolePermissionDto } from './dto/update-role-permission.dto';

@Injectable()
export class RolePermissionService {
  constructor(
    @InjectRepository(RolesPermission)
    private rolePermissionRepository: Repository<RolesPermission>,
  ) {}

  create(createRolePermissionDto: CreateRolePermissionDto) {
    const rolePermission = this.rolePermissionRepository.create({
      role: { id: createRolePermissionDto.roleId },
      permission: { id: createRolePermissionDto.permissionId },
    });
    return this.rolePermissionRepository.save(rolePermission);
  }

  findAll() {
    return this.rolePermissionRepository.find({
      relations: ['role', 'permission'],
    });
  }

  findOne(id: number) {
    return this.rolePermissionRepository.findOne({
      where: { id },
      relations: ['role', 'permission'],
    });
  }

  findByRole(roleId: number) {
    return this.rolePermissionRepository.find({
      where: { role: { id: roleId } },
      relations: ['permission'],
    });
  }

  findByPermission(permissionId: number) {
    return this.rolePermissionRepository.find({
      where: { permission: { id: permissionId } },
      relations: ['role'],
    });
  }

  update(id: number, updateRolePermissionDto: UpdateRolePermissionDto) {
    return this.rolePermissionRepository.update(id, {
      role: { id: updateRolePermissionDto.roleId },
      permission: { id: updateRolePermissionDto.permissionId },
    });
  }

  remove(id: number) {
    return this.rolePermissionRepository.delete(id);
  }
}
