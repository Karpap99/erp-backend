import { Test, TestingModule } from '@nestjs/testing';
import { SaleStatusHistoryService } from './sale-status-history.service';

describe('SaleStatusHistoryService', () => {
  let service: SaleStatusHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaleStatusHistoryService],
    }).compile();

    service = module.get<SaleStatusHistoryService>(SaleStatusHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
