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
import { Company } from './Company';
import { ProductHistory } from './ProductHistory';
import { StoreProduct } from './StoreProduct';

@Index('Product_company_idx', ['company'], {})
@Index('Product_company_sku_idx', ['company', 'sku'], { unique: true })
@Entity('Product', { schema: 'public' })
export class Product {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'sku', nullable: true })
  sku: string | null;

  @Column('varchar', { name: 'name', nullable: true })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true })
  description: string | null;

  @Column('boolean', { name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Company, (company) => company.products)
  @JoinColumn([{ name: 'company', referencedColumnName: 'id' }])
  company: Company;

  @OneToMany(() => ProductHistory, (productHistory) => productHistory.product)
  productHistories: ProductHistory[];

  @OneToMany(() => StoreProduct, (storeProduct) => storeProduct.product)
  storeProducts: StoreProduct[];
}
