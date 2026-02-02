import { Injectable } from '@nestjs/common';
import { CreateCompanyPermissionDto } from './dto/create-company-permission.dto';
import { UpdateCompanyPermissionDto } from './dto/update-company-permission.dto';

@Injectable()
export class CompanyPermissionsService {
  create(createCompanyPermissionDto: CreateCompanyPermissionDto) {
    return 'This action adds a new companyPermission';
  }

  findAll() {
    return `This action returns all companyPermissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyPermission`;
  }

  update(id: number, updateCompanyPermissionDto: UpdateCompanyPermissionDto) {
    return `This action updates a #${id} companyPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyPermission`;
  }
}
