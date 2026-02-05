import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Sale } from './Sale';
import { Product } from './Product';
import { ProductStatus } from './ProductStatus';
import { Store } from './Store';
import { StoreProductHistory } from './StoreProductHistory';

@Index('StoreProduct_product_idx', ['product'], {})
@Index('StoreProduct_product_store_idx', ['product', 'store'], { unique: true })
@Index('StoreProduct_status_idx', ['status'], {})
@Index('StoreProduct_store_idx', ['store'], {})
@Entity('StoreProduct', { schema: 'public' })
export class StoreProduct {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('numeric', {
    name: 'quantity',
    nullable: true,
    precision: 12,
    scale: 3,
  })
  quantity: string | null;

  @Column('numeric', {
    name: 'current_price',
    nullable: true,
    precision: 12,
    scale: 2,
  })
  currentPrice: string | null;

  @Column('varchar', { name: 'currency', nullable: true })
  currency: string | null;

  @Column('boolean', { name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @OneToMany(() => Sale, (sale) => sale.storeProduct)
  sales: Sale[];

  @ManyToOne(() => Product, (product) => product.storeProducts)
  @JoinColumn([{ name: 'product', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(
    () => ProductStatus,
    (productStatus) => productStatus.storeProducts,
  )
  @JoinColumn([{ name: 'status', referencedColumnName: 'id' }])
  status: ProductStatus;

  @ManyToOne(() => Store, (store) => store.storeProducts)
  @JoinColumn([{ name: 'store', referencedColumnName: 'id' }])
  store: Store;

  @OneToMany(
    () => StoreProductHistory,
    (storeProductHistory) => storeProductHistory.storeProduct,
  )
  storeProductHistories: StoreProductHistory[];
}
