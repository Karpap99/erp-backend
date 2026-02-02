import { Test, TestingModule } from '@nestjs/testing';
import { StoreProductHistoryService } from './store-product-history.service';

describe('StoreProductHistoryService', () => {
  let service: StoreProductHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreProductHistoryService],
    }).compile();

    service = module.get<StoreProductHistoryService>(StoreProductHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
