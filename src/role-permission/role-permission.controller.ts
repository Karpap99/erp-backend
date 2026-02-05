import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { CreateRolePermissionDto } from './dto/create-role-permission.dto';
import { UpdateRolePermissionDto } from './dto/update-role-permission.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('role-permission')
export class RolePermissionController {
  constructor(private readonly rolePermissionService: RolePermissionService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createRolePermissionDto: CreateRolePermissionDto) {
    return this.rolePermissionService.create(createRolePermissionDto);
  }

  @Get()
  findAll() {
    return this.rolePermissionService.findAll();
  }

  @Get('by-role/:roleId')
  findByRole(@Param('roleId') roleId: string) {
    return this.rolePermissionService.findByRole(+roleId);
  }

  @Get('by-permission/:permissionId')
  findByPermission(@Param('permissionId') permissionId: string) {
    return this.rolePermissionService.findByPermission(+permissionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolePermissionService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRolePermissionDto: UpdateRolePermissionDto,
  ) {
    return this.rolePermissionService.update(+id, updateRolePermissionDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolePermissionService.remove(+id);
  }
}
