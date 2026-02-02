import { Test, TestingModule } from '@nestjs/testing';
import { StoreProductHistoryController } from './store-product-history.controller';
import { StoreProductHistoryService } from './store-product-history.service';

describe('StoreProductHistoryController', () => {
  let controller: StoreProductHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreProductHistoryController],
      providers: [StoreProductHistoryService],
    }).compile();

    controller = module.get<StoreProductHistoryController>(StoreProductHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
