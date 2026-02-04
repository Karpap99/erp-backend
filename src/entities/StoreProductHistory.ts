import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductStatus } from './ProductStatus';
import { StoreProduct } from './StoreProduct';

@Index('StoreProductHistory_status_idx', ['status'], {})
@Index('StoreProductHistory_store_product_idx', ['storeProduct'], {})
@Entity('StoreProductHistory', { schema: 'public' })
export class StoreProductHistory {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('numeric', { name: 'price', nullable: true, precision: 12, scale: 2 })
  price: string | null;

  @Column('numeric', {
    name: 'quantity',
    nullable: true,
    precision: 12,
    scale: 3,
  })
  quantity: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(
    () => ProductStatus,
    (productStatus) => productStatus.storeProductHistories,
  )
  @JoinColumn([{ name: 'status', referencedColumnName: 'id' }])
  status: ProductStatus;

  @ManyToOne(
    () => StoreProduct,
    (storeProduct) => storeProduct.storeProductHistories,
  )
  @JoinColumn([{ name: 'store_product', referencedColumnName: 'id' }])
  storeProduct: StoreProduct;
}
