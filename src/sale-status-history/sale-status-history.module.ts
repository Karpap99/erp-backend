import { Module } from '@nestjs/common';
import { SaleStatusHistoryService } from './sale-status-history.service';
import { SaleStatusHistoryController } from './sale-status-history.controller';

@Module({
  controllers: [SaleStatusHistoryController],
  providers: [SaleStatusHistoryService],
})
export class SaleStatusHistoryModule {}
