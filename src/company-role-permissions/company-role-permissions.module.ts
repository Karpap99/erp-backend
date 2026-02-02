import { Module } from '@nestjs/common';
import { CompanyRolePermissionsService } from './company-role-permissions.service';
import { CompanyRolePermissionsController } from './company-role-permissions.controller';

@Module({
  controllers: [CompanyRolePermissionsController],
  providers: [CompanyRolePermissionsService],
})
export class CompanyRolePermissionsModule {}
