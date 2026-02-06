import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyUsers } from './CompanyUsers';
import { Product } from './Product';
import { Store } from './Store';

@Entity('Company', { schema: 'public' })
export class Company {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string;

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

  @OneToMany(() => CompanyUsers, (companyUsers) => companyUsers.company, {
    cascade: ['insert'],
    orphanedRowAction: 'disable',
  })
  companyUsers: CompanyUsers[];

  @OneToMany(() => Product, (product) => product.company)
  products: Product[];

  @OneToMany(() => Store, (store) => store.company)
  stores: Store[];
}
