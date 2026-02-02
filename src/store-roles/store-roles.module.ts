import { Module } from '@nestjs/common';
import { StoreRolesService } from './store-roles.service';
import { StoreRolesController } from './store-roles.controller';

@Module({
  controllers: [StoreRolesController],
  providers: [StoreRolesService],
})
export class StoreRolesModule {}
