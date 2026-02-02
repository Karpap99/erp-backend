import { Module } from '@nestjs/common';
import { CompanyPermissionsService } from './company-permissions.service';
import { CompanyPermissionsController } from './company-permissions.controller';

@Module({
  controllers: [CompanyPermissionsController],
  providers: [CompanyPermissionsService],
})
export class CompanyPermissionsModule {}
