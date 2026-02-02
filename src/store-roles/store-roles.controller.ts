import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreRolesService } from './store-roles.service';
import { CreateStoreRoleDto } from './dto/create-store-role.dto';
import { UpdateStoreRoleDto } from './dto/update-store-role.dto';

@Controller('store-roles')
export class StoreRolesController {
  constructor(private readonly storeRolesService: StoreRolesService) {}

  @Post()
  create(@Body() createStoreRoleDto: CreateStoreRoleDto) {
    return this.storeRolesService.create(createStoreRoleDto);
  }

  @Get()
  findAll() {
    return this.storeRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeRolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreRoleDto: UpdateStoreRoleDto) {
    return this.storeRolesService.update(+id, updateStoreRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeRolesService.remove(+id);
  }
}
