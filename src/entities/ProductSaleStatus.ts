import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Sale } from './Sale';
import { SaleStatusHistory } from './SaleStatusHistory';

@Entity('ProductSaleStatus', { schema: 'public' })
export class ProductSaleStatus {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true })
  description: string | null;

  @OneToMany(() => Sale, (sale) => sale.status)
  sales: Sale[];

  @OneToMany(
    () => SaleStatusHistory,
    (saleStatusHistory) => saleStatusHistory.status,
  )
  saleStatusHistories: SaleStatusHistory[];
}
