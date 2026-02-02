import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreRolePermissionsService } from './store-role-permissions.service';
import { CreateStoreRolePermissionDto } from './dto/create-store-role-permission.dto';
import { UpdateStoreRolePermissionDto } from './dto/update-store-role-permission.dto';

@Controller('store-role-permissions')
export class StoreRolePermissionsController {
  constructor(private readonly storeRolePermissionsService: StoreRolePermissionsService) {}

  @Post()
  create(@Body() createStoreRolePermissionDto: CreateStoreRolePermissionDto) {
    return this.storeRolePermissionsService.create(createStoreRolePermissionDto);
  }

  @Get()
  findAll() {
    return this.storeRolePermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeRolePermissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreRolePermissionDto: UpdateStoreRolePermissionDto) {
    return this.storeRolePermissionsService.update(+id, updateStoreRolePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeRolePermissionsService.remove(+id);
  }
}
