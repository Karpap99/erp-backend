import { Test, TestingModule } from '@nestjs/testing';
import { StoreRolesService } from './store-roles.service';

describe('StoreRolesService', () => {
  let service: StoreRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreRolesService],
    }).compile();

    service = module.get<StoreRolesService>(StoreRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
