import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreProductHistoryDto } from './create-store-product-history.dto';

export class UpdateStoreProductHistoryDto extends PartialType(CreateStoreProductHistoryDto) {}
