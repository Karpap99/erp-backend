import { Test, TestingModule } from '@nestjs/testing';
import { ProductSaleStatusService } from './product-sale-status.service';

describe('ProductSaleStatusService', () => {
  let service: ProductSaleStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSaleStatusService],
    }).compile();

    service = module.get<ProductSaleStatusService>(ProductSaleStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
