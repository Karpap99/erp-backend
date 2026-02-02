import { Test, TestingModule } from '@nestjs/testing';
import { CompanyPermissionsController } from './company-permissions.controller';
import { CompanyPermissionsService } from './company-permissions.service';

describe('CompanyPermissionsController', () => {
  let controller: CompanyPermissionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyPermissionsController],
      providers: [CompanyPermissionsService],
    }).compile();

    controller = module.get<CompanyPermissionsController>(CompanyPermissionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
