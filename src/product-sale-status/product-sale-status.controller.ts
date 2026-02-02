import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductSaleStatusService } from './product-sale-status.service';
import { CreateProductSaleStatusDto } from './dto/create-product-sale-status.dto';
import { UpdateProductSaleStatusDto } from './dto/update-product-sale-status.dto';

@Controller('product-sale-status')
export class ProductSaleStatusController {
  constructor(private readonly productSaleStatusService: ProductSaleStatusService) {}

  @Post()
  create(@Body() createProductSaleStatusDto: CreateProductSaleStatusDto) {
    return this.productSaleStatusService.create(createProductSaleStatusDto);
  }

  @Get()
  findAll() {
    return this.productSaleStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSaleStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductSaleStatusDto: UpdateProductSaleStatusDto) {
    return this.productSaleStatusService.update(+id, updateProductSaleStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productSaleStatusService.remove(+id);
  }
}
