import { Test, TestingModule } from '@nestjs/testing';
import { CompanyPermissionsService } from './company-permissions.service';

describe('CompanyPermissionsService', () => {
  let service: CompanyPermissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyPermissionsService],
    }).compile();

    service = module.get<CompanyPermissionsService>(CompanyPermissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
