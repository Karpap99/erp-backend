import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreProductHistoryService } from './store-product-history.service';
import { CreateStoreProductHistoryDto } from './dto/create-store-product-history.dto';
import { UpdateStoreProductHistoryDto } from './dto/update-store-product-history.dto';

@Controller('store-product-history')
export class StoreProductHistoryController {
  constructor(private readonly storeProductHistoryService: StoreProductHistoryService) {}

  @Post()
  create(@Body() createStoreProductHistoryDto: CreateStoreProductHistoryDto) {
    return this.storeProductHistoryService.create(createStoreProductHistoryDto);
  }

  @Get()
  findAll() {
    return this.storeProductHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeProductHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreProductHistoryDto: UpdateStoreProductHistoryDto) {
    return this.storeProductHistoryService.update(+id, updateStoreProductHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeProductHistoryService.remove(+id);
  }
}
