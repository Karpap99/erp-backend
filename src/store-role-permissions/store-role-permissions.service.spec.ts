import { Test, TestingModule } from '@nestjs/testing';
import { StoreRolePermissionsService } from './store-role-permissions.service';

describe('StoreRolePermissionsService', () => {
  let service: StoreRolePermissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreRolePermissionsService],
    }).compile();

    service = module.get<StoreRolePermissionsService>(StoreRolePermissionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
