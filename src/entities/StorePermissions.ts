import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StoreRolePermissions } from './StoreRolePermissions';

@Entity('StorePermissions', { schema: 'public' })
export class StorePermissions {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true })
  name: string;

  @Column('varchar', { name: 'description', nullable: true })
  description: string;

  @OneToMany(
    () => StoreRolePermissions,
    (storeRolePermissions) => storeRolePermissions.permission,
  )
  storeRolePermissions: StoreRolePermissions[];
}
