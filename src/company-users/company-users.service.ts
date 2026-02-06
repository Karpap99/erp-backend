import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyUserDto } from './dto/create-company-user.dto';
import { UpdateCompanyUserDto } from './dto/update-company-user.dto';
import { CompanyUsers } from 'src/entities/CompanyUsers';

@Injectable()
export class CompanyUsersService {
  constructor(
    @InjectRepository(CompanyUsers)
    private readonly companyUsersRepository: Repository<CompanyUsers>,
  ) {}

  async create(createCompanyUserDto: CreateCompanyUserDto) {
    const companyUser = this.companyUsersRepository.create({
      company: { id: createCompanyUserDto.companyId },
      user: { id: createCompanyUserDto.userId },
      role: { id: createCompanyUserDto.roleId },
    });
    return this.companyUsersRepository.save(companyUser);
  }

  async findAll() {
    return this.companyUsersRepository.find({
      relations: ['company', 'user', 'role'],
    });
  }

  async findOne(id: string) {
    const companyUser = await this.companyUsersRepository.findOne({
      where: { id },
      relations: ['company', 'user', 'role'],
    });
    if (!companyUser) {
      throw new NotFoundException(`CompanyUser with id ${id} not found`);
    }
    return companyUser;
  }

  async update(id: string, updateCompanyUserDto: UpdateCompanyUserDto) {
    const companyUser = await this.findOne(id);
    if (updateCompanyUserDto.companyId) {
      companyUser.company = { id: updateCompanyUserDto.companyId } as any;
    }
    if (updateCompanyUserDto.userId) {
      companyUser.user = { id: updateCompanyUserDto.userId } as any;
    }
    if (updateCompanyUserDto.roleId) {
      companyUser.role = { id: updateCompanyUserDto.roleId } as any;
    }
    return this.companyUsersRepository.save(companyUser);
  }

  async remove(id: string) {
    const companyUser = await this.findOne(id);
    return this.companyUsersRepository.remove(companyUser);
  }
}
