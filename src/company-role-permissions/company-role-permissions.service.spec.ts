import { Test, TestingModule } from '@nestjs/testing';
import { CompanyRolePermissionsService } from './company-role-permissions.service';

describe('CompanyRolePermissionsService', () => {
  let service: CompanyRolePermissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyRolePermissionsService],
    }).compile();

    service = module.get<CompanyRolePermissionsService>(CompanyRolePermissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
