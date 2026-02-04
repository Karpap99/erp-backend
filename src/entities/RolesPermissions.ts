import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Permissions } from './Permissions';
import { Roles } from './Roles';

@Entity('RolesPermission', { schema: 'public' })
export class RolesPermission {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Permissions, (permission) => permission.id)
  @JoinColumn({ name: 'permission', referencedColumnName: 'id' })
  permission: Permissions;

  @ManyToOne(() => Roles, (role) => role.rolePermissions)
  @JoinColumn({ name: 'roles', referencedColumnName: 'id' })
  role: Roles;
}
