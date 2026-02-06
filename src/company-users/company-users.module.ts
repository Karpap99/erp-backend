import { Module } from '@nestjs/common';
import { CompanyUsersService } from './company-users.service';
import { CompanyUsersController } from './company-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyUsers } from 'src/entities/CompanyUsers';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyUsers])],
  controllers: [CompanyUsersController],
  providers: [CompanyUsersService],
})
export class CompanyUsersModule {}
