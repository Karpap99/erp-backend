import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolesPermission } from './RolesPermissions';

@Entity('Roles', { schema: 'public' })
export class Roles {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @OneToMany(() => RolesPermission, (rolePermission) => rolePermission.role)
  rolePermissions: RolesPermission[];
}
