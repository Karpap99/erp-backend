import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { DataSource, Repository } from 'typeorm';
import { Company } from 'src/entities/Company';
import { CompanyRoles } from 'src/entities/CompanyRoles';
import { CompanyRoleType } from 'src/enums/company-role-type.enum';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
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

  async findAllForUser(
    includeDeleted: boolean = false,
    user: User,
  ): Promise<Company[]> {
    const query = this.companyRepository
      .createQueryBuilder('company')
      .innerJoin('company.companyUsers', 'filterCU')
      .innerJoin('filterCU.user', 'filterUser')
      .where('filterUser.id = :userId', { userId: user.id })
      .leftJoinAndSelect('company.companyUsers', 'companyUsers')
      .leftJoinAndSelect('companyUsers.user', 'users')
      .leftJoinAndSelect('companyUsers.role', 'role');

    if (!includeDeleted) {
      query.andWhere('company.deletedAt IS NULL');
    }

    const companies = await query.getMany();

    companies.forEach((company) => {
      company.companyUsers.forEach((companyUser) => {
        companyUser.user.password = '';
      });
    });

    return companies;
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companyRepository
      .createQueryBuilder('company')
      .leftJoinAndSelect('company.companyUsers', 'companyUsers')
      .leftJoinAndSelect('companyUsers.user', 'user')
      .leftJoinAndSelect('companyUsers.role', 'role')
      .leftJoinAndSelect('company.stores', 'stores')
      .leftJoinAndSelect('company.products', 'products')
      .where('company.id = :id', { id })
      .andWhere('company.deletedAt IS NULL')
      .getOne();

    if (!company) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }

    return company;
  }

  async update(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
    user: User,
  ): Promise<Company> {
    const company = await this.findOne(id);

    Object.assign(company, updateCompanyDto);

    return this.companyRepository.save(company);
  }

  async remove(id: string): Promise<void> {
    const company = await this.findOne(id);
    company.deletedAt = new Date();
    await this.companyRepository.save(company);
  }
}
