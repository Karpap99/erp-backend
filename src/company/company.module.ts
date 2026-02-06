import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/Company';
import { CompanyUsers } from 'src/entities/CompanyUsers';
import { CompanyRoles } from 'src/entities/CompanyRoles';

@Module({
  imports: [TypeOrmModule.forFeature([Company, CompanyUsers, CompanyRoles])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
