import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductSaleStatus } from './ProductSaleStatus';
import { Store } from './Store';
import { StoreProduct } from './StoreProduct';
import { SaleStatusHistory } from './SaleStatusHistory';

@Index('Sale_status_idx', ['status'], {})
@Index('Sale_store_idx', ['store'], {})
@Index('Sale_store_product_idx', ['storeProduct'], {})
@Entity('Sale', { schema: 'public' })
export class Sale {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('numeric', {
    name: 'quantity_sold',
    nullable: true,
    precision: 12,
    scale: 3,
  })
  quantitySold: string | null;

  @Column('numeric', {
    name: 'unit_price',
    nullable: true,
    precision: 12,
    scale: 2,
  })
  unitPrice: string | null;

  @Column('numeric', {
    name: 'discount_rate',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  discountRate: string | null;

  @Column('numeric', {
    name: 'tax_rate',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  taxRate: string | null;

  @Column('numeric', {
    name: 'discount_amount',
    nullable: true,
    precision: 12,
    scale: 2,
  })
  discountAmount: string | null;

  @Column('numeric', {
    name: 'tax_amount',
    nullable: true,
    precision: 12,
    scale: 2,
  })
  taxAmount: string | null;

  @Column('numeric', {
    name: 'final_price',
    nullable: true,
    precision: 12,
    scale: 2,
  })
  finalPrice: string | null;

  @Column('varchar', { name: 'currency', nullable: true })
  currency: string | null;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date | null;

  @ManyToOne(
    () => ProductSaleStatus,
    (productSaleStatus) => productSaleStatus.sales,
  )
  @JoinColumn([{ name: 'status', referencedColumnName: 'id' }])
  status: ProductSaleStatus;

  @ManyToOne(() => Store, (store) => store.sales)
  @JoinColumn([{ name: 'store', referencedColumnName: 'id' }])
  store: Store;

  @ManyToOne(() => StoreProduct, (storeProduct) => storeProduct.sales)
  @JoinColumn([{ name: 'store_product', referencedColumnName: 'id' }])
  storeProduct: StoreProduct;

  @OneToMany(
    () => SaleStatusHistory,
    (saleStatusHistory) => saleStatusHistory.sale,
  )
  saleStatusHistories: SaleStatusHistory[];
}
