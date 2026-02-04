import {
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sale } from './Sale';
import { ProductSaleStatus } from './ProductSaleStatus';

@Index('SaleStatusHistory_sale_idx', ['sale'], {})
@Index('SaleStatusHistory_status_idx', ['status'], {})
@Entity('SaleStatusHistory', { schema: 'public' })
export class SaleStatusHistory {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Sale, (sale) => sale.saleStatusHistories)
  @JoinColumn([{ name: 'sale', referencedColumnName: 'id' }])
  sale: Sale;

  @ManyToOne(
    () => ProductSaleStatus,
    (productSaleStatus) => productSaleStatus.saleStatusHistories,
  )
  @JoinColumn([{ name: 'status', referencedColumnName: 'id' }])
  status: ProductSaleStatus;
}
