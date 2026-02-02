import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyPermissionsService } from './company-permissions.service';
import { CreateCompanyPermissionDto } from './dto/create-company-permission.dto';
import { UpdateCompanyPermissionDto } from './dto/update-company-permission.dto';

@Controller('company-permissions')
export class CompanyPermissionsController {
  constructor(private readonly companyPermissionsService: CompanyPermissionsService) {}

  @Post()
  create(@Body() createCompanyPermissionDto: CreateCompanyPermissionDto) {
    return this.companyPermissionsService.create(createCompanyPermissionDto);
  }

  @Get()
  findAll() {
    return this.companyPermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyPermissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyPermissionDto: UpdateCompanyPermissionDto) {
    return this.companyPermissionsService.update(+id, updateCompanyPermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyPermissionsService.remove(+id);
  }
}
