import { Injectable } from '@nestjs/common';
import { CreateProductSaleStatusDto } from './dto/create-product-sale-status.dto';
import { UpdateProductSaleStatusDto } from './dto/update-product-sale-status.dto';

@Injectable()
export class ProductSaleStatusService {
  create(createProductSaleStatusDto: CreateProductSaleStatusDto) {
    return 'This action adds a new productSaleStatus';
  }

  findAll() {
    return `This action returns all productSaleStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSaleStatus`;
  }

  update(id: number, updateProductSaleStatusDto: UpdateProductSaleStatusDto) {
    return `This action updates a #${id} productSaleStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSaleStatus`;
  }
}
