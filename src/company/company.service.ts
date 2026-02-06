import { Injectable, Logger } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { DataSource, Repository } from 'typeorm';
import { Company } from 'src/entities/Company';
import { CompanyUsers } from 'src/entities/CompanyUsers';
import { CompanyRoles } from 'src/entities/CompanyRoles';
import { CompanyRoleType } from 'src/enums/company-role-type.enum';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(CompanyUsers)
    private readonly companyUsersRepository: Repository<CompanyUsers>,
    @InjectRepository(CompanyRoles)
    private readonly companyRolesRepository: Repository<CompanyRoles>,
    private readonly dataSource: DataSource,
  ) {}

  async create(
    user: User,
    createCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return this.dataSource.transaction(async (manager) => {
      const companyRepo = manager.getRepository(Company);
      const companyRolesRepo = manager.getRepository(CompanyRoles);

      const ownerRole = await companyRolesRepo.findOne({
        where: { id: CompanyRoleType.OWNER },
      });

      if (!ownerRole) {
        throw new Error('OWNER role not found');
      }

      const company = companyRepo.create({
        ...createCompanyDto,
        companyUsers: [
          {
            user,
            role: ownerRole,
          },
        ],
      });

      return companyRepo.save(company);
    });
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
