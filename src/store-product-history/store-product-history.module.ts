import { Module } from '@nestjs/common';
import { StoreProductHistoryService } from './store-product-history.service';
import { StoreProductHistoryController } from './store-product-history.controller';

@Module({
  controllers: [StoreProductHistoryController],
  providers: [StoreProductHistoryService],
})
export class StoreProductHistoryModule {}
