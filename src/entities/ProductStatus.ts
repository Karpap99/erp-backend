import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StoreProduct } from './StoreProduct';
import { StoreProductHistory } from './StoreProductHistory';

@Entity('ProductStatus', { schema: 'public' })
export class ProductStatus {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true })
  description: string | null;

  @OneToMany(() => StoreProduct, (storeProduct) => storeProduct.status)
  storeProducts: StoreProduct[];

  @OneToMany(
    () => StoreProductHistory,
    (storeProductHistory) => storeProductHistory.status,
  )
  storeProductHistories: StoreProductHistory[];
}
