import { Test, TestingModule } from '@nestjs/testing';
import { ProductSaleStatusController } from './product-sale-status.controller';
import { ProductSaleStatusService } from './product-sale-status.service';

describe('ProductSaleStatusController', () => {
  let controller: ProductSaleStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSaleStatusController],
      providers: [ProductSaleStatusService],
    }).compile();

    controller = module.get<ProductSaleStatusController>(ProductSaleStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
