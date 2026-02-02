import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyRolePermissionsService } from './company-role-permissions.service';
import { CreateCompanyRolePermissionDto } from './dto/create-company-role-permission.dto';
import { UpdateCompanyRolePermissionDto } from './dto/update-company-role-permission.dto';

@Controller('company-role-permissions')
export class CompanyRolePermissionsController {
  constructor(private readonly companyRolePermissionsService: CompanyRolePermissionsService) {}

  @Post()
  create(@Body() createCompanyRolePermissionDto: CreateCompanyRolePermissionDto) {
    return this.companyRolePermissionsService.create(createCompanyRolePermissionDto);
  }

  @Get()
  findAll() {
    return this.companyRolePermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyRolePermissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyRolePermissionDto: UpdateCompanyRolePermissionDto) {
    return this.companyRolePermissionsService.update(+id, updateCompanyRolePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyRolePermissionsService.remove(+id);
  }
}
