import { Test, TestingModule } from '@nestjs/testing';
import { CompanyRolePermissionsController } from './company-role-permissions.controller';
import { CompanyRolePermissionsService } from './company-role-permissions.service';

describe('CompanyRolePermissionsController', () => {
  let controller: CompanyRolePermissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyRolePermissionsController],
      providers: [CompanyRolePermissionsService],
    }).compile();

    controller = module.get<CompanyRolePermissionsController>(CompanyRolePermissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
