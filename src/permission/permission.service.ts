import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permissions } from 'src/entities/Permissions';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permissions)
    private permissionRepository: Repository<Permissions>,
  ) {}

  create(createPermissionDto: CreatePermissionDto) {
    const permission = this.permissionRepository.create(createPermissionDto);
    return this.permissionRepository.save(permission);
  }

  findAll() {
    return this.permissionRepository.find({
      relations: ['rolePermissions'],
    });
  }

  findOne(id: number) {
    return this.permissionRepository.findOne({
      where: { id },
      relations: ['rolePermissions'],
    });
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return this.permissionRepository.update(id, updatePermissionDto);
  }

  remove(id: number) {
    return this.permissionRepository.delete(id);
  }
}
