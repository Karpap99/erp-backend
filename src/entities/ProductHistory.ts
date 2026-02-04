import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './Product';

@Index('ProductHistory_product_idx', ['product'], {})
@Entity('ProductHistory', { schema: 'public' })
export class ProductHistory {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: true })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true })
  description: string | null;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date;

  @ManyToOne(() => Product, (product) => product.productHistories)
  @JoinColumn([{ name: 'product', referencedColumnName: 'id' }])
  product: Product;
}
