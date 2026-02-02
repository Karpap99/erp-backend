import { Module } from '@nestjs/common';
import { StoreUsersService } from './store-users.service';
import { StoreUsersController } from './store-users.controller';

@Module({
  controllers: [StoreUsersController],
  providers: [StoreUsersService],
})
export class StoreUsersModule {}
