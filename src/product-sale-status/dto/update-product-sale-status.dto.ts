import { PartialType } from '@nestjs/mapped-types';
import { CreateProductSaleStatusDto } from './create-product-sale-status.dto';

export class UpdateProductSaleStatusDto extends PartialType(CreateProductSaleStatusDto) {}
