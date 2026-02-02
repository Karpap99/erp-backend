import { Injectable } from '@nestjs/common';
import { CreateSaleStatusHistoryDto } from './dto/create-sale-status-history.dto';
import { UpdateSaleStatusHistoryDto } from './dto/update-sale-status-history.dto';

@Injectable()
export class SaleStatusHistoryService {
  create(createSaleStatusHistoryDto: CreateSaleStatusHistoryDto) {
    return 'This action adds a new saleStatusHistory';
  }

  findAll() {
    return `This action returns all saleStatusHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleStatusHistory`;
  }

  update(id: number, updateSaleStatusHistoryDto: UpdateSaleStatusHistoryDto) {
    return `This action updates a #${id} saleStatusHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleStatusHistory`;
  }
}
