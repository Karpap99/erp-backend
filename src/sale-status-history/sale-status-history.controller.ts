import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleStatusHistoryService } from './sale-status-history.service';
import { CreateSaleStatusHistoryDto } from './dto/create-sale-status-history.dto';
import { UpdateSaleStatusHistoryDto } from './dto/update-sale-status-history.dto';

@Controller('sale-status-history')
export class SaleStatusHistoryController {
  constructor(private readonly saleStatusHistoryService: SaleStatusHistoryService) {}

  @Post()
  create(@Body() createSaleStatusHistoryDto: CreateSaleStatusHistoryDto) {
    return this.saleStatusHistoryService.create(createSaleStatusHistoryDto);
  }

  @Get()
  findAll() {
    return this.saleStatusHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleStatusHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleStatusHistoryDto: UpdateSaleStatusHistoryDto) {
    return this.saleStatusHistoryService.update(+id, updateSaleStatusHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleStatusHistoryService.remove(+id);
  }
}
