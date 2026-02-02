import { Module } from '@nestjs/common';
import { StoreRolePermissionsService } from './store-role-permissions.service';
import { StoreRolePermissionsController } from './store-role-permissions.controller';

@Module({
  controllers: [StoreRolePermissionsController],
  providers: [StoreRolePermissionsService],
})
export class StoreRolePermissionsModule {}
