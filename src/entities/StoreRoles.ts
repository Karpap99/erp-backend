import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { StoreRolePermissions } from './StoreRolePermissions';
import { StoreUsers } from './StoreUsers';

@Entity('StoreRoles', { schema: 'public' })
export class StoreRoles {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'description' })
  description: string;

  @OneToMany(
    () => StoreRolePermissions,
    (storeRolePermissions) => storeRolePermissions.role,
  )
  storeRolePermissions: StoreRolePermissions[];

  @OneToMany(() => StoreUsers, (storeUsers) => storeUsers.role)
  storeUsers: StoreUsers[];
}
