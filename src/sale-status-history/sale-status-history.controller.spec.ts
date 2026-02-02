import { Test, TestingModule } from '@nestjs/testing';
import { SaleStatusHistoryController } from './sale-status-history.controller';
import { SaleStatusHistoryService } from './sale-status-history.service';

describe('SaleStatusHistoryController', () => {
  let controller: SaleStatusHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaleStatusHistoryController],
      providers: [SaleStatusHistoryService],
    }).compile();

    controller = module.get<SaleStatusHistoryController>(SaleStatusHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
