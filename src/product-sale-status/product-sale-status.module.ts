import { Module } from '@nestjs/common';
import { ProductSaleStatusService } from './product-sale-status.service';
import { ProductSaleStatusController } from './product-sale-status.controller';

@Module({
  controllers: [ProductSaleStatusController],
  providers: [ProductSaleStatusService],
})
export class ProductSaleStatusModule {}
