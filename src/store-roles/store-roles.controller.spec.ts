import { Test, TestingModule } from '@nestjs/testing';
import { StoreRolesController } from './store-roles.controller';
import { StoreRolesService } from './store-roles.service';

describe('StoreRolesController', () => {
  let controller: StoreRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreRolesController],
      providers: [StoreRolesService],
    }).compile();

    controller = module.get<StoreRolesController>(StoreRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
