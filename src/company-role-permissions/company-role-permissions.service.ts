import { Injectable } from '@nestjs/common';
import { CreateCompanyRolePermissionDto } from './dto/create-company-role-permission.dto';
import { UpdateCompanyRolePermissionDto } from './dto/update-company-role-permission.dto';

@Injectable()
export class CompanyRolePermissionsService {
  create(createCompanyRolePermissionDto: CreateCompanyRolePermissionDto) {
    return 'This action adds a new companyRolePermission';
  }

  findAll() {
    return `This action returns all companyRolePermissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyRolePermission`;
  }

  update(id: number, updateCompanyRolePermissionDto: UpdateCompanyRolePermissionDto) {
    return `This action updates a #${id} companyRolePermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyRolePermission`;
  }
}
