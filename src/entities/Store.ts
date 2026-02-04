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
import { Company } from './Company';
import { StoreProduct } from './StoreProduct';
import { StoreUsers } from './StoreUsers';

@Index('Store_company_id_idx', ['company'], {})
@Entity('Store', { schema: 'public' })
export class Store {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

  @Column('varchar', { name: 'name', nullable: true })
  name: string | null;

  @Column('numeric', {
    name: 'tax_rate',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  taxRate: string | null;

  @Column('varchar', { name: 'address', nullable: true })
  address: string | null;

  @Column('varchar', { name: 'country', nullable: true })
  country: string | null;

  @Column('varchar', { name: 'city', nullable: true })
  city: string | null;

  @Column('boolean', { name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column('timestamp without time zone', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Sale, (sale) => sale.store)
  sales: Sale[];

  @ManyToOne(() => Company, (company) => company.stores)
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  company: Company;

  @OneToMany(() => StoreProduct, (storeProduct) => storeProduct.store)
  storeProducts: StoreProduct[];

  @OneToMany(() => StoreUsers, (storeUsers) => storeUsers.store)
  storeUsers: StoreUsers[];
}
