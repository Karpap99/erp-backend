import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolesPermission } from './RolesPermissions';

@Entity('Permission', { schema: 'public' })
export class Permissions {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { name: 'name', nullable: true })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true })
  description: string | null;

  @OneToMany(() => RolesPermission, (rolePermission) => rolePermission.role)
  rolePermissions: RolesPermission[];
}
