import { Test, TestingModule } from '@nestjs/testing';
import { StoreUsersController } from './store-users.controller';
import { StoreUsersService } from './store-users.service';

describe('StoreUsersController', () => {
  let controller: StoreUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreUsersController],
      providers: [StoreUsersService],
    }).compile();

    controller = module.get<StoreUsersController>(StoreUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
