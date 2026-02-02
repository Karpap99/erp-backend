import { Test, TestingModule } from '@nestjs/testing';
import { StoreRolePermissionsController } from './store-role-permissions.controller';
import { StoreRolePermissionsService } from './store-role-permissions.service';

describe('StoreRolePermissionsController', () => {
  let controller: StoreRolePermissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreRolePermissionsController],
      providers: [StoreRolePermissionsService],
    }).compile();

    controller = module.get<StoreRolePermissionsController>(StoreRolePermissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
