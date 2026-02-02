import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleStatusHistoryDto } from './create-sale-status-history.dto';

export class UpdateSaleStatusHistoryDto extends PartialType(CreateSaleStatusHistoryDto) {}
