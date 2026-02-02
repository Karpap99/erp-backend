import { Injectable } from '@nestjs/common';
import { CreateStoreProductHistoryDto } from './dto/create-store-product-history.dto';
import { UpdateStoreProductHistoryDto } from './dto/update-store-product-history.dto';

@Injectable()
export class StoreProductHistoryService {
  create(createStoreProductHistoryDto: CreateStoreProductHistoryDto) {
    return 'This action adds a new storeProductHistory';
  }

  findAll() {
    return `This action returns all storeProductHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} storeProductHistory`;
  }

  update(id: number, updateStoreProductHistoryDto: UpdateStoreProductHistoryDto) {
    return `This action updates a #${id} storeProductHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} storeProductHistory`;
  }
}
